import { Entry } from "../entry";


export const acfs: Entry[] = [
    {
        name: 'Faewyrd (Cleric Variant)',
        author: 'Prak',
        link: 'http://tgdmb.com/viewtopic.php?p=447775#447775',
        relatedLinks: [{ title: 'Cleric', link: 'https://dnd-wiki.org/wiki/SRD:Cleric' }]
    },
    {
        name: 'Sharpshooter (Knight Variant)',
        author: 'IGTN',
        link: 'http://www.tgdmb.com/viewtopic.php?t=50200',
        relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }]
    },
    {
        name: 'Willow Fist (Tome Monk ACF)',
        author: 'angelfromanotherpin',
        link: 'http://tgdmb.com/viewtopic.php?p=164158#164158',
        relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
    },
    ...[
        {
            name: 'Armoured Pokemaniac (Knight ACF)',
            relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }],
        },
        {
            name: 'Fanatical Pokemaniac (Knight ACF)',
            relatedLinks: [{ title: 'Barbarian', link: 'https://dnd-wiki.org/wiki/Barbarian,_Tome_(3.5e_Class)' }],
        },
        {
            name: 'Psychic Pokemaniac (Psion ACF)',
            relatedLinks: [{ title: 'Psion', link: 'https://dnd-wiki.org/wiki/SRD:Psion' }],
        },
        {
            name: 'Ninja Pokemaniac (Ninja ACF)',
            relatedLinks: [{ title: 'Ninja', link: 'http://tgdmb.com/viewtopic.php?p=232386#232386' }],
        },
        {
            name: 'Samurai Pokemaniac (Samurai ACF)',
            relatedLinks: [{ title: 'Samurai', link: 'https://dnd-wiki.org/wiki/Samurai,_Tome_(3.5e_Class)' }],
        },
        {
            name: 'Martial Artist Pokemaniac (Monk ACF)',
            relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }],
        },
        {
            name: 'Acrobatic Pokemaniac (Thief-Acrobat ACF)',
            relatedLinks: [
                { title: 'Thief-Acrobat', link: 'https://dnd-wiki.org/wiki/Thief_Acrobat_(3.5e_Class)' },
                { title: 'Thief-Acrobat Revised', link: 'http://www.tgdmb.com/viewtopic.php?t=52419' },
            ],
        },
        {
            name: 'Evil Pokemaniac (Assassin ACF)',
            relatedLinks: [{ title: 'Assassin', link: 'https://dnd-wiki.org/wiki/Assassin,_Tome_(3.5e_Class)' },],
        },
        {
            name: 'Prankster Pokemaniac (Assassin ACF)',
            relatedLinks: [{ title: 'Jester', link: 'https://dnd-wiki.org/wiki/Jester_(3.5e_Class)' },],
        },
        {
            name: 'Musical Pokemaniac (Bard ACF)',
            relatedLinks: [
                { title: "Frank's Bard", link: 'http://www.tgdmb.com/viewtopic.php?t=24283' },
                { title: "TG Cid's Bard", link: 'https://dnd-wiki.org/wiki/Bard,_Tome_%283.5e_Class%29' },
            ],
        },
        {
            name: 'Elemental Pokemaniac (Elemental Siphon ACF)',
            relatedLinks: [{ title: "Elemental Siphon", link: 'http://tgdmb.com/viewtopic.php?p=154017#154017' },],
        },
        {
            name: 'Diabolic Pokemaniac (Warlock ACF)',
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
            relatedLinks: [{title: 'Druid', link: 'https://dnd-wiki.org/wiki/SRD:Druid'}]
        }
    }),
    ...['Gun Mage', 'Magic Eater', 'Rage Mage', 'Wild Soul'].map((name) => {
        return {
            name: `${name} (Kaelik Sorcerer Variant)`,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=537994#537994',
            relatedLinks: [{title: 'Sorcerer', link: 'http://tgdmb.com/viewtopic.php?t=56529'}]
        }
    }),
    ...['Beast Master', 'Castle Crusher', 'Drunken Rager', 'Lunar Marauder', 'Skald', 'Totemic Sage'].map((name) => {
        return {
            name: `${name} (Kaelik Barbarian Variant)`,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=538228#538228',
            relatedLinks: [{title: 'Barbarian', link: 'http://tgdmb.com/viewtopic.php?t=57041'}]
        }
    }),
    ...['Evangelist', 'Far Realm Cultist', 'Sacred Fist',].map((name) => {
        return {
            name: `${name} (Kaelik Cleric Variant)`,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=538542#538542',
            relatedLinks: [{title: 'Cleric', link: 'http://tgdmb.com/viewtopic.php?t=56589'}]
        }
    }),
    ...['Elemental Fist', 'Ki Mystic', 'Monk of the Dark Moon', 'Monk of the Long Death', 'Zen Archer',].map((name) => {
        return {
            name: `${name} (Tome Monk Variant)`,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=539225#539225',
            relatedLinks: [{title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)'}]
        }
    }),
    ...['Animal Friend', 'Dirge Singer', 'Flame Dancer', 'Sword Dancer',].map((name) => {
        return {
            name: `${name} (TG Cid's Bard Variant)`,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=539859#539859',
            relatedLinks: [{title: 'Bard', link: 'https://dnd-wiki.org/wiki/Bard,_Tome_%283.5e_Class%29'}]
        }
    }),
    ...['Cavalier', 'Celestial Crusader', 'Elemental Hero', 'Fist of Righteousness', 'Justiciar', 'Sword Saint'].map((name) => {
        return {
            name: `${name} (TG Cid's Bard Variant)`,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=540528#540528',
            relatedLinks: [{title: "IGTN's Paladin", link: 'https://dnd-wiki.org/wiki/Paladin,_Tome_%283.5e_Class%29'}]
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
        relatedLinks: [{title: 'Druid', link: 'https://dnd-wiki.org/wiki/SRD:Druid'}]
    },
];