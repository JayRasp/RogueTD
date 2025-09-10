import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
	constructor() {
		super('GameScene');
	}

	create() {
		this.cameras.main.setBackgroundColor('#0a0f1e');
		this.add.text(12, 12, 'Roguelike TD', { fontFamily: 'monospace', fontSize: '16px', color: '#ffffff' }).setDepth(10);
	}
}
