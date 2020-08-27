import { Entry } from "../entry";

export const spells: Entry[] = [
    ...[{
        name: "Congealing Consumption (Sorcerer/Wizard 2)",
        link: "https://dnd-wiki.org/wiki/Congealing_Consumption_(3.5e_Spell)",
    },
    {
        name: "Curse of Crumbling Conviction (Sorcerer/Wizard 4)",
        link: "https://dnd-wiki.org/wiki/User:Frank_and_K/Curse_of_Crumbling_Conviction_(3.5e_Spell)",
    },
    {
        name: "Dark Symmetry (Sorcerer/Wizard 2)",
        link: "https://dnd-wiki.org/wiki/Dark_Symmetry_(3.5e_Spell)",
    },
    {
        name: "Form of Death (Sorcerer/Wizard 2)",
        link: "https://dnd-wiki.org/wiki/Form_of_Death_(3.5e_Spell)",
    },
    {
        name: "Puppet Dance (Sorcerer/Wizard 3)",
        link: "https://dnd-wiki.org/wiki/Puppet_Dance_(3.5e_Spell)",
    },
    {
        name: "Sobering Skeletal Stillness (Sorcerer/Wizard 1)",
        link: "https://dnd-wiki.org/wiki/Sobering_Skeletal_Stillness_(3.5e_Spell)",
    },
    {
        name: "Tasha's Tomb Tainting (Sorcerer/Wizard 1)",
        link: "https://dnd-wiki.org/wiki/Tasha%27s_Tomb_Tainting_(3.5e_Spell)",
    },
    {
        name: "Tomb Tile Tessellation (Sorcerer/Wizard 2)",
        link: "https://dnd-wiki.org/wiki/Tomb_Tile_Tessellation_(3.5e_Spell)",
    },].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/viewtopic.php?p=34252#34252',
            wikiLink: element.link
        }
    }),
    ...[
        {
            name: 'Polymorph Self (Sorcerer/Wizard 4)',
            wikiLink: 'https://dnd-wiki.org/wiki/Polymorph_Self,_Tome_(3.5e_Spell)'
        },
        {
            name: 'Polymorph Other (Sorcerer/Wizard 4)',
            wikiLink: 'https://dnd-wiki.org/wiki/Polymorph_Other,_Tome_(3.5e_Spell)'
        },
        {
            name: 'Mass Polymorph (Sorcerer/Wizard 7)',
            wikiLink: 'https://dnd-wiki.org/wiki/Mass_Polymorph,_Tome_(3.5e_Spell)'
        },
        {
            name: 'Human Form (Bard 1, Sorcerer/Wizard 2)',
            wikiLink: 'https://dnd-wiki.org/wiki/Human_Form_(3.5e_Spell)'
        },
        {
            name: 'Lycanthropy (Sorcerer/Wizard 3)',
            wikiLink: 'https://dnd-wiki.org/wiki/Lycanthropy_(3.5e_Spell)'
        },
        {
            name: 'Monstrous Form (Sorcerer/Wizard 4)',
            wikiLink: 'https://dnd-wiki.org/wiki/Monstrous_Form_(3.5e_Spell)'
        },
        {
            name: 'Fiend Form (Sorcerer/Wizard 6)',
            wikiLink: 'https://dnd-wiki.org/wiki/Dragon_Form_(3.5e_Spell)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/viewtopic.php?p=28552#28552',
            wikiLink: element.wikiLink
        }
    }),
];