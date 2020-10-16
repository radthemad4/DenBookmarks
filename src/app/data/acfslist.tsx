import { Entry } from "../entry";


export const acfs: Entry[] = [
    {
        name: 'Faewyrd',
        author: 'Prak',
        link: 'http://tgdmb.com/viewtopic.php?p=447775#447775',
        relatedLinks: [{ title: 'Cleric', link: 'https://dnd-wiki.org/wiki/SRD:Cleric' }]
    },
    {
        name: 'Sharpshooter',
        author: 'IGTN',
        link: 'http://www.tgdmb.com/viewtopic.php?t=50200',
        relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }]
    },
    {
        name: 'Willow Fist',
        author: 'angelfromanotherpin',
        link: 'http://tgdmb.com/viewtopic.php?p=164158#164158',
        relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
    },
    ...[
        {
            name: 'Armoured Pokemaniac',
            relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }],
        },
        {
            name: 'Fanatical Pokemaniac',
            relatedLinks: [{ title: 'Barbarian', link: 'https://dnd-wiki.org/wiki/Barbarian,_Tome_(3.5e_Class)' }],
        },
        {
            name: 'Psychic Pokemaniac',
            relatedLinks: [{ title: 'Psion', link: 'https://dnd-wiki.org/wiki/SRD:Psion' }],
        },
        {
            name: 'Ninja Pokemaniac',
            relatedLinks: [{ title: 'Ninja', link: 'http://tgdmb.com/viewtopic.php?p=232386#232386' }],
        },
        {
            name: 'Samurai Pokemaniac',
            relatedLinks: [{ title: 'Samurai', link: 'https://dnd-wiki.org/wiki/Samurai,_Tome_(3.5e_Class)' }],
        },
        {
            name: 'Martial Artist Pokemaniac',
            relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }],
        },
        {
            name: 'Acrobatic Pokemaniac',
            relatedLinks: [
                { title: 'Thief-Acrobat', link: 'https://dnd-wiki.org/wiki/Thief_Acrobat_(3.5e_Class)' },
                { title: 'Thief-Acrobat Revised', link: 'http://www.tgdmb.com/viewtopic.php?t=52419' },
            ],
        },
        {
            name: 'Evil Pokemaniac',
            relatedLinks: [{ title: 'Assassin', link: 'https://dnd-wiki.org/wiki/Assassin,_Tome_(3.5e_Class)' },],
        },
        {
            name: 'Prankster Pokemaniac',
            relatedLinks: [{ title: 'Jester', link: 'https://dnd-wiki.org/wiki/Jester_(3.5e_Class)' },],
        },
        {
            name: 'Musical Pokemaniac',
            relatedLinks: [
                { title: "Frank's Bard", link: 'http://www.tgdmb.com/viewtopic.php?t=24283' },
                { title: "TG Cid's Bard", link: 'https://dnd-wiki.org/wiki/Bard,_Tome_%283.5e_Class%29' },
            ],
        },
        {
            name: 'Elemental Pokemaniac',
            relatedLinks: [{ title: "Elemental Siphon", link: 'http://tgdmb.com/viewtopic.php?p=154017#154017' },],
        },
        {
            name: 'Diabolic Pokemaniac',
            relatedLinks: [{ title: "Warlock", link: 'https://dnd-wiki.org/wiki/Warlock_(3.5e_Class)' },],
        },
    ].map(({ name, relatedLinks }) => {
        return {
            name: name,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=280502#280502',
            relatedLinks: [...relatedLinks, { title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
        }
    }),
    {
        name: 'Talented Magical Warrior',
        author: 'Prak',
        link: 'http://tgdmb.com/viewtopic.php?p=383896#383896',
    },
    ...['Blight', 'Circle', 'Old World', 'Stormcaller', 'Urban'].map((name) => {
        return {
            name: `${name} Druid`,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=537994#537994',
            relatedLinks: [{ title: 'Druid', link: 'https://dnd-wiki.org/wiki/SRD:Druid' }]
        }
    }),
    ...['Gun Mage', 'Magic Eater', 'Rage Mage', 'Wild Soul'].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=537994#537994',
            relatedLinks: [{ title: 'Kaelik Sorcerer', link: 'http://tgdmb.com/viewtopic.php?t=56529' }]
        }
    }),
    ...['Beast Master', 'Castle Crusher', 'Drunken Rager', 'Lunar Marauder', 'Skald', 'Totemic Sage'].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=538228#538228',
            relatedLinks: [{ title: 'Kaelik Barbarian', link: 'http://tgdmb.com/viewtopic.php?t=57041' }]
        }
    }),
    ...['Evangelist', 'Far Realm Cultist', 'Sacred Fist',].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=538542#538542',
            relatedLinks: [{ title: 'Kaelik Cleric', link: 'http://tgdmb.com/viewtopic.php?t=56589' }]
        }
    }),
    ...['Elemental Fist', 'Ki Mystic', 'Monk of the Dark Moon', 'Monk of the Long Death', 'Zen Archer',].map((name) => {
        return {
            name: `${name}`,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=539225#539225',
            relatedLinks: [{ title: 'Tome Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
        }
    }),
    ...['Animal Friend', 'Dirge Singer', 'Flame Dancer', 'Sword Dancer',].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=539859#539859',
            relatedLinks: [{ title: "TG Cid's Bard", link: 'https://dnd-wiki.org/wiki/Bard,_Tome_%283.5e_Class%29' }]
        }
    }),
    ...['Cavalier', 'Celestial Crusader', 'Elemental Hero', 'Fist of Righteousness', 'Justiciar', 'Sword Saint'].map((name) => {
        return {
            name: `${name}`,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=540528#540528',
            relatedLinks: [{ title: "IGTN's Paladin", link: 'https://dnd-wiki.org/wiki/Paladin,_Tome_%283.5e_Class%29' }]
        }
    }),
    {
        name: 'Yuan-ti Blackguard',
        author: 'Prak',
        link: 'http://tgdmb.com/viewtopic.php?p=449701#449701',
        relatedLinks: [{ title: 'Blackguard', link: 'https://dnd-wiki.org/wiki/SRD:Blackguard' }]
    },
    {
        name: 'Luckbringer Druid',
        author: 'Sacrificial Lamb',
        link: 'http://tgdmb.com/viewtopic.php?p=447582#447582',
        relatedLinks: [{ title: 'Druid', link: 'https://dnd-wiki.org/wiki/SRD:Druid' }]
    },
    ...['Belmont', 'Bounty Hunter', 'Dust Guild Initiate', 'Eldritch Scoundrel', 'Shadow Adept'].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=545607#545607',
            relatedLinks: [{ title: "Koumei's Rogue", link: 'http://tgdmb.com/viewtopic.php?t=57617' }]
        }
    }),
    ...['Beastmaster', 'Falconer', 'Inquisitor', 'Trapmaster', 'Other Options for ZER0 Rangers'].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=545730#545730',
            relatedLinks: [{ title: "ZER0's Ranger", link: 'http://www.tgdmb.com/viewtopic.php?t=49226' }]
        }
    }),
    ...['Focused Specialist', 'Metamagician', 'Temporal Mage', 'War Wizard'].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=545834#545834',
            relatedLinks: [{ title: "Kaelik Wizard", link: 'http://tgdmb.com/viewtopic.php?t=55867' }]
        }
    }),
];