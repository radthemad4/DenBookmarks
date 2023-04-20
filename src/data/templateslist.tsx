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
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=34253#p34253',
            wikiLink: element.wikiLink
        }
    }),
    {
        name: 'Bone Warrior',
        author: 'Wiseman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=505061#p505061',
    },
    {
        name: 'Ghost',
        author: 'DSMatticus',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=467029#p467029',
    },
    {
        name: 'Mummy',
        author: 'Maxus',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=86287#p86287',
        wikiLinks: [
            { title: 'Mummy Template', link: 'https://dnd-wiki.org/wiki/Mummy_(3.5e_Template)' },
            { title: 'Mummy Paragon', link: 'https://dnd-wiki.org/wiki/Mummy_Paragon_(3.5e_Racial_Paragon_Class)' },
            { title: 'Mummy Lord', link: 'https://dnd-wiki.org/wiki/Mummy_Lord_(3.5e_Prestige_Class)' },
        ],
    },
    ...[
        { name: "Death Knight", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=441352#p441352" },
        { name: "Half-Celestial (Half-Celestial Sword Archon, Half-Celestial Bralani Eladrin)", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=395622#p395622" },
        { name: "Half-Fiend/Half-Succubus", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=395623#p395623" },
        { name: "Heartless", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=521877#p521877" },
        { name: "Lesser Nobody ", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=521878#p521878" },
        { name: "Ghul", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=425341#p425341" },
        { name: "God", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=428338#p428338" },
        { name: "Lycanthrope", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=403038#p403038" },
        { name: "Otherworldly Creatures", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=499167#p499167" },
        { name: "Petitioner", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=425001#p425001" },
        { name: "Storm King (Cloud, Rain, Wind, Lightning)", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=386065#p386065" },
        { name: "Vampire", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=403731#p403731" },
        { name: "Vampire Spawn", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=405461#p405461" },
    ].map(({ name, link }) => {
        return {
            name,
            link,
            author: 'Wiseman'
        }
    }),
    {
        name: 'Jägermonster',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=387002#p387002',
    },
    {
        name: 'Planeswalker',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=490880#p490880',
    },
    {
        name: 'Spirit Knight',
        author: 'Maxus',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=63461#p63461',
    },
    {
        name: 'Two Headed Creature',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56782',
    },
    {
        name: 'Heresiarch',
        author: 'Wiseman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=302760#p302760',
    },
    {
        name: 'Axiomatic',
        author: 'Wiseman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=304331#p304331',
    },
    {
        name: 'Undead',
        author: 'Ektagliaresia',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=256655#p256655',
    },
    ...[
        { name: "Fast Animal", link: "http://wiki.fectin.com/doku.php/scratchpad:templates:cat" },
        { name: "Tough Animal", link: "http://wiki.fectin.com/doku.php/scratchpad:templates:tough_animal" },
        { name: "Slithery Animal", link: "http://wiki.fectin.com/doku.php/scratchpad:templates:slithery_animal" },
        { name: "Skeleton", link: "http://wiki.fectin.com/doku.php/scratchpad:templates:skeleton" },
        { name: "Hot!", link: "http://wiki.fectin.com/doku.php/scratchpad:templates:hot" },
        { name: "Cold!", link: "http://wiki.fectin.com/doku.php/scratchpad:templates:cold" },
        { name: "Airy!", link: "http://wiki.fectin.com/doku.php/scratchpad:templates:airy" },
        { name: "Chaotic", link: "http://wiki.fectin.com/doku.php/scratchpad:templates:chaotic" },
    ].map(({ name, link }) => {
        return {
            name,
            link,
            author: 'fectin',
            relatedLinks: [{ title: 'Den Thread', link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51912' }]
        }
    }),
    {
        name: 'Zam-ena',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=68791#p68791',
        relatedLinks: [{ title: 'Paragon', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=69059#p69059' }]
    },
    {
        name: 'Feycaster',
        author: 'JonSetanta',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=40510',
    },
    {
        name: 'Unborn',
        author: 'Brobdingnagian',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=39450#p39450',
    },
    {
        name: 'Leader Monster',
        author: 'Brobdingnagian',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=39356#p39356',
    },
    {
        name: 'Speedbump',
        author: 'AlphaNerd',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=39344',
    },
    {
        name: 'Kindred (Vampire)',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=440593#p440593',
        author: 'Prak',
    },
];
