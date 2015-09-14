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
            place.exits.forEach(function (exit) {
                map.places[place.title].addExit(exit.direction, map.places[exit.title]);
            });
        });

        map.currentPlace = mapData.start;

        return map;
    };

    var Map = function (mapData) {
        this.map = generateMap(mapData);

        this.where = function () {
            this.map.currentPlace.showInfo();
        };
    };

    TAG.Map = Map;
})();