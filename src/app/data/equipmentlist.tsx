import { Entry } from "../entry";
import React from "react";

export const bogItemCollections: Entry[] = [
    {
        name: "Book of Gears",
        author: "Frank and K",
        link: "http://www.tgdmb.com/viewtopic.php?t=35813",
        wikiLink: "http://www.dnd-wiki.org/wiki/Book_of_Gears_%283.5e_Sourcebook%29",
        note: "only partially complete, use Red_Rob's"
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
            link: 'http://tgdmb.com/viewtopic.php?p=405123#405123'
        }
    })
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
            link: 'http://tgdmb.com/viewtopic.php?p=405123#405123'
        }
    })
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
            link: 'http://tgdmb.com/viewtopic.php?p=405123#405123'
        }
    })
];

export const uncategorizedItems: Entry[] = [
    ...["Orbs", "Berries", "Seeds", "Scarves and Glasses"].map((value)=>{
        return {
            name: value,
            author: "Wiseman",
            link: 'http://tgdmb.com/viewtopic.php?p=405123#405123'
        }
    }),
    {
        name: 'Necromantic Equipment Materials (Tome of Necromancy)',
        author: "Frank and K",
        link: 'http://www.tgdmb.com/viewtopic.php?p=34253#34253',
        wikiLink: 'https://dnd-wiki.org/wiki/Tome_of_Necromancy_(3.5e_Sourcebook)/New_Rules#Necromantic_Equipment'
    }
];