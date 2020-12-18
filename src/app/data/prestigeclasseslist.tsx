import { Entry, PrestigeClassEntry } from "../entry";
import React from "react";
import { koumeiMonsterPrcs } from "./koumeimonsterprcslist";

export const prestigeClasses: PrestigeClassEntry[] = [
  {
    name: 'Arch-Golem Execution Girlfriend',
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141531#141531",
    relatedLinks: [{ title: "Robot Girl", link: "http://tgdmb.com/viewtopic.php?t=50551" }],
    minimumStartingLevel: 6,
  },
  {
    name: "Daineko",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141532#141532",
    minimumStartingLevel: 6,
  },
  {
    name: "Web-Slinging Killer",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141532#141532",
    minimumStartingLevel: 6,
  },
  {
    name: "Anethema",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141534#141534",
    minimumStartingLevel: 8,
  },
  ...["Marilith/Lilend PrC", "Beauty Queen"].map((value, index) => {
    return {
      name: value,
      author: "Koumei",
      link: "http://tgdmb.com/viewtopic.php?p=141535#141535",
      minimumStartingLevel: 6,
    }
  }),
  {
    name: "Overgrown",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141534#141534",
    minimumStartingLevel: 6,
  },
  {
    name: "Irikara Heretic",
    author: "AndreiChekov",
    link: "http://tgdmb.com/viewtopic.php?p=439047#439047",
    minimumStartingLevel: 6,
  },
  ...['Fearless Rescuer', 'Scholar of Ancient Lore', 'Explorer of the Deep', 'Agent of Shadows', 'Great Healer'].map((value) => {
    return {
      name: value,
      author: 'Wiseman',
      link: 'http://tgdmb.com/viewtopic.php?p=405124#405124',
      minimumStartingLevel: 11,
    }
  }),
  {
    name: "Aquan Champion",
    author: "Judging__Eagle",
    link: "http://tgdmb.com/viewtopic.php?p=38986#38986",
    minimumStartingLevel: 6,
  },
  ...[
    {
      name: "Corpselight Whisperer",
      link: "https://dnd-wiki.org/wiki/Corpselight_Whisperer_%283.5e_Prestige_Class%29",
      minimumStartingLevel: 7,
    },
    {
      name: "Uttercold Assault Necromancer",
      link: "https://dnd-wiki.org/wiki/Uttercold_Assault_Necromancer_%283.5e_Prestige_Class%29",
      minimumStartingLevel: 7,
    },
    {
      name: "Boneblade Reaper",
      link: "https://dnd-wiki.org/wiki/Boneblade_Reaper_(3.5e_Prestige_Class)#Boneblade_Reaper",
      minimumStartingLevel: 7,
    },
    {
      name: "Skindancer",
      link: "https://dnd-wiki.org/wiki/Skindancer_%283.5e_Prestige_Class%29",
      minimumStartingLevel: 8,
    },
    {
      name: "Stranger with the Burning Eyes",
      link: "https://dnd-wiki.org/wiki/Stranger_with_the_Burning_Eyes_(3.5e_Prestige_Class)",
      minimumStartingLevel: 10,
    },
    {
      name: "Master of the Seven Necromantic Mysteries",
      link: "https://dnd-wiki.org/wiki/Master_of_the_Seven_Necromantic_Mysteries_(3.5e_Prestige_Class)",
      minimumStartingLevel: 10,
    },
    {
      name: "Death King",
      link: "https://dnd-wiki.org/wiki/Death_King_(3.5e_Prestige_Class)",
      minimumStartingLevel: 9,
    },
  ].map((element) => {
    return {
      name: element.name,
      author: "Frank and K",
      link: 'https://www.tgdmb.com/viewtopic.php?p=34249#34249',
      wikiLink: element.link,
      minimumStartingLevel: element.minimumStartingLevel,
    }
  }),
  ...[
    {
      name: "Widow Queen",
      link: "https://dnd-wiki.org/wiki/Widow_Queen_(3.5e_Prestige_Class)",
      minimumStartingLevel: 7,
    },
    {
      name: "Bone Rider",
      link: "https://dnd-wiki.org/wiki/Bone_Rider_(3.5e_Prestige_Class)",
      minimumStartingLevel: 5,
    },
    {
      name: "Thief of Souls",
      link: "https://dnd-wiki.org/wiki/Thief_of_Souls_(3.5e_Prestige_Class)",
      minimumStartingLevel: 7,
    },
    {
      name: "Lurker in the Swarm",
      link: "https://dnd-wiki.org/wiki/Lurker_in_the_Swarm_(3.5e_Prestige_Class)",
      minimumStartingLevel: 7,
    },
    {
      name: "Heartless Mage",
      link: "https://dnd-wiki.org/wiki/Heartless_Mage_(3.5e_Prestige_Class)",
      minimumStartingLevel: 10,
    },
    {
      name: "Speaker for the Dead",
      link: "https://dnd-wiki.org/wiki/Speaker_for_the_Dead_(3.5e_Prestige_Class)",
      minimumStartingLevel: 7,
    },
    {
      name: "Lord of the Damned",
      link: "https://dnd-wiki.org/wiki/Lord_of_the_Damned_(3.5e_Prestige_Class)",
      minimumStartingLevel: 7,
    },
  ].map((element) => {
    return {
      name: element.name,
      author: "Frank and K",
      link: 'https://www.tgdmb.com/viewtopic.php?p=34250#34250',
      wikiLink: element.link,
      minimumStartingLevel: element.minimumStartingLevel,
    }
  }),
  ...[9, 10].map((minimumStartingLevel) => {
    return {
      name: "Soul Merchant",
      author: "Frank and K",
      link: 'https://www.tgdmb.com/viewtopic.php?p=34250#34250',
      wikiLink: "https://dnd-wiki.org/wiki/Soul_Merchant_(3.5e_Prestige_Class)",
      minimumStartingLevel: minimumStartingLevel,
      note: <span><a href='https://dnd-wiki.org/wiki/Summoner_(3.5e_Class)'>Tome Summoners</a> can enter at 9</span>
    }
  }),
  {
    name: "Boneblade Reaper, Dungeonomicon Version",
    author: "Frank and K",
    link: "https://dnd-wiki.org/wiki/Boneblade_Reaper_(3.5e_Prestige_Class)#Boneblade_Reaper.2C_Dungeonomicon_Version",
    relatedLinks: [{ title: "Monk", link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }],
    minimumStartingLevel: 7,
  },
  ...[
    {
      name: 'Hellwalker',
      wikiLink: 'https://dnd-wiki.org/wiki/Hellwalker_(3.5e_Prestige_Class)',
      minimumStartingLevel: 6,
    },
    {
      name: 'Seer of the Tempest',
      wikiLink: 'https://dnd-wiki.org/wiki/Seer_of_the_Tempest_(3.5e_Prestige_Class)',
      minimumStartingLevel: 7,
    },
    {
      name: 'Barrister of the Nine',
      wikiLink: 'https://dnd-wiki.org/wiki/Barrister_of_the_Nine_(3.5e_Prestige_Class)',
      minimumStartingLevel: 10,
    },
    {
      name: 'Celestial Beacon',
      wikiLink: 'https://dnd-wiki.org/wiki/Celestial_Beacon_(3.5e_Prestige_Class)',
      minimumStartingLevel: 8,
    },
  ].map((element) => {
    return {
      name: element.name,
      author: 'Frank and K',
      link: 'http://www.tgdmb.com/viewtopic.php?p=28830#28830',
      wikiLink: element.wikiLink,
      minimumStartingLevel: element.minimumStartingLevel
    }
  }),
  {
    name: 'Boatman of Styx',
    author: 'Frank and K',
    link: 'https://dnd-wiki.org/wiki/Boatman_of_Styx_(3.5e_Prestige_Class)',
    minimumStartingLevel: 6,
  },
  ...[
    {
      name: 'Defiler of Temples',
      wikiLink: 'https://dnd-wiki.org/wiki/Defiler_of_Temples_(3.5e_Prestige_Class)',
      minimumStartingLevel: 7,
    },
    {
      name: 'Ninja of Gax',
      wikiLink: 'https://dnd-wiki.org/wiki/Ninja_of_Gax_(3.5e_Prestige_Class)',
      minimumStartingLevel: 7,
    },
    {
      name: 'Elothar Warrior of Bladereach',
      wikiLink: 'https://dnd-wiki.org/wiki/Elothar_Warrior_of_Bladereach_(3.5e_Prestige_Class)',
      minimumStartingLevel: 7,
    },
    {
      name: 'Dungeon Veteran',
      wikiLink: 'https://dnd-wiki.org/wiki/Dungeon_Veteran_(3.5e_Prestige_Class)',
      minimumStartingLevel: 7,
    },
    {
      name: 'Master of Snake Mountain',
      wikiLink: 'https://dnd-wiki.org/wiki/Master_of_Snake_Mountain_(3.5e_Prestige_Class)',
      minimumStartingLevel: 7,
    },
    {
      name: 'Seeker of the Lost Wizard Traditions',
      wikiLink: 'https://dnd-wiki.org/wiki/Seeker_of_the_Lost_Wizard_Traditions_(3.5e_Prestige_Class)',
      minimumStartingLevel: 7,
    },
  ].map((element) => {
    return {
      name: element.name,
      author: 'Frank and K',
      link: 'http://www.tgdmb.com/viewtopic.php?p=28550#28550',
      wikiLink: element.wikiLink,
      minimumStartingLevel: element.minimumStartingLevel
    }
  }),
  {
    name: 'Progenitor of the Gith',
    author: 'Frank and K',
    link: 'http://www.tgdmb.com/viewtopic.php?p=28553#28553',
    wikiLink: 'https://dnd-wiki.org/wiki/Progenitor_of_the_Gith_(3.5e_Prestige_Class)',
    minimumStartingLevel: 5,
  },
  {
    name: 'Monitor',
    author: 'Frank and K',
    link: 'http://www.tgdmb.com/viewtopic.php?p=28553#28553',
    wikiLink: 'https://dnd-wiki.org/wiki/Monitor_(3.5e_Prestige_Class)',
    minimumStartingLevel: 7,
  },
  ...[
    {
      name: 'Death Knight',
      wikiLink: 'https://dnd-wiki.org/wiki/Death_Knight_(3.5e_Prestige_Class)',
      minimumStartingLevel: 7,
    },
    {
      name: 'Demon Samurai',
      wikiLink: 'https://dnd-wiki.org/wiki/Demon_Samurai_(3.5e_Prestige_Class)',
      minimumStartingLevel: 6,
    },
    {
      name: 'Dragon Lancer',
      wikiLink: 'https://dnd-wiki.org/wiki/Dragon_Lancer_(3.5e_Prestige_Class)',
      minimumStartingLevel: 10,
    },
    {
      name: 'Legendary Strategist',
      wikiLink: 'https://dnd-wiki.org/wiki/Legendary_Strategist_(3.5e_Prestige_Class)',
      minimumStartingLevel: 7,
    },
  ].map((element) => {
    return {
      name: element.name,
      author: 'Frank and K',
      link: 'http://www.tgdmb.com/viewtopic.php?p=33297#33297',
      wikiLink: element.wikiLink,
      minimumStartingLevel: element.minimumStartingLevel,
    }
  }),
  ...[
    { name: 'Defender of the Woods [Tome of Trees]'},
    { name: 'Holy Crusader [Tome of Virtue]'},
    { name: 'Golem-Knight of Mechanus [Book of Gears]'},
    { name: 'Lunar Knight'},
    { name: 'Crusader of the Elemental Forces'},
  ].map(({ name}) => {
    return {
      name: `${name} (Knight PrC)`,
      author: 'Koumei',
      link: 'http://www.tgdmb.com/viewtopic.php?t=50018',
      relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }],
      minimumStartingLevel: 11,
    }
  }),
  ...[
    { name: 'Scaled Veteran of the Ages', link: 'http://www.tgdmb.com/viewtopic.php?p=109441#109441'},
    { name: 'Arachne', link: 'http://tgdmb.com/viewtopic.php?p=546397#546397'},
    { name: 'Knight of Pain', link: 'http://tgdmb.com/viewtopic.php?p=546397#546397'},
    { name: 'Colony Champion', link: 'http://tgdmb.com/viewtopic.php?p=546473#546473'},
  ].map(({ name, link }) => {
    return {
      name: `${name} (Knight PrC)`,
      author: 'Koumei',
      link,
      relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }],
      minimumStartingLevel: 11,
    }
  }),
  ...[
    { name: 'Arcane Archer', minimumStartingLevel: 7 },
    { name: 'Bladesinger', minimumStartingLevel: 3 },
    { name: 'The Seeker of the Misty Isle fix (same as Complete Divine, but has full casting)', minimumStartingLevel: 6 },
  ].map(({ name, minimumStartingLevel }) => {
    return {
      name: name,
      author: 'Iaimeki',
      link: 'http://www.tgdmb.com/viewtopic.php?p=50446#50446',
      minimumStartingLevel: minimumStartingLevel
    }
  }),
  ...[
    { name: 'Arcane Trickster', minimumStartingLevel: 3 },
    { name: 'Eldritch Knight', minimumStartingLevel: 3 },
    { name: 'Mystic Theurge', minimumStartingLevel: 3 },
    { name: 'Dragon Disciple', minimumStartingLevel: 6 },
    { name: 'Rage Mage', minimumStartingLevel: 3 },
    { name: 'Rage Mage (Take Two)', minimumStartingLevel: 12 },
  ].map(({ name, minimumStartingLevel }) => {
    return {
      name: name,
      author: 'Iaimeki',
      link: 'http://www.tgdmb.com/viewtopic.php?p=50378#50378',
      minimumStartingLevel: minimumStartingLevel
    }
  }),
  {
    name: 'Archanamach',
    author: 'Calibron',
    link: 'http://tgdmb.com/viewtopic.php?t=48580',
    minimumStartingLevel: 6,
  },
  {
    name: 'Beast Master',
    author: 'krusk',
    link: 'http://tgdmb.com/viewtopic.php?t=57177',
    minimumStartingLevel: 3,
  },
  {
    name: 'Berserker',
    author: 'CatharzGodfoot',
    link: 'http://www.tgdmb.com/viewtopic.php?p=170571#170571',
    minimumStartingLevel: 5,
  },
  ...[
    { name: 'Berzerker', minimumStartingLevel: 4 },
    { name: 'Bloodspiller', minimumStartingLevel: 9 },
  ].map(({ name, minimumStartingLevel }) => {
    return {
      name: name,
      author: 'Judging__Eagle',
      link: 'http://www.tgdmb.com/viewtopic.php?t=48751',
      minimumStartingLevel: minimumStartingLevel
    };
  }),
  {
    name: 'Berzerker-Magus',
    author: 'Judging__Eagle',
    link: 'http://tgdmb.com/viewtopic.php?t=39284',
    minimumStartingLevel: 8,
  },
  {
    name: 'Big Boss',
    author: 'DSMatticus',
    link: 'http://tgdmb.com/viewtopic.php?t=55892',
    minimumStartingLevel: 6,
  },
  {
    name: 'Final Boss',
    author: 'Dean',
    link: 'http://tgdmb.com/viewtopic.php?p=430870#430870',
    minimumStartingLevel: 4,
  },
  {
    name: 'Staged Boss',
    author: 'DSMatticus',
    link: 'http://tgdmb.com/viewtopic.php?p=431553#431553',
  },
  {
    name: 'Ogre Mage',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=55676#55676',
    minimumStartingLevel: 6,
  },
  {
    name: 'Meteor Ninja',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=55720#55720',
    minimumStartingLevel: 6,
  },
  {
    name: 'Big Nob',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=55779#55779',
    minimumStartingLevel: 7,
  },
  {
    name: 'Blade Fighter',
    author: 'Judging__Eagle',
    link: 'http://www.tgdmb.com/viewtopic.php?t=48678',
    minimumStartingLevel: 4,
  },
  {
    name: 'Scion of the Dying Embers',
    author: 'Wiseman',
    link: 'http://www.tgdmb.com/viewtopic.php?p=423212#423212',
    minimumStartingLevel: 6,
  },
  {
    name: 'Executioner',
    author: 'Wiseman',
    link: 'http://www.tgdmb.com/viewtopic.php?p=423212#423212',
    minimumStartingLevel: 6,
  },
  {
    name: 'Bone Acolyte of Chemosh',
    author: 'Wiseman',
    link: 'http://www.tgdmb.com/viewtopic.php?p=505060#505060',
    minimumStartingLevel: 6,
  },
  {
    name: 'Knight of the Crown',
    author: 'Wiseman',
    link: 'http://www.tgdmb.com/viewtopic.php?p=505062#505062',
    minimumStartingLevel: 6,
  },
  {
    name: 'Knight of the Rose',
    author: 'Wiseman',
    link: 'http://www.tgdmb.com/viewtopic.php?p=512349#512349',
    minimumStartingLevel: 6,
  },
  {
    name: 'Tribal Shaman ',
    author: 'Wiseman',
    link: 'http://www.tgdmb.com/viewtopic.php?p=505108#505108',
    minimumStartingLevel: 4,
  },
  {
    name: 'Knight of the Thorn',
    author: 'Wiseman',
    link: 'http://www.tgdmb.com/viewtopic.php?p=516858#516858',
    minimumStartingLevel: 6,
  },
  {
    name: "Fire Ogre Paragon",
    author: "Wiseman",
    link: "http://www.tgdmb.com/viewtopic.php?p=505818#505818",
    minimumStartingLevel: 4,
  },
  {
    name: "Storm Ogre Paragon",
    author: "Wiseman",
    link: "http://www.tgdmb.com/viewtopic.php?p=505820#505820",
    minimumStartingLevel: 4,
  },
  {
    name: 'Champion of Koganusan',
    author: 'LR',
    link: 'http://www.tgdmb.com/viewtopic.php?p=293389#293389',
    minimumStartingLevel: 6,
  },
  ...[
    { name: 'Enlightened Disciple of Wel Hung Temple, Long Wang Province', minimumStartingLevel: 6 },
    { name: 'Maelstrom of Fiery Ki', minimumStartingLevel: 8 },
  ].map(({ name, minimumStartingLevel }) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://www.tgdmb.com/viewtopic.php?p=104278#104278',
      relatedLinks: [{ title: 'Sohei', link: 'http://www.tgdmb.com/viewtopic.php?t=50005' }],
      minimumStartingLevel: minimumStartingLevel
    };
  }),
  {
    name: 'Arcane Strategist',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=293389#293389',
    minimumStartingLevel: 6,
  },
  {
    name: 'Ninja Pirate(Old)',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=104278#104278',
    minimumStartingLevel: 6,
    relatedLinks: [
      { title: 'Ninja (Old)', link: 'http://www.tgdmb.com/viewtopic.php?t=50367' },
      { title: 'Swashbuckler (Old)', link: 'http://www.tgdmb.com/viewtopic.php?t=50350' },
    ]
  },
  {
    name: 'Chaos Sorcerer',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=104278#104278',
    minimumStartingLevel: 6,
    relatedLinks: [
      { title: 'Untamed Psychic', link: 'http://tgdmb.com/viewtopic.php?t=50979' },
    ]
  },
  {
    name: 'Mecha Pilot',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=104278#104278',
    minimumStartingLevel: 5,
    relatedLinks: [
      { title: 'Gadgeteer', link: 'http://tgdmb.com/viewtopic.php?p=245446#245446' },
    ]
  },
  {
    name: 'Glitch Pokemaster',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=144506#144506',
    minimumStartingLevel: 8,
    relatedLinks: [
      {
        title: 'Pokémaster ',
        link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class'
      },
      {
        title: 'Missingno',
        link: 'https://dnd-wiki.org/wiki/Missingno._(3.5e_Monster)'
      }
    ]
  },
  {
    name: 'Door Opener',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=146758#146758',
    minimumStartingLevel: 4,
  },
  {
    name: 'Witch of the Sparkling Heart',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=151315#151315',
    minimumStartingLevel: 8,
  },
  {
    name: 'Vampire Count',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=151315#151315',
    minimumStartingLevel: 6,
    relatedLinks: [{ title: 'Vampire Template', link: 'https://dnd-wiki.org/wiki/Vampire,_Tome_(3.5e_Template)' }]
  },
  {
    name: 'Initiate of Zod',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=168795#168795',
    minimumStartingLevel: 6,
    relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
  },
  {
    name: 'Jesus',
    author: "Koumei's friend who has no den account",
    link: 'https://tgdmb.com/viewtopic.php?p=171313#171313',
    minimumStartingLevel: 6,
  },
  ...[
    { name: 'Arachne (Old)', minimumStartingLevel: 8, relatedLinks: [{title:'Updated Version', link: 'http://tgdmb.com/viewtopic.php?p=546397#546397'}] },
    { name: 'Ocular Adept', minimumStartingLevel: 6 },
  ].map(({ name, minimumStartingLevel, relatedLinks }) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/viewtopic.php?p=479366#479366',
      minimumStartingLevel: minimumStartingLevel,
      relatedLinks
    };
  }),
  ...[
    { name: 'Elemental Archon', minimumStartingLevel: 6 },
    { name: 'Illithid Mastermind', minimumStartingLevel: 11 },
  ].map(({ name, minimumStartingLevel }) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/viewtopic.php?p=479372#479372',
      minimumStartingLevel: minimumStartingLevel
    };
  }),
  ...[
    { name: 'Horned Harbringer', minimumStartingLevel: 6 },
    { name: 'Pale Master', minimumStartingLevel: 6 },
    { name: 'Master of Shrouds', minimumStartingLevel: 6 },
  ].map(({ name, minimumStartingLevel }) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/viewtopic.php?p=479378#479378',
      minimumStartingLevel: minimumStartingLevel
    };
  }),
  ...[
    { name: 'Entropic Adept', minimumStartingLevel: 8 },
    { name: 'Talontar Blightlord', minimumStartingLevel: 6 },
    { name: 'Telflammar Shadowlord', minimumStartingLevel: 8 },
  ].map(({ name, minimumStartingLevel }) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'https://www.tgdmb.com/viewtopic.php?p=479451#479451',
      minimumStartingLevel: minimumStartingLevel
    };
  }),
  {
    name: 'Wraith Hurler',
    author: 'Koumei',
    link: 'https://www.tgdmb.com/viewtopic.php?p=314046#314046',
    minimumStartingLevel: 6
  },
  {
    name: 'Demon Blade',
    author: 'Koumei',
    link: 'https://www.tgdmb.com/viewtopic.php?p=314260#314260',
    minimumStartingLevel: 6,
    relatedLinks: [{ title: 'Soldier', link: 'https://dnd-wiki.org/wiki/Soldier,_Tome_(3.5e_Class)' }]
  },
  {
    name: 'Death Knight',
    author: 'Judging__Eagle',
    link: 'http://www.tgdmb.com/viewtopic.php?t=49246',
    minimumStartingLevel: 6,
  },
  {
    name: 'Game Hunter',
    author: 'God_of_Awesome',
    link: 'http://www.tgdmb.com/viewtopic.php?p=148040#148040',
    minimumStartingLevel: 6,
  },
  {
    name: 'Death Poacher',
    author: 'God_of_Awesome',
    link: 'http://www.tgdmb.com/viewtopic.php?p=149177#149177',
    minimumStartingLevel: 2,
  },
  {
    name: 'Master of the Nine',
    author: 'krusk',
    link: 'http://tgdmb.com/viewtopic.php?p=524466#524466',
    minimumStartingLevel: 6,
  },
  {
    name: 'Distressing Damsel',
    author: 'Koumei',
    link: 'http://tgdmb.com/viewtopic.php?t=55029',
    minimumStartingLevel: 6,
  },
  {
    name: 'Driller',
    author: 'shirak',
    link: 'http://tgdmb.com/viewtopic.php?t=51078',
    minimumStartingLevel: 6,
  },
  {
    name: 'Drunken Master',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?p=60053#60053',
    wikiLink: 'https://dnd-wiki.org/wiki/Drunken_Master,_Tome_(3.5e_Prestige_Class)',
    minimumStartingLevel: 6,
  },
  {
    name: 'Soulknife',
    author: 'Maj',
    link: 'http://www.niftymessageboard.com/viewtopic.php?p=144343',
    minimumStartingLevel: 4,
  },
  ...[
    { name: 'Shadow Siphon', link: 'http://tgdmb.com/viewtopic.php?p=154018#154018' },
    { name: 'Ethereal Siphon', link: 'http://tgdmb.com/viewtopic.php?p=449214#449214' },
  ].map(({ name, link }) => {
    return {
      name: name,
      author: 'Kaelik',
      link: link,
      minimumStartingLevel: 11,
      relatedLinks: [
        { title: 'Elemental Siphon', link: 'http://tgdmb.com/viewtopic.php?p=154017#154017' },
      ]
    }
  }),
  {
    name: 'Endbringer',
    author: 'Dominicius',
    link: 'http://tgdmb.com/viewtopic.php?p=227152',
    minimumStartingLevel: 16,
  },
  {
    name: 'Endbringer',
    author: 'Prak',
    link: 'http://tgdmb.com/viewtopic.php?p=225917#225917',
    minimumStartingLevel: 6,
  },
  {
    name: 'Spectre Knight',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?p=450316#450316',
    minimumStartingLevel: 6
  },
  {
    name: 'Treasure Knight',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?p=450455#450455',
    minimumStartingLevel: 6
  },
  ...[
    { name: 'Gargantuan Creature', minimumStartingLevel: 6 },
    { name: 'Monster in the Closet', minimumStartingLevel: 4 },
    { name: 'Kiting Flyer', minimumStartingLevel: 6 },
    { name: 'Force of Nature', minimumStartingLevel: 6 },
  ].map(({ name, minimumStartingLevel }) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://www.tgdmb.com/viewtopic.php?p=105399#105399',
      minimumStartingLevel: minimumStartingLevel
    };
  }),
  {
    name: 'Gentle Monk',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?t=49163',
    minimumStartingLevel: 7
  },
  {
    name: 'Giant Frog (Knight PrC)',
    author: 'CatharzGodfoot',
    link: 'http://tgdmb.com/viewtopic.php?t=51001',
    relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }],
    minimumStartingLevel: 11,
  },
  {
    name: 'Hell Rider (Old)',
    author: 'Prak',
    link: 'http://tgdmb.com/viewtopic.php?t=39601',
    relatedLinks: [{ title: 'Revision', link: 'http://www.tgdmb.com/viewtopic.php?p=252006#252006' }],
    minimumStartingLevel: 6,
  },
  {
    name: 'Hell Rider Revised',
    author: 'Prak',
    link: 'http://www.tgdmb.com/viewtopic.php?p=252006#252006',
    minimumStartingLevel: 6,
  },
  {
    name: 'Hergian',
    author: 'virgil',
    link: 'http://tgdmb.com/viewtopic.php?t=48621',
    minimumStartingLevel: 5,
  },
  {
    name: 'Invisible Blade',
    author: 'Brobdingnagian',
    link: 'http://tgdmb.com/viewtopic.php?t=39224',
    minimumStartingLevel: 4,
  },
  {
    name: 'Invisible Blade',
    author: 'CatharzGodfoot',
    link: 'http://tgdmb.com/viewtopic.php?t=49221',
    minimumStartingLevel: 5,
  },
  {
    name: 'Master of Chains',
    author: 'Maxus',
    link: 'http://www.tgdmb.com/viewtopic.php?t=50184',
    minimumStartingLevel: 6,
  },
  {
    name: 'Master Thrower',
    author: 'Judging__Eagle',
    link: 'http://tgdmb.com/viewtopic.php?t=39304',
    minimumStartingLevel: 5,
  },
  ...koumeiMonsterPrcs,
  {
    name: 'Monster Rider',
    author: 'Judging__Eagle',
    link: 'http://tgdmb.com/viewtopic.php?t=49075',
    minimumStartingLevel: 6,
  },
  {
    name: 'Multi-class',
    author: 'RobbyPants',
    link: 'http://www.tgdmb.com/viewtopic.php?t=57197',
    minimumStartingLevel: 6,
  },
  {
    name: 'Mummy Lord',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?p=86959#86959',
    wikiLinks: [
      { title: 'Mummy Template', link: 'https://dnd-wiki.org/wiki/Mummy_(3.5e_Template)' },
      { title: 'Mummy Paragon', link: 'https://dnd-wiki.org/wiki/Mummy_Paragon_(3.5e_Racial_Paragon_Class)' },
      { title: 'Mummy Lord', link: 'https://dnd-wiki.org/wiki/Mummy_Lord_(3.5e_Prestige_Class)' },
    ],
    minimumStartingLevel: 11
  },
  {
    name: 'Ninja-Pirate',
    author: 'Koumei',
    link: 'http://tgdmb.com/viewtopic.php?p=232679#232679',
    minimumStartingLevel: 6,
    relatedLinks: [
      { title: 'Ninja', link: 'http://tgdmb.com/viewtopic.php?p=232386#232386' },
      { title: 'Swashbuckler', link: 'http://tgdmb.com/viewtopic.php?p=232624#232624' },
    ]
  },
  {
    name: 'Mystic Ninja of the Shadow Veil Sacred Path',
    author: 'Koumei',
    link: 'http://tgdmb.com/viewtopic.php?p=245106#245106',
    minimumStartingLevel: 7,
    relatedLinks: [
      { title: 'Ninja', link: 'http://tgdmb.com/viewtopic.php?p=232386#232386' },
    ]
  },
  {
    name: 'Mystic Theurge',
    author: 'Leress',
    link: 'http://www.tgdmb.com/viewtopic.php?p=53291#53291',
    minimumStartingLevel: 7,
  },
  {
    name: 'Naga Apostle (evil Rainbow Servant variant)',
    author: 'PhaedrusXY',
    link: 'http://tgdmb.com/viewtopic.php?t=50751',
    minimumStartingLevel: 6,
  },
  {
    name: 'Nightstalker',
    author: 'Wiseman',
    link: 'http://tgdmb.com/viewtopic.php?t=55828',
    minimumStartingLevel: 6,
  },
  {
    name: 'Void Witch',
    author: 'Koumei',
    link: 'http://tgdmb.com/viewtopic.php?p=131636#131636',
    relatedLinks: [{ title: 'Shadow Caster', link: 'http://tgdmb.com/viewtopic.php?p=127294#127294' }],
    minimumStartingLevel: 8,
  },
  {
    name: 'Perfect Minion',
    author: 'Koumei',
    link: 'http://tgdmb.com/viewtopic.php?p=316687#316687',
    minimumStartingLevel: 2,
    relatedLinks: [{ title: 'Lord of Minions', link: 'http://tgdmb.com/viewtopic.php?p=317384#317384' }]
  },
  {
    name: 'Performer',
    author: 'Judging__Eagle',
    link: 'http://tgdmb.com/viewtopic.php?t=50540',
    minimumStartingLevel: 6,
  },
  ...['Reaping Mauler', 'Pure Brawler'].map((name) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/viewtopic.php?t=51157',
      minimumStartingLevel: 6,
    }
  }),
  {
    name: 'Sanctum Mage',
    author: 'Judging__Eagle',
    link: 'http://tgdmb.com/viewtopic.php?t=39133',
    minimumStartingLevel: 11,
  },
  {
    name: 'Rune Knight',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=154716#154716',
    minimumStartingLevel: 6,
  },
  {
    name: 'Divine Comedian',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=162657#162657',
    minimumStartingLevel: 6,
    relatedLinks: [
      { title: 'Angel', link: 'http://www.tgdmb.com/viewtopic.php?p=154675#154675' },
      { title: 'Jester', link: 'https://dnd-wiki.org/wiki/Jester_(3.5e_Class)' },
    ]
  },
  {
    name: 'Straight-Edge Vegan',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=162657#162657',
    minimumStartingLevel: 6,
  },
  {
    name: 'Your Mum',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=162662#162662',
    minimumStartingLevel: 6,
  },
  {
    name: 'Hell Warden',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=163970#163970',
    minimumStartingLevel: 6,
  },
  {
    name: 'Rockstar',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=176146#176146',
    minimumStartingLevel: 6,
  },
  {
    name: 'Haunted Armour (Knight PrC)',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=179431#179431',
    minimumStartingLevel: 11,
    relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }]
  },
  {
    name: 'Bear Cavalry',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=179432#179432',
    minimumStartingLevel: 11,
    relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }]
  },
  {
    name: 'Ice Queen / Sizzler (Prestige Class)',
    author: 'Josh_Kablack',
    link: 'http://www.tgdmb.com/viewtopic.php?p=226807#226807',
    minimumStartingLevel: 6,
    relatedLinks: [
      { title: 'Empusa', link: 'http://www.tgdmb.com/viewtopic.php?p=154675#154675' },
      { title: 'Fire Mage', link: 'https://dnd-wiki.org/wiki/Fire_Mage_(3.5e_Class)' },
      { title: 'Revised Fire Mage', link: 'http://tgdmb.com/viewtopic.php?t=52437' },
      { title: 'Snowscaper', link: 'https://dnd-wiki.org/wiki/Snowscaper_(3.5e_Class)' },
    ]
  },
  {
    name: 'Prism Mage',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=227228#227228',
    minimumStartingLevel: 6,
    relatedLinks: [
      { title: 'Fire Mage', link: 'https://dnd-wiki.org/wiki/Fire_Mage_(3.5e_Class)' },
      { title: 'Revised Fire Mage', link: 'http://tgdmb.com/viewtopic.php?t=52437' },
      { title: 'Snowscaper', link: 'https://dnd-wiki.org/wiki/Snowscaper_(3.5e_Class)' },
      { title: 'Green Mage', link: 'https://dnd-wiki.org/wiki/Green_Mage_(3.5e_Class)' },
      { title: 'Revised Green Mage', link: 'http://tgdmb.com/viewtopic.php?t=52444' },
    ]
  },
  {
    name: 'Hero!',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=235956#235956',
    minimumStartingLevel: 8,
  },
  {
    name: 'Delinquent',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=235956#235956',
    minimumStartingLevel: 6,
  },
  {
    name: 'Aristocratic Demon',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=235956#235956',
    minimumStartingLevel: 8,
  },
  {
    name: 'Fallen',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=235956#235956',
    minimumStartingLevel: 6,
  },
  {
    name: 'Eternal Flame',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=236707#236707',
    minimumStartingLevel: 16,
    relatedLinks: [
      { title: 'Fire Mage', link: 'https://dnd-wiki.org/wiki/Fire_Mage_(3.5e_Class)' },
      { title: 'Revised Fire Mage', link: 'http://tgdmb.com/viewtopic.php?t=52437' },
    ]
  },
  {
    name: 'Ice King/Queen',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=236736#236736',
    minimumStartingLevel: 16,
    relatedLinks: [
      { title: 'Snowscaper', link: 'https://dnd-wiki.org/wiki/Snowscaper_(3.5e_Class)' },
    ]
  },
  {
    name: 'Cyclone Rider',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=236764#236764',
    minimumStartingLevel: 16,
    relatedLinks: [
      { title: 'Green Mage', link: 'https://dnd-wiki.org/wiki/Green_Mage_(3.5e_Class)' },
      { title: 'Revised Green Mage', link: 'http://tgdmb.com/viewtopic.php?t=52444' },
    ]
  },
  {
    name: 'Star Child',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=237179#237179',
    minimumStartingLevel: 16,
    relatedLinks: [{ title: 'Star Mage', link: 'http://www.tgdmb.com/viewtopic.php?p=154965#154965' },]
  },
  {
    name: 'Shadowdancer',
    author: 'Surgo',
    link: 'https://dnd-wiki.org/wiki/Shadowdancer,_Tome_(3.5e_Prestige_Class)',
    relatedLinks: [{ title: 'Thread', link: 'http://www.tgdmb.com/viewtopic.php?t=50008' }],
    minimumStartingLevel: 6,
  },
  {
    name: 'Son of Sparda',
    author: 'Manxome',
    link: 'http://tgdmb.com/viewtopic.php?t=48999',
    minimumStartingLevel: 6,
  },
  {
    name: 'Soul Bound',
    author: 'Cielingcat',
    link: 'http://tgdmb.com/viewtopic.php?t=50583',
    minimumStartingLevel: 6,
  },
  {
    name: 'Spellherd',
    author: 'Vebyast',
    link: 'http://tgdmb.com/viewtopic.php?t=51103',
    minimumStartingLevel: 8,
  },
  {
    name: 'Spirit Wave Disciple',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?t=49172',
    minimumStartingLevel: 6,
  },
  {
    name: 'War-arach/Spider-Sworn (3.5 Warlock)',
    author: 'Prak',
    link: 'http://tgdmb.com/viewtopic.php?t=51145',
    minimumStartingLevel: 6,
  },
  {
    name: 'War-arach/Spider-Sworn (Spherelock)',
    author: 'Prak',
    link: 'http://tgdmb.com/viewtopic.php?p=382776#382776',
    minimumStartingLevel: 6,
    relatedLinks: [
      { title: 'Warlock (Spherelock)', link: 'http://www.tgdmb.com/viewtopic.php?p=40229#40229' },
      { title: 'wiki', link: 'https://dnd-wiki.org/wiki/Warlock_(3.5e_Class)' }
    ]
  },
  {
    name: 'Cheater of Logistics',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=339159#339159',
    minimumStartingLevel: 6,
    relatedLinks: [{ title: 'Warmage', link: 'http://www.tgdmb.com/viewtopic.php?p=338594#338594' },]
  },
  {
    name: 'Wizard of High Sorcery',
    author: 'Neurosis',
    link: 'http://tgdmb.com/viewtopic.php?t=56588',
    minimumStartingLevel: 6,
  },
  ...[
    {
      name: 'Burst Trainer',
      link: 'http://tgdmb.com/viewtopic.php?p=280615#280615',
      minimumStartingLevel: 6,
    },
    {
      name: 'Pokeranger',
      link: 'http://tgdmb.com/viewtopic.php?p=282018#282018',
      minimumStartingLevel: 8,
    },
    {
      name: 'Move Tutor',
      link: 'http://tgdmb.com/viewtopic.php?p=284086#284086',
      minimumStartingLevel: 6,
    },
    {
      name: 'Team Rocket Executive',
      link: 'http://tgdmb.com/viewtopic.php?p=285695#285695',
      minimumStartingLevel: 8,
    },
  ].map(({ name, link, minimumStartingLevel }) => {
    return {
      name: name,
      author: 'Koumei',
      link: link,
      minimumStartingLevel: minimumStartingLevel,
      relatedLinks: [{ title: 'Pokémaster ', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }],
    }
  }),
  {
    name: 'Undying Mercenary',
    author: 'Prak',
    link: 'http://tgdmb.com/viewtopic.php?p=374108#374108',
    minimumStartingLevel: 5,
  },
  {
    name: 'Net of the Pirate Kings',
    author: 'Prak',
    link: 'http://www.tgdmb.com/viewtopic.php?p=169157#169157',
    minimumStartingLevel: 6,
  },
  {
    name: 'Blood Knight',
    author: 'Prak',
    link: 'http://www.tgdmb.com/viewtopic.php?p=211833#211833',
    minimumStartingLevel: 6,
  },
  {
    name: 'Green Queen',
    author: 'Prak',
    link: 'http://www.tgdmb.com/viewtopic.php?p=244767#244767',
    minimumStartingLevel: 6,
  },
  {
    name: 'Ponyweaver',
    author: 'Prak',
    link: 'http://www.tgdmb.com/viewtopic.php?p=252212#252212',
    minimumStartingLevel: 6,
  },
  {
    name: 'Hulking Berserker',
    author: 'Prak',
    link: 'http://www.tgdmb.com/viewtopic.php?p=273006#273006',
    minimumStartingLevel: 8,
  },
  {
    name: 'Soulknight',
    author: 'Prak',
    link: 'http://www.tgdmb.com/viewtopic.php?p=378275#378275',
    minimumStartingLevel: 6,
  },
  {
    name: 'Abyssal Lyricist',
    author: 'Prak',
    link: 'http://www.tgdmb.com/viewtopic.php?p=388624#388624',
    minimumStartingLevel: 6,
  },
  {
    name: 'Magical Warrior',
    author: 'Prak',
    link: 'http://tgdmb.com/viewtopic.php?p=383896#383896',
    minimumStartingLevel: 6,
  },
  {
    name: 'Negative Energy Infused',
    author: 'Prak',
    link: 'http://www.tgdmb.com/viewtopic.php?p=162302#162302',
    minimumStartingLevel: 8,
  },
  {
    name: 'Swarmshifter',
    author: 'Prak',
    link: 'http://www.tgdmb.com/viewtopic.php?p=162382#162382',
    minimumStartingLevel: 1,
  },
  {
    name: 'True Name Nemesis',
    author: 'Prak',
    link: 'http://www.tgdmb.com/viewtopic.php?p=357946#357946',
    minimumStartingLevel: 9,
  },
  {
    name: 'Final Boss',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/viewtopic.php?p=254951#254951',
    minimumStartingLevel: 8,
  },
  {
    name: 'Master Trapper',
    author: 'Dominicius',
    link: 'http://tgdmb.com/viewtopic.php?p=465970#465970',
    minimumStartingLevel: 6,
  },
  {
    name: 'Aes Shee Noble',
    author: 'JonSetanta',
    link: 'http://tgdmb.com/viewtopic.php?t=54773',
    minimumStartingLevel: 6,
  },
  {
    name: 'Beast Totem Warrior',
    author: 'Red_Rob',
    link: 'http://tgdmb.com/viewtopic.php?p=299846#299846',
    minimumStartingLevel: 11,
  },
  {
    name: 'Wood Shaper',
    author: 'complains',
    link: 'http://tgdmb.com/viewtopic.php?p=286076#286076',
    minimumStartingLevel: 6,
  },
  ...['Werewolf', 'Vampire', 'Cambion', 'Nephilim', 'Sprite'].map((name) => {
    return {
      name: name,
      author: 'JonSetanta',
      link: 'http://tgdmb.com/viewtopic.php?p=258529#258529',
      minimumStartingLevel: 2,
    }
  }),
  {
    name: 'Werewolf',
    author: 'CatharzGodfoot',
    link: 'http://tgdmb.com/viewtopic.php?p=258916#258916',
    minimumStartingLevel: 2,
  },
  {
    name: 'Lord of Minions',
    author: 'Koumei, SunTzuWarmaster',
    link: 'http://tgdmb.com/viewtopic.php?p=317384#317384',
    minimumStartingLevel: 6,
    relatedLinks: [{ title: 'Perfect Minion', link: 'http://tgdmb.com/viewtopic.php?p=316687#316687' }]
  },
  {
    name: 'Serpentine Transformist',
    author: 'Koumei',
    link: 'http://tgdmb.com/viewtopic.php?p=317854#317854',
    minimumStartingLevel: 1,
  },
  {
    name: 'Choker PrC: Strangler',
    author: 'downzorz',
    link: 'http://tgdmb.com/viewtopic.php?p=318371#318371',
    minimumStartingLevel: 4,
  },
  {
    name: 'Minotaur PrC: Dancing Bull',
    author: 'Koumei',
    link: 'http://tgdmb.com/viewtopic.php?p=324384#324384',
    minimumStartingLevel: 6,
  },
  {
    name: 'Gore Painter',
    author: 'Libertad',
    link: 'http://tgdmb.com/viewtopic.php?p=250888#250888',
    minimumStartingLevel: 6,
  },
  {
    name: 'Bane Knight (Knight PrC)',
    author: 'Midnight_v',
    link: 'http://tgdmb.com/viewtopic.php?p=236588#236588',
    relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }],
    minimumStartingLevel: 11,
    note: 'Can be entered without being a Knight'
  },
  ...[
    { name: 'Berserk', minimumStartingLevel: 6 },
    { name: 'Frenzied Berserker', minimumStartingLevel: 7 },
  ].map(({ name, minimumStartingLevel }) => {
    return {
      name: name,
      author: 'Prak',
      link: 'http://tgdmb.com/viewtopic.php?p=40277#40277',
      minimumStartingLevel
    };
  }),
  {
    name: 'Blighter',
    author: '...You Lost Me',
    link: 'http://tgdmb.com/viewtopic.php?p=205176#205176',
    minimumStartingLevel: 6,
  },
  ...[
    {
      name: 'Tempter',
      minimumStartingLevel: 6
    },
    {
      name: 'Dark Lawyer',
      minimumStartingLevel: 6
    },
    {
      name: 'Demonsentry',
      minimumStartingLevel: 6
    },
    {
      name: 'Dark Overlord',
      minimumStartingLevel: 11
    },
  ].map(({ name, minimumStartingLevel }) => {
    return {
      name,
      author: 'JonSetanta',
      link: 'http://tgdmb.com/viewtopic.php?p=176338#176338',
      minimumStartingLevel
    }
  }),
  {
    name: 'Knight of the Lily',
    author: 'Wiseman',
    link: 'http://tgdmb.com/viewtopic.php?p=545784#545784',
    minimumStartingLevel: 6,
  },
];