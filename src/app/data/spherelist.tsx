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
    ...[
        {
            name: 'Permafrost',
            wikiLink: 'https://dnd-wiki.org/wiki/Permafrost_(3.5e_Sphere)'
        },
        {
            name: 'Radiance',
            wikiLink: 'https://dnd-wiki.org/wiki/Radiance_(3.5e_Sphere)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'IGTN',
            link: 'http://tgdmb.com/viewtopic.php?p=165845#165845',
            wikiLink: element.wikiLink
        }
    }),
    {
        name: 'Lies',
        author: 'Hicks',
        link: 'http://tgdmb.com/viewtopic.php?t=50458'
    },
    {
        name: 'Truth',
        author: 'koz',
        link: 'http://tgdmb.com/viewtopic.php?p=122972#122972'
    },
    ...['Cheating', 'Snake', 'Stealing'].map((name) => {
        return {
            name: name,
            author: 'koz',
            link: 'http://www.tgdmb.com/viewtopic.php?p=123198#123198',
        }
    }),
    {
        name: 'Teleportation',
        author: 'Hicks',
        link: 'http://tgdmb.com/viewtopic.php?p=534091#534091'
    },
    ...[
        'Electricity', 'Gravity', 'Magnetism', 'Plasma ',
        'Sonics', 'Vacuum', 'Acid', 'Magma', 'Metal'
    ].map((name) => {
        return {
            name: name,
            author: 'Darth Rabbitt',
            link: 'http://tgdmb.com/viewtopic.php?p=540615#540615',
        }
    }),
    {
        name: 'Life',
        author: 'Hicks',
        link: 'http://tgdmb.com/viewtopic.php?p=543812#543812'
    },
    {
        name: 'Badgers',
        author: 'Rejakor',
        link: 'http://www.tgdmb.com/viewtopic.php?p=100914#100914'
    },
    ...['Trickery', 'Aegis'].map((name) => {
        return {
            name: name,
            author: 'Akula',
            link: 'http://www.tgdmb.com/viewtopic.php?p=100982#100982',
        }
    }),
    {
        name: 'Ravenous Butterfly',
        author: 'Murtak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=101119#101119'
    },
    {
        name: 'Aegis',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/viewtopic.php?p=101119#101119'
    },
    {
        name: 'Trickery ',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/viewtopic.php?p=101119#101119'
    },
    {
        name: 'Eye',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/viewtopic.php?p=113068#113068'
    },
    ...['Valor', 'Peace'].map((name) => {
        return {
            name: name,
            author: 'Avoraciopoctules',
            link: 'http://www.tgdmb.com/viewtopic.php?p=144258#144258',
        }
    }),
    ...['Virtue', 'Purification'].map((name) => {
        return {
            name: name,
            author: 'Avoraciopoctules',
            link: 'http://www.tgdmb.com/viewtopic.php?p=144336#144336',
        }
    }),
    {
        name: 'Tempest',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/viewtopic.php?p=144494#144494'
    },
    {
        name: 'Crusader',
        author: 'For Valor',
        link: 'http://www.tgdmb.com/viewtopic.php?p=144808#144808'
    },
    {
        name: 'Prototype',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=182473#182473'
    },
    ...['Spider', 'Web'].map((name) => {
        return {
            name: name,
            author: 'Prak',
            link: 'http://tgdmb.com/viewtopic.php?p=382776#382776',
        }
    }),
    {
        name: 'Time',
        author: 'PhaedrusXY',
        link: 'http://tgdmb.com/viewtopic.php?p=133561#133561'
    },
    {
        name: 'Storm',
        author: 'Maxus',
        link: 'http://tgdmb.com/viewtopic.php?p=95458#95458',
    },
    {
        name: 'Psionics',
        author: 'Quantumboost',
        link: 'http://tgdmb.com/viewtopic.php?p=133024#133024',
    },
    ...['Majesty', 'Magi',].map((name) => {
        return {
            name: name,
            author: 'CatharzGodfoot',
            link: 'http://www.tgdmb.com/viewtopic.php?p=90608#90608',
        }
    }),
    ...['Courage', 'Healing',].map((name) => {
        return {
            name: name,
            author: 'koz',
            link: 'http://www.tgdmb.com/viewtopic.php?p=90619#90619',
        }
    }),
    ...[
        'Martyr', 'Unicorns & Rainbows', 'Rainbows & Unicorns'
    ].map((name) => {
        return {
            name: name,
            author: 'CatharzGodfoot',
            link: 'http://www.tgdmb.com/viewtopic.php?p=90621#90621',
        }
    }),
    {
        name: 'Judgement',
        author: 'CatharzGodfoot',
        link: 'http://www.tgdmb.com/viewtopic.php?p=90632#90632',
    },
    {
        name: 'Prayer',
        author: 'koz',
        link: 'http://www.tgdmb.com/viewtopic.php?p=90633#90633',
    },
    {
        name: 'Black Dragon',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=90648#90648',
    },
    ...[
        'Illusion', 'Shadow', 'Rainbow Unicorn', 'Black Dragon',
        'Blue Dragon', 'Green Dragon', 'Red Dragon', 'White Dragon',
        'Gold Dragon'
    ].map((name) => {
        return {
            name: name,
            author: 'CatharzGodfoot',
            link: 'http://www.tgdmb.com/viewtopic.php?p=248454#248454',
        }
    }),
    {
        name: 'Deception',
        author: 'Maxus',
        link: 'http://tgdmb.com/viewtopic.php?p=59910#59910',
    },
    ...['Earth', 'Stone', 'Metal',].map((name) => {
        return {
            name: name,
            author: 'Prak',
            link: 'http://tgdmb.com/viewtopic.php?p=158692#158692',
        }
    }),
    {
        name: 'Wind (Old)',
        author: 'Kaelik',
        link: 'http://www.tgdmb.com/viewtopic.php?p=102602#102602',
    },
    {
        name: 'Wind',
        author: 'Kaelik',
        link: 'http://www.tgdmb.com/viewtopic.php?p=456186#456186',
        wikiLink: 'https://dnd-wiki.org/wiki/Wind_(3.5e_Sphere)'
    },
    {
        name: 'Travel',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=442428#442428',
    },
    {
        name: 'Beastshaper',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=501164#501164',
    },
    ...['Ash', 'Salt', 'Trickery','Unmaking', 'Vapour'].map((name) => {
        return {
            name: name,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=545939#545939',
        }
    }),
];