(function () {
    "use strict";

    TAG.Views = TAG.Views || {};
    TAG.Views.info = {

        log: function (message, log) {
            message = "*** " + message + " ***";

            if (log) {
                log(message);
            }

            return message;
        }

    };

})();