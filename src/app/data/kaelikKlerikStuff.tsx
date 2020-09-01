import { Entry } from "../entry";

export const kaelikKlerikDomainLists: Entry[] = [
    ...[
        'Balance',
        'Cavern',
        'Charm',
        'Cold',
        'Community',
        'Courage',
        'Darkness',
        'Domination',
        'Dream',
        'Family',
        'Fate',
        'Glory',
        'Hatred',
        'Liberation',
        'Madness',
        'Mind',
        'Moon',
        'Nobility',
        'Oracle',
        'Pestilence',
        'Renewal',
        'Retribution',
        'Rune',
        'Scalykind',
        'Slime',
        'Spider',
        'Storm',
        'Suffering',
        'Undeath',
    ].map((name) => {
        return {
            name: name,
            link: 'http://tgdmb.com/viewtopic.php?p=538542#538542',
            author: 'Koumei'
        }
    }),
];

export const kaelikKlerikSpellLists: Entry[] = [
    {
        name: 'Additional Spells for Clerics',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=539726#539726'
    }
];