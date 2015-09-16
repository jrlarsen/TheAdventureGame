(function () {
    "use strict";

    var Player = function (name, health) {
        this.name = name;
        this.health = health;
        this.items = [];
        this.place = null;

        this.addItem = function (item) {
            this.items.push(item);
        };

        this.removeItem = function (item) {
            var itemIndex = this.items.indexOf(item);

            if (itemIndex !== -1) {
                this.items.splice(itemIndex, 1);
            }
        };

        this.getItem = function (indexOrName) {
            var itemIndex = parseInt(indexOrName) - 1,
                items = this.items,
                item = null;

            if (isNaN(itemIndex)) {
                itemIndex = items.indexOf(indexOrName);
            }

            if (itemIndex > -1 && itemIndex < items.length) {
                item = items[itemIndex];
            }

            return item;
        };
    };

    TAG.Player = Player;
})();