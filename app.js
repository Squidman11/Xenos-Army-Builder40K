const factions = {
  aeldari: {
    name: "Aeldari",
    pointsUrl: "https://mfm.warhammer-community.com/en/aeldari",
    theme: ["#167ca5", "#efc85c", "#07151d", "#142b37", "#0c2029"]
  },
  drukhari: {
    name: "Drukhari",
    pointsUrl: "https://mfm.warhammer-community.com/en/drukhari",
    theme: ["#733c83", "#cf4d76", "#160d1a", "#302035", "#211528"]
  },
  genestealer_cults: {
    name: "Genestealer Cults",
    pointsUrl: "https://mfm.warhammer-community.com/en/genestealer-cults",
    theme: ["#7b4ba0", "#d1a14e", "#130e19", "#292033", "#1d1627"]
  },
  leagues_of_votann: {
    name: "Leagues of Votann",
    pointsUrl: "https://mfm.warhammer-community.com/en/leagues-of-votann",
    theme: ["#b65932", "#e4c76c", "#1b100c", "#38231a", "#281912"]
  },
  necrons: {
    name: "Necrons",
    pointsUrl: "https://mfm.warhammer-community.com/en/necrons",
    theme: ["#18846e", "#a6c765", "#081613", "#142923", "#0d201b"]
  },
  orks: {
    name: "Orks",
    pointsUrl: "https://mfm.warhammer-community.com/en/orks",
    theme: ["#548d37", "#dfb944", "#10170b", "#25311a", "#192510"]
  },
  tau_empire: {
    name: "T'au Empire",
    pointsUrl: "https://mfm.warhammer-community.com/en/tau-empire",
    theme: ["#477ea7", "#e1a84e", "#0b121a", "#1b2a37", "#121f2b"]
  },
  tyranids: {
    name: "Tyranids",
    pointsUrl: "https://mfm.warhammer-community.com/en/tyranids",
    theme: ["#9c4b91", "#72c4ae", "#190d18", "#321b30", "#241423"]
  }
};

