(function () {
    "use strict";

    TAG.Views = TAG.Views || {};
    TAG.Views.place = {

        showExits: function (place, log) {
            var visitedTemplate = new TAG.Template("({{i}}) {{direction}} to {{title}}"),
                unvisitedTemplate = new TAG.Template("({{i}}) {{direction}}"),
                output = [];

            if (Object.keys(place.exits).length) {
                output.push("Exits:");

                Object.keys(place.exits).forEach(function (key, i) {
                    var destination = place.exits[key].destination,
                        template;

                    template = destination.visited ? visitedTemplate : unvisitedTemplate;

                    output.push(template.fill({
                        i : i + 1,
                        direction : key,
                        title : destination.title
                    }));
                });
            }

            if (log) {
                log(output.join('\n'));
            }

            return output;
        },

        showItems: function (place, log) {
            var template = new TAG.Template("({{i}}) {{item}}"),
                output = [];

            if (place.items.length) {
                output.push("Items:");

                place.items.forEach(function (item, i) {
                    output.push(template.fill({
                        i : i + 1,
                        item : item
                    }));
                });
            }

            if (log) {
                log(output.join('\n'));
            }

            return output;
        },

        showInfo: function (place, log) {
            var output = [];

            output.push("");
            output.push("=== " + place.title + " ===");
            output.push("");
            output.push(place.description);
            output.push("");
            output.push(this.showItems(place).join('\n'));
            output.push("");
            output.push(this.showExits(place).join('\n'));
            output.push("");

            if (log) {
                log(output.join('\n'));
            }

            return output;
        }

    };

})();