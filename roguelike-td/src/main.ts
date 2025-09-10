import Phaser from 'phaser';
import { BootScene } from './phaser/BootScene';
import { GameScene } from './phaser/GameScene';
import { UIScene } from './phaser/UIScene';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 960,
	height: 540,
	backgroundColor: '#0a0f1e',
	physics: {
		default: 'arcade',
		arcade: { gravity: { x: 0, y: 0 }, debug: false },
	},
	scene: [BootScene, GameScene, UIScene],
};

new Phaser.Game(config);
