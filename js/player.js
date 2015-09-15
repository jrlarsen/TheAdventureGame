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
        }
    };

    TAG.Player = Player;
})();