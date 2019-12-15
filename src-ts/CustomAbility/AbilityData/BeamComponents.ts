import { BASE } from "./AOEDamageComponents";

export const BeamComponents = [
  // copy from here
  { 
    name: "beam kamehameha",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 30,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 6,
    durationIncPerDelay: 12,
    heightVariation: {
      start: 100,
      finish: 100,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage kame dps" },
      { name: "damage kame explosion" },
      { name: "knockback 1tick 10speed 0angle 250aoe" },
      { name: "sfx beam kamehameha" },
    ],
  },
  // to here, and replace with unique name
  { 
    name: "beam god kamehameha",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 1.5,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 35,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 6,
    durationIncPerDelay: 20,
    heightVariation: {
      start: 100,
      finish: 100,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage god kame dps" },
      { name: "damage god kame explosion" },
      { name: "knockback 1tick 10speed 0angle 250aoe" },
      { name: "sfx beam god kamehameha" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam spirit bomb",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 3,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 25,
    aoe: 300,
    clashingDelayTicks: 2,
    maxDelayTicks: 10,
    durationIncPerDelay: 15,
    heightVariation: {
      start: 600,
      finish: 0,
      scaling: 1,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage spirit bomb dps" },
      { name: "damage spirit bomb explosion" },
      { name: "knockback 1tick 15speed 0angle 300aoe" },
      { name: "sfx beam spirit bomb" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam galick gun",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 0.8,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 40,
    aoe: 300,
    clashingDelayTicks: 2,
    maxDelayTicks: 7,
    durationIncPerDelay: 6,
    heightVariation: {
      start: 50,
      finish: 50,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage kame dps" },
      { name: "damage kame explosion" },
      { name: "knockback 1tick 10speed 0angle 250aoe" },
      { name: "sfx beam galick gun" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam final flash",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 2,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 50,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 6,
    durationIncPerDelay: 12,
    heightVariation: {
      start: 100,
      finish: 100,
      scaling: 1,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: false,
    beamUnitType: "hpea",
    components: [
      { name: "damage final flash dps" },
      { name: "damage final flash explosion" },
      { name: "sfx beam final flash" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam big bang attack",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 1.5,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 50,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 6,
    durationIncPerDelay: 12,
    heightVariation: {
      start: 150,
      finish: 0,
      scaling: 1,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage spirit bomb dps" },
      { name: "damage big bang attack explosion" },
      { name: "knockback 1tick 15speed 180angle 400aoe" },
      { name: "sfx beam big bang attack" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam energy blast volley",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 0.1,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 40,
    aoe: 250,
    clashingDelayTicks: 2,
    maxDelayTicks: 7,
    durationIncPerDelay: 6,
    heightVariation: {
      start: 50,
      finish: 50,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: false,
    beamUnitType: "hpea",
    components: [
      { name: "damage energy blast volley dps" },
      { name: "knockback 1tick 5speed 0angle 250aoe" },
      { name: "sfx beam energy blast volley" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam masenko",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 0.9,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 40,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 4,
    durationIncPerDelay: 17,
    heightVariation: {
      start: 75,
      finish: 75,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage masenko dps" },
      { name: "damage kame explosion" },
      { name: "stun masenko" },
      { name: "sfx beam masenko" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam twin dragon shot",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 0.6,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 35,
    aoe: 300,
    clashingDelayTicks: 2,
    maxDelayTicks: 7,
    durationIncPerDelay: 20,
    heightVariation: {
      start: 75,
      finish: 250,
      scaling: 0,
    },
    isTracking: true,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage twin dragon shot dps" },
      { name: "damage twin dragon shot explosion" },
      { name: "sfx beam kamehameha" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam finish buster",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 0.9,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 30,
    aoe: 300,
    clashingDelayTicks: 2,
    maxDelayTicks: 7,
    durationIncPerDelay: 6,
    heightVariation: {
      start: 50,
      finish: 50,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage kame dps" },
      { name: "damage kame explosion" },
      { name: "knockback 1tick 10speed 0angle 250aoe" },
      { name: "sfx beam finish buster" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam heat dome attack",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 1.5,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 30,
    aoe: 300,
    clashingDelayTicks: 2,
    maxDelayTicks: 7,
    durationIncPerDelay: 6,
    heightVariation: {
      start: 50,
      finish: 50,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage god kame dps" },
      { name: "damage god kame explosion" },
      { name: "knockback 1tick 10speed 0angle 250aoe" },
      { name: "sfx beam heat dome attack" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam special beam cannon",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 2,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 40,
    aoe: 300,
    clashingDelayTicks: 0,
    maxDelayTicks: 0,
    durationIncPerDelay: 0,
    heightVariation: {
      start: 50,
      finish: 50,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: false,
    beamUnitType: "hpea",
    components: [
      { name: "damage special beam cannon dps" },
      { name: "knockback 1tick 10speed 0angle 250aoe" },
      { name: "sfx beam special beam cannon" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam hellzone grenade",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 0.2,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 0,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 5,
    durationIncPerDelay: 15,
    heightVariation: {
      start: 50,
      finish: 50,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: false,
    beamUnitType: "hpea",
    components: [
      { name: "damage hellzone grenade dps" },
      { name: "damage hellzone grenade explosion" },
      { name: "dash flying point hellzone grenade" },
      { name: "dash flying unit hellzone grenade" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam tyrant lancer",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 30,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 6,
    durationIncPerDelay: 12,
    heightVariation: {
      start: 50,
      finish: 50,
      scaling: 1,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: false,
    beamUnitType: "hpea",
    components: [
      { name: "damage beam tyrant lancer dps" },
      { name: "damage beam tyrant lancer explosion" },
      { name: "sfx beam tyrant lancer" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam saiyan spirit",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 2,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 15,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 6,
    durationIncPerDelay: 12,
    heightVariation: {
      start: 50,
      finish: 50,
      scaling: 1,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: false,
    beamUnitType: "hpea",
    components: [
      { name: "damage beam saiyan spirit dps" },
      { name: "damage beam saiyan spirit explosion" },
      { name: "sfx beam saiyan spirit" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam riot javelin",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 1.5,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 30,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 7,
    durationIncPerDelay: 11,
    heightVariation: {
      start: 300,
      finish: 0,
      scaling: 1,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage beam riot javelin dps" },
      { name: "damage beam riot javelin explosion" },
      { name: "knockback 1tick 10speed 0angle 250aoe" },
      { name: "sfx beam riot javelin" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam energy beam",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 0.5,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 7.5,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 7,
    durationIncPerDelay: 15,
    heightVariation: {
      start: 100,
      finish: 100,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage energy beam dps" },
      { name: "sfx beam energy beam" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam ss deadly bomber",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 5,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 6,
    aoe: 300,
    clashingDelayTicks: 4,
    maxDelayTicks: 15,
    durationIncPerDelay: 30,
    heightVariation: {
      start: 50,
      finish: 50,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: false,
    beamUnitType: "hpea",
    components: [
      { name: "damage ss deadly bomber dps" },
      { name: "sfx beam ss deadly bomber" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam innocence breath",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 0.09,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 20,
    aoe: 250,
    clashingDelayTicks: 2,
    maxDelayTicks: 14,
    durationIncPerDelay: 4,
    heightVariation: {
      start: 50,
      finish: 50,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: false,
    beamUnitType: "hpea",
    components: [
      { name: "damage innocence breath dps" },
      { name: "timed life beam innocence breath" },
      { name: "sfx innocence breath" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam vanishing ball",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 2.5,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 25,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 7,
    durationIncPerDelay: 11,
    heightVariation: {
      start: 600,
      finish: 0,
      scaling: 1,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage spirit bomb dps" },
      { name: "damage spirit bomb explosion" },
      { name: "knockback 1tick 15speed 0angle 300aoe" },
      { name: "sfx beam vanishing ball" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam mankind destruction attack",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 0.12,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 30,
    aoe: 250,
    clashingDelayTicks: 2,
    maxDelayTicks: 20,
    durationIncPerDelay: 4,
    heightVariation: {
      start: 50,
      finish: 50,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: false,
    beamUnitType: "hpea",
    components: [
      { name: "damage mankind destruction attack dps" },
      { name: "timed life beam mankind destruction attack" },
      { name: "sfx beam mankind destruction attack" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam planet crusher",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 3,
    beamHpAttribute: bj_HEROSTAT_STR,
    speed: 25,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 7,
    durationIncPerDelay: 11,
    heightVariation: {
      start: 600,
      finish: 0,
      scaling: 1,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage planet crusher dps" },
      { name: "damage planet crusher explosion" },
      { name: "knockback 1tick 15speed 0angle 300aoe" },
      { name: "sfx beam planet crusher" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam gigantic roar",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS,
    beamHpAttribute: bj_HEROSTAT_STR,
    speed: 40,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 9,
    durationIncPerDelay: 17,
    heightVariation: {
      start: 100,
      finish: 100,
      scaling: 1,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: false,
    beamUnitType: "hpea",
    components: [
      { name: "damage gigantic roar dps" },
      { name: "knockback 1tick 15speed 0angle 300aoe" },
      { name: "sfx beam gigantic roar" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam gigantic omegastorm",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 2,
    beamHpAttribute: bj_HEROSTAT_STR,
    speed: 50,
    aoe: 300,
    clashingDelayTicks: 2,
    maxDelayTicks: 6,
    durationIncPerDelay: 11,
    heightVariation: {
      start: 100,
      finish: 100,
      scaling: 1,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage gigantic omegastorm dps" },
      { name: "damage gigantic omegastorm explosion" },
      { name: "knockback 1tick 25speed 0angle 300aoe" },
      { name: "sfx beam gigantic omegastorm" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam death beam frieza",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 0.5,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 40,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 1,
    durationIncPerDelay: 6,
    heightVariation: {
      start: 50,
      finish: 25,
      scaling: 1,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: false,
    beamUnitType: "hpea",
    components: [
      { name: "damage death beam frieza dps" },
      { name: "sfx beam death beam frieza" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam supernova cooler",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 3,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 25,
    aoe: 300,
    clashingDelayTicks: 2,
    maxDelayTicks: 10,
    durationIncPerDelay: 15,
    heightVariation: {
      start: 600,
      finish: 0,
      scaling: 1,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage spirit bomb dps" },
      { name: "damage spirit bomb explosion" },
      { name: "knockback 1tick 15speed 0angle 300aoe" },
      { name: "sfx beam supernova cooler" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam deafening wave",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 0.5,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 20,
    aoe: 300,
    clashingDelayTicks: 0,
    maxDelayTicks: 0,
    durationIncPerDelay: 1,
    heightVariation: {
      start: 100,
      finish: 100,
      scaling: 1,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: false,
    beamUnitType: "hpea",
    components: [
      { name: "knockback 1tick 25speed 0angle 500aoe" },
      { name: "sfx beam deafening wave" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam supernova golden",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: BASE.KAME_DPS * 4,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 25,
    aoe: 300,
    clashingDelayTicks: 2,
    maxDelayTicks: 10,
    durationIncPerDelay: 15,
    heightVariation: {
      start: 700,
      finish: 0,
      scaling: 1,
    },
    isTracking: true,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage supernova golden dps" },
      { name: "damage supernova golden explosion" },
      { name: "knockback 1tick 15speed 0angle 300aoe" },
      { name: "sfx beam supernova golden" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam homing kamehameha",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: 0.007,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 25,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 6,
    durationIncPerDelay: 12,
    heightVariation: {
      start: 75,
      finish: 75,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage kame dps" },
      { name: "damage kame explosion" },
      { name: "dodge homing beam 120angle" },
      { name: "sfx beam kamehameha" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam big bang kamehameha kame",
    repeatInterval: 1,
    startTick: 20,
    endTick: -1,
    beamHpMult: 0.007,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 30,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 6,
    durationIncPerDelay: 12,
    heightVariation: {
      start: 100,
      finish: 100,
      scaling: 0,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage kame dps" },
      { name: "damage kame explosion" },
      { name: "knockback 1tick 10speed 0angle 250aoe" },
      { name: "sfx beam kamehameha" },
    ],
  },
  { 
    name: "beam big bang kamehameha",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    beamHpMult: 0.02,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 0,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 6,
    durationIncPerDelay: 12,
    heightVariation: {
      start: 150,
      finish: 0,
      scaling: 1,
    },
    isTracking: false,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "beam big bang kamehameha kame" },
      { name: "damage spirit bomb dps" },
      { name: "damage big bang attack explosion" },
      { name: "dash flying forward big bang kamehameha" },
      { name: "knockback 1tick 15speed 180angle 400aoe" },
      { name: "sfx beam big bang attack" },
    ],
  },
];