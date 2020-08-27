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
      {title: 'Githyanki Paragon', link: 'https://dnd-wiki.org/wiki/Githyanki_Paragon_%283.5e_Racial_Paragon_Class%29'},
      {title: 'Githzerai Paragon', link: 'http://tgdmb.com/viewtopic.php?p=133215#133215'},
    ]
  },
  {
    name: "Neko-oni",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141532#141532",
  },
  {
    name: "Aranea, Web-Slinging Killer PrC",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141532#141532",
  },
  {
    name: "Yuan-ti Halfblood, Anethema PrC",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141534#141534",
  },
  {
    name: "Empusa, Marilith/Lilend PrC, Beauty Queen PrC",
    author: "Koumei",
    link: "http://tgdmb.com/viewtopic.php?p=141534#141534",
  },
  {
    name: "Vaxt, Overgrown PrC",
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
    name: "True Dragon, Dragon Monster Class",
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
];