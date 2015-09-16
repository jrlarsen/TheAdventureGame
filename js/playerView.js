(function () {
    "use strict";

    TAG.Views = TAG.Views || {};
    TAG.Views.player = {

        showItems: function (player, log) {
            var template = new TAG.Template("({{i}}) {{item}}"),
                output = [];

            if (player.items.length) {
                output.push("Items:");

                player.items.forEach(function (item, i) {
                    output.push(template.fill({
                        i : i + 1,
                        item : item
                    }));
                });

                if (log) {
                    log(output.join('\n'));
                }
            }

            return output;
        },

        showHealth: function (player, log) {
            var template = new TAG.Template("{{name}} has health {{health}}"),
                output = template.fill(player);

            if (log) {
                log(output);
            }

            return output;
        },

        showInfo: function (player, log) {
            var output = [];

            output.push("");
            output.push("--- Player Info for " + player.name + " ---");
            output.push(this.showHealth(player));
            output.push(this.showItems(player).join('\n'));
            output.push("");

            if (log) {
                log(output.join('\n'));
            }

            return output;
        }

    };

})();