const masterUnits = [
  { id: "autarch", faction: "aeldari", name: "Autarch", role: "HQ", points: 75, wargear: ["Autarch weapons"] },
  { id: "farseer", faction: "aeldari", name: "Farseer", role: "HQ", points: 80, wargear: ["Rune armour, witchblade"] },
  { id: "spiritseer", faction: "aeldari", name: "Spiritseer", role: "HQ", points: 65, wargear: ["Shuriken pistol, witch staff"] },
  { id: "eldrad", faction: "aeldari", name: "Eldrad Ulthran", role: "HQ", points: 110, isEpicHero: true, wargear: ["Singing spear"] },
  { id: "avatar", faction: "aeldari", name: "Avatar of Khaine", role: "Monster", points: 335, isEpicHero: true, wargear: ["The Wailing Doom"] },
  { id: "yriel", faction: "aeldari", name: "Prince Yriel", role: "HQ", points: 100, isEpicHero: true, wargear: ["Spear of Twilight"] },
  { id: "ynnead", faction: "aeldari", name: "The Yncarne", role: "Monster", points: 350, isEpicHero: true, wargear: ["Swirling soul energy"] },
  { id: "yvraine", faction: "aeldari", name: "Yvraine", role: "HQ", points: 100, isEpicHero: true, wargear: ["Kha-vir, the Sword of Sorrows"] },
  { id: "guardian_defenders", faction: "aeldari", name: "Guardian Defenders (10 models)", role: "Battleline", points: 100, wargear: ["Shuriken catapults"] },
  { id: "rangers", faction: "aeldari", name: "Rangers (5 models)", role: "Infantry", points: 55, wargear: ["Ranger long rifles"] },
  { id: "dire_avengers", faction: "aeldari", name: "Dire Avengers (5 models)", role: "Infantry", points: 70, wargear: ["Avenger shuriken catapults"] },
  { id: "howling_banshees", faction: "aeldari", name: "Howling Banshees (5 models)", role: "Infantry", points: 90, wargear: ["Banshee blades, shuriken pistols"] },
  { id: "fire_dragons", faction: "aeldari", name: "Fire Dragons (5 models)", role: "Infantry", points: 90, wargear: ["Fusion guns"] },
  { id: "wraithguard", faction: "aeldari", name: "Wraithguard (5 models)", role: "Infantry", points: 180, wargear: ["Wraithcannons"] },
  { id: "wraithlord", faction: "aeldari", name: "Wraithlord", role: "Monster", points: 145, wargear: ["Wraithbone fists, heavy weapons"] },
  { id: "windriders", faction: "aeldari", name: "Windriders (3 models)", role: "Cavalry", points: 80, wargear: ["Twin shuriken catapults"] },
  { id: "falcon", faction: "aeldari", name: "Falcon", role: "Vehicle", points: 130, wargear: ["Pulse laser, shuriken cannon"] },
  { id: "wave_serpent", faction: "aeldari", name: "Wave Serpent", role: "Vehicle", points: 120, wargear: ["Twin turret weapon, shuriken cannon"] },
  { id: "troupe_master", faction: "aeldari", name: "Troupe Master", role: "HQ", points: 55, wargear: ["Harlequin's blade, shuriken pistol"] },
  { id: "shadowseer", faction: "aeldari", name: "Shadowseer", role: "HQ", points: 60, wargear: ["Miststave, shuriken pistol"] },
  { id: "solitaire", faction: "aeldari", name: "Solitaire", role: "Infantry", points: 115, isEpicHero: true, wargear: ["Harlequin's caress, solitaire weapons"] },
  { id: "death_jester", faction: "aeldari", name: "Death Jester", role: "Infantry", points: 70, wargear: ["Shrieker cannon"] },
  { id: "harlequin_troupe", faction: "aeldari", name: "Harlequin Troupe (5 models)", role: "Battleline", points: 75, wargear: ["Harlequin's blades, shuriken pistols"] },
  { id: "skyweavers", faction: "aeldari", name: "Skyweavers (2 models)", role: "Cavalry", points: 95, wargear: ["Haywire cannons, zephyrglaives"] },
  { id: "starweaver", faction: "aeldari", name: "Starweaver", role: "Vehicle", points: 80, wargear: ["Shuriken cannons"] },
  { id: "voidweaver", faction: "aeldari", name: "Voidweaver", role: "Vehicle", points: 115, wargear: ["Prismatic cannon, shuriken cannons"] },
  { id: "corsair_voidreavers", faction: "aeldari", name: "Corsair Voidreavers (5 models)", role: "Infantry", points: 60, wargear: ["Shuriken rifles, power sword"] },
  { id: "fire_prism", faction: "aeldari", name: "Fire Prism", role: "Vehicle", points: 170, wargear: ["Prism cannon, twin shuriken catapult"] },

  { id: "archon", faction: "drukhari", name: "Archon", role: "HQ", points: 85, wargear: ["Splinter pistol, huskblade"] },
  { id: "succubus", faction: "drukhari", name: "Succubus", role: "HQ", points: 45, wargear: ["Hekatarii blade, splinter pistol"] },
  { id: "haemonculus", faction: "drukhari", name: "Haemonculus", role: "HQ", points: 60, wargear: ["Stinger pistol, haemonculus tools"] },
  { id: "lelith", faction: "drukhari", name: "Lelith Hesperax", role: "HQ", points: 95, isEpicHero: true, wargear: ["Lelith's blades"] },
  { id: "drazhar", faction: "drukhari", name: "Drazhar", role: "HQ", points: 85, isEpicHero: true, wargear: ["The Executioner's demiklaives"] },
  { id: "kabalites", faction: "drukhari", name: "Kabalite Warriors (10 models)", role: "Battleline", points: 110, wargear: ["Splinter rifles, special weapons"] },
  { id: "wyches", faction: "drukhari", name: "Wyches (10 models)", role: "Battleline", points: 90, wargear: ["Hekatarii blades, splinter pistols"] },
  { id: "incubi", faction: "drukhari", name: "Incubi (5 models)", role: "Infantry", points: 85, wargear: ["Klaives"] },
  { id: "scourges", faction: "drukhari", name: "Scourges (5 models)", role: "Infantry", points: 120, wargear: ["Shardcarbines, heavy weapons"] },
  { id: "mandrakes", faction: "drukhari", name: "Mandrakes (5 models)", role: "Infantry", points: 70, wargear: ["Baleblasts, glimmersteel blades"] },
  { id: "talos", faction: "drukhari", name: "Talos", role: "Monster", points: 80, wargear: ["Macro-scalpels, tail weapon"] },
  { id: "raider", faction: "drukhari", name: "Raider", role: "Vehicle", points: 80, wargear: ["Dark lance, bladevanes"] },
  { id: "ravager", faction: "drukhari", name: "Ravager", role: "Vehicle", points: 110, wargear: ["Dark lances"] },
  { id: "venom", faction: "drukhari", name: "Venom", role: "Vehicle", points: 70, wargear: ["Splinter cannon, twin splinter rifle"] },

  { id: "patriarch", faction: "genestealer_cults", name: "Patriarch", role: "HQ", points: 75, isEpicHero: true, wargear: ["Patriarch's claws"] },
  { id: "primus", faction: "genestealer_cults", name: "Primus", role: "HQ", points: 90, wargear: ["Cult bonesword, needle pistol"] },
  { id: "magus", faction: "genestealer_cults", name: "Magus", role: "HQ", points: 50, wargear: ["Cult stave, autopistol"] },
  { id: "iconward", faction: "genestealer_cults", name: "Acolyte Iconward", role: "HQ", points: 50, wargear: ["Cult claws, cult icon"] },
  { id: "neophytes", faction: "genestealer_cults", name: "Neophyte Hybrids (10 models)", role: "Battleline", points: 70, wargear: ["Hybrid firearms, mining weapons"] },
  { id: "acolytes", faction: "genestealer_cults", name: "Acolyte Hybrids (5 models)", role: "Battleline", points: 75, wargear: ["Autopistols, cult claws"] },
  { id: "aberrants", faction: "genestealer_cults", name: "Aberrants (5 models)", role: "Infantry", points: 150, wargear: ["Heavy improvised weapons"] },
  { id: "purestrains", faction: "genestealer_cults", name: "Purestrain Genestealers (5 models)", role: "Infantry", points: 75, wargear: ["Purestrain talons"] },
  { id: "ridgerunners", faction: "genestealer_cults", name: "Achilles Ridgerunners", role: "Vehicle", points: 75, wargear: ["Heavy mining laser, survey augur"] },
  { id: "rockgrinder", faction: "genestealer_cults", name: "Goliath Rockgrinder", role: "Vehicle", points: 120, wargear: ["Heavy mining laser, clearance incinerator"] },
  { id: "truck", faction: "genestealer_cults", name: "Goliath Truck", role: "Vehicle", points: 85, wargear: ["Heavy stubber, twin autocannon"] },
  { id: "jackals", faction: "genestealer_cults", name: "Atalan Jackals (5 models)", role: "Cavalry", points: 80, wargear: ["Shotguns, cult knives"] },
  { id: "kelermorph", faction: "genestealer_cults", name: "Kelermorph", role: "Infantry", points: 60, wargear: ["Liberator autostubs"] },

  { id: "kahl", faction: "leagues_of_votann", name: "Kâhl", role: "HQ", points: 70, wargear: ["Volkanite disintegrator, plasma axe"] },
  { id: "champion", faction: "leagues_of_votann", name: "Einhyr Champion", role: "HQ", points: 60, wargear: ["Darkstar axe, volkanite disintegrator"] },
  { id: "grimnyr", faction: "leagues_of_votann", name: "Grimnyr", role: "HQ", points: 65, wargear: ["Ancestral stave, CORV units"] },
  { id: "hearthkyn", faction: "leagues_of_votann", name: "Hearthkyn Warriors (10 models)", role: "Battleline", points: 100, wargear: ["Autoch-pattern bolters"] },
  { id: "hearthguard", faction: "leagues_of_votann", name: "Einhyr Hearthguard (5 models)", role: "Infantry", points: 160, wargear: ["Concussion gauntlets, exo-armour"] },
  { id: "berserks", faction: "leagues_of_votann", name: "Cthonian Beserks (5 models)", role: "Infantry", points: 100, wargear: ["Heavy plasma axes"] },
  { id: "yaegirs", faction: "leagues_of_votann", name: "Hernkyn Yaegirs (10 models)", role: "Infantry", points: 80, wargear: ["Bolt revolvers, plasma knives"] },
  { id: "pioneers", faction: "leagues_of_votann", name: "Hernkyn Pioneers (3 models)", role: "Cavalry", points: 90, wargear: ["Bolt revolvers, magna-coil autocannon"] },
  { id: "thunderkyn", faction: "leagues_of_votann", name: "Thunderkyn (3 models)", role: "Infantry", points: 85, wargear: ["Exo-armour, heavy weapons"] },
  { id: "hekaton", faction: "leagues_of_votann", name: "Hekaton Land Fortress", role: "Vehicle", points: 225, wargear: ["Heavy magna-rail cannon, bolt cannons"] },
  { id: "brokhyr", faction: "leagues_of_votann", name: "Brokhyr Iron-master", role: "HQ", points: 75, wargear: ["Graviton rifle, graviton hammer"] },
  { id: "trikes", faction: "leagues_of_votann", name: "Sagitaur", role: "Vehicle", points: 115, wargear: ["L7 missile launcher, twin bolt cannon"] },

  { id: "overlord", faction: "necrons", name: "Overlord", role: "HQ", points: 85, wargear: ["Overlord's blade, tachyon arrow"] },
  { id: "technomancer", faction: "necrons", name: "Technomancer", role: "HQ", points: 85, wargear: ["Staff of light, canoptek control node"] },
  { id: "chronomancer", faction: "necrons", name: "Chronomancer", role: "HQ", points: 65, wargear: ["Aeonstave"] },
  { id: "imotekh", faction: "necrons", name: "Imotekh the Stormlord", role: "HQ", points: 100, isEpicHero: true, wargear: ["Staff of the Destroyer"] },
  { id: "nightbringer", faction: "necrons", name: "C'tan Shard of the Nightbringer", role: "Monster", points: 295, isEpicHero: true, wargear: ["Scythe of the Nightbringer"] },
  { id: "warriors", faction: "necrons", name: "Necron Warriors (10 models)", role: "Battleline", points: 100, wargear: ["Gauss flayers"] },
  { id: "immortals", faction: "necrons", name: "Immortals (5 models)", role: "Battleline", points: 75, wargear: ["Gauss blasters"] },
  { id: "lychguard", faction: "necrons", name: "Lychguard (5 models)", role: "Infantry", points: 85, wargear: ["Hyperphase swords, dispersion shields"] },
  { id: "skorpekh", faction: "necrons", name: "Skorpekh Destroyers (3 models)", role: "Infantry", points: 90, wargear: ["Hyperphase weapons"] },
  { id: "wraiths", faction: "necrons", name: "Canoptek Wraiths (3 models)", role: "Cavalry", points: 125, wargear: ["Vicious claws"] },
  { id: "doomstalker", faction: "necrons", name: "Canoptek Doomstalker", role: "Vehicle", points: 145, wargear: ["Doomsday blaster"] },
  { id: "doomsday_ark", faction: "necrons", name: "Doomsday Ark", role: "Vehicle", points: 200, wargear: ["Doomsday cannon, gauss flayer arrays"] },
  { id: "monolith", faction: "necrons", name: "Monolith", role: "Vehicle", points: 400, wargear: ["Particle whips, death rays"] },
  { id: "deathmarks", faction: "necrons", name: "Deathmarks (5 models)", role: "Infantry", points: 65, wargear: ["Synaptic disintegrators"] },

  { id: "warboss", faction: "orks", name: "Warboss", role: "HQ", points: 75, wargear: ["Slugga, power klaw"] },
  { id: "beastboss", faction: "orks", name: "Beastboss", role: "HQ", points: 80, wargear: ["Beastchoppa, beastclaw"] },
  { id: "ghazghkull", faction: "orks", name: "Ghazghkull Thraka", role: "HQ", points: 235, isEpicHero: true, wargear: ["Ghazghkull's big choppa, Mork's Roar"] },
  { id: "mozrog", faction: "orks", name: "Mozrog Skragbad", role: "HQ", points: 165, isEpicHero: true, wargear: ["Big Chompa's jaws, Thump gun"] },
  { id: "boyz", faction: "orks", name: "Boyz (10 models)", role: "Battleline", points: 80, wargear: ["Slugga and choppa"] },
  { id: "beast_snaggas", faction: "orks", name: "Beast Snagga Boyz (10 models)", role: "Battleline", points: 95, wargear: ["Choppas, slugga"] },
  { id: "gretchin", faction: "orks", name: "Gretchin (11 models)", role: "Battleline", points: 40, wargear: ["Grot blastas, close combat weapons"] },
  { id: "nobz", faction: "orks", name: "Nobz (5 models)", role: "Infantry", points: 105, wargear: ["Power klaws, big choppas"] },
  { id: "meganobz", faction: "orks", name: "Meganobz (2 models)", role: "Infantry", points: 70, wargear: ["Twin killsaws"] },
  { id: "squighog", faction: "orks", name: "Squighog Boyz (3 models)", role: "Cavalry", points: 150, wargear: ["Stikka, saddlegit weapons"] },
  { id: "deffkoptas", faction: "orks", name: "Deffkoptas (3 models)", role: "Vehicle", points: 100, wargear: ["Kopta rokkits, kopta blades"] },
  { id: "trukk", faction: "orks", name: "Trukk", role: "Vehicle", points: 65, wargear: ["Big shoota, wrecking ball"] },
  { id: "battlewagon", faction: "orks", name: "Battlewagon", role: "Vehicle", points: 160, wargear: ["Deff rolla, big shoota"] },
  { id: "dread", faction: "orks", name: "Deff Dread", role: "Vehicle", points: 120, wargear: ["Dread klaws, big shootas"] },

  { id: "coldstar", faction: "tau_empire", name: "Commander in Coldstar Battlesuit", role: "HQ", points: 95, wargear: ["Battlesuit weapons"] },
  { id: "enforcer", faction: "tau_empire", name: "Commander in Enforcer Battlesuit", role: "HQ", points: 80, wargear: ["Battlesuit weapons"] },
  { id: "ethereal", faction: "tau_empire", name: "Ethereal", role: "HQ", points: 50, wargear: ["Honour stave"] },
  { id: "fireblade", faction: "tau_empire", name: "Cadre Fireblade", role: "HQ", points: 50, wargear: ["Fireblade pulse rifle"] },
  { id: "farsight", faction: "tau_empire", name: "Commander Farsight", role: "HQ", points: 95, isEpicHero: true, wargear: ["Dawn Blade, high-intensity plasma rifle"] },
  { id: "shadowsun", faction: "tau_empire", name: "Commander Shadowsun", role: "HQ", points: 100, isEpicHero: true, wargear: ["High-energy fusion blasters"] },
  { id: "breachers", faction: "tau_empire", name: "Breacher Team (10 models)", role: "Battleline", points: 100, wargear: ["Pulse blasters"] },
  { id: "strike_team", faction: "tau_empire", name: "Strike Team (10 models)", role: "Battleline", points: 75, wargear: ["Pulse rifles"] },
  { id: "stealth", faction: "tau_empire", name: "Stealth Battlesuits (3 models)", role: "Infantry", points: 80, wargear: ["Burst cannons, fusion blaster"] },
  { id: "crisis", faction: "tau_empire", name: "Crisis Battlesuits (3 models)", role: "Infantry", points: 200, wargear: ["Battlesuit weapons"] },
  { id: "ghostkeel", faction: "tau_empire", name: "Ghostkeel Battlesuit", role: "Vehicle", points: 160, wargear: ["Ghostkeel fists, fusion collider"] },
  { id: "riptide", faction: "tau_empire", name: "Riptide Battlesuit", role: "Vehicle", points: 190, wargear: ["Heavy burst cannon"] },
  { id: "broadside", faction: "tau_empire", name: "Broadside Battlesuits", role: "Infantry", points: 90, wargear: ["Heavy rail rifle, smart missile systems"] },
  { id: "hammerhead", faction: "tau_empire", name: "Hammerhead Gunship", role: "Vehicle", points: 145, wargear: ["Railgun, accelerator burst cannons"] },
  { id: "devilfish", faction: "tau_empire", name: "Devilfish", role: "Vehicle", points: 85, wargear: ["Accelerator burst cannon, seeker missiles"] },
  { id: "kroot_war_shaper", faction: "tau_empire", name: "Kroot War Shaper", role: "HQ", points: 50, wargear: ["Kroot rifle, ritual blade"] },
  { id: "kroot_flesh_shaper", faction: "tau_empire", name: "Kroot Flesh Shaper", role: "HQ", points: 60, wargear: ["Twin ritualistic weapons"] },
  { id: "kroot_trail_shaper", faction: "tau_empire", name: "Kroot Trail Shaper", role: "HQ", points: 55, wargear: ["Kroot rifle, trail-blade"] },
  { id: "kroot_carnivores", faction: "tau_empire", name: "Kroot Carnivores (10 models)", role: "Battleline", points: 65, wargear: ["Kroot rifles, blades"] },
  { id: "kroot_far_stalkers", faction: "tau_empire", name: "Kroot Farstalkers (10 models)", role: "Infantry", points: 85, wargear: ["Farstalker firearm, ritual blade"] },
  { id: "krootox_rider", faction: "tau_empire", name: "Krootox Rider", role: "Cavalry", points: 40, wargear: ["Krootox fists, autocannon"] },
  { id: "kroot_rampagers", faction: "tau_empire", name: "Krootox Rampagers (3 models)", role: "Cavalry", points: 85, wargear: ["Rampager fists, blades"] },
  { id: "kroot_hounds", faction: "tau_empire", name: "Kroot Hounds (5 models)", role: "Infantry", points: 40, wargear: ["Ripping fangs"] },

  { id: "hive_tyrant", faction: "tyranids", name: "Hive Tyrant", role: "Monster", points: 235, wargear: ["Monstrous bonesword, lash whip"] },
  { id: "winged_tyrant", faction: "tyranids", name: "Winged Hive Tyrant", role: "Monster", points: 200, wargear: ["Monstrous bonesword, lash whip"] },
  { id: "neurotyrant", faction: "tyranids", name: "Neurotyrant", role: "HQ", points: 105, wargear: ["Neurotyrant claws and lashes"] },
  { id: "deathleaper", faction: "tyranids", name: "Deathleaper", role: "HQ", points: 80, isEpicHero: true, wargear: ["Lictor claws and talons"] },
  { id: "termagants", faction: "tyranids", name: "Termagants (10 models)", role: "Battleline", points: 60, wargear: ["Fleshborers"] },
  { id: "hormagaunts", faction: "tyranids", name: "Hormagaunts (10 models)", role: "Battleline", points: 65, wargear: ["Hormagaunt talons"] },
  { id: "gargoyles", faction: "tyranids", name: "Gargoyles (10 models)", role: "Infantry", points: 85, wargear: ["Fleshborers, blinding venom"] },
  { id: "genestealers", faction: "tyranids", name: "Genestealers (5 models)", role: "Infantry", points: 75, wargear: ["Genestealer claws and talons"] },
  { id: "tyranid_warriors", faction: "tyranids", name: "Tyranid Warriors with Melee Bio-weapons (3 models)", role: "Infantry", points: 75, wargear: ["Melee bio-weapons"] },
  { id: "barbgaunts", faction: "tyranids", name: "Barbgaunts (5 models)", role: "Infantry", points: 55, wargear: ["Barblauncher"] },
  { id: "carnifexes", faction: "tyranids", name: "Carnifexes (2 models)", role: "Monster", points: 230, wargear: ["Carnifex bio-weapons"] },
  { id: "haruspex", faction: "tyranids", name: "Haruspex", role: "Monster", points: 125, wargear: ["Ravenous maw, grasping tongue"] },
  { id: "exocrine", faction: "tyranids", name: "Exocrine", role: "Monster", points: 135, wargear: ["Bio-plasmic cannon"] },
  { id: "maleceptor", faction: "tyranids", name: "Maleceptor", role: "Monster", points: 170, wargear: ["Psychic overload, massive scything talons"] },
  { id: "tyrannofex", faction: "tyranids", name: "Tyrannofex", role: "Monster", points: 190, wargear: ["Rupture cannon"] },
  { id: "tyrannocyte", faction: "tyranids", name: "Tyrannocyte", role: "Monster", points: 105, wargear: ["Deathspitters"] }
];

