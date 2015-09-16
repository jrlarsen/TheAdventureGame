var game = new TAG.Game(TAG.house, new TAG.Player("Dax", 50));

game.addView("info", TAG.Views.info);
game.addView("player", TAG.Views.player);
game.addView("place", TAG.Views.place);

game.start();

var txtInput = document.getElementById("gameInput");

function doAction() {
    var bits = txtInput.value.split(" "),
        action = bits.splice(0, 1)[0],
        item;

    switch (action) {
        case "go":
            game.go(bits[0]);
            break;
        case "me":
        case "here":
            game[action]();
            break;
        case "use":
            if (bits.length > 1) {
                item = bits.splice(0, bits.length - 1).join(" ");
                if (game.checkExit(bits[0])) {
                    game.use(item, bits[0]);
                } else {
                    game.log("There is nothing in that direction.");
                }
            } else {
                game.log("I need to know the item and the exit.\ne.g. 'use a rusty key north' or 'use 3 1'");
            }
            break;
        case "get":
            game.get(bits.join(" "));
            break;
        case "help":
            game.log([
                '\n',
                'me                --> player info',
                'here              --> place info',
                'go {exit}         --> go to the place specified as text or index',
                '                      e.g. "go west" or "go 1"',
                'get {item}        --> get item specified as text or index',
                '                      e.g. "get a lamp" or "get 1"',
                'use {item} {exit} --> use the item in the direction specified',
                '                      e.g. "use a rusty key north" or "use 3 2" '
            ].join('\n'));
            break;
        default:
            game.log("I don't know how to do that!");
    }

    txtInput.value = "";
    txtInput.focus();
}

txtInput.addEventListener("keypress", function (event) {
    var key;

    if (typeof event.charCode === "number") {
        key = event.charCode;
    } else {
        key = event.keyCode;
    }

    if (key === 13) {
        doAction();
    }
});

txtInput.focus();