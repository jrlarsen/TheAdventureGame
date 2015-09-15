var game = new TAG.Game(TAG.house, new TAG.Player("Dax", 50));

game.addView("info", TAG.Views.info);
game.addView("player", TAG.Views.player);
game.addView("place", TAG.Views.place);

game.start();