const detachments = {
  aeldari_battlehost: {
    name: "Battle Host", faction: "aeldari",
    enhancements: [
      { name: "The Phoenix Gem", points: 35 },
      { name: "Reader of the Runes", points: 20 },
      { name: "Seer of the Shifting Vector", points: 30 },
      { name: "The Weeping Stones", points: 15 }
    ]
  },
  aeldari_aspect_host: {
    name: "Aspect Host", faction: "aeldari",
    enhancements: [
      { name: "Aspect of Murder", points: 15 },
      { name: "Crucible of Malediction", points: 30 },
      { name: "Strategist of the Hidden Path", points: 25 },
      { name: "Student of the Keys", points: 20 }
    ]
  },
  drukhari_skysplinter: {
    name: "Skysplinter Assault", faction: "drukhari",
    enhancements: [
      { name: "Spiteful Raider", points: 10 },
      { name: "Sadistic Fulcrum", points: 15 },
      { name: "Phantasmal Smoke", points: 20 },
      { name: "The Art of Pain", points: 25 }
    ]
  },
  drukhari_realspace: {
    name: "Realspace Raiders", faction: "drukhari",
    enhancements: [
      { name: "Nightmare Shroud", points: 20 },
      { name: "Labyrinthine Cunning", points: 30 },
      { name: "The Art of Pain", points: 25 },
      { name: "Crucible of Malediction", points: 20 }
    ]
  },
  gsc_host: {
    name: "Host of Ascension", faction: "genestealer_cults",
    enhancements: [
      { name: "Apostle of the Twisted Helix", points: 15 },
      { name: "Assassination Edict", points: 25 },
      { name: "Focus of Adoration", points: 15 },
      { name: "Our Time is Nigh", points: 20 }
    ]
  },
  gsc_biosanctic: {
    name: "Biosanctic Broodsurge", faction: "genestealer_cults",
    enhancements: [
      { name: "Bio-allocator", points: 25 },
      { name: "Predatory Instincts", points: 25 },
      { name: "Mutagenic Regeneration", points: 30 },
      { name: "Powerful These", points: 20 }
    ]
  },
  votann_oathband: {
    name: "Oathband", faction: "leagues_of_votann",
    enhancements: [
      { name: "Appraising Glare", points: 20 },
      { name: "A Long List", points: 15 },
      { name: "Grim Demeanour", points: 20 },
      { name: "Wayfarer's Grace", points: 25 }
    ]
  },
  votann_hearthband: {
    name: "Hearthband", faction: "leagues_of_votann",
    enhancements: [
      { name: "Appraising Glare", points: 20 },
      { name: "A Long List", points: 15 },
      { name: "Grim Demeanour", points: 20 },
      { name: "Wayfarer's Grace", points: 25 }
    ]
  },
  necrons_awakened: {
    name: "Awakened Dynasty", faction: "necrons",
    enhancements: [
      { name: "Veil of Darkness", points: 20 },
      { name: "Eternal Madness", points: 25 },
      { name: "Nether-realm Casket", points: 20 },
      { name: "Phylacterine Hive", points: 25 }
    ]
  },
  necrons_hypercrypt: {
    name: "Hypercrypt Legion", faction: "necrons",
    enhancements: [
      { name: "Arisen Tyrant", points: 25 },
      { name: "Dimensional Overseer", points: 25 },
      { name: "Hyperspatial Transfer Node", points: 30 },
      { name: "Osteoclave Fulcrum", points: 20 }
    ]
  },
  orks_war_horde: {
    name: "War Horde", faction: "orks",
    enhancements: [
      { name: "Headwoppa's Killchoppa", points: 20 },
      { name: "Supa-Cybork Body", points: 25 },
      { name: "Kunnin' but Brutal", points: 15 },
      { name: "Follow Me Ladz", points: 25 }
    ]
  },
  orks_bully_boyz: {
    name: "Bully Boyz", faction: "orks",
    enhancements: [
      { name: "Da Boss is Watchin'", points: 10 },
      { name: "Big Gob", points: 20 },
      { name: "Tellyporta", points: 25 },
      { name: "Iron Gob", points: 25 }
    ]
  },
  tau_kauyon: {
    name: "Kauyon", faction: "tau_empire",
    enhancements: [
      { name: "Exemplar of the Kauyon", points: 20 },
      { name: "Precision of the Patient Hunter", points: 15 },
      { name: "Puretide Engram Neurochip", points: 25 },
      { name: "Through Unity, Devastation", points: 20 }
    ]
  },
  tau_retaliation: {
    name: "Retaliation Cadre", faction: "tau_empire",
    enhancements: [
      { name: "Prototype Weapon System", points: 20 },
      { name: "Puretide Engram Neurochip", points: 25 },
      { name: "Internal Grenade Racks", points: 20 },
      { name: "Starflare Ignition System", points: 20 }
    ]
  },
  tau_kroot_hunting_pack: {
    name: "Kroot Hunting Pack", faction: "tau_empire",
    enhancements: [
      { name: "Borthrod Gland", points: 15 },
      { name: "Nomadic Hunter", points: 20 },
      { name: "Root-carved Totem", points: 10 },
      { name: "The Darting Hunter", points: 25 }
    ]
  },
  tyranids_invasion: {
    name: "Invasion Fleet", faction: "tyranids",
    enhancements: [
      { name: "Adaptive Biology", points: 25 },
      { name: "Perfectly Adapted", points: 15 },
      { name: "Synaptic Lynchpin", points: 20 },
      { name: "Alien Cunning", points: 30 }
    ]
  },
  tyranids_synaptic: {
    name: "Synaptic Nexus", faction: "tyranids",
    enhancements: [
      { name: "Power of the Hive Mind", points: 10 },
      { name: "Psychostatic Disruption", points: 30 },
      { name: "Synaptic Control", points: 20 },
      { name: "The Dirgeheart of Kharis", points: 15 }
    ]
  }
};

