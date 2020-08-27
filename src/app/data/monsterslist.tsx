import { MonsterEntry } from "../entry";

export const monsters: MonsterEntry[] = [
    ...[
        {name: 'H Poke', challengeRating: 10},
        {name: 'Arceus', challengeRating: 13},
    ].map(({name, challengeRating})=>{
        return {
            name: name,
            author: 'Koumei',
            link: 'http://www.tgdmb.com/viewtopic.php?p=144506#144506',
            challengeRating: challengeRating
        };
    }),
    ...[
        {name: 'Bone Cock', challengeRating: 0.5},
        {name: 'Death Cock', challengeRating: 2},
        {name: 'Doom Cock', challengeRating: 4},
        {name: 'Paragon Cock', challengeRating: 15},
    ].map(({name, challengeRating})=>{
        return {
            name: name,
            author: 'Koumei',
            link: 'http://www.tgdmb.com/viewtopic.php?p=144506#144506',
            challengeRating: challengeRating,
        };
    }),
    {
        name: 'Fire breathing Megachicken',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=313803#313803',
        challengeRating: 4,
    },
]