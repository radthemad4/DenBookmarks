import { Entry } from '../entry';
import React from 'react';

export const scalingFeats: Entry[] = [
  ...(["Master of Bullshit", "Gymnos Defence [Combat]", "Bloodlust [Combat]"].map((value, index) => {
    return {
      name: value,
      author: "Koumei",
      link: "http://tgdmb.com/phpBB3/viewtopic.php?p=141531#p141531",
    }
  })),
  {
    name: "Steel Angel",
    author: "Koumei",
    link: "http://tgdmb.com/phpBB3/viewtopic.php?p=126438#p126438",
  },
  ...(["Fat Cat: [Combat]", "Lucky Cat: [Monstrous]"].map((value, index) => {
    return {
      name: value,
      author: "Koumei",
      link: "http://tgdmb.com/phpBB3/viewtopic.php?p=141532#p141532",
    }
  })),
  {
    name: "Venomous Slayer",
    author: "Koumei",
    link: "http://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534",
  },
  ...(["Heart in Chains: [Monster]", "Nice Tail [Monster]", "Life Drain [Monster]"].map((value, index) => {
    return {
      name: value,
      author: "Koumei",
      link: "http://tgdmb.com/phpBB3/viewtopic.php?p=141535#p141535",
    }
  })),
  {
    name: "Massive Growth [Monster]",
    author: "Koumei",
    link: "http://tgdmb.com/phpBB3/viewtopic.php?p=141536#p141536",
  },
  {
    name: "Child of the Endless Waters [Skill]",
    author: "Judging__Eagle",
    link: "http://tgdmb.com/phpBB3/viewtopic.php?p=38986#p38986",
  },
  {
    name: "Lasher [Combat]",
    author: "Koumei",
    link: "http://tgdmb.com/phpBB3/viewtopic.php?p=479366#p479366",
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
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=33298#p33298',
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
  ].map((name) => {
    return {
      name: `${name} (in the 'Other Options' spoiler)`,
      author: 'Koumei',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=545730#p545730',
      relatedLinks: [{title: 'Older Link', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=177426#p177426'}]
    }
  }),
  ...['Blood Knight [Death Knight]', 'Frozen Knight [Death Knight]'].map((element) => {
    return {
      name: element,
      author: 'Judging__Eagle',
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=95186#p95186',
    }
  }),
  ...['Knock Down [Combat]', 'Turnabout [Combat]'].map((element) => {
    return {
      name: element,
      author: 'ubernoob',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=55425#p55425',
    }
  }),
  {
    name: 'Ki Shot [Skill: Concentration]',
    author: 'Maxus',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=55441#p55441',
  },
  {
    name: 'Psychic Weapon [general] ',
    author: 'NoDot',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=55451#p55451',
  },
  {
    name: 'Mental Weaponry [Skill: Concentration]',
    author: 'Judging__Eagle',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=55470#p55470',
  },
  {
    name: 'Mindblade [Combat]',
    author: 'AlphaNerd',
    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=39145#p39145',
  },
  {
    name: 'Ki Bomb',
    author: 'Maxus',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=55489#p55489',
  },
  {
    name: 'Flurry of Blows',
    author: 'Maxus',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=55501#p55501',
  },
  {
    name: 'Brutal Grappler [Combat]',
    author: 'Maxus',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=55566#p55566',
  },
  {
    name: 'Deific Attention [Skill]',
    author: 'Koumei',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=55693#p55693',
  },
  {
    name: 'Banter [General] ',
    author: 'Maxus',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=55731#p55731',
  },
  {
    name: 'Cerebral Assassin [Skill]',
    author: 'Koumei',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=55805#p55805',
  },
  {
    name: 'Coward',
    author: 'Maxus',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=55914#p55914',
  },
  ...['Legendary Wrestler', 'Master of Submissions'].map((element) => {
    return {
      name: element,
      author: 'Koumei',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=57383#p57383',
    }
  }),
  {
    name: 'Tough as Nails [Combat]',
    author: 'Maxus',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=62119#p62119',
  },
  ...['Deadly Aura [Combat]', 'Sky Scraper [Skill]'].map((element) => {
    return {
      name: element,
      author: 'Guyr Adamantine',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=62439#p62439',
    }
  }),
  {
    name: 'Intelligent Fighter [Combat]',
    author: 'Maxus',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=63307#p63307',
  },
  {
    name: 'Lifecrafter [Necromantic, Skill]',
    author: 'Maxus',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=63313#p63313',
  },
  {
    name: 'Craft Magic [Skill]',
    author: 'Maxus',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=63316#p63316',
  },
  {
    name: 'Painmonger [Skill]',
    author: 'Judging__Eagle',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=63444#p63444',
  },
  {
    name: 'Parry-Master [Combat]',
    author: 'SunTzuWarmaster',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=63819#p63819',
  },
  {
    name: 'Combat Casting [Skill]',
    author: 'Manxome',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=64055#p64055',
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
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=67582#p67582',
    }
  }),
  {
    name: 'Spirit Pressure [Skill]',
    author: 'Guyr Adamantine',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=65494#p65494',
  },
  {
    name: 'Sunderer',
    author: 'SunTzuWarmaster',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=65536#p65536',
  },
  ...['Traceur [Skill]', 'Blind! [Skill]'].map((element) => {
    return {
      name: element,
      author: 'traverse',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=79756#p79756',
    }
  }),
  ...['Walk of the Ninja [Skill, Balance]', 'Spring Crazy [Combat]'].map((element) => {
    return {
      name: element,
      author: 'Maxus',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=79820#p79820',
    }
  }),
  ...['Alertness [Skill]', 'Blind Fighting [Combat]'].map((element) => {
    return {
      name: element,
      author: 'traverse',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=79837#p79837',
    }
  }),
  {
    name: 'Shield Specialization',
    author: "Prak's player",
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=90337#p90337',
  },
  ...['Shieldbearer [Combat]', 'Light on Your Feet [Skill]'].map((element) => {
    return {
      name: element,
      author: 'TOZ',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=90341#p90341',
    }
  }),
  {
    name: 'Weapon Focus [Combat]',
    author: 'TOZ',
    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=85915#p85915',
  },
  {
    name: 'Shieldbearer [Combat]',
    author: 'koz',
    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=85932#p85932',
  },
  {
    name: 'Pointy Stick Mastery [Combat]',
    author: 'Avoraciopoctules',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=129055#p129055',
  },
  {
    name: 'Iajutsu [Combat]',
    author: 'Avoraciopoctules',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=129066#p129066',
  },
  {
    name: 'Grimlock [Bloodline]',
    author: 'Avoraciopoctules',
    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=144261#p144261',
  },
  {
    name: 'Erinyes Blooded',
    author: 'Koumei',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40345#p40345',
  },
  {
    name: 'Daddy was a Doppelganger!',
    author: 'Maxus',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40347#p40347',
  },
  ...['Kyton Blooded', 'Hamatula Blooded'].map((name) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40354#p40354',
    }
  }),
  ...['Vrock Blooded', 'Succubus Blooded'].map((name) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40356#p40356',
    }
  }),
  {
    name: 'Ghaele Blooded',
    author: 'Koumei',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40357#p40357',
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
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40378#p40378',
    }
  }),
  {
    name: 'Blessing of Echidna',
    author: 'Avoraciopoctules',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=147762#p147762',
  },
  ...['Babau Blooded', 'Balor Blooded', 'Bebilith Heritage',].map((name) => {
    return {
      name: name,
      author: 'Prak',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=447148#p447148',
    }
  }),
  ...['Damned soul [Aura]', 'Evil Magnitude',].map((name) => {
    return {
      name: name,
      author: 'Prak',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=157035#p157035',
    }
  }),
  {
    name: 'Evil McEvil',
    author: 'ubernoob',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=157747#p157747',
  },
  ...['Hellscarred Ninja [Jutsu]', 'Elemental Shinobi [Jutsu]',].map((name) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=232651#p232651',
    }
  }),
  ...['Ghost Fist Ninja [Jutsu]', 'Ninja of the Mystic Paths [Jutsu]',].map((name) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=245106#p245106',
    }
  }),
  ...['Two-Handed Defence [Combat]', 'Galloping Grappler: [Combat]'].map((name) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51157',
    }
  }),
  {
    name: 'Active Defense [combat]',
    author: 'NoDot',
    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=55617#p55617',
  },
  ...[
    'Blood-Soaked Charger (Combat)', 'Improved Natural Weapons (Combat)', 'Arial Assault',
    'Unorthodox Fighter (Combat)', 'Foe Wielder (Combat)'
  ].map((name) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40657#p40657',
    }
  }),
  ...['Evokation Focus', 'Conjuration Focus', 'Necromancy Focus'].map((name) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40658#p40658',
    }
  }),
  {
    name: "Nature's Warrior",
    author: 'Koumei',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40660#p40660',
  },
  {
    name: "Eleven Testicles (Monstrous)",
    author: 'Koumei',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40671#p40671',
  },
  {
    name: "Weapon Throwing [Combat]",
    author: 'ckafrica',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=48956#p48956',
  },
  {
    name: "Awesome Blow [Combat]",
    author: 'Wiseman',
    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=53453',
  },
  {
    name: "Awesome to Behold",
    author: 'Grek',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=129743#p129743',
  },
  {
    name: "Awesome to Behold",
    author: 'IGTN',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=129698#p129698',
  },
  ...[
    'Battle Mage', 'Master Healer', 'Master Summoner',
    'Master of Space', 'Overlord', 'Reaper',
    'Shapechanger', 'Catalyst', 'Teller of Lies',
    'Nobody', 'Dominion', 'Mind Reaver', 'Countermage',
    'Spell Defender'
  ].map((name) => {
    return {
      name: name,
      author: 'Dominicius',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=141814#p141814',
    }
  }),
  ...[
    'Omniscience', 'Battle Diviner', 'Battle Bond [Combat]',
    'Battle Jump [Combat]', 'Shockwave [Combat]',
  ].map((name) => {
    return {
      name: name,
      author: 'Dominicius',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=143329#p143329',
    }
  }),
  ...[
    'Psychokinesis!', 'Elementalist', 'Kinetic Manipulator',
    'Perfect Self', 'Anyform', 'D-Jumper', 'T-Runner',
    'Oracle', 'Dare Devil', 'Master of Shape', 'Mind Crafter',
    'Majesty', 'Mind Breaker'
  ].map((name) => {
    return {
      name: name,
      author: 'Dominicius',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=144722#p144722',
    }
  }),
  ...[
    'War Cry [Combat]', 'Defender [Combat]', 'Master of Knowledge [Skill]',
  ].map((name) => {
    return {
      name: name,
      author: 'Dominicius',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=147041#p147041',
    }
  }),
  {
    name: "Initiation [Combat]",
    author: 'Dominicius',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=232699#p232699',
  },
  {
    name: "Bladesong [Skill]",
    author: 'Calibron',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=59937#p59937',
  },
  {
    name: "Bladesong [Skill]",
    author: 'fbmf',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=59846#p59846',
  },
  {
    name: "Duelist [Combat]",
    author: 'CalibronXXX',
    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=35923#p35923',
  },
  {
    name: "Implacible Stride [Combat]",
    author: 'Prak',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=145674#p145674',
  },
  {
    name: "Brutal Grappling",
    author: 'Archmage',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=145681#p145681',
  },
  {
    name: "Mystic Dilettante [General]",
    author: 'Avoraciopoctules',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=105883#p105883',
  },
  {
    name: "Remedial Martial Training",
    author: 'Yugo',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=106997#p106997',
  },
  {
    name: "Mystic Dilettante [Knowledge]",
    author: 'TarkisFlux',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=107276#p107276',
  },
  {
    name: "Mystic Dilettante [Skill]",
    author: 'Akula',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=107359#p107359',
  },
  ...[
    'Pyromantic Dabbler', 'Casual Hexxer', 'Curative acolyte',
    'Magician',
  ].map((name) => {
    return {
      name: name,
      author: 'Avoraciopoctules',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=123574#p123574',
    }
  }),
  ...['Hopeless Necromantic', 'Magic Swordsman',].map((name) => {
    return {
      name: name,
      author: 'Avoraciopoctules',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=132073#p132073',
    }
  }),
  {
    name: "Mystic Dilettante [Skill: Spellcraft]",
    author: 'Rejakor',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=135088#p135088',
  },
  ...['Pixie Dance', 'Devil Pact',].map((name) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=107418#p107418',
    }
  }),
  ...[
    'Arcane Pilferer', 'Arcane Trapmaster', 'Runemage',
    'Holy Warrior', 'Unholy Warrior', 'Healer',
    'Medium', 'Greenbond', 'Beast Tamer', 'Deathmaster',
    'Fearmonger', 'Arcane Smith', 'Master of Comfort',
    'Somnomancer', 'Chatmage', 'Sage', 'Arcane Spy',
    'Umbramancer'
  ].map((name) => {
    return {
      name: name,
      author: 'JonSetanta',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=178050#p178050',
    }
  }),
  ...[
    'Transporter', 'Entomancer', 'Stonelord',
  ].map((name) => {
    return {
      name: name,
      author: 'JonSetanta',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=178065#p178065',
    }
  }),
  ...[
    'Fists of Steel', 'Forbidden Arts'
  ].map((name) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=316182#p316182',
    }
  }),
  {
    name: "Chaos Ninja",
    author: 'Koumei',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=316233#p316233',
  },
  {
    name: "Spells of the Spider Queen [Skill]",
    author: 'Koumei',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=368770#p368770',
  },
  ...[
    'Olympic Thrower [Combat]', 'Deflect Arrows [Combat]', 'Ironhide [Combat]', 'Wolfpack Tactics [Combat]'
  ].map((name) => {
    return {
      name: name,
      author: 'PhaedrusXY',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=133561#p133561',
    }
  }),
  {
    name: "Drop From Orbit [Skill]",
    author: 'Grek',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50897',
  },
  ...[
    'Rending Claws [Combat]', 'Farspawn Tentacles [Combat]',
  ].map((name) => {
    return {
      name: name,
      author: 'koz',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=73769#p73769',
    }
  }),
  ...[
    'Rending Claws [Combat]', 'Farspawn Tentacles [Combat]',
  ].map((name) => {
    return {
      name: name,
      author: 'Calibron',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=73822#p73822',
    }
  }),
  {
    name: 'Fey Goblin, Elf, Gnome, Troll, Merfolk [Fey]',
    author: 'JonSetanta',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=177791#p177791',
  },
  ...[
    'Subtle Magic [Metamagic]', 'Seer [Metamagic]', 'War Mage [Metamagic]',
    'Counterspell Mage [Metamagic]', 'Overcharged Mage [Metamagic]', 'Eternal Caster [Metamagic]',
    'Skill Focus: Climb [Skill]', 'Skill Focus: Jump [Skill]', 'Skill Focus: Balance [Skill]',
    'Skill Focus: Tumble [Skill]', 'Skill Focus: Appraise [Skill]', 'Skill Focus: Gather Information [Skill]',
    'Skill Focus: Craft (Basketweaving) [Skill]', 'Polyglot [Skill]',
  ].map((name) => {
    return {
      name: name,
      author: 'virgil',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=96821#p96821',
    }
  }),
  {
    name: 'Hurl Opponent',
    author: 'Koumei',
    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=111474#p111474',
  },
  {
    name: 'Lance of Heaven and Earth [Combat]',
    author: 'koz',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50658',
  },
  {
    name: 'Lance of Heaven and Earth [Combat]',
    author: 'Judging__Eagle',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=129752#p129752',
  },
  {
    name: 'Lasher [Combat]',
    author: 'fbmf',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=40816',
  },
  ...[
    'Lord of Death [Necromantic] [Skill] [Leadership]', 'Tyrant [Skill] [Leadership]',
    'Monster Rancher [Skill] [Leadership]', 'Army of Demons [Skill] [Fiend] [Celestial] [Leadership]',
    'Bureaucrat [Skill] [Leadership]',
  ].map((name) => {
    return {
      name: name,
      author: 'virgil',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=96821#p96821',
    }
  }),
  {
    name: 'Multi-Handed Fighting',
    author: 'CatharzGodfoot',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50816',
  },
  {
    name: 'Psychic Hunter [Monstrous]',
    author: 'Quantumboost',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=133239#p133239',
  },
  ...[
    {
      name: 'Armoured Combat [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Armoured_Combat_(3.5e_Feat)'
    },
    {
      name: 'Born of Thunder [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Born_of_Thunders_(3.5e_Feat)'
    },
    {
      name: 'Buster Weapon [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Buster_Weapon_(3.5e_Feat)'
    },
    {
      name: 'Child of the Heavens [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Child_of_the_Heavens_(3.5e_Feat)'
    },
    {
      name: 'Deflect Arrows [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Deflect_Arrows,_Red_Rob_Version_(3.5e_Feat)'
    },
    {
      name: 'Diehard [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Diehard_(3.5e_Feat)'
    },
    {
      name: 'Divine Agent [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Divine_Agent_(3.5e_Feat)'
    },
    {
      name: 'Draconic Heritage [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Draconic_Heritage_(3.5e_Feat)'
    },
    {
      name: 'Endurance of Stone [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Endurance_of_Stone_(3.5e_Feat)'
    },
    {
      name: 'Experimental Stock [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Experimental_Stock_(3.5e_Feat)'
    },
    {
      name: 'Frostwalker [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Frostwalker_(3.5e_Feat)'
    },
    {
      name: 'Ignan Soul [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Ignan_Soul_(3.5e_Feat)'
    },
    {
      name: 'Infernal Taint [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Infernal_Taint_(3.5e_Feat)'
    },
    {
      name: 'Opportunist [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Opportunist_(3.5e_Feat)'
    },
    {
      name: 'Radiant Champion [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Radiant_Champion_(3.5e_Feat)'
    },
    {
      name: 'Shield Specialization [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Shield_Specialization_(3.5e_Feat)'
    },
    {
      name: 'Skychild [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Skychild_(3.5e_Feat)'
    },
    {
      name: 'Slayer [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Slayer_(3.5e_Feat)'
    },
    {
      name: 'Weapon of Righteous Destruction [Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Weapon_of_Righteous_Destruction_(3.5e_Feat)'
    },
  ].map(({ name, wikiLink }) => {
    return {
      name: name,
      author: 'Red_Rob',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=315829#p315829',
      wikiLink: wikiLink
    }
  }),
  ...[
    {
      name: 'Alchemical Experimentation [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Alchemical_Experimentation_(3.5e_Feat)'
    },
    {
      name: 'Aura of Menace [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Aura_of_Menace_(3.5e_Feat)'
    },
    {
      name: 'Beastmaster [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Beastmaster,_Red_Rob_Version_(3.5e_Feat)'
    },
    {
      name: 'Brutal Strike [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Brutal_Strike_(3.5e_Feat)'
    },
    {
      name: 'Combat Casting [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Combat_Casting,_Red_Rob_Version_(3.5e_Feat)'
    },
    {
      name: 'Dashing Swordsman [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Dashing_Swordsman_(3.5e_Feat)'
    },
    {
      name: 'Disabling Strike [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Disabling_Strike_(3.5e_Feat)'
    },
    {
      name: 'Extraordinary Spell Aim [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Extraordinary_Spell_Aim_(3.5e_Feat)'
    },
    {
      name: 'Protected by Spirits [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Protected_by_Spirits_(3.5e_Feat)'
    },
    {
      name: 'Sidestep [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Sidestep,_Red_Rob_Version_(3.5e_Feat)'
    },
    {
      name: 'Vital Strike [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Vital_Strike_(3.5e_Feat)'
    },
  ].map(({ name, wikiLink }) => {
    return {
      name: name,
      author: 'Red_Rob',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=315831#p315831',
      wikiLink: wikiLink
    }
  }),
  ...[
    {
      name: 'Arcane Study [Spellcasting]',
      wikiLink: 'https://dnd-wiki.org/wiki/Arcane_Study_(3.5e_Feat)'
    },
    {
      name: 'Augment Summoning [Spellcasting]',
      wikiLink: 'https://dnd-wiki.org/wiki/Augment_Summoning_(3.5e_Feat)'
    },
    {
      name: 'Divine Might [Spellcasting]',
      wikiLink: 'https://dnd-wiki.org/wiki/Divine_Might_(3.5e_Feat)'
    },
    {
      name: 'Divine Protection [Spellcasting]',
      wikiLink: 'https://dnd-wiki.org/wiki/Divine_Protection_(3.5e_Feat)'
    },
    {
      name: 'Domain Focus [Spellcasting]',
      wikiLink: 'https://dnd-wiki.org/wiki/Domain_Focus_(3.5e_Feat)'
    },
    {
      name: 'Improved Familiar [Spellcasting]',
      wikiLink: 'https://dnd-wiki.org/wiki/Improved_Familiar_(3.5e_Feat)'
    },
    {
      name: 'Sacred Healer [Spellcasting]',
      wikiLink: 'https://dnd-wiki.org/wiki/Sacred_Healer_(3.5e_Feat)'
    },
    {
      name: 'Spell Focus [Spellcasting]',
      wikiLink: 'https://dnd-wiki.org/wiki/Spell_Focus_(3.5e_Feat)'
    },
  ].map(({ name, wikiLink }) => {
    return {
      name: name,
      author: 'Red_Rob',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=315832#p315832',
      wikiLink: wikiLink
    }
  }),
  ...[
    {
      name: 'Arcane Patterns [Innate]',
      wikiLink: 'https://dnd-wiki.org/wiki/Arcane_Patterns_(3.5e_Feat)'
    },
    {
      name: 'Elemental Focus [Innate]',
      wikiLink: 'https://dnd-wiki.org/wiki/Elemental_Focus_(3.5e_Feat)'
    },
    {
      name: 'Lingering Magic [Innate]',
      wikiLink: 'https://dnd-wiki.org/wiki/Lingering_Magic_(3.5e_Feat)'
    },
    {
      name: 'Practiced Power [Innate]',
      wikiLink: 'https://dnd-wiki.org/wiki/Practiced_Power_(3.5e_Feat)'
    },
    {
      name: 'Tainted Source [Innate]',
      wikiLink: 'https://dnd-wiki.org/wiki/Tainted_Source_(3.5e_Feat)'
    },
    {
      name: 'Toxic Magic [Innate]',
      wikiLink: 'https://dnd-wiki.org/wiki/Toxic_Magic_(3.5e_Feat)'
    },
  ].map(({ name, wikiLink }) => {
    return {
      name: name,
      author: 'Red_Rob',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=315833#p315833',
      wikiLink: wikiLink
    }
  }),
  ...['Military Technology [Gadget]', 'Mad Scientist [Gadget]', 'Clockwork Legion [Gadget]',].map((name) => {
    return {
      name: name,
      author: 'Red_Rob',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=315834#p315834',
      relatedLinks: [{ title: 'Gadgeteer', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=245446#p245446' }]
    }
  }),
  ...['Way of the Gun [Gunslinger]', 'Thousand Yard Stare [Gunslinger]', 'Executioner [Gunslinger]',].map((name) => {
    return {
      name: name,
      author: 'Red_Rob',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=315834#p315834',
      relatedLinks: [{ title: 'Gunslinger', link: 'http://heroesofalvena.wikidot.com/gunslinger' }]
    }
  }),
  ...[
    {
      name: 'Angelic Appearance [Celestial, Combat]',
      wikiLink: 'https://dnd-wiki.org/wiki/Angelic_Appearance_(3.5e_Feat)'
    },
    {
      name: 'Constricting Tail [Combat, Fiend, Monstrous]',
      wikiLink: 'https://dnd-wiki.org/wiki/Constricting_Tail_(3.5e_Feat)'
    },
    {
      name: 'Demonic Appearance [Combat, Fiend]',
      wikiLink: 'https://dnd-wiki.org/wiki/Demonic_Appearance_(3.5e_Feat)'
    },
    {
      name: 'Devil Magic [Fiend, Innate]',
      wikiLink: 'https://dnd-wiki.org/wiki/Devil_Magic_(3.5e_Feat)'
    },
    {
      name: 'Elemental Bodied [Combat, Elemental]',
      wikiLink: 'https://dnd-wiki.org/wiki/Elemental_Bodied_(3.5e_Feat)'
    },
    {
      name: 'Extra Arms [Combat, Fiend, Monstrous]',
      wikiLink: 'https://dnd-wiki.org/wiki/Extra_Arms,_Red_Rob_Version_(3.5e_Feat)'
    },
    {
      name: 'Frozen Heart [Combat, Elemental, Fiend]',
      wikiLink: 'https://dnd-wiki.org/wiki/Frozen_Heart_(3.5e_Feat)'
    },
    {
      name: 'Innate Invisibility [Elemental, Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Innate_Invisibility_(3.5e_Feat)'
    },
    {
      name: 'Spines of Fury [Combat, Fiend, Monstrous]',
      wikiLink: 'https://dnd-wiki.org/wiki/Spines_of_Fury,_Red_Rob_Version_(3.5e_Feat)'
    },
    {
      name: 'Unearthly Flames [Combat, Elemental, Fiend]',
      wikiLink: 'https://dnd-wiki.org/wiki/Unearthly_Flames_(3.5e_Feat)'
    },
  ].map(({ name, wikiLink }) => {
    return {
      name: name,
      author: 'Red_Rob',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=315836#p315836',
      wikiLink: wikiLink
    }
  }),
  {
    name: 'Unnatural Growth [Combat, Celestial, Elemental, Earth] [Fiend] [Monstrous]',
    author: 'Red_Rob',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=315836#p315836',
  },
  {
    name: 'Diamond Cutter [Combat]',
    author: 'OgreBattle',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=316680#p316680',
  },
  {
    name: 'Diamond Cutter [Combat]',
    author: 'Red_Rob',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=316726#p316726',
  },
  {
    name: 'Bloodlust [Combat]',
    author: 'Wiseman',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=447441#p447441',
  },
  ...[
    {
      name: "Acquirer's Eye [Skill]",
      wikiLink: 'https://dnd-wiki.org/wiki/Acquirer%27s_Eye_(3.5e_Feat)'
    },
    {
      name: 'Acrobatic [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Acrobatic_(3.5e_Feat)'
    },
    {
      name: 'Alertness [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Alertness_(3.5e_Feat)'
    },
    {
      name: 'Animal Affinity [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Animal_Affinity_(3.5e_Feat)'
    },
    {
      name: 'Battlefield Surgeon [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Battlefield_Surgeon_(3.5e_Feat)'
    },
    {
      name: 'Combat Casting [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Combat_Casting_(3.5e_Feat)'
    },
    {
      name: 'Con Artist [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Con_Artist_(3.5e_Feat)'
    },
    {
      name: 'Cryptographer [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Cryptographer_(3.5e_Feat)'
    },
    {
      name: 'Deft Fingers [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Deft_Fingers_(3.5e_Feat)'
    },
    {
      name: 'Detective [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Detective_(3.5e_Feat)'
    },
    {
      name: 'Dreadful Demeanor [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Dreadful_Demeanor_(3.5e_Feat)'
    },
    {
      name: 'Expert Counterfeiter [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Expert_Counterfeiter_(3.5e_Feat)'
    },
    {
      name: 'Ghost Step [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Ghost_Step_(3.5e_Feat)'
    },
    {
      name: 'Investigator [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Investigator_(3.5e_Feat)'
    },
    {
      name: 'Item Master [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Item_Master_(3.5e_Feat)'
    },
    {
      name: 'Leadership [Leadership, Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Leadership_(3.5e_Feat)'
    },
    {
      name: 'Leap of the Heavens [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Leap_of_the_Heavens_(3.5e_Feat)'
    },
    {
      name: 'Legendary Wrangler [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Legendary_Wrangler_(3.5e_Feat)'
    },
    {
      name: 'Magical Aptitude [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Magical_Aptitude_(3.5e_Feat)'
    },
    {
      name: 'Many-Faced [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Many-Faced_(3.5e_Feat)'
    },
    {
      name: 'Master of Terror [Leadership, Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Master_of_Terror_(3.5e_Feat)'
    },
    {
      name: 'Natural Empath [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Natural_Empath_(3.5e_Feat)'
    },
    {
      name: 'Persuasive [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Persuasive_(3.5e_Feat)'
    },
    {
      name: 'Professional Luddite [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Professional_Luddite_(3.5e_Feat)'
    },
    {
      name: 'Slippery Contortionist [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Slippery_Contortionist_(3.5e_Feat)'
    },
    {
      name: 'Steady Stance [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Steady_Stance_(3.5e_Feat)'
    },
    {
      name: 'Stealthy [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Stealthy_(3.5e_Feat)'
    },
    {
      name: 'Super Scaler [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Super_Scaler_(3.5e_Feat)'
    },
    {
      name: 'Swim Like a Fish [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Swim_Like_a_Fish_(3.5e_Feat)'
    },
    {
      name: 'Track [Skill]',
      wikiLink: 'https://dnd-wiki.org/wiki/Track_(3.5e_Feat)'
    },
  ].map(({ name, wikiLink }) => {
    return {
      name: name,
      author: 'Iaimeki',
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=29292#p29292',
      wikiLink: wikiLink
    }
  }),
  ...['Extraordinary Leaper [Skill]', 'Combat Jumping [Combat]'].map((name) => {
    return {
      name: name,
      author: 'CalibronXXX',
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=29337#p29337',
    }
  }),
  {
    name: 'Stellar Oracle[Skill]',
    author: 'Avoraciopoctules',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51366',
  },
  {
    name: 'Tornado Kick[Combat][Style]',
    author: 'Rejakor',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51034',
  },
  ...[
    'Two-Hander [Combat]', 'Martial Artist [Combat]', 'Trick Shooting [Combat]',
    'Crossbow Slinger [Combat]', 'Sword and Boarder [Combat]'
  ].map((name) => {
    return {
      name: name,
      author: 'Citation Needed',
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=35903#p35903',
    }
  }),
  ...[
    'Craft Pokeballs [Skill]', 'Call for Fortitude [Skill]', 'Rally [Skill]',
    'Words of Encouragement [Skill]',
  ].map((name) => {
    return {
      name: name,
      author: 'Koumei',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
      relatedLinks: [{ title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },]
    }
  }),
  {
    name: 'Fell Magic[Necromantic, Metamagic]',
    author: 'Prak',
    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=381959#p381959',
  },
  {
    name: 'Two Minds About Everything',
    author: 'Prak',
    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=126529#p126529',
  },
  ...[
    'Acquire Familiar (Magic or Combat)', 'Sacrificial Mastery (Skill: Knowledge [Religion])'
  ].map((name) => {
    return {
      name: name,
      author: 'Prak',
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=39529#p39529',
    }
  }),
  {
    name: 'Clockwork Armor User',
    author: 'Avoraciopoctules',
    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=97456#p97456',
  },
  {
    name: 'Snake Blooded(Combat)',
    author: 'Calibron',
    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=52024#p52024',
  },
  ...[
    'Battlecaster [ Metamagic]', 'Lord of The Thunders [Metamagic]', 'Master of Magic [Metamagic]',
    'Moilian Necromancer [Metamagic]', 'Pernicious Pyromancy [Metamagic]', 'Reckless Spellcasting [Metamagic]',
    'Tactical Mage [Metamagic]', 'Wand Mastery [Metamagic]', 'Supreme Aegis [Metamagic]',
    'Supreme Aegis [Metamagic]', 'Master Conjurer [Metamagic]', 'Great Oracle [Metamagic]',
    'Energised Evocation [Metamagic]', 'False Reality [Metamagic]',
  ].map((name) => {
    return {
      name: name,
      author: 'koz',
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=82499#p82499',
    }
  }),
  ...[
    'Forgemaster [Skill]', 'Stavecrafter [Metamagic]', 'Forge enchanted jewelry [Skill]',
    'Master of the Loom [Skill]', 'Brew Potions [Metamagic]', 'Scribe Scrolls [Metamagic]',
    'Craft Utility Item [Metamagic]',
  ].map((name) => {
    return {
      name: name,
      author: 'Red_Rob',
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=354303#p354303',
    }
  }),
  {
    name: 'Animal Companion [Skill]',
    author: 'AndreiChekov',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280238#p280238',
  },
  {
    name: 'Whip It Good [Combat]',
    author: 'Libertad',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=274648#p274648',
  },
  {
    name: 'Skilled Lasher [Skill]',
    author: 'Koumei',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=274720#p274720',
  },
  {
    name: 'Leap of the Heavens [Skill]',
    author: 'Libertad',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=270017#p270017',
  },
  ...[
    'Necromaster [Spellcasting]', 'Death Seeker [Spellcasting]', 'Blood Knight [Combat] ',
  ].map((name) => {
    return {
      name,
      author: 'Duke Flauros',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=272144#p272144',
    }
  }),
  {
    name: 'Blood Knight [Combat]',
    author: 'Dominicius',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=272967#p272967',
  },
  ...[
    'Detection', 'Finding', 'Handling', 'Healing', 'Hospitality', 'Making', 'Passage',
    'Scribing', 'Sentinel', 'Shadow', 'Storm', 'Warding'
  ].map((name) => {
    return {
      name: `Mark of ${name}`,
      author: 'Libertad',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=249119#p249119',
    }
  }),
  {
    name: 'Terrifying Anger[Rage]',
    author: 'Prak',
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40277#p40277',
  },
  {
    name: 'Raging Destroyer [Rage]',
    author: "Someone in Judging__Eagle's gaming group",
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40278#p40278',
  },
  ...[
    'Mind Blade [Psionic]', 'Overchannel [Spellcaster]', 'Mind over Body [Skill]',
  ].map((name) => {
    return {
      name,
      author: 'Count Arioch the 28th',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=227819#p227819',
    }
  }),
  {
    name: 'Autohypnosis [Skill]',
    author: "Grek",
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=223494#p223494',
  },
  {
    name: 'Inertial Armor [Skill]',
    author: "RobbyPants",
    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=187633#p187633',
  },
  ...[
    'Baatezu Legion [Fiend]', "Tanar'ri Horde [Fiend]", 'Yugoloth Guild [Fiend]',
  ].map((name) => {
    return {
      name,
      author: 'JonSetanta',
      link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=176338#p176338',
    }
  }),
];