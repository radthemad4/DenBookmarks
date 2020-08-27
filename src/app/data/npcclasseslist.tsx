import { Entry } from "../entry";

export const npcClasses: Entry[] = [
    ...[
        {
            name: 'Warrior',
            wikiLink: 'https://dnd-wiki.org/wiki/Warrior_(3.5e_NPC_Class)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/viewtopic.php?p=33297#33297',
            wikiLink: element.wikiLink
        }
    }),
    ...['Guard', 'Priest', 'Sage'].map((element) => {
        return {
            name: element,
            author: 'Iaimeki',
            link: 'http://www.tgdmb.com/viewtopic.php?p=50379#50379',
        }
    }),
    ...['Commoner', 'Expert'].map((element) => {
        return {
            name: element,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=165701#165701',
        }
    }),
    {
        name: 'Aristocrat',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=165725#165725',
    },
    {
        name: 'Verdant Follower',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?p=169948#169948',
    },
    {
        name: 'Commoner',
        author: 'virgil',
        link: 'http://tgdmb.com/viewtopic.php?p=165139',
    },
];