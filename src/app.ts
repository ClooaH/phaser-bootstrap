import 'phaser';
// import Background from 'assets/images/background.png';

export class Scene1 extends Phaser.Scene {
    constructor() {
        super('bootGame');
    }

    preload() {
        this.load.image("background", "assets/images/background.png");
        this.load.image("ship", "assets/images/ship.png");
        this.load.image("ship2", "assets/images/ship2.png");
        this.load.image("ship3", "assets/images/ship3.png");
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame")
    }
}

export class Scene2 extends Phaser.Scene {
    protected background!: Phaser.GameObjects.Image;
    protected ship!: Phaser.GameObjects.Image;
    protected ship2!: Phaser.GameObjects.Image;
    protected ship3!: Phaser.GameObjects.Image;

    constructor() {
        super('playGame');
    }

    preload() {

    }

    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);

        this.ship = this.add.image(config.width / 2 - 50, config.height / 2, "ship");
        this.ship2 = this.add.image(config.width / 2, config.height / 2, "ship2");
        this.ship3 = this.add.image(config.width / 2 + 50, config.height / 2, "ship3");

        this.add.text(20, 20, "Playing game", {
            font: "25px Arial",
            fill: "yellow"
        });
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 256,
    height: 272,
    scene: [Scene1, Scene2]
};

const game = new Phaser.Game(config);