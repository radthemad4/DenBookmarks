import { Entry } from '../entry';

export const races: Entry[] = [
  ...(["Baast", "Hathor"].map((value) => {
    return {
      name: value,
      author: "AndreiChekov",
      link: "http://www.tgdmb.com/viewtopic.php?p=479208#479208"
    }
  })),
  ...(["Centaur", "Drider", "Deep Gnome", "Satyr", "Triton", "Sahuagin", "Merfolk"].map((value) => {
    return {
      name: value,
      author: "Chamomile",
      link: "http://www.tgdmb.com/viewtopic.php?p=384559#384559"
    }
  })),
  {
    name: "Dragonling",
    author: "Kaelik",
    link: "http://www.tgdmb.com/viewtopic.php?p=141884#141884",
  },
  {
    name: "Dryad",
    author: "QuantumBoost",
    link: "http://tgdmb.com/viewtopic.php?t=51129",
    wikiLinks: [
      {
        title: 'race',
        link: 'https://dnd-wiki.org/wiki/Dryad_%283.5e_Race%29'
      },
      {
        title: 'paragon class',
        link: 'https://dnd-wiki.org/wiki/Dryad_Paragon_%283.5e_Racial_Paragon_Class%29'
      }
    ]
  },
  ...(["Earth Genasi", "Fire Genasi"].map((value) => {
    return {
      name: value,
      author: "Koumei",
      link: "http://tgdmb.com/viewtopic.php?p=435197#435197"
    }
  })),
  {
    name: "Giantkin",
    author: "IGTN",
    link: "http://www.tgdmb.com/viewtopic.php?t=50214",
    wikiLinks: [
      {
        title: 'race',
        link: 'https://dnd-wiki.org/wiki/Giantkin_%283.5e_Race%29'
      },
      {
        title: 'paragon class',
        link: 'https://dnd-wiki.org/wiki/Giantkin_Paragon_%283.5e_Racial_Paragon_Class%29'
      },
    ]
  },
  ...(["Gith", "Gnoll", "Bugbear", "Lizardfolk", "Merfolk (new)", "Satyr (new)", "Troglodyte"].map((value) => {
    return {
      name: value,
      author: "Chamomile",
      link: "http://www.tgdmb.com/viewtopic.php?p=385196#385196"
    }
  })),
  {
    name: "Half-Elf",
    author: "Chamomile",
    link: "http://www.tgdmb.com/viewtopic.php?p=384594#384594",
  },
  {
    name: "Half-Elf",
    author: "RadiantPhoenix",
    link: "http://www.tgdmb.com/viewtopic.php?p=384560#384560",
  },
  {
    name: "Irikara",
    author: "AndreiChekov",
    link: "http://tgdmb.com/viewtopic.php?t=56037",
    relatedLinks: [
      {
        title: "Irikara Heretic",
        link: "http://tgdmb.com/viewtopic.php?p=439047#439047"
      }
    ]
  },
  {
    name: "Lizardfolk",
    author: "Surgo",
    link: "https://dnd-wiki.org/wiki/Lizardfolk_Variant_%283.5e_Race%29",
    relatedLinks: [
      {
        title: "Lizardfolk Paragon",
        link: "https://dnd-wiki.org/wiki/Lizardfolk_Paragon_%283.5e_Racial_Paragon_Class%29"
      },
      {
        title: 'Thread',
        link: 'http://tgdmb.com/viewtopic.php?t=50006'
      }
    ]
  },
  {
    name: "Ogre",
    author: "ZER0",
    link: "http://www.tgdmb.com/viewtopic.php?p=75753#75753",
  },
  {
    name: "Robot Girl",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?t=50551",
    relatedLinks: [
      ...(['Some Magic Items, Arch-Golem Execution Girlfriend (PrC)'].map((value) => {
        return {
          title: value,
          link: 'http://tgdmb.com/viewtopic.php?p=141531#141531'
        }
      }))
    ]
  },
  ...(["Aasimar", "Drow", "Dwarf", "Elf", "Feytouched", "Gnome", "Half-Elf", "Halfling",
    "Half-orc", "Hobgoblin", "Human", "Ironling", "Kappa", "Kobold", "Lizardfolk", "Orc", "Ratling", "Tengu", "Tiefling",].map((value) => {
      return {
        name: value,
        author: "Lokathor",
        link: "http://www.tgdmb.com/viewtopic.php?t=56350"
      }
    })),
  {
    name: "Githyanki/Githzerai",
    author: "Quantumboost",
    link: "http://tgdmb.com/viewtopic.php?p=132973",
    wikiLink: "https://dnd-wiki.org/wiki/Githyanki/Githzerai_%283.5e_Race%29",
    relatedLinks: [
      { title: 'Githyanki Paragon', link: 'https://dnd-wiki.org/wiki/Githyanki_Paragon_%283.5e_Racial_Paragon_Class%29' },
      { title: 'Githzerai Paragon', link: 'http://tgdmb.com/viewtopic.php?p=133215#133215' },
    ]
  },
  {
    name: "Neko-oni",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141532#141532",
  },
  {
    name: "Aranea",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141532#141532",
  },
  {
    name: "Yuan-ti Halfblood",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141534#141534",
  },
  {
    name: "Empusa",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141534#141534",
  },
  {
    name: "VaxtC",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141534#141534",
  },
  {
    name: "Deku",
    author: "Lokathor",
    link: "https://docs.google.com/document/d/1CKMbTQCiAs6Kr1Bf4hf0KuwZItnsc1dnC4HYy1BQOuE/edit#heading=h.bjefbgcuah9x",
  },
  {
    name: "Goron",
    author: "Lokathor",
    link: "https://docs.google.com/document/d/1CKMbTQCiAs6Kr1Bf4hf0KuwZItnsc1dnC4HYy1BQOuE/edit#heading=h.mo9yjfm61iaj",
  },
  {
    name: "Zora",
    author: "Lokathor",
    link: "https://docs.google.com/document/d/1CKMbTQCiAs6Kr1Bf4hf0KuwZItnsc1dnC4HYy1BQOuE/edit#heading=h.1sn4vq3cbbjv",
  },
  {
    name: "Rito",
    author: "Lokathor",
    link: "https://docs.google.com/document/d/1CKMbTQCiAs6Kr1Bf4hf0KuwZItnsc1dnC4HYy1BQOuE/edit#heading=h.cl8l6m3slmoq",
  },
  {
    name: "Korok",
    author: "Lokathor",
    link: "https://docs.google.com/document/d/1CKMbTQCiAs6Kr1Bf4hf0KuwZItnsc1dnC4HYy1BQOuE/edit#heading=h.imr6jbj2y4k",
  },
  {
    name: "Bokoblin",
    author: "Lokathor",
    link: "https://docs.google.com/document/d/1CKMbTQCiAs6Kr1Bf4hf0KuwZItnsc1dnC4HYy1BQOuE/edit#heading=h.pgt71fsbw1hc",
  },
  {
    name: "Moblin",
    author: "Lokathor",
    link: "https://docs.google.com/document/d/1CKMbTQCiAs6Kr1Bf4hf0KuwZItnsc1dnC4HYy1BQOuE/edit#heading=h.biaqhcmsivam",
  },
  {
    name: "Lizal",
    author: "Lokathor",
    link: "https://docs.google.com/document/d/1CKMbTQCiAs6Kr1Bf4hf0KuwZItnsc1dnC4HYy1BQOuE/edit#heading=h.amp2mqajxbx",
  },
  {
    name: "True Dragon",
    author: "Hicks",
    link: "http://tgdmb.com/viewtopic.php?t=50217",
  },
  {
    name: "Volodni",
    author: "PhaedrusXY",
    link: "http://tgdmb.com/viewtopic.php?p=134347#134347",
  },
  ...(["Aasimar", "Drow", "Dwarf", "Elf", "Gnoll", "Gnome", "Goblin", "Half-elf", "Halfling", "Human",
    "Iron Born", "Kobold", "Minotaur", "Sprite"].map((value) => {
      return {
        name: value,
        author: "Sigil",
        link: "https://drive.google.com/file/d/16_wSUELEwfcguLiGrbcu70YIHKw-DEex/view"
      }
    })),
  ...([
    {
      name: "Aasimar",
      link: "https://dnd-wiki.org/wiki/Aasimar_%283.5e_Race%29",
    },
    {
      name: "Drow",
      link: "https://dnd-wiki.org/wiki/Drow_%283.5e_Race%29",
    },
    {
      name: "Goblin",
      link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Goblin",
    },
    {
      name: "Hobgoblin",
      link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Hobgoblin",
    },
    {
      name: "Orc",
      link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Orc",
    },
    {
      name: "Half-Orc",
      link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Half-Orc",
    },
    {
      name: "Tiefling",
      link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Tiefling",
    },
    {
      name: "Minotaur (Minimum Level 5)",
      link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Method_1:_The_Easy_Way",
    },
    {
      name: "Succubus (Minimum Level 8)",
      link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Method_1:_The_Easy_Way",
    },
    {
      name: "Gnoll (Minimum Level 2)",
      link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Gnoll_.28Minimum_Level_2.29",
    },
    {
      name: "Bugbear (Minimum Level 3)",
      link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Bugbear_.28Minimum_Level_3.29",
    },
    {
      name: "Ogre (Minimum Level 4)",
      link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Ogre_.28Minimum_Level_4.29",
    },
    {
      name: "Frost Giant (Minimum Level 10)",
      link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Frost_Giant_.28Minimum_Level_10.29",
    },
  ].map((value) => {
    return {
      name: value.name,
      author: "Frank and K",
      link: "http://www.tgdmb.com/viewtopic.php?p=33296#33296",
      wikiLink: value.link
    }
  })),
  ...([
    "Lucario", "Pikachu", "Gardevoir", "Machamp", "Charizard", "Garchomp", "Zoroark",
    "Ninetales", "Diancie", "Blastoise", "Alakazam", "Mawile", "Delphox", "Sceptile",
    "Lycanroc", "Vespiquen"
  ].map((value) => {
    return {
      name: value,
      author: "Wiseman",
      link: "http://tgdmb.com/viewtopic.php?p=405100#405100"
    }
  })),
  ...(["Floatzel", "Delibird", "Furret", "Golett/Golurk"].map((value) => {
    return {
      name: value,
      author: "FeyMagician",
      link: "http://tgdmb.com/viewtopic.php?p=527470#527470"
    }
  })),
  {
    name: "Troll (Discworld)",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141343#141343",
  },
  ...([
    'Orc', 'Nekomata', 'Empusa', 'Alraune',
    'Mothman', 'Marionette', 'Ghost', 'Vampire',
    'Angel', 'Jack'
  ].map((name) => {
    return {
      name: `${name} (Disgaea)`,
      author: "Koumei",
      link: "http://www.tgdmb.com/viewtopic.php?p=154675#154675"
    }
  })),
  {
    name: 'Prinny (Disgaea)',
    link: 'http://www.tgdmb.com/viewtopic.php?p=154324#154324',
    author: 'Koumei'
  },
  {
    name: 'Hoplite',
    link: 'http://tgdmb.com/viewtopic.php?p=136761#136761',
    author: 'Maxus'
  },
  ...[
    { name: 'Gria', link: 'http://www.tgdmb.com/viewtopic.php?p=457540#457540' },
    { name: 'Matoran', link: 'http://www.tgdmb.com/viewtopic.php?p=468716#468716' },
    { name: 'Witch', link: 'http://www.tgdmb.com/viewtopic.php?p=424325#424325' },
    { name: 'Zenythri', link: 'http://tgdmb.com/viewtopic.php?p=413827#413827' },
    { name: 'Kappa', link: 'http://tgdmb.com/viewtopic.php?p=489536#489536' },
    { name: 'Merfolk', link: 'http://www.tgdmb.com/viewtopic.php?p=465680#465680' },
  ].map(({ name, link }) => {
    return {
      name: name,
      link: link,
      author: 'Wiseman'
    }
  }),
  {
    name: 'Were-Espeon',
    link: 'http://tgdmb.com/viewtopic.php?p=62582#62582',
    author: 'Koumei',
    relatedLinks: [
      { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
    ]
  },
  {
    name: 'Were-Sneasel',
    link: 'http://tgdmb.com/viewtopic.php?p=62592#62592',
    author: 'Koumei',
    relatedLinks: [
      { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
    ]
  },
  {
    name: 'Were-Umbreon',
    link: 'http://tgdmb.com/viewtopic.php?p=62633#62633',
    author: 'Koumei',
    relatedLinks: [
      { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
    ]
  },
  {
    name: 'Were-Metang',
    link: 'http://tgdmb.com/viewtopic.php?p=62728#62728',
    author: 'Koumei',
    relatedLinks: [
      { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
    ]
  },
  {
    name: 'Castlewatch Gargoyles',
    link: 'http://www.tgdmb.com/viewtopic.php?p=169292#169292',
    author: 'Prak',
  },
  {
    name: 'Apiar',
    link: 'http://www.tgdmb.com/viewtopic.php?p=311987#311987',
    author: 'Prak',
  },
  {
    name: 'Nosgothian Vampire, Fledgling',
    link: 'http://www.tgdmb.com/viewtopic.php?p=140281#140281',
    author: 'Prak',
    relatedLinks: [{ title: 'Adult', link: 'http://www.tgdmb.com/viewtopic.php?p=140612#140612' }]
  },
  {
    name: 'Atlantean',
    link: 'http://www.tgdmb.com/viewtopic.php?p=441595#441595',
    author: 'Prak',
  },
  {
    name: 'Constructoid',
    link: 'http://www.tgdmb.com/viewtopic.php?p=441609#441609',
    author: 'Prak',
  },
  {
    name: 'Igor',
    link: 'http://www.tgdmb.com/viewtopic.php?p=126414#126414',
    author: 'Prak',
  },
  {
    name: 'Nac Mac Feegle (Pictsies)',
    link: 'http://www.tgdmb.com/viewtopic.php?p=126429#126429',
    author: 'Prak',
  },
  {
    name: 'Troll (Discworld)',
    link: 'http://www.tgdmb.com/viewtopic.php?p=460460#460460',
    author: 'Prak',
  },
  ...(["Kappa", "Kitsune", "Nekomata", "Tanuki", 'Tengu', 'Usagi', 'Yuki-Onna'].map((value) => {
    return {
      name: value,
      author: "Prak",
      link: "http://www.tgdmb.com/viewtopic.php?p=155933#155933"
    }
  })),
  ...(["Xuan", "Wu", "Yak Folk", "Naga", 'Balu',].map((value) => {
    return {
      name: value,
      author: "Prak",
      link: "http://www.tgdmb.com/viewtopic.php?p=155935#155935"
    }
  })),
  {
    name: 'Cybertronian (Minimum Character Level 4)',
    link: 'http://tgdmb.com/viewtopic.php?p=443375#443375',
    author: 'Prak',
  },
  {
    name: 'Race Revisions and Race Trait system',
    link: 'http://tgdmb.com/viewtopic.php?t=56113',
    author: 'AcidBlades',
  },
  ...[
    'Human', 'Elf', 'Dwarf', 'Halfling', 'Orc', 'Ogre', 'Troll', 'Ratfolk', 'Goblin', 'Tengu',
    'Tiefling', 'Aasimar', 'Gargoyle', 'Draconian', 'Catfolk', 'Thri-Kreen', 'Centaur',
  ].map((name) => {
    return {
      name: name,
      author: "DenizenKane",
      link: 'https://docs.google.com/document/d/1Xw7fNl_7cns6t1ywrRagJNpGNYVeEiZgsv8SqkKlMAU/edit',
      relatedLinks: [{ title: 'Den Thread', link: 'http://tgdmb.com/viewtopic.php?t=56941' }]
    }
  }),
  ...[
    'Doric', 'Flight-Adapted-Entity', 'Gnomon',
  ].map((name) => {
    return {
      name: name,
      author: "Prak",
      link: 'http://tgdmb.com/viewtopic.php?p=417274#417274',
    }
  }),
  ...[
    'Organic Recombinant Constructs', 'Utero-Cons',
  ].map((name) => {
    return {
      name: name,
      author: "Prak",
      link: 'http://tgdmb.com/viewtopic.php?p=417276#417276',
    }
  }),
  ...[
    'Garif', 'Nu Mou', 'Viera', 'Moogle',
  ].map((name) => {
    return {
      name: name,
      author: 'Wiseman',
      link: 'http://tgdmb.com/viewtopic.php?p=313514#313514',
    }
  }),
  {
    name: 'Holstaur',
    link: 'http://tgdmb.com/viewtopic.php?p=245658#245658',
    author: 'icyshadowlord',
  },
  ...[
    'Ankylodon', 'Broucci', 'Ophidian', 'Ponaturi', 'Raptor', 'Slaan', 
  ].map((name) => {
    return {
      name: name,
      author: 'Count Arioch the 28th',
      link: 'http://tgdmb.com/viewtopic.php?p=226876#226876',
    }
  }),
  ...[
    'Akavish', 'Chloroph', 'Kunian', 'Marahnian', 'Fang Fish/Napici Namah', 'Zarkaia', 
  ].map((name) => {
    return {
      name: name,
      author: 'icyshadowlord',
      link: 'http://tgdmb.com/viewtopic.php?p=198824#198824',
    }
  }),
  {
    name: 'Warforged',
    link: 'http://tgdmb.com/viewtopic.php?p=163862#163862',
    author: 'Kaelik',
  },
  ...[
    'Human', 'Bugbear', 'Changeling', 'Dryad', 'Gnoll', 'Goblin',
    'Hobgoblin', 'Kobold', 'Kuo-Toa', 'Lamia', 'Lizardfolk', 'Pixie', 'Slaad'
  ].map((name) => {
    return {
      name: `${name} (Josh's Enkopja Campaign Doc)`,
      author: 'Josh_Kablack',
      link: 'http://tgdmb.com/viewtopic.php?p=178497#178497',
    }
  }),
  {
    name: 'Scorpionfolk (Minimum Level 8)',
    link: 'http://tgdmb.com/viewtopic.php?p=545498#545498',
    author: 'Koumei',
  },
];