import { Entry } from "../entry";

export const bardPerformanceStyles: Entry[] = [
    ...[
        'Blend Into Emptiness',
        'Diverting Tactics',
        'Entangling Snares',
        'Hidden Hands of Violence',
        'Literal Self Control',
        'Poetic Justice',
        'Puppet Master',
        'Stop Hitting Yourself',
        'Teeter Dance',
        'Tethered Effects',
    ].map((name) => {
        return {
            name: name,
            link: 'http://tgdmb.com/viewtopic.php?p=539859#539859',
            author: 'Koumei'
        }
    }),
];