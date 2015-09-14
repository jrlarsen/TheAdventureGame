(function () {
    "use strict";

    TAG.Views = TAG.Views || {};
    TAG.Views.place = {

        showExits: function (place) {
            var template;

            if (place.visited) {
                template = new TAG.Template("({{i}}) {{direction}} to {{title}}");
            } else {
                template = new TAG.Template("({{i}}) {{direction}}");
            }

            if (Object.keys(place.exits).length) {
                console.log("Exits:");

                Object.keys(place.exits).forEach(function (key, i) {
                    console.log(template.fill({
                        i : i,
                        direction : key,
                        title : place.exits[key].title
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
                        i : i,
                        item : item
                    }));
                });
            }
        },

        showInfo: function (place) {
            console.log(place.title);
            console.log(place.description);
            this.showItems(place);
            this.showExits(place);
        }

    };

})();