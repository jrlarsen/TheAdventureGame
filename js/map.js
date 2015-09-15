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
                    map.places[place.title].addExit(exit.direction, map.places[exit.title], exit.challenge);
                });
            }

            if (place.items) {
                place.items.forEach(function (item) {
                    map.places[place.title].addItem(item);
                });
            }

        });

        map.start = map.places[mapData.start];

        return map;
    };

    var Map = function (mapData) {
        var map = generateMap(mapData),
            currentPlace = map.start;

        currentPlace.visited = true;

        this.hasExit = function (direction) {
            return currentPlace.getExit(direction);
        };

        this.go = function (direction) {
            var exit = currentPlace.getExit(direction);

            if (exit) {
                currentPlace = exit.destination;
                currentPlace.visited = true;
            }

            return currentPlace;
        };

        this.getPlace = function () {
            return currentPlace;
        };
    };

    TAG.Map = Map;
})();