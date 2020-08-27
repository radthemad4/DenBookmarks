import { Entry } from "../entry";
import React from "react";

export const baseClasses: Entry[] = [
    {
        name: "Acid Mage",
        author: "Maxus",
        link: "http://www.tgdmb.com/viewtopic.php?p=34146#34146",
    },
    {
        name: "Adventurer",
        author: "RadiantPhoenix",
        link: "http://www.tgdmb.com/viewtopic.php?t=54556"
    },
    {
        name: "Alternative Martial Flexibility Brawler",
        author: "AcidBlades",
        link: "http://tgdmb.com/viewtopic.php?p=454947#454947"
    },
    {
        name: "Apothecary",
        author: "Purple",
        link: "http://tgdmb.com/viewtopic.php?t=50563"
    },
    {
        name: "Puppeteer",
        author: "FrankTrollman",
        link: "http://www.tgdmb.com/viewtopic.php?p=34126#34126",
        wikiLink: "https://dnd-wiki.org/wiki/Puppeteer_%283.5e_Class%29"
    },
    ...[
        {
            name: 'True Fiend',
            wikiLink: 'https://dnd-wiki.org/wiki/True_Fiend_(3.5e_Class)'
        },
        {
            name: 'Fiendish Brute',
            wikiLink: 'https://dnd-wiki.org/wiki/Fiendish_Brute_(3.5e_Class)'
        },
        {
            name: 'Summoner',
            wikiLink: 'https://dnd-wiki.org/wiki/Summoner_(3.5e_Class)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/viewtopic.php?p=28830#28830',
            wikiLink: element.wikiLink
        }
    }),
    {
        name: "Conduit of the Lower Planes",
        author: "Frank and K",
        link: "http://www.tgdmb.com/viewtopic.php?p=28830#28830",
    },
    {
        name: 'Carthaz Conduit',
        author: 'Kaelik, Catharz Godfoot, Frank and K',
        link: 'http://tgdmb.com/viewtopic.php?t=51125',
        wikiLink: 'https://dnd-wiki.org/wiki/Conduit_of_the_Lower_Planes_(3.5e_Class)'
    },
    ...[
        {
            name: 'Monk',
            wikiLink: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)'
        },
        {
            name: 'Jester',
            wikiLink: 'https://dnd-wiki.org/wiki/Jester_(3.5e_Class)'
        },
        {
            name: 'Assassin',
            wikiLink: 'https://dnd-wiki.org/wiki/Assassin,_Tome_(3.5e_Class)'
        },
        {
            name: 'Thief Acrobat',
            wikiLink: 'https://dnd-wiki.org/wiki/Thief_Acrobat_(3.5e_Class)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/viewtopic.php?p=28549#28549',
            wikiLink: element.wikiLink
        }
    }),
    ...[
        {
            name: 'Fighter',
            wikiLink: 'https://dnd-wiki.org/wiki/Fighter,_Tome_(3.5e_Class)'
        },
        {
            name: 'Barbarian',
            wikiLink: 'https://dnd-wiki.org/wiki/Barbarian,_Tome_(3.5e_Class)'
        },
        {
            name: 'Knight',
            wikiLink: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)'
        },
        {
            name: 'Samurai',
            wikiLink: 'https://dnd-wiki.org/wiki/Samurai,_Tome_(3.5e_Class)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/viewtopic.php?p=33297#33297',
            wikiLink: element.wikiLink
        }
    }),
    {
        name: 'Monster Tamer',
        author: 'FrankTrollman',
        link: 'https://dnd-wiki.org/wiki/Monster_Tamer_(3.5e_Class)',
    },
    {
        name: 'Pokémaster',
        author: 'Frank and K',
        link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class',
    },
    {
        name: 'Arcane Archer',
        author: 'erik',
        link: 'http://tgdmb.com/viewtopic.php?t=56217',
    },
    ...[
        'Druid',
        'Sorcerer',
    ].map((element) => {
        return {
            name: element,
            author: 'Iaimeki',
            link: 'http://www.tgdmb.com/viewtopic.php?p=50377#50377',
        }
    }),
    ...[
        {
            name: 'Elementalist',
            link: 'https://docs.google.com/document/d/1YmozEAd3GCy6g0EcpJClUFVSG1ku_FslVejkAX0aYDM/edit?usp=sharing'
        },
        {
            name: 'Necromancer',
            link: 'https://docs.google.com/document/d/1TELuZrmUcjLQLMA8X6Mw-Tg4koyEzWAok8J88h3yvHU/edit?usp=sharing'
        },
        {
            name: 'Beguiler',
            link: 'https://docs.google.com/document/d/1dxfEsyYx0q96mGhOk30e7JIOVtzf3AfH021fllauBeQ/edit?usp=sharing'
        },
        {
            name: 'Artificer',
            link: 'https://docs.google.com/document/d/1IlVArMNj-7C27SxCIRgDvPgHADJijy49S0su-G7vFB8/edit?usp=sharing'
        },
    ].map((element) => {
        return {
            name: `Aspect ${element.name}`,
            author: 'Chamomile',
            link: element.link,
            relatedLinks: [{ title: 'Den Thread', link: 'http://tgdmb.com/viewtopic.php?t=57183' }]
        }
    }),
    {
        name: "Axe-Thief",
        author: "Josh_Kablack",
        link: "http://tgdmb.com/viewtopic.php?p=423851",
    },
    {
        name: 'Archivist',
        author: 'virgil',
        link: 'http://tgdmb.com/viewtopic.php?p=269061#269061',
    },
    {
        name: 'Bibliomancer',
        author: 'Josh_Kablack',
        link: 'http://tgdmb.com/viewtopic.php?p=268588#268588',
    },
    {
        name: 'Scribblemancer',
        author: 'Grek',
        link: 'http://tgdmb.com/viewtopic.php?p=268857#268857',
    },
    {
        name: "Barbarian",
        author: "Kaelik",
        link: "http://tgdmb.com/viewtopic.php?p=507511#507511",
    },
    {
        name: "Bard",
        author: "FrankTrollman",
        link: "http://www.tgdmb.com/viewtopic.php?t=24283",
        relatedLinks: [{ title: 'Revision by ThunderGod Cid', link: 'https://dnd-wiki.org/wiki/Bard,_Tome_%283.5e_Class%29' }]
    },
    {
        name: "Bard",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?t=50778"
    },
    {
        name: "Bard",
        author: "Orion",
        link: "http://tgdmb.com/viewtopic.php?t=48650"
    },
    {
        name: 'Beguiler',
        author: 'RadiantPhoenix',
        link: 'http://tgdmb.com/viewtopic.php?t=55989',
    },
    {
        name: 'Shaper',
        author: 'CatharzGodfoot',
        link: 'http://www.tgdmb.com/viewtopic.php?p=105040#105040',
    },
    {
        name: 'Kineticist',
        author: 'CatharzGodfoot',
        link: 'http://www.tgdmb.com/viewtopic.php?p=105040#105040',
    },
    {
        name: 'Psion',
        author: 'koz',
        link: 'http://www.tgdmb.com/viewtopic.php?t=49453',
    },
    {
        name: 'Chaos Mage',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?t=51581',
    },
    {
        name: 'Mechanus Warrior',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/viewtopic.php?p=168684#168684',
    },
    {
        name: 'Bio Spark',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/viewtopic.php?p=169548#169548',
    },
    {
        name: 'Verdant Master',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?p=169965#169965',
    },
    {
        name: 'Inquisitor',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?p=176979#176979',
    },
    {
        name: 'Slaad Mutant',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/viewtopic.php?t=51842',
    },
    {
        name: 'Doctor',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?p=178011#178011',
    },
    {
        name: 'Rogue',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=435198#435198',
    },
    {
        name: 'Rogue v2',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?t=57617',
    },
    {
        name: 'Wizard',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=435199#435199',
    },
    {
        name: 'Berserker',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=435199#435199',
    },
    {
        name: 'Necromancer',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=438426#438426',
    },
    {
        name: 'Super Saiyan',
        author: 'zeruslord',
        link: 'http://tgdmb.com/viewtopic.php?t=49208',
    },
    {
        name: 'Black Mage',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/viewtopic.php?t=50729',
    },
    {
        name: 'Black Mage',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?p=257455#257455',
    },
    {
        name: 'Blackguard',
        author: 'Dominicius',
        link: 'http://tgdmb.com/viewtopic.php?p=202208#202208',
    },
    {
        name: 'Blade of Radiance',
        author: 'koz',
        link: 'http://www.tgdmb.com/viewtopic.php?t=49583',
    },
    {
        name: 'Blighter',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?t=56394',
    },
    {
        name: 'Blood Shaman',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?p=191210',
    },
    {
        name: 'Noble',
        author: 'Wiseman',
        link: 'http://www.tgdmb.com/viewtopic.php?p=464655#464655',
    },
    {
        name: 'Brainiac',
        author: 'AcidBlades',
        link: 'http://tgdmb.com/viewtopic.php?p=450593#450593',
    },
    {
        name: 'Bright Blade',
        author: 'Talisman',
        link: 'http://tgdmb.com/viewtopic.php?p=450593#450593',
    },
    {
        name: 'Bullet Mage',
        author: 'Mask_De_H',
        link: 'http://tgdmb.com/viewtopic.php?t=51203',
    },
    {
        name: 'Bullet Mage',
        author: 'Mask_De_H',
        link: 'http://tgdmb.com/viewtopic.php?t=51203',
    },
    {
        name: 'Champion of Lolth',
        author: 'RadiantPhoenix',
        link: 'http://www.tgdmb.com/viewtopic.php?p=359375#359375',
    },
    {
        name: 'Incarnate',
        author: 'Calibron',
        link: 'http://tgdmb.com/viewtopic.php?t=48580',
    },
    {
        name: 'Chimeric Abomination',
        author: 'DSMatticus',
        link: 'http://tgdmb.com/viewtopic.php?p=430791#430791',
    },
    {
        name: 'Keyblade Master',
        author: 'Wiseman',
        link: 'http://www.tgdmb.com/viewtopic.php?p=520732#520732',
    },
    {
        name: 'Chemmer',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=419160#419160',
    },
    {
        name: 'Chieftain ',
        author: 'IGTN',
        link: 'http://www.tgdmb.com/viewtopic.php?t=50087',
    },
    {
        name: 'Cleric',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?t=56589'
    },
    {
        name: 'Cock Hurler',
        author: 'FrankTrollman',
        link: 'http://tgdmb.com/viewtopic.php?t=54089'
    },
    {
        name: 'Cock Mage',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/viewtopic.php?p=313904#313904'
    },
    {
        name: 'Cock Master',
        author: 'koz',
        link: 'http://www.tgdmb.com/viewtopic.php?p=313132#313132'
    },
    ...['Corrupter', 'Doombringer',].map((element) => {
        return {
            name: element,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=479459#479459',
        }
    }),
    ...['Cursed', 'Oozemancer',].map((element) => {
        return {
            name: element,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=479513#479513',
        }
    }),
    {
        name: 'Dragon Shaman',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=479513#479513',
    },
    {
        name: 'Crusader',
        author: 'FrankTrollman',
        link: 'http://tgdmb.com/viewtopic.php?t=54090',
    },
    {
        name: 'Curator',
        author: 'Manxome',
        link: 'http://www.tgdmb.com/viewtopic.php?t=49091',
    },
    {
        name: 'Sword Scion',
        author: 'Maxus',
        link: 'https://www.tgdmb.com/viewtopic.php?p=313834#313834',
    },
    {
        name: 'Sun Sage',
        author: 'Avoraciopoctules',
        link: 'https://www.tgdmb.com/viewtopic.php?p=313969#313969',
    },
    {
        name: 'Dark Dancer',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/viewtopic.php?p=314015#314015',
    },
    {
        name: 'Sword Blade',
        author: 'infected slut princess',
        link: 'https://www.tgdmb.com/viewtopic.php?p=315682#315682',
    },
    {
        name: 'Swordcaster',
        author: 'Sigil',
        link: 'https://www.tgdmb.com/viewtopic.php?p=315765#315765',
    },
    {
        name: 'Defender',
        author: 'Manxome',
        link: 'http://tgdmb.com/viewtopic.php?p=66066#66066',
    },
    ...[
        'Desert Wind Warrior', 'Disciple of the Devoted Spirit', 'Diamond Mind',
        'Master of the Iron Heart', 'Seeker of the Setting Sun', 'Shadow Hand Ninja',
        'Stone Dragon Berserker', 'Tiger Claw Assassin', 'White Raven General'
    ].map((name) => {
        return {
            name: name,
            author: 'krusk',
            link: 'http://tgdmb.com/viewtopic.php?p=524466#524466',
        }
    }),
    {
        name: 'Disintegration Mage',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?p=194772#194772',
    },
    {
        name: 'Dragonfire Adept',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?t=54157',
    },
    {
        name: 'Dread Necromancer',
        author: 'Hicks',
        link: 'http://tgdmb.com/viewtopic.php?t=49161',
    },
    {
        name: 'Eldritch Knight',
        author: 'Blicero',
        link: 'http://tgdmb.com/viewtopic.php?t=50441',
    },
    {
        name: 'Elemental Siphon',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?p=154017#154017',
        relatedLinks: [
            { title: 'Blending Feats, Shadow Siphon PrC', link: 'http://tgdmb.com/viewtopic.php?p=154018#154018' },
            { title: 'Ethereal Siphon PrC', link: 'http://tgdmb.com/viewtopic.php?p=449214#449214' },
        ]
    },
    {
        name: 'Elementalist',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?t=56973',
    },
    {
        name: 'Elementalist',
        author: 'FrankTrollman',
        link: 'https://dnd-wiki.org/wiki/Elementalist_(3.5e_Class)',
        relatedLinks: [{ title: 'Additional spells by Koumei', link: 'http://tgdmb.com/viewtopic.php?t=52086' }]
    },
    {
        name: 'Exultant',
        author: 'traverse',
        link: 'http://www.tgdmb.com/viewtopic.php?t=49385',
    },
    {
        name: 'Eye Caster',
        author: 'spongeknight',
        link: 'http://tgdmb.com/viewtopic.php?t=56364',
    },
    {
        name: 'Trollman/Suliin Sorcerer',
        author: 'FrankTrollman and Paul Suliin',
        link: 'http://tgdmb.com/viewtopic.php?p=40574#40574',
    },
    {
        name: 'Thaumaturge',
        author: 'Bigode',
        link: 'http://tgdmb.com/viewtopic.php?p=51212#51212',
    },
    {
        name: 'Sorcerer',
        author: 'Midnight_v',
        link: 'http://tgdmb.com/viewtopic.php?p=233421',
    },
    {
        name: 'Favored of Vecna',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?p=166935#166935',
    },
    {
        name: 'Favoured Soul of Loviatar',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=167398#167398',
    },
    {
        name: 'Favored of Pelor',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?p=167490#167490',
    },
    {
        name: 'Favoured Soul of Bahamut',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=167496#167496',
    },
    {
        name: 'Favoured Soul of Tiamat',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=168441#168441',
    },
    {
        name: 'Favoured Soul of Wee-Jas',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=168971#168971',
    },
    {
        name: 'Favoured Soul of Kurtulman',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=169650#169650',
    },
    {
        name: 'Favoured Soul of Lathander (or Amaterasu or...)',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=369590#369590',
    },
    {
        name: 'Favoured Soul of Nerull',
        author: 'Hicks',
        link: 'http://tgdmb.com/viewtopic.php?p=477618#477618',
    },
    {
        name: 'Favoured Soul of Akumi',
        author: 'Maxus',
        link: 'http://tgdmb.com/viewtopic.php?p=450316#450316',
    },
    {
        name: 'Fighter revision for grognards',
        author: 'WiserOdin',
        link: 'https://docs.google.com/document/d/1HYgjPAfPXwNEPXvXDhYrZei4yo7gxuwp_4D9vLyQQNM/edit',
    },
    {
        name: 'FIGHTER!',
        author: 'radthemad4',
        link: 'http://tgdmb.com/viewtopic.php?t=57225',
    },
    {
        name: 'Fire Mage',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/viewtopic.php?p=40226#40226',
    },
    {
        name: 'Fire Mage (Revised)',
        author: 'Josh_Kablack',
        link: 'http://tgdmb.com/viewtopic.php?t=52437',
    },
    {
        name: 'Warlock',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/viewtopic.php?p=40208#40208',
    },
    {
        name: 'Warlock (Spherelock)',
        author: 'Cielingcat',
        link: 'http://www.tgdmb.com/viewtopic.php?p=40229#40229',
    },
    {
        name: 'Force Mage',
        author: 'virgil',
        link: 'http://tgdmb.com/viewtopic.php?t=48793',
    },
    {
        name: 'Force Potentate',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?t=51600',
    },
    {
        name: 'Freerunner',
        author: 'Sasaisen',
        link: 'http://tgdmb.com/viewtopic.php?t=57511',
    },
    {
        name: 'Gadgeteer (Old)',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?t=50968',
    },
    {
        name: 'Gadgeteer, Revised',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=245446#245446',
    },
    ...['Monstrous Humanoid', 'Magical Beast'].map((name) => {
        return {
            name: name,
            author: 'Koumei',
            link: 'http://www.tgdmb.com/viewtopic.php?p=105399#105399',
        }
    }),
    {
        name: 'Genie',
        author: 'FrankTrollman',
        link: 'https://dnd-wiki.org/wiki/Genie_(3.5e_Class)',
    },
    {
        name: 'Genkotsuken (Shadow Warrior)',
        author: 'DoragonJin',
        link: 'http://tgdmb.com/viewtopic.php?p=39769#39769',
    },
    {
        name: 'Soulmaster',
        author: 'Parthenon',
        link: 'http://tgdmb.com/viewtopic.php?p=134752#134752',
    },
    {
        name: 'Ghost Blades',
        author: 'Nicklance',
        link: 'http://tgdmb.com/viewtopic.php?p=135066#135066',
    },
    {
        name: 'Green Mage',
        author: 'FrankTrollman',
        link: 'https://dnd-wiki.org/wiki/Green_Mage_(3.5e_Class)',
    },
    {
        name: 'Green Mage, Revised',
        author: 'Josh_Kablack',
        link: 'http://tgdmb.com/viewtopic.php?t=52444',
    },
    {
        name: 'Greenfire Mage',
        author: 'Lokathor',
        link: 'https://gist.github.com/Lokathor/718530dbac28ce6e48b8e1335f2d360b',
    },
    {
        name: 'Gun Mage',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?t=51517',
    },
    {
        name: 'Hart Warden',
        author: 'AndreiChekov',
        link: 'https://www.tgdmb.com/viewtopic.php?t=55414',
    },
    {
        name: 'Paladin',
        author: 'Brobdingnagian',
        link: 'http://tgdmb.com/viewtopic.php?t=39063',
    },
    {
        name: 'Hex Blade',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?t=55382',
    },
    {
        name: 'Hippogriff Master',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?p=32451#32451',
    },
    {
        name: 'Holy Paragon',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?t=56107',
    },
    {
        name: 'Hunger Mage',
        author: 'Avoraciopoctules',
        link: 'http://tgdmb.com/viewtopic.php?t=50733',
    },
    {
        name: 'Hunter',
        author: 'CatharzGodfoot',
        link: 'http://tgdmb.com/viewtopic.php?t=48759',
    },
    {
        name: 'Hunter',
        author: 'IGTN',
        link: 'http://www.tgdmb.com/viewtopic.php?t=49250',
    },
    {
        name: 'Ice Mage',
        author: 'erik',
        link: 'http://tgdmb.com/viewtopic.php?t=57223',
    },
    {
        name: 'Icewalker',
        author: 'Maxus',
        link: 'http://www.tgdmb.com/viewtopic.php?p=59698#59698',
        note: <span>Deprecated. See <a href='http://www.tgdmb.com/viewtopic.php?t=50012'>Snowscaper</a> <a href='https://dnd-wiki.org/wiki/Snowscaper_(3.5e_Class)'>(wiki)</a></span>
    },
    {
        name: 'Icewright',
        author: 'Kaelik',
        link: 'https://www.tgdmb.com/viewtopic.php?t=53474',
    },
    {
        name: 'Iconic Dwarf',
        author: 'angelfromanotherpin',
        link: 'http://tgdmb.com/viewtopic.php?p=463664#463664',
    },
    {
        name: 'Iconic Elf',
        author: 'angelfromanotherpin',
        link: 'http://tgdmb.com/viewtopic.php?p=463624#463624',
    },
    {
        name: 'Fighter/Mage/Thief',
        author: 'RedstoneOrc',
        link: 'http://tgdmb.com/viewtopic.php?p=463268#463268',
    },
    {
        name: 'Incarnate',
        author: 'FrankTrollman',
        link: 'http://tgdmb.com/viewtopic.php?t=50526',
    },
    {
        name: 'Interdictor',
        author: 'Pixels',
        link: 'http://tgdmb.com/viewtopic.php?t=55286',
    },
    {
        name: 'Invoker',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?t=50976',
    },
    {
        name: 'Justiciar',
        author: 'AndreiChekov',
        link: 'http://tgdmb.com/viewtopic.php?t=55397',
    },
    {
        name: 'Justiciar',
        author: 'AndreiChekov',
        link: 'http://tgdmb.com/viewtopic.php?t=55397',
    },
    {
        name: 'Kantian Paladin',
        author: 'Iaimeki',
        link: 'http://tgdmb.com/viewtopic.php?t=39220',
        wikiLink: 'https://dnd-wiki.org/wiki/Kantian_Paladin_(3.5e_Class)'
    },
    {
        name: 'Kunoichi',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?t=51482',
    },
    {
        name: 'Lycanthrope Paragon',
        author: 'Wiseman',
        link: 'http://www.tgdmb.com/viewtopic.php?p=332307#332307',
    },
    {
        name: 'Shifter',
        author: 'ubernoob',
        link: 'http://tgdmb.com/viewtopic.php?p=131601#131601',
    },
    {
        name: 'Shifter',
        author: 'Blicero',
        link: 'http://tgdmb.com/viewtopic.php?t=50747',
    },
    {
        name: 'Mage',
        author: 'Hicks',
        link: 'http://tgdmb.com/viewtopic.php?t=52837',
    },
    {
        name: 'Magnetist',
        author: 'Josh_Kablack',
        link: 'https://www.tgdmb.com/viewtopic.php?p=226556#226556',
    },
    {
        name: 'Mana Alchemist (with cakes and tea and requirements for recipes)',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?t=51022',
    },
    {
        name: 'Mana Alchemist (with lists of effects, and you roll/invent the flavour)',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=142871#142871',
    },
    {
        name: 'Marshal',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/viewtopic.php?p=24348#24348',
        wikiLink: 'https://dnd-wiki.org/wiki/Marshal,_Tome_(3.5e_Class)'
    },
    {
        name: 'Master of Wrath',
        author: 'Nihlin',
        link: 'http://tgdmb.com/viewtopic.php?t=48831',
    },
    {
        name: 'Mechrid',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=417543#417543',
    },
    {
        name: 'Ninja (Old)',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?t=50367',
    },
    {
        name: 'Ninja, Revised',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=232386#232386',
    },
    {
        name: 'Swashbuckler (Old)',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?t=50350',
    },
    {
        name: 'Swashbuckler, Revised',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=232624#232624',
    },
    {
        name: 'Witch v1',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?t=50003',
    },
    {
        name: 'Witch v2',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=534641#534641',
    },
    {
        name: 'New Fighter *PATHFINDER*',
        author: 'Covent',
        link: 'http://tgdmb.com/viewtopic.php?t=56533',
    },
    {
        name: 'Nightmare Seeker',
        author: 'koz',
        link: 'http://www.tgdmb.com/viewtopic.php?t=49467',
    },
    {
        name: 'Ninja Rogue',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?t=56375',
    },
    {
        name: 'Nymph Sustainer',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/viewtopic.php?t=51801',
    },
    {
        name: 'Overlord',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=140728#140728',
    },
    {
        name: 'Sohei',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?t=50005',
    },
    {
        name: 'Warmage (Old)',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?t=50032',
    },
    {
        name: 'Warmage, Take 2',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?t=54502',
    },
    {
        name: 'Shadowcaster',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?t=50587',
    },
    {
        name: 'Untamed Psychic',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?t=50979',
    },
    {
        name: 'Time Mage',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?t=50995',
    },
    {
        name: 'Paladin',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?t=50873',
    },
    {
        name: 'Pact Knight',
        author: 'tenngu',
        link: 'https://docs.google.com/document/d/1PWi1wwzjXGFWNdhlD1K1VeaBB9mBjkdSjaMtwKt8Z10/edit',
    },
    {
        name: 'Paladin (Alt name: Champion, Crusader)',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/viewtopic.php?t=50775',
    },
    {
        name: 'Paladin',
        author: 'Hicks',
        link: 'http://tgdmb.com/viewtopic.php?t=49591',
    },
    {
        name: 'Paladin',
        author: 'IGTN',
        link: 'http://www.tgdmb.com/viewtopic.php?t=50021',
        wikiLink: 'https://dnd-wiki.org/wiki/Paladin,_Tome_%283.5e_Class%29'
    },
    {
        name: 'Paladin',
        author: 'Lokathor',
        link: 'http://tgdmb.com/viewtopic.php?t=56455',
    },
];