const detachmentDescriptions = {
  aeldari_battlehost: "A flexible Aeldari warhost that coordinates swift strikes, psychic support, and specialist aspects.",
  aeldari_aspect_host: "An elite force built around the specialised warriors of the Aspect Shrines.",
  drukhari_skysplinter: "A fast raiding force that combines transports, sudden assaults, and brutal close combat.",
  drukhari_realspace: "A balanced Drukhari force bringing together Kabal, Wych Cult, and Haemonculus units.",
  gsc_host: "A Genestealer Cult uprising that overwhelms the enemy through ambushes and reinforcements.",
  gsc_biosanctic: "A close-combat cult force led by its mutated and bio-engineered shock troops.",
  votann_oathband: "A disciplined Kin force that marks priority targets and delivers measured, punishing volleys.",
  votann_hearthband: "An armoured Kin force focused on sturdy Hearthkyn and close-range firepower.",
  necrons_awakened: "A resilient dynasty force commanded by Necron characters and supported by reanimation protocols.",
  necrons_hypercrypt: "A mobile Necron army that uses dimensional translocation to strike across the battlefield.",
  orks_war_horde: "A broad Ork force built around aggressive assaults and overwhelming numbers.",
  orks_bully_boyz: "An elite Ork army led by hard-hitting Bosses and mobs of heavily armed Nobz.",
  tau_kauyon: "A patient T'au force that draws enemies into carefully planned fields of fire.",
  tau_retaliation: "A battlesuit-heavy cadre that closes range to unleash devastating volleys.",
  tau_kroot_hunting_pack: "A Kroot-led hunting force that uses speed, fieldcraft, and close-range attacks.",
  tyranids_invasion: "A flexible Tyranid swarm that adapts to prey and attacks with a varied bioform force.",
  tyranids_synaptic: "A synapse-led swarm coordinated by its most potent psychic organisms."
};

