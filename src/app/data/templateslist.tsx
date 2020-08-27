import { Entry } from "../entry";

export const templates: Entry[] = [
    ...[
        {
            name: "Revenant",
            wikiLink: "https://dnd-wiki.org/wiki/Revenant_(3.5e_Template)",
        },
        {
            name: "Vampire",
            wikiLink: "https://dnd-wiki.org/wiki/Vampire,_Tome_(3.5e_Template)",
        },
        {
            name: "Ghoul",
            wikiLink: "https://dnd-wiki.org/wiki/Ghoul,_Tome_(3.5e_Template)",
        },
        {
            name: "Swordwraith",
            wikiLink: "https://dnd-wiki.org/wiki/Swordwraith_(3.5e_Template)",
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/viewtopic.php?p=34253#34253',
            wikiLink: element.wikiLink
        }
    }),
    {
        name: 'Bone Warrior',
        author: 'Wiseman',
        link: 'http://www.tgdmb.com/viewtopic.php?p=505061#505061',
    },
    {
        name: 'Ghost',
        author: 'DSMatticus',
        link: 'http://tgdmb.com/viewtopic.php?p=467029#467029',
    },
    {
        name: 'Mummy',
        author: 'Maxus',
        link: 'http://tgdmb.com/viewtopic.php?p=86287#86287',
        wikiLinks: [
            { title: 'Mummy Template', link: 'https://dnd-wiki.org/wiki/Mummy_(3.5e_Template)' },
            { title: 'Mummy Paragon', link: 'https://dnd-wiki.org/wiki/Mummy_Paragon_(3.5e_Racial_Paragon_Class)' },
            { title: 'Mummy Lord', link: 'https://dnd-wiki.org/wiki/Mummy_Lord_(3.5e_Prestige_Class)' },
          ],
    },
];