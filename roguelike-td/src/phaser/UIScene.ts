import Phaser from 'phaser';

export class UIScene extends Phaser.Scene {
	constructor() {
		super('UIScene');
	}

	create() {
		this.add.text(12, 36, 'UI Online', { fontFamily: 'monospace', fontSize: '14px', color: '#9ee7ff' }).setDepth(100);
	}
}
