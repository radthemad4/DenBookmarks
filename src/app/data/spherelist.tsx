import { Entry } from "../entry";

export const spheres: Entry[] = [
    ...[
        {
            name: 'Bone',
            wikiLink: 'https://dnd-wiki.org/wiki/Bone_(3.5e_Sphere)'
        },
        {
            name: 'Bubbles',
            wikiLink: 'https://dnd-wiki.org/wiki/Bubbles_(3.5e_Sphere)'
        },
        {
            name: 'Carnage',
            wikiLink: 'https://dnd-wiki.org/wiki/Carnage_(3.5e_Sphere)'
        },
        {
            name: 'Cold',
            wikiLink: 'https://dnd-wiki.org/wiki/Cold_(3.5e_Sphere)'
        },
        {
            name: 'Death',
            wikiLink: 'https://dnd-wiki.org/wiki/Death_(3.5e_Sphere)'
        },
        {
            name: 'Dominion',
            wikiLink: 'https://dnd-wiki.org/wiki/Dominion_(3.5e_Sphere)'
        },
        {
            name: 'Fire',
            wikiLink: 'https://dnd-wiki.org/wiki/Fire_(3.5e_Sphere)'
        },
        {
            name: 'Frostbite',
            wikiLink: 'https://dnd-wiki.org/wiki/Frostbite_(3.5e_Sphere)'
        },
        {
            name: 'Heresy',
            wikiLink: 'https://dnd-wiki.org/wiki/Heresy_(3.5e_Sphere)'
        },
        {
            name: 'Pyre',
            wikiLink: 'https://dnd-wiki.org/wiki/Pyre_(3.5e_Sphere)'
        },
        {
            name: 'Seduction',
            wikiLink: 'https://dnd-wiki.org/wiki/Seduction_(3.5e_Sphere)'
        },
        {
            name: 'Sleep',
            wikiLink: 'https://dnd-wiki.org/wiki/Sleep_(3.5e_Sphere)'
        },
        {
            name: 'Stone',
            wikiLink: 'https://dnd-wiki.org/wiki/Stone_(3.5e_Sphere)'
        },
        {
            name: 'Terror',
            wikiLink: 'https://dnd-wiki.org/wiki/Terror_(3.5e_Sphere)'
        },
        {
            name: 'Venom',
            wikiLink: 'https://dnd-wiki.org/wiki/Venom_(3.5e_Sphere)'
        },
        {
            name: 'Violation',
            wikiLink: 'https://dnd-wiki.org/wiki/Violation_(3.5e_Sphere)'
        },
        {
            name: 'Voracity',
            wikiLink: 'https://dnd-wiki.org/wiki/Voracity_(3.5e_Sphere)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/viewtopic.php?p=28831#28831',
            wikiLink: element.wikiLink
        }
    }),
    {
        name: 'Time',
        author: 'PhaedrusXY',
        link: 'http://tgdmb.com/viewtopic.php?p=139550#139550'
    },
];