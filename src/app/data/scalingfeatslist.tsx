import { Entry } from '../entry';
import React from 'react';

export const scalingFeats: Entry[] = [
  ...(["Master of Bullshit", "Gymnos Defence [Combat]", "Bloodlust [Combat]"].map((value, index) => {
    return {
      name: value,
      author: "Koumei",
      link: "http://tgdmb.com/viewtopic.php?p=141531#141531",
    }
  })),
  {
    name: "Steel Angel",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=126438#126438",
  },
  ...(["Fat Cat: [Combat]", "Lucky Cat: [Monstrous]"].map((value, index) => {
    return {
      name: value,
      author: "Koumei",
      link: "http://tgdmb.com/viewtopic.php?p=141532#141532",
    }
  })),
  {
    name: "Venomous Slayer",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141534#141534",
  },
  ...(["Heart in Chains: [Monster]", "Nice Tail [Monster]", "Life Drain [Monster]"].map((value, index) => {
    return {
      name: value,
      author: "Koumei",
      link: "http://tgdmb.com/viewtopic.php?p=141535#141535",
    }
  })),
  {
    name: "Massive Growth [Monster]",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141536#141536",
  },
  {
    name: "Child of the Endless Waters [Skill]",
    author: "Judging__Eagle",
    link: "http://tgdmb.com/viewtopic.php?p=38986#38986",
  },
  {
    name: "Lasher [Combat]",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=479366#479366",
  },
  ...[
    {
      name: 'Blind Fighting [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Blind_Fighting_(3.5e_Feat)'
    },
    {
      name: 'Blitz [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Blitz_(3.5e_Feat)'
    },
    {
      name: 'Combat Looting [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Combat_Looting_(3.5e_Feat)'
    },
    {
      name: 'Combat School [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Combat_School_(3.5e_Feat)'
    },
    {
      name: 'Command [Leadership]',
      wikiLink: 'https://dnd-wiki.org/wiki/Command_(3.5e_Feat)'
    },
    {
      name: 'Danger Sense [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Danger_Sense_(3.5e_Feat)'
    },
    {
      name: 'Elusive Target [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Elusive_Target_(3.5e_Feat)'
    },
    {
      name: 'Expert Tactician [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Expert_Tactician_(3.5e_Feat)'
    },
    {
      name: 'Ghost Hunter [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Ghost_Hunter_(3.5e_Feat)'
    },
    {
      name: 'Giant Slayer [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Giant_Slayer_(3.5e_Feat)'
    },
    {
      name: 'Great Fortitude [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Great_Fortitude_(3.5e_Feat)'
    },
    {
      name: 'Horde Breaker [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Horde_Breaker_(3.5e_Feat)'
    },
    {
      name: 'Hunter [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Hunter_(3.5e_Feat)'
    },
    {
      name: 'Insightful Strike [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Insightful_Strike_(3.5e_Feat)'
    },
    {
      name: 'Iron Will [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Iron_Will_(3.5e_Feat)'
    },
    {
      name: 'Juggernaut [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Juggernaut_(3.5e_Feat)'
    },
    {
      name: 'Lightning Reflexes [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Lightning_Reflexes_(3.5e_Feat)'
    },
    {
      name: 'Mage Slayer [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Mage_Slayer_(3.5e_Feat)'
    },
    {
      name: 'Mounted Combat [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Mounted_Combat_(3.5e_Feat)'
    },
    {
      name: 'Murderous Intent [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Murderous_Intent_(3.5e_Feat)'
    },
    {
      name: 'Phalanx Fighter [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Phalanx_Fighter_(3.5e_Feat)'
    },
    {
      name: 'Point Blank Shot [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Point_Blank_Shot_(3.5e_Feat)'
    },
    {
      name: 'Sniper [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Sniper_(3.5e_Feat)'
    },
    {
      name: 'Subtle Cut [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Subtle_Cut_(3.5e_Feat)'
    },
    {
      name: 'Two-Weapon Fighting [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Two-Weapon_Fighting_(3.5e_Feat)'
    },
    {
      name: 'Weapon Finesse [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Weapon_Finesse_(3.5e_Feat)'
    },
    {
      name: 'Whirlwind [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Whirlwind_(3.5e_Feat)'
    },
    {
      name: 'Zen Archery [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Zen_Archery_(3.5e_Feat)'
    },
  ].map((element) => {
    return {
      name: element.name,
      author: 'Frank and K',
      link: 'http://www.tgdmb.com/viewtopic.php?p=33298#33298',
      wikiLink: element.wikiLink
    }
  }),
  ...[
    'Vampire Hunter [Combat]',
    'Faerie Stabber [Combat]',
    'Demon Hunter [Combat]',
    'Plant Killer [Combat]',
    'Dragon Slayer [Combat]',
    'Killer of Change [Combat]',
    'Angel Slayer [Combat]',
    'Seafood Chef [Combat]',
  ].map((element) => {
    return {
      name: element,
      author: 'Koumei',
      link: 'http://www.tgdmb.com/viewtopic.php?p=177426#177426',
    }
  }),
  ...['Blood Knight [Death Knight]', 'Frozen Knight [Death Knight]'].map((element) => {
    return {
      name: element,
      author: 'Judging__Eagle',
      link: 'http://www.tgdmb.com/viewtopic.php?p=95186#95186',
    }
  }),
  ...['Knock Down [Combat]', 'Turnabout [Combat]'].map((element) => {
    return {
      name: element,
      author: 'ubernoob',
      link: 'http://tgdmb.com/viewtopic.php?p=55425#55425',
    }
  }),
  {
    name: 'Ki Shot [Skill: Concentration]',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?p=55441#55441',
  },
  {
    name: 'Psychic Weapon [general] ',
    author: 'NoDot',
    link: 'http://tgdmb.com/viewtopic.php?p=55451#55451',
  },
  {
    name: 'Mental Weaponry [Skill: Concentration]',
    author: 'Judging__Eagle',
    link: 'http://tgdmb.com/viewtopic.php?p=55470#55470',
  },
  {
    name: 'Mindblade [Combat]',
    author: 'AlphaNerd',
    link: 'http://www.tgdmb.com/viewtopic.php?p=39145#39145',
  },
  {
    name: 'Ki Bomb',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?p=55489#55489',
  },
  {
    name: 'Flurry of Blows',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?p=55501#55501',
  },
  {
    name: 'Brutal Grappler [Combat]',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?p=55566#55566',
  },
  {
    name: 'Deific Attention [Skill]',
    author: 'Koumei',
    link: 'http://tgdmb.com/viewtopic.php?p=55693#55693',
  },
  {
    name: 'Banter [General] ',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?p=55731#55731',
  },
  {
    name: 'Cerebral Assassin [Skill]',
    author: 'Koumei',
    link: 'http://tgdmb.com/viewtopic.php?p=55805#55805',
  },
  {
    name: 'Coward',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?p=55914#55914',
  },
  {
    name: 'Legendary Wrestler [Combat]',
    author: 'Koumei',
    link: 'http://tgdmb.com/viewtopic.php?p=57383#57383',
  },
  {
    name: 'Tough as Nails [Combat]',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?p=62119#62119',
  },
  ...['Deadly Aura [Combat]', 'Sky Scraper [Skill]'].map((element) => {
    return {
      name: element,
      author: 'Guyr Adamantine',
      link: 'http://tgdmb.com/viewtopic.php?p=62439#62439',
    }
  }),
  {
    name: 'Intelligent Fighter [Combat]',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?p=63307#63307',
  },
  {
    name: 'Lifecrafter [Necromantic, Skill]',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?p=63313#63313',
  },
  {
    name: 'Painmonger [Skill]',
    author: 'Judging__Eagle',
    link: 'http://tgdmb.com/viewtopic.php?p=63444#63444',
  },
  {
    name: 'Parry-Master [Combat]',
    author: 'SunTzuWarmaster',
    link: 'http://tgdmb.com/viewtopic.php?p=63819#63819',
  },
  {
    name: 'Combat Casting [Skill]',
    author: 'Manxome',
    link: 'http://tgdmb.com/viewtopic.php?p=64055#64055',
  },
  ...[
    'Spell Focus [Metamagic]', 'Bottomless Magic [Metamagic]', 'Timeless Magic [Metamagic]',
    'Stealth Magic [Metamagic]', 'Elemental Mastery [Skill]', 'Mountaineer [Skill]',
    'Super Jump [Skill]', 'Mystic [Skill]', 'Architect [Skill]', 'Delver [Skill]',
    'World Traveler [Skill]', 'Historian [Skill]', 'Local Color [Skill]',
    'Environmentalist [Skill]', 'Feral Spirit [Skill]', 'Regal [Skill]',
    'Undead Hunter [Skill]', 'Profound Presence [Skill]', 'Cosmologist [Skill]',
    'Scholar [Skill]', 'Multi-Weapon Fighting [Combat]', 'Jack of All Trades [General]',
    'Ghostly Visage [General]', 'Trickery [Combat]'
  ].map((element) => {
    return {
      name: element,
      author: 'Manxome',
      link: 'http://tgdmb.com/viewtopic.php?p=67582#67582',
    }
  }),
  {
    name: 'Spirit Pressure [Skill]',
    author: 'Guyr Adamantine',
    link: 'http://tgdmb.com/viewtopic.php?p=65494#65494',
  },
  {
    name: 'Sunderer',
    author: 'SunTzuWarmaster',
    link: 'http://tgdmb.com/viewtopic.php?p=65536#65536',
  },
  ...['Traceur [Skill]', 'Blind! [Skill]'].map((element) => {
    return {
      name: element,
      author: 'traverse',
      link: 'http://tgdmb.com/viewtopic.php?p=79756#79756',
    }
  }),
  ...['Walk of the Ninja [Skill, Balance]', 'Spring Crazy [Combat]'].map((element) => {
    return {
      name: element,
      author: 'Maxus',
      link: 'http://tgdmb.com/viewtopic.php?p=79820#79820',
    }
  }),
  ...['Alertness [Skill]', 'Blind Fighting [Combat]'].map((element) => {
    return {
      name: element,
      author: 'traverse',
      link: 'http://tgdmb.com/viewtopic.php?p=79837#79837',
    }
  }),
  {
    name: 'Shield Specialization',
    author: "Prak's player",
    link: 'http://tgdmb.com/viewtopic.php?p=90337#90337',
  },
  ...['Shieldbearer [Combat]', 'Light on Your Feet [Skill]'].map((element) => {
    return {
      name: element,
      author: 'TOZ',
      link: 'http://tgdmb.com/viewtopic.php?p=90341#90341',
    }
  }),
  {
    name: 'Weapon Focus [Combat]',
    author: 'TOZ',
    link: 'http://www.tgdmb.com/viewtopic.php?p=85915#85915',
  },
  {
    name: 'Shieldbearer [Combat]',
    author: 'koz',
    link: 'http://www.tgdmb.com/viewtopic.php?p=85932#85932',
  },
  {
    name: 'Pointy Stick Mastery [Combat]',
    author: 'Avoraciopoctules',
    link: 'http://tgdmb.com/viewtopic.php?p=129055#129055',
  },
  {
    name: 'Iajutsu [Combat]',
    author: 'Avoraciopoctules',
    link: 'http://tgdmb.com/viewtopic.php?p=129066#129066',
  },
  {
    name: 'Grimlock [Bloodline]',
    author: 'Avoraciopoctules',
    link: 'http://www.tgdmb.com/viewtopic.php?p=144261#144261',
  },
  {
    name: 'Erinyes Blooded',
    author: 'Koumei',
    link: 'http://tgdmb.com/viewtopic.php?p=40345#40345',
  },
  {
    name: 'Daddy was a Doppelganger!',
    author: 'Maxus',
    link: 'http://tgdmb.com/viewtopic.php?p=40347#40347',
  },
  ...['Kyton Blooded', 'Hamatula Blooded'].map((name) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/viewtopic.php?p=40354#40354',
    }
  }),
  ...['Vrock Blooded', 'Succubus Blooded'].map((name) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/viewtopic.php?p=40356#40356',
    }
  }),
  {
    name: 'Ghaele Blooded',
    author: 'Koumei',
    link: 'http://tgdmb.com/viewtopic.php?p=40357#40357',
  },
  ...[
    'Lovecraftian [Bloodline]', 'Voldoistic [Bloodline]', 'Hellpunk [Bloodline]',
    'Siren Fatale [Bloodline, Fey, Skill]', 'Trollish [Bloodline]', 'Mean Old Hermit [Bloodline, Skill]',
    'Woodbound [Bloodline, Fey, Skill]', 'Waterbound [Bloodline, Fey, Skill]', 'Mortalbound [Bloodline, Skill]',
    'Wildbound [Bloodline, Skill]', 'Rusting Blighter [Bloodline, Fey]', 'Shining Beauty [Bloodline, Fey]'
  ].map((name) => {
    return {
      name: name,
      author: 'JonSetanta',
      link: 'http://tgdmb.com/viewtopic.php?p=40378#40378',
    }
  }),
  {
    name: 'Blessing of Echidna',
    author: 'Avoraciopoctules',
    link: 'http://tgdmb.com/viewtopic.php?p=147762#147762',
  },
  ...['Babau Blooded', 'Balor Blooded', 'Bebilith Heritage',].map((name) => {
    return {
      name: name,
      author: 'Prak',
      link: 'http://tgdmb.com/viewtopic.php?p=447148#447148',
    }
  }),
  ...['Damned soul [Aura]', 'Evil Magnitude',].map((name) => {
    return {
      name: name,
      author: 'Prak',
      link: 'http://tgdmb.com/viewtopic.php?p=157035#157035',
    }
  }),
  {
    name: 'Evil McEvil',
    author: 'ubernoob',
    link: 'http://tgdmb.com/viewtopic.php?p=157747#157747',
  },
];