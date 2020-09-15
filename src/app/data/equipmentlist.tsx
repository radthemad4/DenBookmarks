import { Entry } from "../entry";
import React from "react";

export const bogItemCollections: Entry[] = [
    {
        name: "Book of Gears",
        author: "Frank and K",
        link: "http://www.tgdmb.com/viewtopic.php?t=35813",
        wikiLink: "http://www.dnd-wiki.org/wiki/Book_of_Gears_%283.5e_Sourcebook%29",
        note: "only partially complete but worth reading, use Red_Rob's"
    },
    {
        name: 'Defining Magic Item Power Levels',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/viewtopic.php?p=131656#131656'
    },
    {
        name: "Complete Tome items and Wish Economy",
        author: "Red_Rob",
        link: "http://tgdmb.com/viewtopic.php?t=53704",
        wikiLink: "https://dnd-wiki.org/wiki/Tome_Magic_Items_%283.5e_Variant_Rule%29"
    },
    {
        name: "Simplified Tome Armour",
        author: "Red_Rob",
        link: "http://www.tgdmb.com/viewtopic.php?t=53563",
        wikiLink: "https://dnd-wiki.org/wiki/Tome_Armor_%283.5e_Variant_Rule%29"
    },
    {
        name: "Alternative Item Bonus Progression",
        author: "Kaelik",
        link: "http://tgdmb.com/viewtopic.php?t=56878",
    }
]

export const lesserBoGMagicItems: Entry[] = [
    {
        name: "Web Strangler",
        link: "http://tgdmb.com/viewtopic.php?p=141533#141533",
        author: "Koumei"
    },
    {
        name: "Ignan Venom Talisman",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?p=141534#141534",
    },
    {
        name: "Kinoko-Jiru",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?p=141536#141536",
    },
    ...[
        'Grip Claw', 'Deep Sea Tooth', 'Big Root', 'Power Leek',
        'Black Sludge', 'Expert Belt', 'Life Orb', 'Red Card',
        'Air Balloon', 'Destiny Knot', 'Razor Claw', 'Rose Incense',
        'Sea Incense', 'Odd Incense', 'Spell Tag', 'Mystic Plates',
        'Blackbelt', 'Charcoal', 'Hard Stone', 'Dragon Fang',
        'Magnet', 'Pink Bow', 'Nevermelt Ice', 'Poison Barb',
        'Silver Powder', 'Soft Sand'
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://tgdmb.com/viewtopic.php?p=405123#405123',
            relatedLinks: [
                { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
                { title: 'Pokemon Mystery Dungeon D20', link: 'http://tgdmb.com/viewtopic.php?t=55558' },
            ],
            note: <span><a href='http://tgdmb.com/viewtopic.php?p=282168#282168'>Original Source</a></span>
        }
    }),
    {
        name: 'Aid Rod',
        author: "Koumei",
        link: 'http://www.tgdmb.com/viewtopic.php?p=155236#155236'
    },
];

