export type DamageType = 'ballistic' | 'energy' | 'magic';
export type BallisticSubtype = 'HE' | 'AP' | 'Cluster' | 'Cryo' | 'Nuke';
export type TargetMask = 'ground' | 'air' | 'both';

export type TowerType = 'Cannon' | 'Turret' | 'Mortar' | 'Flak' | 'SAM' | 'Tesla';
export const TOWER_TYPES = ['Cannon', 'Turret', 'Mortar', 'Flak', 'SAM', 'Tesla'] as const;

export type BuildingType = 'Range' | 'Foundry' | 'Spire' | 'DronePad' | 'Helipad' | 'Hangar';
export const BUILDING_TYPES = ['Range', 'Foundry', 'Spire', 'DronePad', 'Helipad', 'Hangar'] as const;

export type MissileSiteType = 'HE_Silo' | 'AP_Silo' | 'Cluster_Silo' | 'Cryo_Silo' | 'Nuke_Silo';
export const MISSILE_SITE_TYPES = ['HE_Silo', 'AP_Silo', 'Cluster_Silo', 'Cryo_Silo', 'Nuke_Silo'] as const;

export interface TowerBaseStats {
	damage: number;
	fireRatePerSecond: number;
	range: number;
	splashRadius: number;
	armorPenetration: number;
	chainTargets?: number; // for Tesla
	slowPercent?: number; // for Tesla/Cryo effects
}

export interface TowerSpec {
	type: TowerType;
	name: string;
	damageType: DamageType;
	ballisticSubtype?: BallisticSubtype; // for ballistic
	targets: TargetMask;
	baseCost: number;
	base: TowerBaseStats;
}

export interface BuildingSpec {
	type: BuildingType;
	name: string;
	baseCost: number;
	spawnCap: number;
	spawnIntervalSeconds: number;
	unitName: string;
}

export interface MissileSiteSpec {
	type: MissileSiteType;
	name: string;
	ballisticSubtype: BallisticSubtype;
	baseCost: number;
	cooldownSeconds: number;
	radius: number;
	limitOne?: boolean;
}

export interface EconomyConfig {
	startingCredits: number;
	hqHP: number;
	endOfWaveBase: number; // 100
	factorStart: number; // 1
}

export interface UpgradeRulesConfig {
	globalTiers: number; // 5
	perTierCostMultiplier: (initial: number, tierIndex: number) => number;
	randomTierRollPercentMin: number; // 10
	randomTierRollPercentMax: number; // 60
}

export interface GameConfig {
	economy: EconomyConfig;
	upgradeRules: UpgradeRulesConfig;
	towers: Record<TowerType, TowerSpec>;
	buildings: Record<BuildingType, BuildingSpec>;
	missileSites: Record<MissileSiteType, MissileSiteSpec>;
}
