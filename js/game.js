(function () {
    "use strict";

    function Game(mapData, player) {
        var map = new TAG.Map(mapData),
            started = false,
            views = {
                info: [],
                player: [],
                place: []
            },
            game = this;

        function endGame(success) {
            if (success) {
                game.log("Well done!");
            } else {
                game.log("With a groan, you crumple to the ground. You are dead.");
                game.inPlay = false;
            }
        }

        this.addView = function (type, view) {
            if (views[type]) {
                views[type].push(view);
            }
        };

        this.me = function () {
            views.player.forEach(function (view) {
                view.showInfo(player, function (message) {
                    var output = document.getElementById("gameOutput");
                    output.innerHTML = message;
                });
            });
        };

        this.here = function () {
            views.place.forEach(function (view) {
                view.showInfo(map.getPlace(), function (message) {
                    var output = document.getElementById("gameOutput");
                    output.innerHTML = message;
                });
            });
        };

        this.log = function (message) {
            views.info.forEach(function (view) {
                view.log(message, function (message) {
                    var output = document.getElementById("gameOutput");
                    output.innerHTML = output.innerHTML + '\n\n' + message;
                });
            });
        };

        this.start = function () {
            if (!started) {
                game.me();
                game.here();
                started = true;
                game.inPlay = true;
            }
        };

        this.go = function (direction) {
            var place = map.getPlace(),
                exit = place.getExit(direction),
                challenge,
                test;

            if (exit) {

                challenge = exit.challenge;
                test = challenge && challenge.test;

                if (challenge.complete === true) {
                    map.go(direction);
                    game.here();
                } else if (test) {
                    if (player.health > test.health) {
                        challenge.complete = true;
                        game.log(challenge.success);
                    } else {
                        game.log(challenge.failure);
                        player.health -= challenge.damage;
                        if (player.health <= 0) {
                            endGame(false);
                        }
                    }
                } else {
                    game.log(challenge.message);
                    if (challenge.damage) {
                        player.health -= challenge.damage;
                        if (player.health <= 0) {
                            endGame(false);
                        }
                    }
                }

            } else {
                game.log("There is no exit in that direction");
            }
        };

        this.get = function (itemIndexOrName) {
            var place = map.getPlace(),
                item = place.getItem(itemIndexOrName);

            if (item) {
                player.addItem(item);
                place.removeItem(item);
                game.here();
            } else {
                game.log("There is no such item here");
            }
        };

        this.use = function (itemIndexOrName, direction) {
            var item = player.getItem(itemIndexOrName),
                exit = map.getPlace().getExit(direction),
                challenge;

            if (item) {
                if (exit) {
                    challenge = exit.challenge;
                    if (challenge.complete) {
                        game.log("There is nothing blocking your way");
                    } else if (challenge.requires === item) {
                        game.log(challenge.success);
                        challenge.complete = true;
                        if (challenge.itemConsumed) {
                            player.removeItem(item);
                        }
                    } else {
                        game.log(challenge.failure);
                    }
                } else {
                    game.log("I need to know the item and the exit.\ne.g. 'use a rusty key north' or 'use 3 1'");
                }
            } else {
                game.log("You don't have that item");
            }
        };

        this.drink = function (itemIndexOrName) {
            var item = player.getItem(itemIndexOrName);
            if (item === "elixir") {
                game.log("Mmm refreshing! With a slight tang and an insinuation of spice.");
                player.health += 100;
                player.removeItem(item);
            } else {
                game.log("You consider drinking " + item + " but then decide it was a silly idea.");
            }
        };

        this.checkExit = function (direction) {
            return map.hasExit(direction);
        };

        this.setGlobal = function (global) {
            global.go = game.go;
            global.use = game.use;
            global.get = game.get;
            global.here = game.here;
            global.me = game.me;
        };
    }

    TAG = TAG || {};
    TAG.Game = Game;
})();