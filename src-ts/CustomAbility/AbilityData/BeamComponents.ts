export const BeamComponents = [
  // copy from here
  { 
    name: "beam kamehameha",
    repeatInterval: 1,
    beamHpMult: 0.02,
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
      { name: "damage 1tick 0.02int 400aoe" },
      { name: "damage final 2int 500aoe" },
      { name: "knockback 1tick 10speed 0angle 250aoe" },
      { name: "sfx beam kamehameha" },
    ],
  },
  // to here, and replace with unique name
  { 
    name: "beam spirit bomb",
    repeatInterval: 1,
    beamHpMult: 0.05,
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
      { name: "damage 1tick 0.03int 500aoe" },
      { name: "damage final 3int 600aoe" },
      { name: "knockback 1tick 15speed 0angle 300aoe" },
      { name: "sfx beam spirit bomb" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam galick gun",
    repeatInterval: 1,
    beamHpMult: 0.02,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 40,
    aoe: 300,
    clashingDelayTicks: 2,
    maxDelayTicks: 7,
    durationIncPerDelay: 6,
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
      { name: "damage 1tick 0.02int 400aoe" },
      { name: "damage final 2int 500aoe" },
      { name: "knockback 1tick 10speed 0angle 250aoe" },
      { name: "sfx beam galick gun" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam big bang attack",
    repeatInterval: 1,
    beamHpMult: 0.05,
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
      { name: "damage 1tick 0.03int 500aoe" },
      { name: "damage final 4int 500aoe" },
      { name: "knockback 1tick 15speed 180angle 400aoe" },
      { name: "sfx beam big bang attack" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam final flash",
    repeatInterval: 1,
    beamHpMult: 0.05,
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
      { name: "damage 1tick 0.05int 500aoe" },
      { name: "damage final 3.5int 500aoe" },
      { name: "sfx beam final flash" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam twin dragon shot",
    repeatInterval: 1,
    beamHpMult: 0.02,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 35,
    aoe: 300,
    clashingDelayTicks: 2,
    maxDelayTicks: 7,
    durationIncPerDelay: 25,
    heightVariation: {
      start: 100,
      finish: 100,
      scaling: 0,
    },
    isTracking: true,
    isFixedAngle: false,
    canClashWithHero: true,
    beamUnitType: "hpea",
    components: [
      { name: "damage 1tick 0.01int 400aoe" },
      { name: "damage final 1.5int 500aoe" },
      { name: "dodge homing beam 120angle" },
      { name: "sfx beam kamehameha" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam masenko",
    repeatInterval: 1,
    beamHpMult: 0.05,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 40,
    aoe: 300,
    clashingDelayTicks: 1,
    maxDelayTicks: 4,
    durationIncPerDelay: 17,
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
      { name: "damage 1tick 0.04int 500aoe" },
      { name: "damage final 2int 500aoe" },
      { name: "sfx beam masenko" },
    ],
  },
  // -------------------------------------------
  { 
    name: "beam homing kamehameha",
    repeatInterval: 1,
    beamHpMult: 0.5,
    beamHpAttribute: bj_HEROSTAT_INT,
    speed: 25,
    aoe: 250,
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
      { name: "damage 1tick 0.02int 400aoe" },
      { name: "damage final 2int 500aoe" },
      { name: "dodge homing beam 120angle" },
      { name: "sfx beam kamehameha" },
    ],
  },
  // -------------------------------------------
];