const unitInfo = {
  avatar: "A towering shard of Khaine, able to lead an Aeldari force into the fiercest fighting.",
  ynnead: "The living embodiment of Ynnead, the Aeldari god of the dead.",
  ghazghkull: "The Prophet of Gork and Mork and the foremost warlord of the Orks.",
  nightbringer: "A C'tan shard whose presence brings terror and destruction to the battlefield.",
  farsight: "The renegade T'au commander who leads the Enclaves in close-range battles.",
  hive_tyrant: "A powerful synapse creature that coordinates the Tyranid swarm.",
  patriarch: "The apex organism of a Genestealer Cult and its psychic leader."
};

let currentRoster = [];
let selectedInstanceId = null;
let activeRoleFilter = "all";
let currentDetachment = "aeldari_battlehost";
let currentChapter = "aeldari";
let currentPointsLimit = 2000;
let inlineErrorTimer;

const catalogListEl = document.getElementById("catalogList");
const rosterListEl = document.getElementById("rosterList");
const configuratorWorkspaceEl = document.getElementById("configuratorWorkspace");
const searchBarEl = document.getElementById("searchBar");
const ptsTotalEl = document.getElementById("ptsTotal");
const unitTotalEl = document.getElementById("unitTotal");
const importFileEl = document.getElementById("importFile");
const detachmentSelectEl = document.getElementById("detachmentSelect");
const detachmentInfoTitleEl = document.getElementById("detachmentInfoTitle");
const detachmentInfoDescriptionEl = document.getElementById("detachmentInfoDescription");
const chapterSelectEl = document.getElementById("chapterSelect");
const customPointsLimitEl = document.getElementById("customPointsLimit");
const customLimitControlsEl = document.getElementById("customLimitControls");
const pointsLimitEl = document.getElementById("ptsLimit");
const relativeInfoContentEl = document.getElementById("relativeInfoContent");
const rosterRequirementsEl = document.getElementById("rosterRequirements");

function init() {
  populateFactions();
  applyFactionTheme(currentChapter);
  populateDetachmentOptions();
  renderCatalog(getAvailableUnits());
  renderRoster();
  updatePointsDisplay();

  searchBarEl.addEventListener("input", filterUnits);
  document.getElementById("btnExportJson").addEventListener("click", () => exportData("json"));
  document.getElementById("btnExportText").addEventListener("click", () => exportData("text"));
  document.getElementById("btnImportJson").addEventListener("click", () => importFileEl.click());
  document.getElementById("btnClearRoster").addEventListener("click", clearRoster);
  importFileEl.addEventListener("change", importData);
  detachmentSelectEl.addEventListener("change", changeDetachment);
  chapterSelectEl.addEventListener("change", changeFaction);
  document.querySelectorAll(".game-mode-btn").forEach(button => {
    button.addEventListener("click", () => selectGameMode(button.dataset.limit));
  });
  document.getElementById("applyCustomLimit").addEventListener("click", applyCustomLimit);
  document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(filterButton => filterButton.classList.remove("active"));
      button.classList.add("active");
      activeRoleFilter = button.dataset.role;
      filterUnits();
    });
  });
}

function populateFactions() {
  Object.entries(factions).forEach(([id, faction]) => {
    const option = new Option(faction.name, id);
    chapterSelectEl.add(option);
  });
  chapterSelectEl.value = currentChapter;
}

