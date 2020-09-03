import { Entry } from "../entry";
import React from "react";

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
    ].map(({ name, wikiLink }) => {
        return {
            name: name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/viewtopic.php?p=28831#28831',
            wikiLink: wikiLink
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
    ...['Monk of the Dark Moon [Order]', 'Monk of the Long Death [Order]'].map((element) => {
        return {
            name: element,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=479366#479366',
        }
    }),
    ...['Dabbler', 'Master of a School'].map((element) => {
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
                { title: 'Elemental Siphon', link: 'http://tgdmb.com/viewtopic.php?p=154017#154017' },
            ]
        }
    }),
    {
        name: 'Ethereal Blending [Blending]',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?p=154018#154018',
        relatedLinks: [
            { title: 'Elemental Siphon', link: 'http://tgdmb.com/viewtopic.php?p=154017#154017' },
            { title: 'Ethereal Siphon', link: 'http://tgdmb.com/viewtopic.php?p=449214#449214' },
        ]
    },
    {
        name: 'Shadow Blending [Blending]',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?p=154018#154018',
        relatedLinks: [
            { title: 'Elemental Siphon', link: 'http://tgdmb.com/viewtopic.php?p=154017#154017' },
            { title: 'Shadow Siphon', link: 'http://tgdmb.com/viewtopic.php?p=154018#154018' },
        ]
    },
    ...[
        ...['Cosmopolitan Insect [Monstrous]', 'Expanded Targeting [Monstrous]'].map((name) => {
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
        ...['Hellfire Gullet [Monstrous]', 'Hellfrost Wyrm [Monstrous]'].map((name) => {
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
        ...['Auras of Contentment [Monstrous]', 'Ghostly Guard Dog [Monstrous]'].map((name) => {
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
        ...['Blow Kiss [Monstrous]', 'Heart Breaker [Monstrous]', 'Prehensile Tail [Monstrous]'].map((name) => {
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
        ...['Just Sign Here [Monstrous]', 'Hidden Clause [Monstrous]', 'Legally Binding [Monstrous]'].map((name) => {
            return {
                name: name,
                link: 'http://www.tgdmb.com/viewtopic.php?p=544150#544150',
            }
        }),
        {
            name: "Regular Summons [Monstrous]",
            link: "http://www.tgdmb.com/viewtopic.php?p=544469#544469",
        },
        ...['Coven Decorator [Monstrous]', 'Curse Crafter [Monstrous]'].map((name) => {
            return {
                name: name,
                link: 'http://www.tgdmb.com/viewtopic.php?p=544520#544520',
            }
        }),
    ].map(({ name, link }) => {
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
            relatedLinks: [{ title: 'Shadowcaster', link: 'http://tgdmb.com/viewtopic.php?p=127294#127294' }]
        }
    }),
    {
        name: 'Imbue Darkness',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=132122#132122',
        relatedLinks: [{ title: 'Shadowcaster', link: 'http://tgdmb.com/viewtopic.php?p=127294#127294' }]
    },
    ...[
        'Visceral Splatter [Minion]',
        'Stringy Muscles [Minion]',
        'Clot [Minion]',
        'Fine Red Mist [Minion]',
        'Iron Bones [Minion]',
        'Crueller Harvest [Minion]',
        'Flailing Death [Minion]',
        'Cruellest Harvest [Minion]',
    ].map((name) => {
        return {
            name: name,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=316687#316687',
        }
    }),
    ...[
        'Pile the Masses [Minion]',
        'Clog the Rivers with our Dead [Minion]',
        'Cruel Harvest [Minion]',
    ].map((name) => {
        return {
            name: name,
            author: 'SunTzuWarmaster',
            link: 'http://tgdmb.com/viewtopic.php?p=316687#316687',
        }
    }),
    ...[
        'The Dead One Threw a Rock',
        'Trooper',
        'Clog their Rivers with our Dead',
        'Cruel Harvest',
    ].map((name) => {
        return {
            name: name,
            author: 'SunTzuWarmaster',
            link: 'http://www.tgdmb.com/viewtopic.php?p=32766#32766',
        }
    }),
    {
        name: "We've got explosives!",
        author: 'Fwib',
        link: 'http://www.tgdmb.com/viewtopic.php?p=32767#32767',
    },
    {
        name: 'Arcane Meltdown',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?p=32768#32768',
    },
    ...[
        'Disgusting Habits',
        'Exotic Weapon Master',
        'Useful in Death',
        'Fat Lootz',
        'Leader of Peons',
    ].map((name) => {
        return {
            name: name,
            author: 'SunTzuWarmaster',
            link: 'http://www.tgdmb.com/viewtopic.php?p=32772#32772',
        }
    }),
    {
        name: 'Target Practice',
        author: 'SunTzuWarmaster',
        link: 'http://www.tgdmb.com/viewtopic.php?p=32777#32777',
    },
    ...[
        'Foolish Exotic Weapon Selection',
        'I drank oil',
        "The Little One's Curse",
    ].map((name) => {
        return {
            name: name,
            author: 'Koumei',
            link: 'http://www.tgdmb.com/viewtopic.php?p=32790#32790',
        }
    }),
    ...[
        "I Know Something You Don't Know",
        'Unbreakable',
        "Incredibly Irritating",
    ].map((name) => {
        return {
            name: name,
            author: 'Amra',
            link: 'http://www.tgdmb.com/viewtopic.php?p=92321#92321',
        }
    }),
    ...[
        "Soldier's Stance",
        "Mighty Soldier's Stance",
        "Fantastic Soldier's Stance",
        "Giant Soldier's Stance",
        "Epic Soldier's Stance",
    ].map((name) => {
        return {
            name: name,
            author: 'CatharzGodfoot',
            link: 'http://tgdmb.com/viewtopic.php?p=218443#218443',
            relatedLinks: [
                { title: 'Soldier', link: 'http://tgdmb.com/viewtopic.php?t=50949' },
                { title: 'Wiki', link: 'https://dnd-wiki.org/wiki/Soldier_(3.5e_Class)' },
            ],
        }
    }),
    {
        name: 'Spidersight [Fiend]',
        author: 'Prak',
        link: 'http://tgdmb.com/viewtopic.php?p=382776#382776',
    },
    ...[
        'Liminal Being',
        'An Ice Personality [Arcane, Divine]',
        'Great Balls of Fire [Arcane, Divine]',
        'Healing Hands [Divine]',
        'Hot Headed (Arcane, Divine)',
        'Hurting Hands [Divine]',
        'Magical Sleuth [Arcane]',
        "Nystul's Spying Apparatus [Arcane]",
        "Obiken's Mystical Hand [Arcane]",
        'Potion Weaponizer [Arcane, Divine]',
        'This Little Light of Mine [Arcane, Divine]',
        "Triaj's Sight [Divine]",
    ].map((name) => {
        return {
            name: name,
            author: 'Prak',
            link: 'http://tgdmb.com/viewtopic.php?p=476334#476334',
        }
    }),
    ...[
        {
            name: "Spider-fiend [Fiend]",
            link: "https://dnd-wiki.org/wiki/Spider-Fiend_(3.5e_Feat)",
        },
        {
            name: "Agony Caress [Fiend]",
            link: "https://dnd-wiki.org/wiki/Agony_Caress_(3.5e_Feat)",
        },
        {
            name: "Hard Freeze [Fiend]",
            link: "https://dnd-wiki.org/wiki/Hard_Freeze_(3.5e_Feat)",
        },
        {
            name: "Evil Eye [Fiend]",
            link: "https://dnd-wiki.org/wiki/Evil_Eye_(3.5e_Feat)",
        },
        {
            name: "Projectile Vomiting (Acid) [Fiend]",
            link: "https://dnd-wiki.org/wiki/Projectile_Vomiting,_Acid_(3.5e_Feat)",
        },
    ].map(({ name, link }) => {
        return {
            name: name,
            author: "Maxus",
            link: 'http://tgdmb.com/viewtopic.php?p=95455#95455',
            wikiLink: link
        }
    }),
    ...[
        'Water Demon [Fiend]',
        'Touch of the Styx [Fiend]',
        'Curse of Babel [Fiend]',
    ].map((name) => {
        return {
            name: name,
            author: 'Maxus',
            link: 'http://tgdmb.com/viewtopic.php?p=95455#95455',
        }
    }),
    {
        name: 'Bat Out of Hell [Fiend]',
        author: 'Maxus',
        link: 'http://tgdmb.com/viewtopic.php?p=95458#95458',
        wikiLink: 'https://dnd-wiki.org/wiki/Bat_Out_of_Hell_(3.5e_Feat)'
    },
    {
        name: 'Energy Eater [Monster]',
        author: 'Maxus',
        link: 'http://tgdmb.com/viewtopic.php?p=95458#95458',
    },
    {
        name: 'Web Spinner [Fiend]',
        author: 'Maxus',
        link: 'http://tgdmb.com/viewtopic.php?p=95476#95476',
        wikiLink: 'https://dnd-wiki.org/wiki/Webspinner_(3.5e_Feat)'
    },
    {
        name: 'Hellish Humidity [Fiend]',
        author: 'Maxus',
        link: 'http://tgdmb.com/viewtopic.php?p=95476#95476',
    },
    {
        name: 'Speed Freak [Fiend, Celestial]',
        author: 'Maxus',
        link: 'http://tgdmb.com/viewtopic.php?p=130452#130452',
    },
    {
        name: 'Incendiary Boils[Fiend]',
        author: 'Avoraciopoctules',
        link: 'http://tgdmb.com/viewtopic.php?p=132031#132031',
    },
    {
        name: 'Blessed of Koumei',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=398013#398013',
    },
    ...[
        'Shaped Spell [Metamagic]',
        'Strong Spell [Metamagic]',
        'Quicken Spell [Metamagic]',
        'Spell Timing [Metamagic]',
        'Duration Spell [Metamagic]',
        'Subtle Spell [Metamagic]',
    ].map((name) => {
        return {
            name: name,
            author: 'AlphaNerd',
            link: 'http://tgdmb.com/viewtopic.php?p=315832#315832',
            note: <span>Also available <a href='http://tgdmb.com/viewtopic.php?p=144442#144442'>here</a></span>
        }
    }),
    ...[
        'Eldritch Magick [Metamagic]',
        'Enhance Element [Metamagic]',
        'Energy Alteration [Metamagic]',
        'Greenbound Sumnmoning [Metamagic]',
        'Mana Drain [Metamagic]',
        'Negative Energy Infusion [Metamagic]',
        'Piercing Spell [Metamagic]',
        'Soothing Spell [Metamagic]',
    ].map((name) => {
        return {
            name: name,
            author: 'Red_Rob',
            link: 'http://tgdmb.com/viewtopic.php?p=315832#315832',
        }
    }),
    ...[
        'Anger Point [Monstrous]',
        'Arena Trap [Monstrous]',
        'Battle Armour [Monstrous]',
        'Beautiful Idol [Monstrous][Idol]',
        'Clear Sky [Monstrous]',
        'Cool Idol [Monstrous][Idol]',
        'Cursed Body [Monstrous]',
        'Cute Charm [Monstrous]',
        'Cute Idol [Monstrous][Idol]',
        'Drought [Monstrous]',
        'Dry Skin [Monstrous]',
        'Eerie Emanation [Monstrous]',
        'Flood Warning [Monstrous]',
        'Hero [Monstrous]',
        'HM Slave [Monstrous]',
        'Hydration [Monstrous]',
        'Insight [Monstrous][Psionic]',
        'Insomnia [Monstrous]',
        'Jagged Edge [Monstrous]',
        'Levitate [Monstrous]',
        'Lightning Rod [Monstrous]',
        'Liquid Ooze [Monstrous]',
        'Magma Blood [Monstrous]',
        'Me First! [Monstrous]',
        'Mean [Monstrous]',
        'Melee Opportunist [Monstrous]',
        'Mood Maker [Monstrous]',
        'Moxie [Mosntrous]',
        'Oblivious [Monstrous]',
        'Poison Point [Monstrous]',
        'Pressure [Monstrous]',
        'Rock Head [Monstrous]',
        'Sand Veil [Monstrous]',
        'Sandstream [Monstrous]',
        'Scrappy [Monstrous]',
        'Smart Idol [Monstrous][Idol]',
        'Static [Monstrous]',
        'Sturdy Build [Monstrous]',
        'Swift Swim [Monstrous]',
        'Synchronise [Monstrous]',
        'Tough Idol [Monstrous] [Idol]',
        'Walking Winter [Monstrous]',
    ].map((name) => {
        return {
            name: name,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=280502#280502',
            relatedLinks: [{ title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },]
        }
    }),
    {
        name: 'Hidden Power [Monstrous]',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=281990#281990',
        relatedLinks: [{ title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },]
    },
    {
        name: "Espeon's Awakening (Monstrous)",
        link: 'http://tgdmb.com/viewtopic.php?p=62582#62582',
        author: 'Koumei',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: "Sneasel's Awakening (Monstrous)",
        link: 'http://tgdmb.com/viewtopic.php?p=62592#62592',
        author: 'Koumei',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: "Weavile's Awakening (Monstrous)",
        link: 'http://tgdmb.com/viewtopic.php?p=62592#62592',
        author: 'Koumei',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: "Umbreon's Awakening (Monstrous)",
        link: 'http://tgdmb.com/viewtopic.php?p=62633#62633',
        author: 'Koumei',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: 'Metagross Evolution',
        link: 'http://tgdmb.com/viewtopic.php?p=62728#62728',
        author: 'Koumei',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    ...[
        'Totemic Power',
        'Cosmic Support',
        'Cosmic Awareness',
        'Cosmic Control',
    ].map((name) => {
        return {
            name: name,
            author: 'Prak',
            link: 'http://www.tgdmb.com/viewtopic.php?p=441128#441128',
        }
    }),
    ...[
        'Nethar Symbiote Bond',
        'Aggressive Protoplasm[Symbiote]',
        'Constricting Symbiote[Symbiote]',
        'Enhanced Chameleonic Ability[Symbiote]',
        'Extra Biomass[Symbiote]',
        'Greasy Protoplasm[Symbiote]',
        'Limb Shaping[Symbiote]',
        'Pincers[Symbiote]',
        'Shards of the Symbiote[Symbiote]',
        'Share Symbiote[Symbiote]',
        'Symbiote Domination[Symbiote]',
        'Weapon Shaping[Symbiote]',
    ].map((name) => {
        return {
            name: name,
            author: 'Prak',
            link: 'http://www.tgdmb.com/viewtopic.php?p=495227#495227',
        }
    }),
    {
        name: 'Igor',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?p=126426#126426',
    },
    ...[
        'Gargantuan Size',
        'Colossal Size',
        'Immense Size',
    ].map((name) => {
        return {
            name: name,
            author: 'Prak',
            link: 'http://www.tgdmb.com/viewtopic.php?p=460460#460460',
        }
    }),
    ...[
        'Versatile Magical Warrior [General]',
        'Focused Magical Warrior [General]',
    ].map((name) => {
        return {
            name: name,
            author: 'Prak',
            link: 'http://tgdmb.com/viewtopic.php?p=383896#383896',
        }
    }),
    {
        name: "Extra Swarm Form [Undead]",
        author: "Prak",
        link: "http://www.tgdmb.com/viewtopic.php?p=162382#162382"
    },
    {
        name: "Mindhound (Psionic, Regional--Scarlet Brotherhood)",
        author: "Prak",
        link: "http://www.tgdmb.com/viewtopic.php?p=371289#371289"
    },
    {
        name: "Psihawk (Psionic, Regional--Scarlet Brotherhood)",
        author: "Prak",
        link: "http://www.tgdmb.com/viewtopic.php?p=371310#371310"
    },
    ...[
        'Unoerthly Cave Looter (Regional--Barrier Peaks)',
        'Tainted by Unoerthly Magics (Regional--Barrier Peaks)',
    ].map((name) => {
        return {
            name: name,
            author: 'Prak',
            link: 'http://www.tgdmb.com/viewtopic.php?p=372314#372314',
        }
    }),
    {
        name: "Craft Cybertronian [Item] (Item Creation)",
        author: "Prak",
        link: "http://tgdmb.com/viewtopic.php?p=443375#443375"
    },
    ...[
        'Linked-Con (Leadership)',
        'Brainmaster',
    ].map((name) => {
        return {
            name: name,
            author: 'Prak',
            link: 'http://tgdmb.com/viewtopic.php?p=443443#443443',
            relatedLinks: [{ title: 'Cybertronian', link: 'http://tgdmb.com/viewtopic.php?p=443375#443375' }]
        }
    }),
    ...[
        'Cobra School (Tactical)',
        'Way of the Flaming Fist (Tactical)',
        'Cheetah School Monk (Tactical)'
    ].map((name) => {
        return {
            name: name,
            author: 'Dean',
            link: 'http://www.tgdmb.com/viewtopic.php?p=51223#51223',
            relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
        }
    }),
    ...[
        'Cobra School Student',
        'Cobra School Master'
    ].map((name) => {
        return {
            name: name,
            author: 'Dean',
            link: 'http://www.tgdmb.com/viewtopic.php?p=51997#51997',
            relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
        }
    }),
    {
        name: 'Cobra School Initiate',
        author: 'Dean',
        link: 'http://www.tgdmb.com/viewtopic.php?p=51997#51997'
    },
    ...[
        'Snake School[Monk]',
        'Cheetah School[Monk]',
        'Bo-staff Style[Monk]',
        'Bow Style[Monk]',
        'The Way of the Sword[Monk]',
    ].map((name) => {
        return {
            name: name,
            author: 'SunTzuWarmaster',
            link: 'http://www.tgdmb.com/viewtopic.php?p=51997#51997',
            relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
        }
    }),
    {
        name: 'Way of the Flaming Fist',
        author: 'SunTzuWarmaster',
        link: 'http://www.tgdmb.com/viewtopic.php?p=52156#52156',
        relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
    },
    {
        name: 'Bo-Staff Master',
        author: 'Dean',
        link: 'http://www.tgdmb.com/viewtopic.php?p=52175#52175',
        relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
    },
    {
        name: 'Way of the Flaming Fist',
        author: 'Dean',
        link: 'http://www.tgdmb.com/viewtopic.php?p=52332#52332',
        relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
    },
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
    {
        name: "A Feat Per Level List",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?t=57248"
    },
    {
        name: 'Stuff For the Tabletop Game for New Players',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=435197#435197',
        relatedLinks: [{ title: 'A Feat Per Level List is more recent', link: 'http://tgdmb.com/viewtopic.php?t=57248' }]
    },
    {
        name: "Feat/Level List, Take Two",
        author: "virgil",
        link: "http://tgdmb.com/viewtopic.php?t=57049"
    },
    {
        name: 'Preliminary Feat/Level List',
        author: 'virgil',
        link: 'http://tgdmb.com/viewtopic.php?t=56656',
        relatedLinks: [{ title: 'Feat/Level List, Take Two', link: 'http://tgdmb.com/viewtopic.php?t=57049' }]
    },
    {
        name: "Achievement Feats",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?p=87970#87970"
    },

]