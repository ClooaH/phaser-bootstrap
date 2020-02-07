import Phaser from 'phaser';

export default class Scene1 extends Phaser.Scene {
    constructor() {
        super('bootGame');
    }

    create() {
        this.add.text(20, 20, 'Loading game...');
        // this.scene.start('playGame');
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 256,
    height: 272,
    scene: [Scene1],
};

const game = new Phaser.Game(config);