function applyFactionTheme(factionId) {
  const [primary, accent, background, panel, inner] = factions[factionId].theme;
  const root = document.documentElement;
  root.dataset.faction = factionId;
  root.style.setProperty("--primary", primary);
  root.style.setProperty("--primary-hover", primary);
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--accent-hover", accent);
  root.style.setProperty("--bg-color", background);
  root.style.setProperty("--panel-bg", panel);
  root.style.setProperty("--inner-bg", inner);
  document.getElementById("pointsSourceLink").href = factions[factionId].pointsUrl;
}

function renderCatalog(units) {
  catalogListEl.innerHTML = "";
  units.forEach(unit => {
    const card = document.createElement("div");
    card.className = "unit-card";
    card.addEventListener("click", () => addToRoster(unit));
    const title = document.createElement("h3");
    title.textContent = unit.name;
    const meta = document.createElement("div");
    meta.className = "meta";
    const role = document.createElement("span");
    role.textContent = "[" + (unit.isEpicHero ? "EPIC HERO" : unit.role === "HQ" ? "COMMAND" : unit.role.toUpperCase()) + "]";
    const points = document.createElement("strong");
    points.textContent = unit.points + " pts";
    meta.append(role, points);
    card.append(title, meta);
    catalogListEl.appendChild(card);
  });
}

function filterUnits() {
  const term = searchBarEl.value.trim().toLowerCase();
  const filtered = getAvailableUnits().filter(unit => {
    const matchesText = unit.name.toLowerCase().includes(term);
    const matchesRole = activeRoleFilter === "all" ||
      (activeRoleFilter === "EpicHero" ? unit.isEpicHero === true : unit.role === activeRoleFilter) ||
      (activeRoleFilter === "Infantry" && unit.role === "Infantry");
    return matchesText && matchesRole;
  });
  renderCatalog(filtered);
}

function getAvailableUnits() {
  return masterUnits.filter(unit => unit.faction === currentChapter);
}

function getFactionDetachments(factionId) {
  return Object.entries(detachments).filter(([, detachment]) => detachment.faction === factionId);
}

function populateDetachmentOptions() {
  detachmentSelectEl.innerHTML = "";
  const available = getFactionDetachments(currentChapter);
  available.forEach(([id, detachment]) => detachmentSelectEl.add(new Option(detachment.name, id)));
  if (!available.some(([id]) => id === currentDetachment)) {
    currentDetachment = available.length ? available[0][0] : "";
  }
  detachmentSelectEl.value = currentDetachment;
  updateDetachmentInfo();
}

function updateDetachmentInfo() {
  const detachment = detachments[currentDetachment];
  detachmentInfoTitleEl.textContent = detachment ? detachment.name : "No detachment available";
  detachmentInfoDescriptionEl.textContent = detachment
    ? detachmentDescriptions[currentDetachment]
    : "Select a faction with an available detachment.";
}

function changeFaction(event) {
  const nextFaction = event.target.value;
  const removed = currentRoster.filter(item => item.faction !== nextFaction);
  const hasEnhancements = currentRoster.some(item => item.enhancement);
  if ((removed.length || hasEnhancements) && !window.confirm(
    "Changing factions will remove incompatible units and assigned enhancements. Continue?"
  )) {
    chapterSelectEl.value = currentChapter;
    return;
  }

  currentChapter = nextFaction;
  currentRoster = currentRoster.filter(item => item.faction === currentChapter);
  currentRoster.forEach(item => { item.enhancement = null; });
  currentDetachment = "";
  selectedInstanceId = currentRoster.some(item => item.instanceId === selectedInstanceId)
    ? selectedInstanceId
    : currentRoster.length ? currentRoster[0].instanceId : null;
  applyFactionTheme(currentChapter);
  populateDetachmentOptions();
  filterUnits();
  renderRoster();
  renderConfigurator();
}

function changeDetachment(event) {
  const nextDetachment = event.target.value;
  if (!detachments[nextDetachment] || detachments[nextDetachment].faction !== currentChapter) {
    detachmentSelectEl.value = currentDetachment;
    return;
  }
  if (currentRoster.some(item => item.enhancement) &&
      !window.confirm("Changing detachments will remove assigned enhancements. Continue?")) {
    detachmentSelectEl.value = currentDetachment;
    return;
  }
  currentDetachment = nextDetachment;
  currentRoster.forEach(item => { item.enhancement = null; });
  updateDetachmentInfo();
  renderRoster();
  renderConfigurator();
}

function showInlineError(message) {
  let errorEl = document.getElementById("rosterStatusMonitor");
  if (!errorEl) {
    errorEl = document.createElement("p");
    errorEl.id = "rosterStatusMonitor";
    errorEl.setAttribute("role", "alert");
    errorEl.style.cssText = "color:var(--danger);font-size:.8rem;margin:0 0 8px";
    rosterRequirementsEl.insertAdjacentElement("beforebegin", errorEl);
  }
  errorEl.textContent = message;
  errorEl.style.display = "block";
  clearTimeout(inlineErrorTimer);
  inlineErrorTimer = setTimeout(() => { errorEl.style.display = "none"; }, 4000);
}

function addToRoster(unit) {
  if (currentRoster.reduce((sum, item) => sum + item.points + getEnhancementPoints(item), 0) + unit.points > currentPointsLimit) {
    showInlineError("Adding " + unit.name + " would exceed the " + currentPointsLimit + " points limit.");
    return;
  }
  const duplicateCount = currentRoster.filter(item => item.unitId === unit.id).length;
  const maxAllowed = unit.isEpicHero ? 1 : unit.role === "Battleline" ? 6 : 3;
  if (duplicateCount >= maxAllowed) {
    showInlineError("You cannot include more than " + maxAllowed + " instances of " + unit.name + ".");
    return;
  }

  const newInstance = {
    instanceId: "inst_" + Date.now() + Math.floor(Math.random() * 1000),
    unitId: unit.id,
    name: unit.name,
    faction: unit.faction,
    role: unit.role,
    points: unit.points,
    selections: { weapons: unit.wargear.join(", ") },
    canBeWarlord: unit.role === "HQ" || unit.isEpicHero === true,
    canTakeEnhancement: unit.role === "HQ" && !unit.isEpicHero,
    isEpicHero: unit.isEpicHero === true,
    isWarlord: false
  };
  currentRoster.push(newInstance);
  selectedInstanceId = newInstance.instanceId;
  renderRoster();
  renderConfigurator();
}

function removeFromRoster(event, instanceId) {
  event.stopPropagation();
  currentRoster = currentRoster.filter(item => item.instanceId !== instanceId);
  if (selectedInstanceId === instanceId) selectedInstanceId = null;
  renderRoster();
  renderConfigurator();
}

function selectRosterItem(instanceId) {
  selectedInstanceId = instanceId;
  renderRoster();
  renderConfigurator();
}

function updateWarlord(instanceId, isWarlord) {
  const target = currentRoster.find(item => item.instanceId === instanceId);
  if (!target || !target.canBeWarlord) return;
  currentRoster.forEach(item => {
    item.isWarlord = item === target && isWarlord;
  });
  renderRoster();
  renderRelativeInfo(target);
}

