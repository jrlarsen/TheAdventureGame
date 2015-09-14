(function () {
    "use strict";

    var generateMap = function (mapData) {
        var map = {
            places: {},
            start: null
        };

        mapData.places.forEach(function (place) {
            map.places[place.title] = new TAG.Place(place.title, place.description);
        });

        mapData.places.forEach(function (place) {

            if (place.exits) {
                place.exits.forEach(function (exit) {
                    map.places[place.title].addExit(exit.direction, map.places[exit.title]);
                });
            }

            if (place.items) {
                place.items.forEach(function (item) {
                    map.places[place.title].addItem(item);
                });
            }

        });

        map.currentPlace = map.places[mapData.start];

        return map;
    };

    var Map = function (mapData) {
        this.map = generateMap(mapData);

        this.where = function () {
            this.map.currentPlace.showInfo();
        };

        this.go = function (direction) {
            this.map.currentPlace = this.map.currentPlace.exits[direction];
        };
    };

    TAG.Map = Map;
})();