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
    ...[
        { name: "Death Knight", link: "http://www.tgdmb.com/viewtopic.php?p=441352#441352" },
        { name: "Half-Celestial (Half-Celestial Sword Archon, Half-Celestial Bralani Eladrin)", link: "http://tgdmb.com/viewtopic.php?p=395622#395622" },
        { name: "Half-Fiend/Half-Succubus", link: "http://tgdmb.com/viewtopic.php?p=395623#395623" },
        { name: "Heartless", link: "http://www.tgdmb.com/viewtopic.php?p=510671#510671" },
        { name: "Ghul", link: "http://tgdmb.com/viewtopic.php?p=425341#425341" },
        { name: "God", link: "http://www.tgdmb.com/viewtopic.php?p=428338#428338" },
        { name: "Lycanthrope", link: "http://tgdmb.com/viewtopic.php?p=403038#403038" },
        { name: "Otherworldly Creatures", link: "http://www.tgdmb.com/viewtopic.php?p=499167#499167" },
        { name: "Petitioner", link: "http://www.tgdmb.com/viewtopic.php?p=425001#425001" },
        { name: "Storm King (Cloud, Rain, Wind, Lightning)", link: "http://tgdmb.com/viewtopic.php?p=386065#386065" },
        { name: "Vampire", link: "http://tgdmb.com/viewtopic.php?p=403731#403731" },
        { name: "Vampire Spawn", link: "http://tgdmb.com/viewtopic.php?p=405461#405461" },
    ].map(({name, link})=>{
        return {
            name: name,
            link: link,
            author: 'Wiseman'
        }
    }),
    {
        name: 'Jägermonster',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=387002#387002',
    },
    {
        name: 'Planeswalker',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=490880#490880',
    },
    {
        name: 'Spirit Knight',
        author: 'Maxus',
        link: 'http://tgdmb.com/viewtopic.php?p=63461#63461',
    },
    {
        name: 'Two Headed Creature',
        author: 'Kaelik',
        link: 'http://tgdmb.com/viewtopic.php?t=56782',
    },
];