function updateEnhancement(instanceId, enhancementName) {
  const item = currentRoster.find(rosterItem => rosterItem.instanceId === instanceId);
  if (!item || !item.canTakeEnhancement) return;
  const enhancement = detachments[currentDetachment].enhancements.find(option => option.name === enhancementName);
  if (!enhancementName) {
    item.enhancement = null;
  } else if (!enhancement) {
    showInlineError("That enhancement is not available for the selected detachment.");
    renderConfigurator();
    return;
  } else if (currentRoster.filter(rosterItem => rosterItem.enhancement).length >= 3 && !item.enhancement) {
    showInlineError("You can include a maximum of 3 enhancements in your army.");
    renderConfigurator();
    return;
  } else if (currentRoster.some(rosterItem => rosterItem !== item && rosterItem.enhancement?.name === enhancement.name)) {
    showInlineError("You cannot include the same enhancement more than once.");
    renderConfigurator();
    return;
  } else if (currentRoster.reduce((sum, rosterItem) => sum + rosterItem.points + getEnhancementPoints(rosterItem), 0) +
      enhancement.points - getEnhancementPoints(item) > currentPointsLimit) {
    showInlineError("Adding " + enhancement.name + " would exceed the " + currentPointsLimit + " points deployment limit.");
    renderConfigurator();
    return;
  } else {
    item.enhancement = { ...enhancement };
  }
  renderRoster();
  renderConfigurator();
}

function getEnhancementPoints(item) {
  return item.enhancement ? item.enhancement.points : 0;
}

function renderRoster() {
  rosterListEl.innerHTML = "";
  let totalPoints = 0;
  if (currentRoster.length === 0) {
    rosterListEl.innerHTML = '<p class="placeholder-text">Click units on the left panel to build your army roster.</p>';
  } else {
    currentRoster.forEach(item => {
      const enhancementPoints = getEnhancementPoints(item);
      const unitTotal = item.points + enhancementPoints;
      totalPoints += unitTotal;
      const card = document.createElement("div");
      card.className = "roster-item" + (item.instanceId === selectedInstanceId ? " selected" : "");
      card.addEventListener("click", () => selectRosterItem(item.instanceId));
      const name = document.createElement("h3");
      name.textContent = item.name;
      card.appendChild(name);
      if (item.isWarlord) {
        const badge = document.createElement("span");
        badge.className = "warlord-badge";
        badge.textContent = "WARLORD";
        card.appendChild(badge);
      }
      if (item.enhancement) {
        const summary = document.createElement("div");
        summary.className = "enhancement-summary";
        summary.textContent = item.enhancement.name + " (+" + enhancementPoints + " pts)";
        card.appendChild(summary);
      }
      const actions = document.createElement("div");
      actions.className = "actions";
      const cost = document.createElement("span");
      cost.style.cssText = "font-size:.8rem;font-weight:bold;align-self:center;color:var(--accent);margin-right:auto";
      cost.textContent = unitTotal + " pts";
      actions.appendChild(cost);
      if (item.canBeWarlord) {
        const label = document.createElement("label");
        label.className = "warlord-toggle";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "warlord-checkbox";
        checkbox.checked = item.isWarlord;
        checkbox.addEventListener("click", event => event.stopPropagation());
        checkbox.addEventListener("change", event => updateWarlord(item.instanceId, event.target.checked));
        label.append(checkbox, document.createTextNode(" Warlord"));
        actions.appendChild(label);
      }
      const removeButton = document.createElement("button");
      removeButton.className = "btn-danger remove-btn";
      removeButton.textContent = "Delete";
      removeButton.addEventListener("click", event => removeFromRoster(event, item.instanceId));
      actions.appendChild(removeButton);
      card.appendChild(actions);
      rosterListEl.appendChild(card);
    });
  }
  ptsTotalEl.textContent = totalPoints;
  ptsTotalEl.className = totalPoints > currentPointsLimit ? "points-alert" : "points-good";
  unitTotalEl.textContent = currentRoster.length;
  updateRosterRequirements(totalPoints);
}

function validateRoster(totalPoints = currentRoster.reduce((sum, item) => sum + item.points + getEnhancementPoints(item), 0)) {
  const errors = [];
  const warlordCount = currentRoster.filter(item => item.isWarlord && item.canBeWarlord).length;
  if (warlordCount !== 1) errors.push(warlordCount === 0 ? "Select an eligible unit as your Warlord." : "A roster must have exactly one Warlord.");
  if (totalPoints > currentPointsLimit) errors.push("Army total exceeds the " + currentPointsLimit + " point limit.");
  return errors;
}

function updateRosterRequirements(totalPoints) {
  const errors = validateRoster(totalPoints);
  rosterRequirementsEl.classList.toggle("has-errors", errors.length > 0);
  rosterRequirementsEl.innerHTML = "";
  if (!errors.length) {
    rosterRequirementsEl.textContent = "Requirements met: one Warlord and within the points limit.";
    return;
  }
  const heading = document.createElement("strong");
  heading.textContent = "Requirements to export:";
  const list = document.createElement("ul");
  errors.forEach(error => {
    const item = document.createElement("li");
    item.textContent = error;
    list.appendChild(item);
  });
  rosterRequirementsEl.append(heading, list);
}

function selectGameMode(limit) {
  if (limit === "custom") {
    customLimitControlsEl.hidden = false;
    document.querySelectorAll(".game-mode-btn").forEach(button => button.classList.toggle("active", button.dataset.limit === "custom"));
    customPointsLimitEl.focus();
    return;
  }
  currentPointsLimit = Number(limit);
  syncGameModeControls();
  updatePointsDisplay();
}

function applyCustomLimit() {
  const limit = Number(customPointsLimitEl.value);
  if (!Number.isSafeInteger(limit) || limit < 1) {
    showInlineError("Enter a whole-number points limit greater than zero.");
    customPointsLimitEl.focus();
    return;
  }
  currentPointsLimit = limit;
  syncGameModeControls();
  updatePointsDisplay();
}

function syncGameModeControls() {
  const isCustom = !["1000", "2000"].includes(String(currentPointsLimit));
  customLimitControlsEl.hidden = !isCustom;
  document.querySelectorAll(".game-mode-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.limit === (isCustom ? "custom" : String(currentPointsLimit)));
  });
  if (isCustom) customPointsLimitEl.value = String(currentPointsLimit);
}

function updatePointsDisplay() {
  pointsLimitEl.textContent = currentPointsLimit;
  renderRoster();
}

function renderRelativeInfo(item) {
  relativeInfoContentEl.innerHTML = "";
  if (!item) {
    addInfoText(relativeInfoContentEl, "p", "Select a unit to see its role, wargear, and rules notes.", "placeholder-text");
    return;
  }
  addInfoText(relativeInfoContentEl, "h3", item.name);
  addInfoText(relativeInfoContentEl, "p", "Faction: " + factions[item.faction].name + " | Role: " + item.role + " | Base cost: " + item.points + " pts.");
  addInfoText(relativeInfoContentEl, "p", unitInfo[item.unitId] || "Check the current unit datasheet for its special rules and exact weapon profiles.");
  const equipment = Object.entries(item.selections || {}).filter(([, value]) => value);
  if (equipment.length) {
    addInfoText(relativeInfoContentEl, "h3", "Wargear");
    const list = document.createElement("ul");
    equipment.forEach(([slot, value]) => {
      const row = document.createElement("li");
      row.textContent = slot.replace(/_/g, " ") + ": " + value;
      list.appendChild(row);
    });
    relativeInfoContentEl.appendChild(list);
  }
  if (item.enhancement) {
    addInfoText(relativeInfoContentEl, "h3", "Enhancement: " + item.enhancement.name);
    addInfoText(relativeInfoContentEl, "p", item.enhancement.points + " pts in " + detachments[currentDetachment].name + ". Check the current detachment rules for its exact ability.");
  }
}