export const mediumBoGMagicItems: Entry[] = [
    ...["GAR-Driver", "MOE-Driver", "Holo-Projector"].map((name) => {
        return {
            name: name,
            link: "http://tgdmb.com/viewtopic.php?p=141531#141531",
            author: "Koumei",
        };
    }),
    ...["Angry Hat", "Quiet Hat", "Clever Hat"].map((name) => {
        return {
            name: name,
            link: "http://tgdmb.com/viewtopic.php?p=141532#141532",
            author: "Koumei",
        };
    }),
    {
        name: "Succubus Lipstick",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?p=141535#141535",
    },
    ...[
        'Lucky Punch', 'Deep Sea Scale', 'Light Ball', 'Metal Powder',
        'Quick Powder', 'Bone Helm', 'Thick Club', 'Quick Claw',
        'Rocky Helmet', "King's Rock", 'Metal Coat', 'Sharp Beak'
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://tgdmb.com/viewtopic.php?p=405123#405123',
            relatedLinks: [
                { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
                { title: 'Pokemon Mystery Dungeon D20', link: 'http://tgdmb.com/viewtopic.php?t=55558' },
            ],
            note: <span><a href='http://tgdmb.com/viewtopic.php?p=282168#282168'>Original Source</a></span>
        }
    }),
    {
        name: "Syringe",
        author: "Koumei",
        link: "http://www.tgdmb.com/viewtopic.php?p=154820#154820",
    },
    {
        name: "Thunder Drum",
        author: "Koumei",
        link: "http://www.tgdmb.com/viewtopic.php?p=154938#154938",
    },
    ...[
        'Sexy Underwear', 'Gatling Gun', 'Magic Wand', 'UFO-Yoink!', 'Aid Staff'
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://www.tgdmb.com/viewtopic.php?p=155236#155236'
        }
    }),
    {
        name: "Eyepatch of Power",
        author: "Maxus",
        link: "http://www.tgdmb.com/viewtopic.php?p=203282#203282",
    },
    {
        name: "Clockwork Armor",
        author: "Avoraciopoctules",
        link: "http://www.tgdmb.com/viewtopic.php?p=97456#97456",
    },
];

export const greaterBoGMagicItems: Entry[] = [
    {
        name: "Remote Device",
        link: "http://tgdmb.com/viewtopic.php?p=141532#141532",
        author: "Koumei"
    },
    {
        name: "Ominous Bell",
        link: "http://tgdmb.com/viewtopic.php?p=141532#141532",
        author: "Koumei"
    },
    {
        name: "Squamous Scourge",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?p=141534#141534",
    },
    {
        name: "Sexy Underwear",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?p=141535#141535",
    },
    ...['Griseous Orb', 'Lustrous Orb', 'Adamant Orb', 'Soul Dew', 'Gold/Silver Bell'].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://tgdmb.com/viewtopic.php?p=405123#405123',
            relatedLinks: [
                { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
                { title: 'Pokemon Mystery Dungeon D20', link: 'http://tgdmb.com/viewtopic.php?t=55558' },
            ],
            note: <span><a href='http://tgdmb.com/viewtopic.php?p=282168#282168'>Original Source</a></span>
        }
    }),
    ...[
        'Remote Control', 'Emperor Drill',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://www.tgdmb.com/viewtopic.php?p=155236#155236'
        }
    }),
    ...[
        'Purgatory', "Maxwell's Silver Hammer", "Occam's Razor"
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://www.tgdmb.com/viewtopic.php?p=248061#248061'
        }
    }),
];

