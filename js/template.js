(function () {
    "use strict";

    var Template = function (templateString) {
        this.templateString = templateString;

        this.fill = function (data) {
            var result = "",
                currentString = this.templateString;

            Object.keys(data).forEach(function (key) {
                do {
                    result = currentString;
                    currentString = currentString.replace("{{" + key + "}}", data[key]);
                } while (currentString !== result);
            });

            return result;
        };
    };

    TAG.Template = Template;
})();