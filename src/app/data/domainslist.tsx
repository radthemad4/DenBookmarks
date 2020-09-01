import { Entry } from "../entry";

export const domains: Entry[] = [
    {
        name: 'Fire',
        author: 'Lokathor',
        link: 'http://www.tgdmb.com/viewtopic.php?p=128327#128327'
    },
    ...[
        'Air', 'Animal', 'Death', 'Destruction', 'Earth',
        'Fire', 'Healing', 'Knowledge', 'Luck', 'Magic',
        'Plant', 'Protection', 'Strength', 'Sun', 'Travel',
        'Trickery', 'War', 'Water',
    ].map((name)=>{
        return {
            name: name,
            author: 'koz',
            link: 'http://tgdmb.com/viewtopic.php?p=128457#128457'
        }
    }),
    {
        name: 'Denim',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=536511#536511'
    },
    {
        name: 'Public',
        author: 'AndreiChekov',
        link: 'http://tgdmb.com/viewtopic.php?t=55390'
    },
];