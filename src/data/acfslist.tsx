import { Entry } from "../entry";

interface ACFList {
    name: string,
    link: string,
    relatedLinks?: { name: string, link: string }[],
    acfs: Entry[],
    note?: string | JSX.Element
}

export const acfLists: ACFList[] = (() => {
    let acfLists = [
        {
            name: 'Assassin, Frank and K',
            link: 'https://dnd-wiki.org/wiki/Assassin,_Tome_(3.5e_Class)',
            acfs: [
                {
                    name: 'Evil Pokemaniac',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
            ]
        },
        {
            name: 'Barbarian (3.5)',
            link: 'https://dnd-wiki.org/wiki/SRD:Barbarian',
            acfs: [
                {
                    name: 'Bersererker',
                    author: 'God_of_Awesome',
                    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50170',
                },
            ]
        },
        {
            name: 'Barbarian, Frank and K',
            link: 'https://dnd-wiki.org/wiki/Barbarian,_Tome_(3.5e_Class)',
            acfs: [
                {
                    name: 'Fanatical Pokemaniac',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
            ]
        },
        {
            name: 'Barbarian, Kaelik',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=57041',
            acfs: [
                ...['Beast Master', 'Castle Crusher', 'Drunken Rager', 'Lunar Marauder', 'Skald', 'Totemic Sage'].map((name) => {
                    return {
                        name,
                        author: 'Koumei',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=538228#p538228',
                    }
                }),
                {
                    name: 'Fanatical Pokemaniac',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
            ]
        },
        {
            name: 'Bard, ThunderGod Cid',
            link: 'https://dnd-wiki.org/wiki/Bard,_Tome_%283.5e_Class%29',
            relatedLinks: [{ name: 'Original', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=24283' }],
            acfs: [
                {
                    name: 'Musical Pokemaniac',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
                ...['Animal Friend', 'Dirge Singer', 'Flame Dancer', 'Sword Dancer',].map((name) => {
                    return {
                        name,
                        author: 'Koumei',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=539859#p539859',
                    }
                }),
            ]
        },
        {
            name: 'Blackguard',
            link: 'https://dnd-wiki.org/wiki/SRD:Blackguard',
            acfs: [
                {
                    name: 'Yuan-ti Blackguard',
                    author: 'Prak',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=449701#p449701',
                },
            ]
        },
        {
            name: 'Cleric',
            link: 'https://dnd-wiki.org/wiki/SRD:Cleric',
            acfs: [
                {
                    name: 'Faewyrd',
                    author: 'Prak',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=447775#p447775',
                },
            ]
        },
        {
            name: 'Cleric, Kaelik',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56589',
            acfs: [
                ...['Evangelist', 'Far Realm Cultist', 'Sacred Fist',].map((name) => {
                    return {
                        name,
                        author: 'Koumei',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=538542#p538542',
                    }
                }),
            ]
        },
        {
            name: 'Conduit of the Lower Planes',
            link: 'https://dnd-wiki.org/wiki/Conduit_of_the_Lower_Planes_(3.5e_Class)',
            acfs: [
                ...['Conduit of the Outer Planes', 'Conduit of the Inner Planes', 'Conduit of the Transitive Planes'].map((name) => {
                    return {
                        name,
                        author: 'Koumei',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=545939#p545939',
                    }
                }),
            ]
        },
        {
            name: 'Druid',
            link: 'https://dnd-wiki.org/wiki/SRD:Druid',
            acfs: [
                ...['Blight', 'Circle', 'Old World', 'Stormcaller', 'Urban', 'Far Realm'].map((name) => {
                    return {
                        name: `${name} Druid`,
                        author: 'Koumei',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=537994#p537994',
                    }
                }),
                {
                    name: 'Luckbringer Druid',
                    author: 'Sacrificial Lamb',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=447582#p447582',
                },
                {
                    name: 'Alternative Wildshape',
                    author: 'fbmf',
                    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=130378#p130378',
                },
                {
                    name: 'Alternative Wildshape',
                    author: 'Hicks',
                    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=130513#p130513',
                },
                {
                    name: 'Alternative Wildshape',
                    author: 'Avoraciopoctules',
                    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=130855#p130855',
                },
            ]
        },
        {
            name: 'Elemental Siphon',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=154017#p154017',
            acfs: [
                {
                    name: 'Elemental Pokemaniac',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
            ]
        },
        {
            name: 'Jester, Frank and K',
            link: 'https://dnd-wiki.org/wiki/Jester_(3.5e_Class)',
            acfs: [
                {
                    name: 'Prankster Pokemaniac',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
            ]
        },
        {
            name: 'Knight, Frank and K',
            link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)',
            acfs: [
                {
                    name: 'Sharpshooter',
                    author: 'IGTN',
                    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=50200',
                },
                {
                    name: 'Armoured Pokemaniac',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
                ...['Beast Rider', 'Juggernaut', 'Knave', 'Herald', 'Knight of the Order', 'Tauric Knight'].map((name) => {
                    return {
                        name,
                        author: 'Koumei',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=546475#p546475',
                    }
                }),
            ]
        },
        {
            name: 'Magical Warrior, Prak',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=383896#p383896',
            acfs: [
                ...['Talented Magical Warrior', 'Symbiote Warrior'].map((name) => {
                    return {
                        name,
                        author: 'Prak',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=383896#p383896',
                    }
                }),
            ]
        },
        {
            name: 'Monk, Frank and K',
            link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)',
            acfs: [
                {
                    name: 'Willow Fist',
                    author: 'angelfromanotherpin',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=164158#p164158',
                },
                {
                    name: 'Martial Artist Pokemaniac',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
                ...['Elemental Fist', 'Ki Mystic', 'Monk of the Dark Moon', 'Monk of the Long Death', 'Zen Archer',].map((name) => {
                    return {
                        name: `${name}`,
                        author: 'Koumei',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=539225#p539225',
                    }
                }),
            ]
        },
        {
            name: 'Ninja, Koumei',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=232386#p232386',
            acfs: [
                {
                    name: 'Ninja Pokemaniac',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
            ]
        },
        {
            name: 'Paladin, IGTN',
            link: 'https://dnd-wiki.org/wiki/Paladin,_Tome_%283.5e_Class%29',
            acfs: [
                ...['Cavalier', 'Celestial Crusader', 'Elemental Hero', 'Fist of Righteousness', 'Justiciar', 'Sword Saint'].map((name) => {
                    return {
                        name: `${name}`,
                        author: 'Koumei',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=540528#p540528',
                    }
                }),
            ]
        },
        {
            name: 'Psion',
            link: 'https://dnd-wiki.org/wiki/SRD:Psion',
            acfs: [
                {
                    name: 'Pokemystic',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
            ]
        },
        {
            name: 'Ranger, ZER0',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=49226',
            acfs: [
                ...['Beastmaster', 'Falconer', 'Inquisitor', 'Trapmaster', 'Other Bonus Feat Options'].map((name) => {
                    return {
                        name,
                        author: 'Koumei',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=545730#p545730',
                    }
                }),
                {
                    name: 'Officer Jenny',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
            ]
        },
        {
            name: 'Rogue, Koumei',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=57617',
            acfs: [
                ...['Belmont', 'Bounty Hunter', 'Dust Guild Initiate', 'Eldritch Scoundrel', 'Shadow Adept'].map((name) => {
                    return {
                        name,
                        author: 'Koumei',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=545607#p545607',
                    }
                }),
                {
                    name: 'Technical Pokemaniac',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
            ]
        },
        {
            name: 'Samurai, Frank and K',
            link: 'https://dnd-wiki.org/wiki/Samurai,_Tome_(3.5e_Class)',
            acfs: [
                {
                    name: 'Samurai Pokemaniac',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
                ...['Daimyo', 'Daisho-Wielder', 'Mind Blade', 'Nature’s Liege', 'Unscrupulous Ronin'].map((name) => {
                    return {
                        name,
                        author: 'Koumei',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=547264#p547264',
                    }
                }),
                {
                    name: 'Ancestor Summoner',
                    author: 'God_of_Awesome',
                    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50940',
                }
            ]
        },
        {
            name: 'Sorcerer, Covent',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=484547#p484547',
            acfs: [
                {
                    name: 'Twin-Souled',
                    author: 'Covent',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=484547#p484547',
                }
            ]
        },
        {
            name: 'Sorcerer, Kaelik',
            link: 'https://dnd-wiki.org/wiki/Kaelik_Sorcerer_(3.5e_Class)',
            acfs: [
                ...['Gun Mage', 'Magic Eater', 'Rage Mage', 'Wild Soul'].map((name) => {
                    return {
                        name,
                        author: 'Koumei',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=537994#p537994',
                    }
                }),
            ]
        },
        {
            name: 'Sorcerer, PF',
            link: 'https://www.d20pfsrd.com/classes/core-classes/sorcerer/',
            acfs: [
                {
                    name: 'Twin-Souled',
                    author: 'Covent',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=484453#p484453',
                }
            ]
        },
        {
            name: 'Thief Acrobat, Frank and K',
            link: 'https://dnd-wiki.org/wiki/Thief_Acrobat_(3.5e_Class)',
            relatedLinks: [{ name: 'Revised', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=52419' }],
            acfs: [
                {
                    name: 'Acrobatic Pokemaniac',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
            ]
        },
        {
            name: 'Totemist, FrankTrollman',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=50483',
            relatedLinks: [{ name: 'wiki', link: 'https://dnd-wiki.org/wiki/Totemist_(3.5e_Class)' }],
            acfs: [
                {
                    name: 'Cerulian Trainer',
                    author: 'Prak',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=571346#p571346',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
            ]
        },
        {
            name: 'Warlock',
            link: 'https://dnd-wiki.org/wiki/Publication:Complete_Arcane',
            note: <span>Or any class with Eldritch Blast or similar, e.g. <a href='https://dnd-wiki.org/wiki/Bloodline_Warlock_(3.5e_Class)'>Bloodline Warlock</a></span>,
            acfs: [
                {
                    name: 'Eldritch Poketrainer',
                    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=571413#p571413',
                    author: 'Prak',
                }
            ],
        },
        {
            name: 'Warlock (Spherelock), Cielingcat',
            link: 'https://dnd-wiki.org/wiki/Warlock_(3.5e_Class)',
            acfs: [
                {
                    name: 'Hex Maniac',
                    author: 'Koumei',
                    link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
                    relatedLinks: [{ title: 'Pokémaster', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }]
                },
                ...['Celestial Warlock', 'Axiomatic Warlock', 'Anarchic Warlock', 'Faerie Warlock', 'Warlock of the Stars'].map((name) => {
                    return {
                        name,
                        author: 'Koumei',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=547603#p547603',
                    }
                }),
            ]
        },
        {
            name: 'Wizard',
            link: 'https://dnd-wiki.org/wiki/SRD:Wizard',
            acfs: [
                {
                    name: 'Necromancer',
                    author: 'FrankTrollman',
                    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=37648#p37648',
                }
            ]
        },
        {
            name: 'Wizard, PF',
            link: 'https://www.d20pfsrd.com/classes/core-classes/wizard/',
            acfs: [
                {
                    name: 'Spellsniper',
                    author: 'Prak',
                    link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=444881#p444881',
                }
            ]
        },
        {
            name: 'Wizard, Kaelik',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=55867',
            acfs: [
                ...['Focused Specialist', 'Metamagician', 'Temporal Mage', 'War Wizard'].map((name) => {
                    return {
                        name,
                        author: 'Koumei',
                        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=545834#p545834',
                    }
                }),
            ]
        },
    ];

    acfLists.sort(function (a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        }

        return 0;
    });

    return acfLists;
})();