(function () {
    "use strict";

    TAG.Views = TAG.Views || {};
    TAG.Views.place = {

        showExits: function (place) {
            var visitedTemplate = new TAG.Template("({{i}}) {{direction}} to {{title}}"),
                unvisitedTemplate = new TAG.Template("({{i}}) {{direction}}");

            if (Object.keys(place.exits).length) {
                console.log("Exits:");

                Object.keys(place.exits).forEach(function (key, i) {
                    var destination = place.exits[key].destination,
                        template;

                    template = destination.visited ? visitedTemplate : unvisitedTemplate;

                    console.log(template.fill({
                        i : i + 1,
                        direction : key,
                        title : destination.title
                    }));
                });
            }
        },

        showItems: function (place) {
            var template = new TAG.Template("({{i}}) {{item}}");

            if (place.items.length) {
                console.log("Items:");

                place.items.forEach(function (item, i) {
                    console.log(template.fill({
                        i : i + 1,
                        item : item
                    }));
                });
            }
        },

        showInfo: function (place) {
            console.log("");
            console.log("=== " + place.title + " ===");
            console.log(place.description);
            this.showItems(place);
            this.showExits(place);
            console.log("");
        }

    };

})();