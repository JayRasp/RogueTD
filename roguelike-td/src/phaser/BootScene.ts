import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
	constructor() {
		super('BootScene');
	}

	preload() {
		// Load assets here later
	}

	create() {
		this.scene.launch('UIScene');
		this.scene.start('GameScene');
	}
}
