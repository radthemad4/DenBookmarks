import { Entry } from "../entry";

export const feats: Entry[] = [
    {
        name: "Art of War",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?p=141531#141531",
        relatedLinks: [{ title: "Soldier", link: "http://tgdmb.com/viewtopic.php?t=50949" }]
    },
    ...['Arachnid Mastery [Monstrous]', 'Spider Magic: [Monstrous]'].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: "http://tgdmb.com/viewtopic.php?p=141533#141533",
        }
    }),
    ...['Snake Mastery: [Monstrous]', 'Snake Magic: [Monstrous]'].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: "http://tgdmb.com/viewtopic.php?p=141534#141534",
            relatedLinks: [{ title: "Yuan-Ti Halfblood", link: "http://tgdmb.com/viewtopic.php?p=141534#141534" }],
        }
    }),
    {
        name: "Magic of the Plant",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?p=141536#141536",
    },
    ...[{
        name: "A Feast Unknown [Necromantic Creation]",
        link: "https://dnd-wiki.org/wiki/A_Feast_Unknown_(3.5e_Feat)",
    },
    {
        name: "Body Assemblage [Necromantic Creation]",
        link: "https://dnd-wiki.org/wiki/A_Feast_Unknown_(3.5e_Feat)",
    },
    {
        name: "Feed the Dark Gods [Necromantic Creation]",
        link: "https://dnd-wiki.org/wiki/Feed_the_Dark_Gods_(3.5e_Feat)",
    },
    {
        name: "Path of Blood [Necromantic Creation]",
        link: "https://dnd-wiki.org/wiki/Path_of_Blood_(3.5e_Feat)",
    },
    {
        name: "Whispers of the Otherworld [Necromantic Creation]",
        link: "https://dnd-wiki.org/wiki/Whispers_of_the_Otherworld_(3.5e_Feat)",
    },
    {
        name: "Wrappings of the Ages [Necromantic Creation]",
        link: "https://dnd-wiki.org/wiki/Wrappings_of_the_Ages_(3.5e_Feat)",
    },
    {
        name: "Fairy Eater [General]",
        link: "https://dnd-wiki.org/wiki/Fairy_Eater_(3.5e_Feat)",
    },
    {
        name: "Heavenly Desserts [General]",
        link: "https://dnd-wiki.org/wiki/Heavenly_Desserts_(3.5e_Feat)",
    },
    {
        name: "Devil Preparation [General]",
        link: "https://dnd-wiki.org/wiki/Devil_Preparation_(3.5e_Feat)",
    },
    {
        name: "Child Necromancer [General]",
        link: "https://dnd-wiki.org/wiki/Child_Necromancer_(3.5e_Feat)",
    },
    {
        name: "Blood Painter [General]",
        link: "https://dnd-wiki.org/wiki/Blood_Painter_(3.5e_Feat)",
    },
    {
        name: "Sleep of the Ages [General]",
        link: "https://dnd-wiki.org/wiki/Sleep_of_the_Ages_(3.5e_Feat)",
    },
    {
        name: "Boneblade Master [General]",
        link: "https://dnd-wiki.org/wiki/Boneblade_Master_(3.5e_Feat)",
    },
    {
        name: "Ghost Cut Technique [General]",
        link: "https://dnd-wiki.org/wiki/Ghost_Cut_Technique_(3.5e_Feat)",
    },
    {
        name: "Enervating Touch [Undead]",
        link: "https://dnd-wiki.org/wiki/Enervating_Touch_(3.5e_Feat)"
    },
    {
        name: "Control Spawn [Undead]",
        link: "https://dnd-wiki.org/wiki/Control_Spawn_(3.5e_Feat)"
    },
    {
        name: "Paralyzing Touch [Undead]",
        link: "https://dnd-wiki.org/wiki/Paralyzing_Touch_(3.5e_Feat)",
    }].map((element) => {
        return {
            name: element.name,
            author: "Frank and K",
            link: 'https://www.tgdmb.com/viewtopic.php?p=34251#34251',
            wikiLink: element.link
        }
    }),
    ...[
        {
            name: 'Apprenticeship [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Apprenticeship_(3.5e_Feat)'
        },
        {
            name: 'Attune Domain [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Attune_Domain_(3.5e_Feat)'
        },
        {
            name: 'Attune Sphere [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Attune_Sphere_(3.5e_Feat)'
        },
        {
            name: 'Blood War Sorcerer [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Blood_War_Sorcerer_(3.5e_Feat)'
        },
        {
            name: 'Blood War Squaddie [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Blood_War_Squaddie_(3.5e_Feat)'
        },
        {
            name: 'Breath Weapon [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Breath_Weapon_(3.5e_Feat)'
        },
        {
            name: 'Broker of the Infernal [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Broker_of_the_Infernal_(3.5e_Feat)'
        },
        {
            name: 'Carrier [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Carrier_(3.5e_Feat)'
        },
        {
            name: 'Constricting Fiend [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Constricting_Fiend_(3.5e_Feat)'
        },
        {
            name: 'Craft of the Soulstealer [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Craft_of_the_Soulstealer_(3.5e_Feat)'
        },
        {
            name: 'Devour the Soul [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Devour_the_Soul_(3.5e_Feat)'
        },
        {
            name: 'Dominions of the Infernal',
            wikiLink: 'https://dnd-wiki.org/wiki/Dominions_of_the_Infernal_(3.5e_Feat)'
        },
        {
            name: 'Elemental Aura [Fiend, Elemental]',
            wikiLink: 'https://dnd-wiki.org/wiki/Elemental_Aura_(3.5e_Feat)'
        },
        {
            name: 'Essence Gourmand [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Essence_Gourmand_(3.5e_Feat)'
        },
        {
            name: 'Extra Arms [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Extra_Arms_(3.5e_Feat)'
        },
        {
            name: 'Extra Summons [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Extra_Summons_(3.5e_Feat)'
        },
        {
            name: 'Fiend Cabalist [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Fiend_Cabalist_(3.5e_Feat)'
        },
        {
            name: 'Fiendish Invisibility [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Fiendish_Invisibility_(3.5e_Feat)'
        },
        {
            name: 'Greater Teleport [Monstrous]',
            wikiLink: 'https://dnd-wiki.org/wiki/Greater_Teleport_(3.5e_Feat)'
        },
        {
            name: 'Harmless Form [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Harmless_Form_(3.5e_Feat)'
        },
        {
            name: 'Heighten Spell-like Ability [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Heighten_Spell-like_Ability_(3.5e_Feat)'
        },
        {
            name: 'Hellscarred [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Hellscarred_(3.5e_Feat)'
        },
        {
            name: 'Huge Size [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Huge_Size_(3.5e_Feat)',
        },
        {
            name: 'Large Size [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Large_Size_(3.5e_Feat)'
        },
        {
            name: 'Memories of Death [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Memories_of_Death_(3.5e_Feat)'
        },
        {
            name: 'Pincers [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Pincers_(3.5e_Feat)'
        },
        {
            name: 'Poison Sacs [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Poison_Sacs_(3.5e_Feat)'
        },
        {
            name: 'Product of Infernal Dalliance [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Product_of_Infernal_Dalliance_(3.5e_Feat)'
        },
        {
            name: 'Slime Trail [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Slime_Trail_(3.5e_Feat)'
        },
        {
            name: 'Spines of Fury [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Spines_of_Fury_(3.5e_Feat)'
        },
        {
            name: 'Sting of the Scorpion [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Sting_of_the_Scorpion_(3.5e_Feat)'
        },
        {
            name: 'Stolen Breath [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Stolen_Breath_(3.5e_Feat)'
        },
        {
            name: 'Stoning Gaze [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Stoning_Gaze_(3.5e_Feat)'
        },
        {
            name: 'Supernatural Virulence [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Supernatural_Virulence_(3.5e_Feat)'
        },
        {
            name: 'Wings of Evil [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Wings_of_Evil_(3.5e_Feat)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/viewtopic.php?p=28831#28831'
        }
    }),
    ...[
        'Dragon Descendant [Affinity]',
        'Draconic Breath [Affinity]',
        'Draconic Breath, Metallic [Affinity]',
        'Draconic Domain [Affinity]',
        'Anarchic Affinity [Affinity]',
        'Axiomatic Affinity [Affinity]',
        'Celestial Affinity [Affinity]',
        'Infernal Affinity [Affinity]',
        'Planar Resistance [Affinity]',
        'Air Affinity [Affinity]',
        'Earth Affinity [Affinity]',
        'Fire Affinity [Affinity]',
        'Water Affinity [Affinity]',
        'Shadow Affinity [Affinity]',
        'Fey Child [Affinity]',
        'Affine Immunity [Affinity]',
        'Affine Resilience [Affinity]',
    ].map((element) => {
        return {
            name: element,
            author: 'Iaimeki',
            link: 'http://www.tgdmb.com/viewtopic.php?p=50377#50377',
        }
    }),
    ...[
        'Wings of Good [Celestial]',
        'Ethereal Wings [Celestial]',
    ].map((element) => {
        return {
            name: element,
            author: 'Maxus',
            link: 'http://www.tgdmb.com/viewtopic.php?p=103679#103679',
        }
    }),
    ...[
        'Synch Blade [General]',
        'Keyblade Armor',
        'Formchange [General]',
        'Sliding Dash [Fighter]',
        'Leaf Bracer [Spellcasting]'
    ].map((element) => {
        return {
            name: element,
            author: 'Wiseman',
            link: 'http://www.tgdmb.com/viewtopic.php?p=520732#520732',
        }
    }),
    ...['Monk of the Dark Moon [Order]','Monk of the Long Death [Order]'].map((element) => {
        return {
            name: element,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=479366#479366',
        }
    }),
    ...['Dabbler','Master of a School'].map((element) => {
        return {
            name: element,
            author: 'krusk',
            link: 'http://tgdmb.com/viewtopic.php?p=524466#524466',
        }
    }),
    ...['Astral', 'Positive', 'Negative', 'Wood'].map((element) => {
        return {
            name: `${element} Blending [Blending]`,
            author: 'Kaelik',
            link: 'http://tgdmb.com/viewtopic.php?p=154018#154018',
            relatedLinks: [
                {title: 'Elemental Siphon', link: 'http://tgdmb.com/viewtopic.php?p=154017#154017'},
            ]
        }
    }),
    {
        name: 'Ethereal Blending [Blending]',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?p=154018#154018',
        relatedLinks: [
            {title: 'Elemental Siphon', link: 'http://tgdmb.com/viewtopic.php?p=154017#154017'},
            {title: 'Ethereal Siphon', link: 'http://tgdmb.com/viewtopic.php?p=449214#449214'},
        ]
    },
    {
        name: 'Shadow Blending [Blending]',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?p=154018#154018',
        relatedLinks: [
            {title: 'Elemental Siphon', link: 'http://tgdmb.com/viewtopic.php?p=154017#154017'},
            {title: 'Shadow Siphon', link: 'http://tgdmb.com/viewtopic.php?p=154018#154018'},
        ]
    },
    ...[
        ...['Cosmopolitan Insect [Monstrous]','Expanded Targeting [Monstrous]'].map((name) => {
            return {
                name: name,
                link: 'http://www.tgdmb.com/viewtopic.php?p=543836#543836',
            }
        }),
        {
            name: "Mind Dungeon [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=543872#543872",
        },
        {
            name: "Leftovers [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=543876#543876",
        },
        ...['Hellfire Gullet [Monstrous]','Hellfrost Wyrm [Monstrous]'].map((name) => {
            return {
                name: name,
                link: 'http://www.tgdmb.com/viewtopic.php?p=543878#543878',
            }
        }),
        {
            name: "Gather the Dead [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=543887#543887",
        },
        {
            name: "Arachnoversity [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=543892#543892",
        },
        ...['Auras of Contentment [Monstrous]','Ghostly Guard Dog [Monstrous]'].map((name) => {
            return {
                name: name,
                link: 'http://www.tgdmb.com/viewtopic.php?p=543909#543909',
            }
        }),
        {
            name: "Secret Weapon [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=543911#543911",
        },
        {
            name: "Uncommon Blades [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=543915#543915",
        },
        {
            name: "Bear It All [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=543916#543916",
        },
        {
            name: "Speak The Truth [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=543918#543918",
        },
        {
            name: "Raging Angel Tactics [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=543919#543919",
        },
        {
            name: "Cunning Dog [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=543941#543941",
        },
        {
            name: "Non-Euclidean Placement [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=543944#543944",
        },
        {
            name: "Shadow Song [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=543953#543953",
        },
        {
            name: "Terrible Gaze [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=543970#543970",
        },
        {
            name: "Fiendish Trickery [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=543980#543980",
        },
        ...['Blow Kiss [Monstrous]','Heart Breaker [Monstrous]', 'Prehensile Tail [Monstrous]'].map((name) => {
            return {
                name: name,
                link: 'http://www.tgdmb.com/viewtopic.php?p=544048#544048',
            }
        }),
        {
            name: "Very Sneaky Rat [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=544067#544067",
        },
        {
            name: "Mystic Dance Technique [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=544071#544071",
        },
        {
            name: "Hive Mind [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=544105#544105",
        },
        {
            name: "Knowledge Is Power [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=544108#544108",
        },
        {
            name: "Contractual Incentives [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=544122#544122",
        },
        {
            name: "Greater Entangle [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=544134#544134",
        },
        ...['Just Sign Here [Monstrous]','Hidden Clause [Monstrous]', 'Legally Binding [Monstrous]'].map((name) => {
            return {
                name: name,
                link: 'http://www.tgdmb.com/viewtopic.php?p=544150#544150',
            }
        }),
        {
            name: "Regular Summons [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=544469#544469",
        },
        ...['Coven Decorator [Monstrous]','Curse Crafter [Monstrous]'].map((name) => {
            return {
                name: name,
                link: 'http://www.tgdmb.com/viewtopic.php?p=544520#544520',
            }
        }),
    ].map(({name, link}) => {
        return {
            name: name,
            link: link,
            author: 'Koumei'
        }
    }),
    ...[
        'Dread Touch of the Abyss',
        'Born in Darkness',
        'Afternoon Shadows',
        'In the End',
    ].map((name) => {
        return {
            name: name,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=131636#131636',
            relatedLinks: [{title: 'Shadowcaster', link: 'http://tgdmb.com/viewtopic.php?p=127294#127294'}]
        }
    }),
    {
        name: 'Imbue Darkness',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=132122#132122',
        relatedLinks: [{title: 'Shadowcaster', link: 'http://tgdmb.com/viewtopic.php?p=127294#127294'}]
    }
];

export const featCollections: Entry[] = [
    {
        name: "Pokemon Mystery Dungeon D20",
        author: "Wiseman, others",
        link: "http://tgdmb.com/viewtopic.php?p=405125#405125"
    },
    {
        name: "Tome of Necromancy Feats",
        author: "Frank and K",
        link: 'https://www.tgdmb.com/viewtopic.php?p=34251#34251',
        wikiLink: "https://dnd-wiki.org/wiki/Tome_of_Necromancy_(3.5e_Sourcebook)/Necromancers_with_Style"
    },

]