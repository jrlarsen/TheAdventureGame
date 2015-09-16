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

        this.addView = function (type, view) {
            if (views[type]) {
                views[type].push(view);
            }
        };

        this.me = function () {
            views.player.forEach(function (view) {
                view.showInfo(player, function (message) {
                    var output = document.getElementById("gameOutput");
                    output.innerText = message;
                });
            });
        };

        this.here = function () {
            views.place.forEach(function (view) {
                view.showInfo(map.getPlace(), function (message) {
                    var output = document.getElementById("gameOutput");
                    output.innerText = message;
                });
            });
        };

        this.log = function (message) {
            views.info.forEach(function (view) {
                view.log(message, function (message) {
                    var output = document.getElementById("gameOutput");
                    output.innerText = output.innerText + '\n\n' + message;
                });
            });
        };

        this.start = function () {
            if (!started) {
                game.me();
                game.here();
                started = true;
            }
        };

        this.go = function (direction) {
            var place = map.getPlace(),
                exit = place.getExit(direction),
                challenge;

            if (exit) {

                challenge = exit.challenge;

                if (challenge.complete === true) {
                    map.go(direction);
                    game.here();
                } else {
                    game.log(challenge.message);
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
                exit = map.getPlace().getExit(direction);

            if (item) {
                if (exit) {
                    if (exit.challenge.complete) {
                        game.log("There is nothing blocking your way");
                    } else if (exit.challenge.requires === item) {
                        game.log(exit.challenge.success);
                        exit.challenge.complete = true;
                    } else {
                        game.log(exit.challenge.failure);
                    }
                } else {
                    game.log("There is nothing in that direction");
                }
            } else {
                game.log("You don't have that item");
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