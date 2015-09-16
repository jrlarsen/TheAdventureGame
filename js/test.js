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
                game.use(item, bits[0]);
            } else {
                game.log("I need to know the item and the exit.\ne.g. 'use a rusty key north' or 'use 3 1'");
            }
            break;
        case "get":
            game.get(bits[0]);
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