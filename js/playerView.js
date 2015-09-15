(function () {
    "use strict";

    TAG.Views = TAG.Views || {};
    TAG.Views.player = {

        showPlace: function (player) {
            if (player.place) {
                TAG.Views.place.showInfo(player.place);
            }
        },

        showItems: function (player) {
            var template = new TAG.Template("({{i}}) {{item}}");

            if (player.items.length) {
                console.log("Items:");

                player.items.forEach(function (item, i) {
                    console.log(template.fill({
                        i : i + 1,
                        item : item
                    }));
                });
            }
        },

        showHealth: function (player) {
            var template = new TAG.Template("{{name}} has health {{health}}");

            console.log(template.fill(player));
        },

        showInfo: function (player) {
            console.log("");
            console.log("--- Player Info for " + player.name + " ---");
            this.showHealth(player);
            this.showItems(player);
            console.log("");
        }

    };

})();