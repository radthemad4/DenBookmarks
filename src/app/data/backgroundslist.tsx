import { Entry } from "../entry";

export const backgrounds: Entry[] = [
    {
        name: 'Raised by Humans',
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?p=141532#141532",
    },
    ...['Spider-Born', 'Web Fetishist'].map((value) => {
        return {
            name: value,
            author: "Nachtigallerator",
            link: "http://tgdmb.com/viewtopic.php?p=141533#141533",
        }
    }),
    {
        name: "Chosen One",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?p=141534#141534",
        relatedLinks: [{ title: "Yuan-Ti Halfblood", link: "http://tgdmb.com/viewtopic.php?p=141534#141534" }],
    },
    {
        name: "Death Cult",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?p=141534#141534"
    },
    {
        name: "Tainted One",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?p=141534#141534",
    },
    {
        name: "Overlord's Vassal",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?p=141535#141535",
    },
    {
        name: "Penitent",
        author: "Koumei",
        link: "http://tgdmb.com/viewtopic.php?p=141535#141535",
    },
    {
        name: "House Plant",
        author: "Nachtigallerator",
        link: "http://tgdmb.com/viewtopic.php?p=141536#141536",
    },
    ...['Center Stage', 'Outlaw', 'Refugee', 'Wanderer', 'Craftsman', 'Scholar', 'Farmer'].map((value) => {
        return {
            name: value,
            author: "Wiseman",
            link: "http://tgdmb.com/viewtopic.php?p=405125#405125",
            relatedLinks: [{title: 'Pokemon Mystery Dungeon D20', link: 'http://tgdmb.com/viewtopic.php?t=55558'}]
        }
    }),
    ...[
        {
            name: 'War Profiteer',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#War_Profiteer'
        },
        {
            name: 'Veteran of The War',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Veteran_of_The_War'
        },
        {
            name: 'Street Rat',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Street_Rat'
        },
        {
            name: 'Slave of the Hobgoblin Clans',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Slave_of_the_Hobgoblin_Clans'
        },
        {
            name: 'Royalty of a Fallen Nation',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Royalty_of_a_Fallen_Nation'
        },
        {
            name: 'The Resistance',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#The_Resistance'
        },
        {
            name: 'Refugee from The War',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Refugee_from_The_War'
        },
        {
            name: 'Raised by Owlbears',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Raised_by_Owlbears'
        },
        {
            name: 'Moil Wrought',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Moil_Wrought'
        },
        {
            name: 'Hero of the Peasants',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Hero_of_the_Peasants'
        },
        {
            name: 'Experimental Stock',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Experimental_Stock'
        },
        {
            name: 'Apprenticed',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Apprenticed'
        },
        {
            name: 'Amnesia',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Amnesia'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/viewtopic.php?p=33298#33298',
            wikiLink: element.wikiLink
        }
    }),
    {
        name: "Dungeonborn",
        author: 'Libertad',
        link: 'http://tgdmb.com/viewtopic.php?p=246649#246649',
    },
    ...['Exile', 'Former Claudia Miner', 'Disgruntled Airship Hand', 'Really Big Game Hunter', 'Student of Superstition',].map((value) => {
        return {
            name: value,
            author: "Josh_Kablack",
            link: "http://tgdmb.com/viewtopic.php?p=178501#178501",
        }
    }),
];