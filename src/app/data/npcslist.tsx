import { MonsterEntry } from "../entry";

export const npcs: MonsterEntry[] = [
    ...[
        {name: 'Sub-Chief Grugrik, Half-Orc Chieftain 1', challengeRating: 1},
        {name: 'Tribal Guard, Orc Warrior 1', challengeRating: 1},
        {name: 'Chief Grugrik, Half-Orc Chieftain 5', challengeRating: 5},
        {name: 'Honor Guard Warrior, Orc Warrior 4', challengeRating: 4},
        {name: 'Honor Guard Adept, Half-Orc Adept 4', challengeRating: 4},
        {name: 'Maldrissa, Human Summoner 1', challengeRating: 1},
    ].map(({name, challengeRating})=>{
        return {
            name: name,
            author: 'Koumei',
            link: 'http://www.tgdmb.com/viewtopic.php?p=144506#144506',
            challengeRating: challengeRating
        };
    }),
    {
        name: 'Commoner',
        author: 'virgil',
        link: 'http://tgdmb.com/viewtopic.php?p=165139',
        challengeRating: 1/6
    },
    {
        name: 'Olga, Neutral Evil Human Witch 6',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?p=103097#103097',
        challengeRating: 6
    },
]