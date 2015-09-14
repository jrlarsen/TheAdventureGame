(function () {
    "use strict";

    var Place = function (title, description) {
        this.title = title;
        this.description = description;
        this.exits = {};
        this.items = [];

        this.addItem = function (item) {
            this.items.push(item);
        };

        this.removeItem = function (item) {
            var itemIndex = this.items.indexOf(item);

            if (itemIndex !== -1) {
                this.items.splice(itemIndex, 1);
            }
        };

        this.addExit = function (direction, exit) {
            this.exits[direction] = exit;
        };
    };

    TAG.Place = Place;
})();