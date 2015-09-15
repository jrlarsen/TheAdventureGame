(function () {
    "use strict";

    var Place = function (title, description) {
        this.title = title;
        this.description = description;
        this.exits = {};
        this.items = [];
        this.visited = false;

        this.addItem = function (item) {
            this.items.push(item);
        };

        this.removeItem = function (item) {
            var itemIndex = this.items.indexOf(item);

            if (itemIndex !== -1) {
                this.items.splice(itemIndex, 1);
            }
        };

        this.addExit = function (direction, destination, challenge) {
            var exit = {
                destination : destination,
                challenge : challenge || {}
            };

            exit.challenge.complete = challenge ? false : true;

            this.exits[direction] = exit;
        };

        this.getExit = function (direction) {
            var exits = this.exits,
                exit = exits[direction],
                keys,
                directionIndex;

            if (exit === undefined) {
                directionIndex = parseInt(direction) - 1;

                if (!isNaN(directionIndex)) {
                    keys = Object.keys(exits);

                    if (directionIndex < keys.length) {
                        exit = exits[keys[directionIndex]];
                    } else {
                        exit = null;
                    }
                } else {
                    exit = null;
                }
            }
            
            return exit;
        };
    };

    TAG.Place = Place;
})();