function addInfoText(parent, tagName, text, className) {
  const element = document.createElement(tagName);
  element.textContent = text;
  if (className) element.className = className;
  parent.appendChild(element);
}

function renderConfigurator() {
  configuratorWorkspaceEl.innerHTML = "";
  const activeItem = currentRoster.find(item => item.instanceId === selectedInstanceId);
  if (!activeItem) {
    configuratorWorkspaceEl.innerHTML = '<p class="placeholder-text">Select an active unit to review its details and assign an enhancement.</p>';
    renderRelativeInfo(null);
    return;
  }
  const title = document.createElement("h3");
  title.textContent = "Modifying: " + activeItem.name;
  title.style.cssText = "font-size:1rem;margin-bottom:15px;color:var(--text)";
  configuratorWorkspaceEl.appendChild(title);
  renderRelativeInfo(activeItem);
  if (activeItem.canTakeEnhancement) {
    const field = document.createElement("div");
    field.className = "wargear-option";
    const label = document.createElement("label");
    label.textContent = "ENHANCEMENT (" + detachments[currentDetachment].name.toUpperCase() + ")";
    const select = document.createElement("select");
    select.setAttribute("aria-label", "Enhancement");
    select.add(new Option("No enhancement", ""));
    detachments[currentDetachment].enhancements.forEach(enhancement => {
      const option = new Option(enhancement.name + " (+" + enhancement.points + " pts)", enhancement.name);
      option.selected = activeItem.enhancement?.name === enhancement.name;
      select.add(option);
    });
    select.addEventListener("change", event => updateEnhancement(activeItem.instanceId, event.target.value));
    field.append(label, select);
    configuratorWorkspaceEl.appendChild(field);
  }
  const note = document.createElement("p");
  note.className = "placeholder-text";
  note.style.marginTop = "10px";
  note.textContent = "Wargear loadouts are shown for reference and cannot be changed here.";
  configuratorWorkspaceEl.appendChild(note);
}

function clearRoster() {
  currentRoster = [];
  selectedInstanceId = null;
  renderRoster();
  renderConfigurator();
}

function exportData(type) {
  if (!currentRoster.length) {
    window.alert("Roster is completely empty.");
    return;
  }
  const errors = validateRoster();
  if (errors.length) {
    window.alert("Cannot export this roster:\n\n" + errors.join("\n"));
    return;
  }
  let data;
  let mimeType;
  let filename;
  if (type === "json") {
    data = JSON.stringify({ faction: currentChapter, detachment: currentDetachment, pointsLimit: currentPointsLimit, units: currentRoster }, null, 2);
    mimeType = "application/json";
    filename = "xenos_roster.json";
  } else {
    let total = 0;
    const lines = ["=== XENOS ARMY ROSTER ===", "Faction: " + factions[currentChapter].name, "Detachment: " + detachments[currentDetachment].name, "Points limit: " + currentPointsLimit, ""];
    currentRoster.forEach((unit, index) => {
      const cost = unit.points + getEnhancementPoints(unit);
      total += cost;
      lines.push((index + 1) + ". " + unit.name + (unit.isWarlord ? " (Warlord)" : "") + " [" + cost + " pts]");
      if (unit.enhancement) lines.push("   - Enhancement: " + unit.enhancement.name + " (" + unit.enhancement.points + " pts)");
      Object.entries(unit.selections || {}).forEach(([slot, value]) => {
        if (value) lines.push("   - " + slot.replace(/_/g, " ") + ": " + value);
      });
      lines.push("");
    });
    lines.push("Total Army Cost: " + total + " points");
    data = lines.join("\n");
    mimeType = "text/plain";
    filename = "xenos_roster.txt";
  }
  const anchor = document.createElement("a");
  anchor.href = URL.createObjectURL(new Blob([data], { type: mimeType }));
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(anchor.href);
}

function importData(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const importedUnits = Array.isArray(parsed) ? parsed : parsed.units;
      if (!Array.isArray(importedUnits)) throw new Error("The roster file does not contain a units list.");
      const factionId = !Array.isArray(parsed) && factions[parsed.faction] ? parsed.faction : currentChapter;
      currentChapter = factionId;
      chapterSelectEl.value = currentChapter;
      applyFactionTheme(currentChapter);
      const importedDetachment = !Array.isArray(parsed) ? parsed.detachment : "";
      currentDetachment = detachments[importedDetachment]?.faction === currentChapter
        ? importedDetachment
        : getFactionDetachments(currentChapter)[0][0];
      populateDetachmentOptions();
      if (!Array.isArray(parsed) && Number.isSafeInteger(parsed.pointsLimit) && parsed.pointsLimit > 0) {
        currentPointsLimit = parsed.pointsLimit;
        syncGameModeControls();
      }
      let enhancementCount = 0;
      const assigned = new Set();
      currentRoster = importedUnits.flatMap(item => {
        const unit = masterUnits.find(option => option.id === item.unitId && option.faction === currentChapter);
        if (!unit) return [];
        const canBeWarlord = unit.role === "HQ" || unit.isEpicHero === true;
        const canTakeEnhancement = unit.role === "HQ" && !unit.isEpicHero;
        let enhancement = canTakeEnhancement && item.enhancement
          ? detachments[currentDetachment].enhancements.find(option => option.name === item.enhancement.name) || null
          : null;
        if (enhancement && (enhancementCount >= 3 || assigned.has(enhancement.name))) enhancement = null;
        if (enhancement) {
          enhancementCount++;
          assigned.add(enhancement.name);
        }
        return [{
          instanceId: typeof item.instanceId === "string" ? item.instanceId : "inst_" + Date.now() + Math.floor(Math.random() * 1000),
          unitId: unit.id,
          name: unit.name,
          faction: unit.faction,
          role: unit.role,
          points: unit.points,
          selections: { weapons: unit.wargear.join(", ") },
          canBeWarlord,
          canTakeEnhancement,
          isEpicHero: unit.isEpicHero === true,
          enhancement,
          isWarlord: canBeWarlord && item.isWarlord === true
        }];
      });
      const firstWarlord = currentRoster.findIndex(item => item.isWarlord);
      currentRoster.forEach((item, index) => { item.isWarlord = item.canBeWarlord && index === firstWarlord; });
      selectedInstanceId = currentRoster.length ? currentRoster[0].instanceId : null;
      populateDetachmentOptions();
      filterUnits();
      updatePointsDisplay();
      renderConfigurator();
    } catch (error) {
      window.alert("Unable to import roster: " + error.message);
    } finally {
      importFileEl.value = "";
    }
  };
  reader.onerror = () => window.alert("The roster file could not be read.");
  reader.readAsText(file);
}

document.addEventListener("DOMContentLoaded", init);