export const uncategorizedItems: Entry[] = [
    ...["Orbs", "Berries", "Seeds", "Scarves and Glasses"].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://tgdmb.com/viewtopic.php?p=405123#405123',
            relatedLinks: [
                { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
                { title: 'Pokemon Mystery Dungeon D20', link: 'http://tgdmb.com/viewtopic.php?t=55558' },
            ],
            note: <span><a href='http://tgdmb.com/viewtopic.php?p=282168#282168'>Original Source</a></span>
        }
    }),
    {
        name: 'Necromantic Equipment Materials (Tome of Necromancy)',
        author: "Frank and K",
        link: 'http://www.tgdmb.com/viewtopic.php?p=34253#34253',
        wikiLink: 'https://dnd-wiki.org/wiki/Tome_of_Necromancy_(3.5e_Sourcebook)/New_Rules#Necromantic_Equipment'
    },
    {
        name: 'Rifle Demon',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?p=154820#154820',
    },
    ...[
        "Chocolate (consumable)", "Chocolate Cake (consumable)", "Carrot Cake (consumable)",
        "Teacake (consumable)", 'Cheesecake (consumable)', 'Mille Feuille (consumable)',
        'Green Teacake (consumable)', 'Strawberry Cheesecake (consumable)', 'Seven Layer Cake (consumable)',
        'Pavlova (consumable)', 'Angel Soufflé (consumable)', 'Geo Pyramids'
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://www.tgdmb.com/viewtopic.php?p=155236#155236'
        }
    }),
    ...[
        'Fickle Hand of Fate', 'Staff of the Insect Nation', "Occam's Razor",
        "Sandman's One-String Bass", 'Invisible Hand of the Free Market'
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://www.tgdmb.com/viewtopic.php?p=248061#248061'
        }
    }),
    {
        name: 'Dark Glasses',
        author: "Prak",
        link: 'http://tgdmb.com/viewtopic.php?p=281995#281995',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: 'Gym Badges',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=282168#282168',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    ...['Blood/Soul Reaver', 'Heart of Darkness'].map((value) => {
        return {
            name: value,
            author: "Prak",
            link: 'http://www.tgdmb.com/viewtopic.php?p=140623#140623'
        }
    }),
    {
        name: 'Death Galley',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=169157#169157',
    },
    ...['Iron Suit', 'Starry Shield', 'Mjolnir'].map((value) => {
        return {
            name: value,
            author: "Prak",
            link: 'http://www.tgdmb.com/viewtopic.php?p=273142#273142'
        }
    }),
    {
        name: 'Helbogi (Hell Bow)',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=430641#430641',
    },
    {
        name: 'Mantle of Webs',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=465849#465849',
    },
    {
        name: 'Banhammer',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=90889#90889',
    },
    {
        name: 'Nerfbat',
        author: 'SunTzuWarmaster',
        link: 'http://www.tgdmb.com/viewtopic.php?p=91066#91066',
    },
    {
        name: 'Cursed Schoolgirl Outfit of Aberration Summoning',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=94548#94548',
    },
    {
        name: 'Target Painter (Arrows)',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=209479#209479',
    },
    ...['Spell Bombard', 'Eminence Talisman',].map((value) => {
        return {
            name: value,
            author: "Prak",
            link: 'http://www.tgdmb.com/viewtopic.php?p=243948#243948'
        }
    }),
    {
        name: 'Minor Magic Weapon Quality: Dramatic',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=245603#245603',
    },
    ...['Red Tape', 'The Law',].map((value) => {
        return {
            name: value,
            author: "Prak",
            link: 'http://www.tgdmb.com/viewtopic.php?p=273972#273972'
        }
    }),
    {
        name: "Meridia's Bacon",
        author: 'AndreiChekov',
        link: 'http://www.tgdmb.com/viewtopic.php?p=383276#383276',
    },
    ...['The Sword', 'The Redcap',].map((value) => {
        return {
            name: value,
            author: "Prak",
            link: 'http://www.tgdmb.com/viewtopic.php?p=191745#191745'
        }
    }),
    {
        name: "A Boat",
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=191836#191836',
    },
    {
        name: "Consecrator",
        author: 'Maxus',
        link: 'http://www.tgdmb.com/viewtopic.php?p=191875#191875',
    },
    {
        name: "Fighting Trousers",
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=191891#191891',
    },
    {
        name: "Capture Ball",
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=194559#194559',
    },
    {
        name: "Eyepatch of the Veteran",
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/viewtopic.php?p=203510#203510',
    },
    {
        name: "Pretty Penny",
        author: 'Maxus',
        link: 'http://www.tgdmb.com/viewtopic.php?p=240171#240171',
    },
    {
        name: "Governess' Poker",
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=254677#254677',
    },
    {
        name: "Wus (Xiaolin Showdown)",
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=161705#161705',
    },
    {
        name: "Talismans, Misc Magic Items, Armours of the Immortals (Jackie Chan Adventures)",
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=161705#161705',
    },
    {
        name: "Millennium Items (Yu-Gi-Oh!)",
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=162067#162067',
    },
    {
        name: "Cloudski",
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=162232#162232',
    },
    ...['Spear of Destiny', 'Pick of Destiny', 'Fountain of Youth', 'Sword of Kings'].map((value) => {
        return {
            name: value,
            author: "Prak",
            link: 'http://www.tgdmb.com/viewtopic.php?p=165166#165166'
        }
    }),
    {
        name: "Kusari-gama",
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=155965#155965',
    },
    {
        name: "Kusari-gama",
        author: 'CatharzGodfoot',
        link: 'http://www.tgdmb.com/viewtopic.php?p=156007#156007',
    },
    {
        name: "Giant Weapon--Final Fantasy 7",
        author: 'Maxus',
        link: 'http://www.tgdmb.com/viewtopic.php?p=56593#56593',
    },
    ...[
        'Geo Pyramids - Disgaea',
        'Rocket Punch - FF7',
        'Cauldron - FF7',
        '"Magic Wand" - Makai Kingdom',
        'Variable Blade - Shadow Hearts 3',
        'Bio-Force Gauntlet (the BFG) - Doom',
        'Judgement Ring - Shadow Hearts',
        'Technique Manuscript - Pokemon',
        'Psypher Weapons - Odin Sphere',
        'Chaos Emeralds - Sonic the Hedgehog',
        'True Runes (spellcasting items) - Suikoden',
        'Painkillers - Odin Sphere',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://www.tgdmb.com/viewtopic.php?p=56148#56148'
        }
    }),
    ...[
        'UFO-Yoink - Makai Kingdom',
        'The Upgraded Shotgun - Resident Evil',
        'Ashbringer - WoW',
        'Blade of the Kingdom Heart - Kingdom Hearts',
        'Bunny Girl Outfit - Dragon Quest',
        'Fossilised Amber - Pokemon',
        'Tome of Eternal Darkness - Eternal Darkness',
        'Sacred Tome - Makai Kingdom',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://www.tgdmb.com/viewtopic.php?p=56453#56453'
        }
    }),
    ...[
        'Drill Emperor - Disgaea 2',
        'Prinny - Disgaea',
        'Wand of Sheep Strike - Worms Armageddon',
        'Companion Cube - Portal',
        'Amulet of the Elements - Story of Thor',
        'Fossilised Amber - Pokemon',
        'Tome of Eternal Darkness - Eternal Darkness',
        'Sacred Tome - Makai Kingdom',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://www.tgdmb.com/viewtopic.php?p=56453#56453'
        }
    }),
    ...[
        'Stone Mask',
        'Golden Gauntlets',
    ].map((value) => {
        return {
            name: value,
            author: "Maxus",
            link: 'http://www.tgdmb.com/viewtopic.php?p=68113#68113'
        }
    }),
    {
        name: "Pump-action Shotgun",
        author: 'Libertad',
        link: 'http://tgdmb.com/viewtopic.php?p=246616#246616',
    },
    {
        name: "Finn's Cigar Box",
        author: 'Libertad',
        link: 'http://tgdmb.com/viewtopic.php?p=247613#247613',
    },
    {
        name: "Hank's Energy Bow",
        author: 'Libertad',
        link: 'http://tgdmb.com/viewtopic.php?p=247654#247654',
    },
    {
        name: "Dungeons & Dragons Roller Coaster Ride",
        author: 'Libertad',
        link: 'http://tgdmb.com/viewtopic.php?p=248011#248011',
    },
    {
        name: "Chick Tract",
        author: 'Libertad',
        link: 'http://tgdmb.com/viewtopic.php?p=248025#248025',
    },
    {
        name: "Colt .45 Revolver",
        author: 'Libertad',
        link: 'http://tgdmb.com/viewtopic.php?p=248398#248398',
    },
    {
        name: "Tome Armours",
        author: "koz",
        link: "http://www.tgdmb.com/viewtopic.php?t=49257",
    },
    {
        name: "Magic Weapon Abilities",
        author: "Hicks",
        link: "http://www.tgdmb.com/viewtopic.php?t=50249",
    },
    {
        name: "Scaling Magic Weapons",
        author: "koz",
        link: "http://tgdmb.com/viewtopic.php?t=49755",
    },
    ...[
        'Tamed Lightning',
        'Mirrorshard Sword',
        'Giant Scorpion Claws',
        'Demon Whip',
        'Wings of the Vampire Bat',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://www.tgdmb.com/viewtopic.php?p=40605#40605'
        }
    }),
    ...[
        'Blessed Incense Burner',
        'Wightskin Gloves',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://www.tgdmb.com/viewtopic.php?p=40620#40620'
        }
    }),
    ...[
        'Eldritch Glaive',
        'Deep Emerald',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://www.tgdmb.com/viewtopic.php?p=40624#40624'
        }
    }),
    {
        name: "Blood Axe",
        author: "Judging__Eagle",
        link: "http://www.tgdmb.com/viewtopic.php?p=40625#40625",
    },
    ...[
        'God-Kicking Boots (Light)',
        'Grand Goremaul (Two-Handed)',
        'Divine Reflector (One-Handed)',
        'Giant Rosary (Two-Handed)',

    ].map((value) => {
        return {
            name: value,
            author: "HiQKid2",
            link: 'http://www.tgdmb.com/viewtopic.php?p=40633#40633'
        }
    }),
    {
        name: "Vulcan's Candle (One Handed/Two Handed)",
        author: "Aktariel",
        link: "http://www.tgdmb.com/viewtopic.php?p=40643#40643",
    },
    {
        name: "Sky's Edge",
        author: "Aktariel",
        link: "http://www.tgdmb.com/viewtopic.php?p=40652#40652",
    },
    ...[
        'Hat of Dragon Slaying',
        'Кнут, the Whip of Dragon Slaying',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://www.tgdmb.com/viewtopic.php?p=48694#48694'
        }
    }),
    ...[
        'Vierhander [Two-handed]',
        'Sword-chucks [Double-weapon]',
    ].map((value) => {
        return {
            name: value,
            author: "the_taken",
            link: 'http://www.tgdmb.com/viewtopic.php?p=49446#49446'
        }
    }),
    {
        name: "Dagger of Dargon-Slaying [One-Handed]",
        author: "Judging__Eagle",
        link: "http://www.tgdmb.com/viewtopic.php?p=49584#49584",
    },
    ...[
        'Armour of the Exterminator',
        'Helm of the Exterminator',
        'Ghost-Powered Boots of the Exterminator',
        '"Rip" and "Tear", the Exterminating Gauntlets'
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'http://www.tgdmb.com/viewtopic.php?p=52516#52516'
        }
    }),
    ...[
        'Plane of Force',
        'Amphisbaena',
    ].map((value) => {
        return {
            name: value,
            author: "Calibron",
            link: 'http://www.tgdmb.com/viewtopic.php?p=75286#75286'
        }
    }),
    {
        name: "Big Stick",
        author: "Calibron",
        link: "http://www.tgdmb.com/viewtopic.php?p=75298#75298",
    },
    {
        name: "Revising Tome Armor",
        author: "Josh_Kablack",
        link: "http://www.tgdmb.com/viewtopic.php?t=52854",
    },
    {
        name: "Wulfenblimp",
        author: "virgil",
        link: "http://tgdmb.com/viewtopic.php?p=480900#480900",
    },
    ...[
        'Ring of Dumb Luck',
        'The Gauntlets of Frail Might',
        'Beer Goggles',
    ].map((value) => {
        return {
            name: value,
            author: "hyzmarca",
            link: 'http://tgdmb.com/viewtopic.php?p=310093#310093'
        }
    }),
    {
        name: "Revised Tome Armors",
        author: "Sigil",
        link: "http://tgdmb.com/viewtopic.php?t=54024",
    },
];