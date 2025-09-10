import type { GameConfig } from '../types/game';

const perTierCostMultiplier = (initial: number, tierIndex: number): number => {
	return initial * Math.pow(2, tierIndex);
};

export const GAME_CONFIG: GameConfig = {
	economy: {
		startingCredits: 500,
		hqHP: 1000,
		endOfWaveBase: 100,
		factorStart: 1,
	},
	upgradeRules: {
		globalTiers: 5,
		perTierCostMultiplier,
		randomTierRollPercentMin: 10,
		randomTierRollPercentMax: 60,
	},
	towers: {
		Cannon: {
			type: 'Cannon',
			name: 'Cannon',
			damageType: 'ballistic',
			ballisticSubtype: 'AP',
			targets: 'ground',
			baseCost: 150,
			base: { damage: 30, fireRatePerSecond: 0.8, range: 220, splashRadius: 0, armorPenetration: 20 },
		},
		Turret: {
			type: 'Turret',
			name: 'Turret',
			damageType: 'ballistic',
			ballisticSubtype: 'AP',
			targets: 'ground',
			baseCost: 200,
			base: { damage: 55, fireRatePerSecond: 0.6, range: 140, splashRadius: 0, armorPenetration: 25 },
		},
		Mortar: {
			type: 'Mortar',
			name: 'Mortar',
			damageType: 'ballistic',
			ballisticSubtype: 'HE',
			targets: 'ground',
			baseCost: 500,
			base: { damage: 40, fireRatePerSecond: 0.4, range: 280, splashRadius: 90, armorPenetration: 5 },
		},
		Flak: {
			type: 'Flak',
			name: 'Flak',
			damageType: 'ballistic',
			ballisticSubtype: 'HE',
			targets: 'air',
			baseCost: 750,
			base: { damage: 65, fireRatePerSecond: 0.7, range: 200, splashRadius: 60, armorPenetration: 10 },
		},
		SAM: {
			type: 'SAM',
			name: 'SAM Launcher',
			damageType: 'ballistic',
			ballisticSubtype: 'AP',
			targets: 'air',
			baseCost: 900,
			base: { damage: 120, fireRatePerSecond: 0.25, range: 300, splashRadius: 0, armorPenetration: 40 },
		},
		Tesla: {
			type: 'Tesla',
			name: 'Tesla',
			damageType: 'energy',
			targets: 'both',
			baseCost: 100,
			base: { damage: 12, fireRatePerSecond: 1.2, range: 120, splashRadius: 30, armorPenetration: 0, chainTargets: 2, slowPercent: 15 },
		},
	},
	buildings: {
		Range: { type: 'Range', name: 'Range', baseCost: 300, spawnCap: 3, spawnIntervalSeconds: 2, unitName: 'Archer' },
		Foundry: { type: 'Foundry', name: 'Foundry', baseCost: 500, spawnCap: 1, spawnIntervalSeconds: 4, unitName: 'Artillery' },
		Spire: { type: 'Spire', name: 'Spire', baseCost: 400, spawnCap: 2, spawnIntervalSeconds: 3, unitName: 'Mage' },
		DronePad: { type: 'DronePad', name: 'Drone Pad', baseCost: 600, spawnCap: 2, spawnIntervalSeconds: 3, unitName: 'Drone' },
		Helipad: { type: 'Helipad', name: 'Helipad', baseCost: 900, spawnCap: 1, spawnIntervalSeconds: 6, unitName: 'Chopper' },
		Hangar: { type: 'Hangar', name: 'Hangar', baseCost: 1200, spawnCap: 1, spawnIntervalSeconds: 12, unitName: 'Bomber' },
	},
	missileSites: {
		HE_Silo: { type: 'HE_Silo', name: 'HE Silo', ballisticSubtype: 'HE', baseCost: 800, cooldownSeconds: 6, radius: 110 },
		AP_Silo: { type: 'AP_Silo', name: 'AP Silo', ballisticSubtype: 'AP', baseCost: 900, cooldownSeconds: 8, radius: 80 },
		Cluster_Silo: { type: 'Cluster_Silo', name: 'Cluster Silo', ballisticSubtype: 'Cluster', baseCost: 1000, cooldownSeconds: 10, radius: 90 },
		Cryo_Silo: { type: 'Cryo_Silo', name: 'Cryo Silo', ballisticSubtype: 'Cryo', baseCost: 900, cooldownSeconds: 10, radius: 100 },
		Nuke_Silo: { type: 'Nuke_Silo', name: 'Nuke Silo', ballisticSubtype: 'Nuke', baseCost: 5000, cooldownSeconds: 45, radius: 240, limitOne: true },
	},
};
