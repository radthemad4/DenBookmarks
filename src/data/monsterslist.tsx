import { MonsterEntry } from "../entry";
import { pokedexRedoneFakemon, pokedexRedoneMonsters } from "./pokedexredone";

export const monsters: MonsterEntry[] = [
    ...[
        { name: 'H Poke', challengeRating: 10 },
        { name: 'Arceus', challengeRating: 13 },
    ].map(({ name, challengeRating }) => {
        return {
            name,
            author: 'Koumei',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=144506#p144506',
            challengeRating: challengeRating,
            relatedLinks: [
                { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
            ]
        };
    }),
    ...[
        { name: 'Bone Cock', challengeRating: 0.5 },
        { name: 'Death Cock', challengeRating: 2 },
        { name: 'Doom Cock', challengeRating: 4 },
        { name: 'Paragon Cock', challengeRating: 15 },
    ].map(({ name, challengeRating }) => {
        return {
            name,
            author: 'Koumei',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=313904#p313904',
            challengeRating,
        };
    }),
    {
        name: 'Fire breathing Megachicken',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=313803#p313803',
        challengeRating: 4,
    },
    {
        name: 'Rifle Demon',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=154820#p154820',
        challengeRating: 10
    },
    {
        name: 'Culler',
        author: 'virgil',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=516835#p516835',
        challengeRating: 10
    },
    {
        name: 'Functionary',
        author: 'virgil',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=529657#p529657',
        challengeRating: 3
    },
    {
        name: 'Huge Giant (Air)',
        author: 'virgil',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=490913#p490913',
        challengeRating: 8
    },
    ...[
        { name: 'Killer Pillow', challengeRating: 1 },
        { name: 'Flannel Beast', challengeRating: 3 },
        { name: 'Sheet Phantom', challengeRating: 5 },
    ].map(({ name, challengeRating }) => {
        return {
            name,
            author: 'Prak',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=488914#p488914',
            challengeRating: challengeRating,
        };
    }),
    ...[
        { name: 'Cushion Fungus', challengeRating: 5 },
        { name: 'Sheet fungus', challengeRating: 3 },
    ].map(({ name, challengeRating }) => {
        return {
            name,
            author: 'Prak',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=488922#p488922',
            challengeRating: challengeRating,
        };
    }),
    {
        name: 'Lock Lurker',
        author: 'Prak',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=489008#p489008',
        challengeRating: 4
    },
    {
        name: 'Palimpsest',
        author: 'Prak',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=489100#p489100',
        challengeRating: 2
    },
    ...[
        ...[
            { name: 'Fairy', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=472264#p472264' },
            { name: 'Happy Bunny', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=472407#p472407' },
            { name: 'Matoran', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=468716#p468716' },
            { name: 'Planetouched', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=428664#p42866' },
            { name: 'Prinny', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=54924&p=571815#p571815' },
            { name: 'Shadow', link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=546707#p546707' },
            { name: 'Eladrin', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=564282#p564282', },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 0.5
            }
        }),
        ...[
            { name: 'Bohrak-Va', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=471073#p471073' },
            { name: 'Cactoid', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=472405#p472405' },
            { name: 'Dremora', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=573531#p573531' },
            { name: 'Gria', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=457540#p457540' },
            { name: 'Kappa', link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=489536#p489536' },
            { name: 'Leg Eater', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=548506#p548506' },
            { name: 'Merfolk', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=465680#p465680' },
            { name: 'Town Guard', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=446296#p446296' },
            { name: 'Witch', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=424325#p424325' },
            { name: 'Zenythri', link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=413827#p413827' },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 1
            }
        }),
        ...[
            { name: "Baaz Draconian", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=464367#p464367" },
            { name: "Bandit", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=420973#p420973" },
            { name: "Cassisian", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384917#p384917" },
            { name: "Chocobo", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=457302#p457302" },
            { name: "Coure Eladrin", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=381368#p381368" },
            { name: "Cultist", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=455982#p455982" },
            { name: "Formian Worker", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=509490#p509490" },
            { name: "Frost Draconian", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=518795#p518795" },
            { name: "Ichthon", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=472406#p472406" },
            { name: "Lantern Archon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384851#p384851" },
            { name: "Mining Robot", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=452995#p452995" },
            { name: "Lumberjack Robot", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=453000#p453000" },
            { name: "Monodrone", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=387183#p387183" },
            { name: "Mud Slaad", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384642#p384642" },
            { name: "Musteval", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=383987#p383987" },
            { name: "Nightlurker", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=509492#p509492" },
            { name: "Orc Warrior", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=446997#p446997" },
            { name: "Small Earth Elemental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=460668#p460668" },
            { name: "Small Ice Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=440038#p440038" },
            { name: "Small Magma Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=446999#p446999" },
            { name: "Small Smoke Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=550121#p550121" },
            { name: "Wyrmling Dragon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=483328#p483328" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 2
            }
        }),
        ...[
            { name: "Bacchae", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=573666#p573666" },
            { name: "Chaos Fury", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=572144#p572144" },
            { name: "Draugr", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=464931#p464931" },
            { name: "Nigawarai", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=498964#p498964" },
            { name: "Nupperibo", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=571564#p571564" },
            { name: "Positive Mephit", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=387184#p387184" },
            { name: "Putto", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=571918#p571918" },
            { name: "Spyglass Archon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=383572#p383572" },
            { name: "Very Young Dragon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=483328#p483328" },
            { name: "Frogzard", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=564402#p564402" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 3,
            }
        }),
        ...[
            { name: "Bohrok", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=468546#p468546" },
            { name: "Bomb", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=496103#p496103" },
            { name: "Dabus", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=398221#p398221" },
            { name: "Energy Hound", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=471244#p471244" },
            { name: "Flan", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=472409#p472409" },
            { name: "Hordling, Small", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=387338#p387338" },
            { name: "Kapak Draconian", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=502374#p502374" },
            { name: "Juggernaut", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=570790#p570790" },
            { name: "Medium Earth Elemental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=460668#p460668" },
            { name: "Medium Ice Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=440038#p440038" },
            { name: "Medium Magma Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=446999#p446999" },
            { name: "Medium Smoke Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=550121#p550121" },
            { name: "Nighthunter", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=510384#p510384" },
            { name: "Nui-Jaga", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=564463#p564463" },
            { name: "Okubi", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=498991#p498991" },
            { name: "Sleipnir", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=472408#p472408" },
            { name: "Turaga", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=542821#p542821" },
            { name: "Winemaker Genie", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=412084#p412084" },
            { name: "Young Dragon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=483328#p483328" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 4
            }
        }),
        ...[
            { name: "Abiorach", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384174#p384174" },
            { name: "Artist Genie", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=416706#p416706" },
            { name: "Battlemage", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=422066#p422066" },
            { name: "Barbazu", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=501269#p501269" },
            { name: "Bonnacon", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=426245#p426245" },
            { name: "Deathlock", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=549345#p549345" },
            { name: "Fader Bull", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=471245#p471245" },
            { name: "Juvenile Dragon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=483328#p483328" },
            { name: "Nightcharger", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=507328#p507328" },
            { name: "Noviere", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=387596#p387596" },
            { name: "Observer", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=507324#p507324" },
            { name: "Red Slaad", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384645#p384645" },
            { name: "Salamander, Flamebrother", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=426395#p426395" },
            { name: "Thri-Kreen Hunter", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=432510#p432510" },
            { name: "Tiefling Fighter", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=420898#p420898" },
            { name: "Vahki", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=468257#p468257" },
            { name: "Wood Soldier", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=455655#p455655" },
            { name: "Bluespawn Stormlizard", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=545424#p545424" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 5
            }
        }),
        ...[
            { name: "Bralani Eladrin", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=381365#p381365" },
            { name: "Bloodletter", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=570369#p570369" },
            { name: "Dryad", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=414635#p414635" },
            { name: "Earth Minion", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=548505#p548505" },
            { name: "Ferrumach", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=573287#p573287" },
            { name: "Hordling, Medium", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=387338#p387338" },
            { name: "Hound Archon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=381374#p381374" },
            { name: "Irda", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=509491#p509491" },
            { name: "Janni", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=413443#p413443" },
            { name: "Large Earth Elemental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=460668#p460668" },
            { name: "Large Ice Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=440038#p440038" },
            { name: "Large Magma Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=446999#p446999" },
            { name: "Large Smoke Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=550121#p550121" },
            { name: "Magaav", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=571420#p571420" },
            { name: "Malakim", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384915#p384915" },
            { name: "Mezzoloth", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=536092#p536092" },
            { name: "Pyromancer", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=446292#p446292" },
            { name: "Redspawn Firebelcher", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=518392#p518392" },
            { name: "Steel Devil", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=498989#p498989" },
            { name: "Thyiades", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=551720#p551720" },
            { name: "Vaati", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=427312#p427312" },
            { name: "Vapor Draconian", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=518797#p518797" },
            { name: "Water Minion", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=563927#p563927" },
            { name: "Yuki-on-na", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=436950#p436950" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 6
            }
        }),
        ...[
            { name: "Bozak Draconian", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=502375#p502375" },
            { name: "Hill Giant", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=383040#p383040" },
            { name: "Lynel", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=571734#p571734" },
            { name: "Nightmare", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=446912#p446912" },
            { name: "Nymph", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=424982#p424982" },
            { name: "Phoelarch", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=455980#p455980" },
            { name: "Slime", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=498990#p498990" },
            { name: "Tsucora", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=571723#p571723" },
            { name: "Visorak", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=468579#p468579" },
            { name: "Young Adult Dragon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=483328#p483328" },
            { name: "Kenmun", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=547487#p547487" },
            { name: "Zoveri", link: "https://www.tgdmb.com/phpBB3/viewtopic.php?t=54924&p=573365#p573365" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 7
            }
        }),
        ...[
            { name: "Abishai", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=543922#p543922" },
            { name: "Adult Dragon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=483328#p483328" },
            { name: "Angeloid", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=453008#p453008" },
            { name: "Blue Slaad", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384311#p384311" },
            { name: "Bohrok-Kal", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=470892#p470892" },
            { name: "Doom Viper", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=471772#p471772" },
            { name: "Drowned", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=383583#p383583" },
            { name: "Erinyes", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=491651#p491651" },
            { name: "Fire Reaver", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=392257#p392257" },
            { name: "Flesh Render", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=392261#p392261" },
            { name: "Hordling, Large", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=387338#p387338" },
            { name: "Huge Earth Elemental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=460668#p460668" },
            { name: "Huge Ice Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=440038#p440038" },
            { name: "Huge Magma Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=446999#p446999" },
            { name: "Huge Smoke Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=550121#p550121" },
            { name: "Ice Flenser", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=392254#p392254" },
            { name: "Justice Archon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=382123#p382123" },
            { name: "Lupinal", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=383994#p383994" },
            { name: "Malcubus", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=518719#p518719" },
            { name: "Mind Flayer", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=411431#p411431" },
            { name: "Movanic Deva", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384172#p384172" },
            { name: "Nightslaver", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=509494#p509494" },
            { name: "Oni/Ogre Mage", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=509505#p509505" },
            { name: "Salamander", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=426396#p426396" },
            { name: "Sky Bison", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=442307#p442307" },
            { name: "Vanth", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=545423#p545423" },
            { name: "Firelasher", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=556089#p556089" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 8
            }
        }),
        ...[
            { name: "Architect Genie", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=460250#p460250" },
            { name: "Avoral Guardinal", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=381372#p381372" },
            { name: "Burning Bull", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=537826#p537826" },
            { name: "Cuprilach", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384175#p384175" },
            { name: "Kikanalo", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=471246#p471246" },
            { name: "Lampad", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=464299#p464299" },
            { name: "Lightning Draconian", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=505698#p505698" },
            { name: "Narzugon", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=491649#p491649" },
            { name: "Primatal", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384524#p384524" },
            { name: "Vargheist", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=548399#p548399" },
            { name: "Zelekhut", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=564403#p564403" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 9
            }
        }),
        ...[
            { name: "Arrow Demon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=383588#p383588" },
            { name: "Axiomite", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=54924&p=547790#p547790" },
            { name: "Chasme", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=544339#p544339" },
            { name: "Coeurl", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=513148#p513148" },
            { name: "Dao", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=387597#p387597" },
            { name: "Dementor", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=429343#p429343" },
            { name: "Djinn", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=412996#p412996" },
            { name: "Efreeti", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=411415#p411415" },
            { name: "Falxugon (Harvester Devil)", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=412084#p412084" },
            { name: "Farastu Demodand", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=549630#p549630" },
            { name: "Fire Snake", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=426288#p426288" },
            { name: "Firre Eladrin", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=381367#p381367" },
            { name: "Gazer", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=472177#p472177" },
            { name: "Greater Earth Elemental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=460668#p460668" },
            { name: "Greater Ice Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=440038#p440038" },
            { name: "Greater Magma Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=446999#p446999" },
            { name: "Greater Smoke Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=550121#p550121" },
            { name: "Green Slaad", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=387185#p387185" },
            { name: "Holy Dragon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=448701#p448701" },
            { name: "Ice Golem", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=424983#p424983" },
            { name: "Incarnate", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=471560#p471560" },
            { name: "Khayal", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=416181#p416181" },
            { name: "Maelephant", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=572542#p572542" },
            { name: "Mature Adult Dragon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=483328#p483328" },
            { name: "Marid", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=413005#p413005" },
            { name: "Nighthaunter", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=511925#p511925" },
            { name: "Osyluth (Bone Devil)", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=518588#p518588" },
            { name: "Per", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=382124#p382124" },
            { name: "Qorrashi", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=416896#p416896" },
            { name: "Rahkshi", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=468258#p468258" },
            { name: "Schalris", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=416756#p416756" },
            { name: "Shiere", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384686#p384686" },
            { name: "Sibyllic Guardian", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=572349#p572349" },
            { name: "Spectral Death", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384700#p384700" },
            { name: "Wood Giant", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=383039#p383039" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 10
            }
        }),
        ...[
            { name: "Asura", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=483326#p483326" },
            { name: "Deepspawn", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=510243#p510243" },
            { name: "Dogai", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=491650#p491650" },
            { name: "Excruciarch", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=443753#p443753" },
            { name: "Hezrou", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=499615#p499615" },
            { name: "Visorak, Kahgarak", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=544502#p544502" },
            { name: "Malboro", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=496099#p496099" },
            { name: "Mercane", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=491652#p491652" },
            { name: "Reaper", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=500987#p500987" },
            { name: "Stone Giant", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=371443#p371443" },
            { name: "Sword Archon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=380238#p380238" },
            { name: "Ursinal Guardinal", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=381373#p381373" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 11
            }
        }),
        ...[
            { name: "Amnizu", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=547647#p547647" },
            { name: "Arcanaloth", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=383986#p383986" },
            { name: "Aspect of Bahamut", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=537828#p537828" },
            { name: "Aspect of Nerull", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=471391#p471391" },
            { name: "Astral Deva", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384171#p384171" },
            { name: "Barraki", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=470829#p470829" },
            { name: "Decaton", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=405438#p405438" },
            { name: "Elder Earth Elemental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=460668#p460668" },
            { name: "Elder Ice Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=440038#p440038" },
            { name: "Elder Magma Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=446999#p446999" },
            { name: "Elder Smoke Paramental", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=550121#p550121" },
            { name: "Ghaele Eladrin", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=382134#p382134" },
            { name: "Glatorian", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=469547#p469547" },
            { name: "Hordling, Huge", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=387338#p387338" },
            { name: "Kelvezu", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=520147#p520147" },
            { name: "Leonal", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=381369#p381369" },
            { name: "Leukoloth", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=513373#p513373" },
            { name: "Mist Golem", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=424999#p424999" },
            { name: "Nightflyer", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=510380#p510380" },
            { name: "Night Hag", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=538736#p538736" },
            { name: "Old Dragon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=483328#p483328" },
            { name: "Oread", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=382133#p382133" },
            { name: "Reaper Lord", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=570399#p570399" },
            { name: "Sand Giant", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=399209#p399209" },
            { name: "Salamander, Noble", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=426397#p426397" },
            { name: "Shocker", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=414722#p414722" },
            { name: "Slayer Genie", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=415959#p415959" },
            { name: "Sun Giant", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=371442#p371442" },
            { name: "Treant", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=414634#p414634" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 12
            }
        }),
        ...[
            { name: "Drow Archpriestess", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=446301#p446301" },
            { name: "Hound Action Hero", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=456856#p456856" },
            { name: "Thanaloth", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=408106#p408106" },
            { name: "Wolf of Day", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=456902#p456902" },
            { name: "Wolf of Night", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=456907#p456907" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 13
            }
        }),
        ...[
            { name: "Behemoth Brute", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=496536#p496536" },
            { name: "Cloud Giant", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=377698#p377698" },
            { name: "Codlagh Eladrin", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=491646#p491646" },
            { name: "Fire Giant, Muspel", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=371441#p371441" },
            { name: "Frost Giant, Jotun", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=366813#p366813" },
            { name: "Grey Slaad", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=387186#p387186" },
            { name: "Makhai", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=470124#p470124" },
            { name: "Morrigna", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=510009#p510009" },
            { name: "Piraka", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=471965#p471965" },
            { name: "Shiradi Eladrin", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=415968#p415968" },
            { name: "Thunderbird", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384525#p384525" },
            { name: "Trumpet Archon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384910#p384910" },
            { name: "Very Old Dragon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=483328#p483328" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 14
            }
        }),
        ...[
            { name: "Baernaloth", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384308#p384308" },
            { name: "Fiend of Sorrow", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=387189#p387189" },
            { name: "Invisible", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=510670#p510670" },
            { name: "Kanohi Dragon", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=511926#p511926" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 15
            }
        }),
        ...[
            { name: "Ancient Dragon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=483328#p483328" },
            { name: "Brachyurus", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=403030#p403030" },
            { name: "Bythos Aeon", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=549175#p549175" },
            { name: "Dao, Noble", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=413366#p413366" },
            { name: "Djinn, Noble", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=413000#p413000" },
            { name: "Efreet, Noble", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=411984#p411984" },
            { name: "Gelugon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384633#p384633" },
            { name: "Goristro", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384176#p384176" },
            { name: "Hellfire Wyrm", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=456390#p456390" },
            { name: "Justicator", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=383585#p383585" },
            { name: "Khayal, Noble", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=416353#p416353" },
            { name: "Marid, Noble", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=413438#p413438" },
            { name: "Memitim", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=498988#p498988" },
            { name: "Planetar", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384306#p384306" },
            { name: "Protean, Hegessik", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=573407#p573407" },
            { name: "Pyreen", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=549108#p549108" },
            { name: "Qorrash, Noble", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=416902#p416902" },
            { name: "Sea Giant", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=380244#p380244" },
            { name: "Sentinel", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=471779#p471779" },
            { name: "Spellbeing", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=428116#p428116" },
            { name: "Star Archon", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=491648#p491648" },
            { name: "Storm Giant", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=371744#p371744" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 16
            }
        }),
        ...[
            { name: "Death Giant", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=375663#p375663" },
            { name: "Hexton", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=548360#p548360" },
            { name: "Nightstalker", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=518823#p518823" },
            { name: "Quinton", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=571421#p571421" },
            { name: "Sandworm", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=514887#p514887" },
            { name: "Snowhair", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=382133#p382133" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 17
            }
        }),
        ...[
            { name: "Cherubim", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=395650#p395650" },
            { name: "Hound Archon Hero", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=456025#p456025" },
            { name: "Lilim", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=415619#p415619" },
            { name: "Tulani", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384687#p384687" },
            { name: "War Giant", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=372566#p372566" },
            { name: "Wyrm Dragon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=483328#p483328" },
            { name: "Throne Archon", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=573400#p573400" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 18
            }
        }),
        ...[
            { name: "Obcisiloth", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=549109#p549109" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 19
            }
        }),
        ...[
            { name: "Behemoth", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=489073#p489073" },
            { name: "Death Slaad", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=387187#p387187" },
            { name: "Great Wyrm Dragon", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=483328#p483328" },
            { name: "Hellfire Engine", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=491654#p491654" },
            { name: "Mortai", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=382136#p382136" },
            { name: "Phoenix", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=380239#p380239" },
            { name: "Pit Fiend", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=490029#p490029" },
            { name: "Solar", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=384005#p384005" },
            { name: "Ultroloth", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=468194#p468194" },
            { name: "Lord of Change", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=556088#p556088" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 20
            }
        }),
        ...[
            { name: "Erathaol (AKA Celestial Scholar, The Seer, Bringer of Knowledge, Timereaver)", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=408111#p408111" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 22
            }
        }),
        ...[
            { name: "Queen Morwel (AKA  Lady of the Lake, Queen of Stars, Faerie Queen)", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=403390#p403390" },
            { name: "Cryonax (AKA Bringer of Endless Winter, Prince of Evil Ice Creatures, The Bleak Monarch)", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=424326#p424326" },
            { name: "Imix (AKA Lord of Hellfire, Prince of Evil Fire Creatures, The Eternal Flame)", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=454073#p454073" },
            { name: "Tiamat (AKA The Queen of Evil Dragons, Her Dark Majesty, Takhisis)", link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=476599#p476599" },
        ].map(({ name, link }) => {
            return {
                name,
                link,
                challengeRating: 24
            }
        }),
    ].map(({ name, link, challengeRating }) => {
        return {
            name,
            link,
            author: 'Wiseman',
            challengeRating: challengeRating
        }
    }),
    ...[
        ...[
            { name: 'Darumaka', challengeRating: 3 },
            { name: 'Damanitan', challengeRating: 9 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=277156#p277156',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Litwick', challengeRating: 4 },
            { name: 'Lampent', challengeRating: 8 },
            { name: 'Chandelure ', challengeRating: 16 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=277164#p277164',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Joltik', challengeRating: 1 },
            { name: 'Galvantula', challengeRating: 9 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Prak',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=277257#p277257',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Vanillite', challengeRating: 3 },
            { name: 'Vanillish', challengeRating: 6 },
            { name: 'Vanilluxe', challengeRating: 10 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=277342#p277342',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Drilbur', challengeRating: 6 },
            { name: 'Excadrill', challengeRating: 12 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=277346#p277346',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Roggenrola', challengeRating: 4 },
            { name: 'Boldore', challengeRating: 12 },
            { name: 'Gigalith', challengeRating: 20 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=277352#p277352',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Jellicent', challengeRating: 6 },
            { name: 'Frillish', challengeRating: 12 },
            { name: 'Munna', challengeRating: 5 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=277485#p277485',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Woobat', challengeRating: 4 },
            { name: 'Swoobat', challengeRating: 8 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=277630#p277630',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Solosis', challengeRating: 3 },
            { name: 'Duosion', challengeRating: 8 },
            { name: 'Reuniclus', challengeRating: 15 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=277642#p277642',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Joltik (Alternate)', challengeRating: 1 },
            { name: 'Galvantula (Alternate)', challengeRating: 9 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Prak',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=277911#p277911',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Venipede', challengeRating: 3 },
            { name: 'Whirlipede', challengeRating: 6 },
            { name: 'Scolipede', challengeRating: 12 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=278579#p278579',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Sandile', challengeRating: 5 },
            { name: 'Krokorok', challengeRating: 10 },
            { name: 'Krookodile', challengeRating: 15 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=278581#p278581',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Yamask', challengeRating: 6 },
            { name: 'Cofagrigus', challengeRating: 13 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=278748#p278748',
                challengeRating: challengeRating,
            };
        }),
        {
            name: 'Petilil',
            author: 'Koumei',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=279442#p279442',
            challengeRating: 3,
        },
        ...[
            { name: 'Larvesta', challengeRating: 4 },
            { name: 'Volcarona', challengeRating: 11 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=279443#p279443',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Heatmor', challengeRating: 10 },
            { name: 'Durant', challengeRating: 8 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=279467#p279467',
                challengeRating: challengeRating,
            };
        }),
        {
            name: 'Magnezone',
            author: 'Koumei',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=279578#p279578',
            challengeRating: 16,
        },
        ...[
            { name: 'Klink', challengeRating: 1 },
            { name: 'Klang', challengeRating: 5 },
            { name: 'Klingklang', challengeRating: 10 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=279582#p279582',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Pawniard', challengeRating: 4 },
            { name: 'Bisharp', challengeRating: 9 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=279812#p279812',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Timburr', challengeRating: 4 },
            { name: 'Gurdurr', challengeRating: 7 },
            { name: 'Conkeldurr', challengeRating: 11 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280015#p280015',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Snivy', challengeRating: 1 },
            { name: 'Servine', challengeRating: 6 },
            { name: 'Serperior ', challengeRating: 11 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280759#p280759',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Tepig', challengeRating: 1 },
            { name: 'Pignite', challengeRating: 6 },
            { name: 'Emboar', challengeRating: 11 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280842#p280842',
                challengeRating: challengeRating,
            };
        }),
        {
            name: 'Sableye',
            author: 'Koumei',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=280995#p280995',
            challengeRating: 4,
        },
        ...[
            { name: 'Croagunk', challengeRating: 4 },
            { name: 'Toxicroak', challengeRating: 10 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=281824#p281824',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Gastly', challengeRating: 4 },
            { name: 'Haunter', challengeRating: 8 },
            { name: 'Gengar', challengeRating: 12 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=281847#p281847',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Beldum', challengeRating: 1 },
            { name: 'Metang', challengeRating: 4 },
            { name: 'Metagross', challengeRating: 10 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=282485#p282485',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Regirock', challengeRating: 10 },
            { name: 'Registeel', challengeRating: 10 },
            { name: 'Regice', challengeRating: 10 },
            { name: 'Regigigas', challengeRating: 15 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=282767#p282767',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Oshawott', challengeRating: 1 },
            { name: 'Dewott', challengeRating: 6 },
            { name: 'Samurott', challengeRating: 11 },
            { name: 'Tynamo', challengeRating: 1 },
            { name: 'Eelektrik', challengeRating: 5 },
            { name: 'Eelektross', challengeRating: 9 },
            { name: 'Feebas', challengeRating: 1 },
            { name: 'Milotic', challengeRating: 10 },
            { name: 'Rufflet', challengeRating: 4 },
            { name: 'Braviary', challengeRating: 9 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=282777#p282777',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Gible', challengeRating: 2 },
            { name: 'Gabite', challengeRating: 6 },
            { name: 'Garchomp', challengeRating: 11 },
            { name: 'Murkrow', challengeRating: 3 },
            { name: 'Honchkrow', challengeRating: 7 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=283622#p283622',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Zekrom', challengeRating: 10 },
            { name: 'Reshiram', challengeRating: 10 },
            { name: 'Kyurem', challengeRating: 10 },
            { name: 'Landorus', challengeRating: 10 },
            { name: 'Thundurus', challengeRating: 8 },
            { name: 'Tornadus', challengeRating: 8 },
            { name: 'Meloetta', challengeRating: 8 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=283958#p283958',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Zigzagoon', challengeRating: 1 },
            { name: 'Linoone', challengeRating: 5 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=284505#p284505',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'UFO', challengeRating: 20 },
            { name: 'Mechannitar', challengeRating: 10 },
            { name: 'Mechannitar Mk II', challengeRating: 12 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                author: 'Koumei',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=287732#p287732',
                challengeRating: challengeRating,
            };
        }),
    ].map(({ name, author, link, challengeRating }) => {
        return {
            name,
            author,
            link,
            challengeRating: challengeRating,
            relatedLinks: [{ title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },]
        }
    }),
    {
        name: 'Trickpuncher Abra',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=56877#p56877',
        challengeRating: 1,
        relatedLinks: [
            { title: 'Abra', link: 'https://dnd-wiki.org/wiki/Abra_(3.5e_Monster)' },
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    ...[
        {
            name: 'Charmander',
            challengeRating: 0.5,
            statblockLink: 'https://dnd-wiki.org/wiki/Charmander_(3.5e_Monster)'
        },
        {
            name: 'Charmeleon',
            challengeRating: 5,
            statblockLink: 'https://dnd-wiki.org/wiki/Charmeleon_(3.5e_Monster)'
        },
        {
            name: 'Charizard',
            challengeRating: 11,
            statblockLink: 'https://dnd-wiki.org/wiki/Charizard_(3.5e_Monster)'
        }
    ].map(({ name, statblockLink, challengeRating }) => {
        return {
            name,
            author: 'Koumei',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=57224#p57224',
            challengeRating: challengeRating,
            relatedLinks: [
                { title: 'Statblock', link: statblockLink },
                { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
            ]
        }
    }),
    ...[
        { name: 'Croagunk (Old)', challengeRating: 3, updatedVersionLink: 'http://tgdmb.com/phpBB3/viewtopic.php?p=281824#p281824' },
        { name: 'Toxicroak (Old)', challengeRating: 8, updatedVersionLink: 'http://tgdmb.com/phpBB3/viewtopic.php?p=281824#p281824' },
    ].map(({ name, challengeRating, updatedVersionLink }) => {
        return {
            name,
            author: 'Koumei',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=57503#p57503',
            challengeRating,
            relatedLinks: [
                { title: 'Updated Version', link: updatedVersionLink },
                { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
            ]
        };
    }),
    {
        name: 'Zorua',
        author: 'Prak',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=422313#p422313',
        challengeRating: 0.5,
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: 'Arachnal ',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=233522#p233522',
        challengeRating: 4,
    },
    {
        name: 'Sea Turtle',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=169157#p169157',
        challengeRating: 2,
    },
    {
        name: 'Shibboleth',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=397721#p397721',
        challengeRating: 12
    },
    {
        name: 'Goby Swarm',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=426306#p426306',
        challengeRating: 1
    },
    {
        name: 'Nethar Symbiote',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=495227#p495227',
    },
    {
        name: 'Baku',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=155961#p155961',
        challengeRating: 2
    },
    {
        name: 'Clockwork Man',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=140559#p140559',
        challengeRating: 3
    },
    {
        name: '"Javan" Light Steam Tank / Transport',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=141936#p141936',
        challengeRating: 5
    },
    {
        name: 'Taino',
        author: 'virgil',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=489974#p489974',
        challengeRating: 3
    },
    {
        name: 'Scapegrace',
        author: 'virgil',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=476388#p476388',
        challengeRating: 1 / 3
    },
    {
        name: 'Time Golem',
        author: 'Prak',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=427314#p427314',
        challengeRating: 7
    },
    {
        name: 'X Golem',
        author: 'Foxwarrior',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=436610#p436610',
        challengeRating: 9
    },
    {
        name: 'Your Mom',
        author: 'DrPraetor',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=295983#p295983',
        challengeRating: 7
    },
    ...[
        { name: 'Cockatrice', challengeRating: 0.5 },
        { name: 'Gnoma Entite', challengeRating: 20 },
        { name: 'Hyena', challengeRating: 3 },
        { name: 'Wooly Gator', challengeRating: 2 },
        { name: 'Great Tortise', challengeRating: 10 },
        { name: 'Silicon Tortoise', challengeRating: 10 },
        { name: 'Wildsnake', challengeRating: 2 },
        { name: 'Werewolf', challengeRating: 5 },
        { name: 'Urstrix', challengeRating: 4 },
        { name: 'Storm Elemental', challengeRating: 13 },
        { name: 'Gigantoad', challengeRating: 4 },
        { name: 'Malboro Overking', challengeRating: 8 },
        { name: 'Garchimacera', challengeRating: 3 },
        { name: 'Gespenst', challengeRating: 7 },
        { name: 'Ghost', challengeRating: 2 },
        { name: 'Water Elemental', challengeRating: 13 },
        { name: 'Steeling', challengeRating: 1 },
        { name: 'Suriander', challengeRating: 6 },
        { name: 'Mimic', challengeRating: 1 },
        { name: 'Zombie', challengeRating: 3 },
        { name: 'Skeleton', challengeRating: 3 },
        { name: 'Battery Mimic', challengeRating: 4 },
        { name: 'Specter', challengeRating: 3 },
        { name: 'Tiny Battery', challengeRating: 1 },
        { name: 'Mimeo', challengeRating: 6 },
        { name: 'Belias the Gigas', challengeRating: 20 },
        { name: 'Exodus the Judge-Sal', challengeRating: 20 },
        { name: 'Zalera the Death Seraph', challengeRating: 20 },
        { name: 'Adrammelech the Wroth', challengeRating: 20 },
        { name: 'Mateus the Corrupt', challengeRating: 20 },
        { name: 'Garif', challengeRating: 1 },
        { name: 'Nu Mou', challengeRating: 1 },
        { name: 'Viera', challengeRating: 1 },
        { name: 'Moogle', challengeRating: 1 },
    ].map(({ name, challengeRating }) => {
        return {
            name: `${name} (Ivalice D20)`,
            author: 'Wiseman',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=313514#p313514',
            challengeRating: challengeRating
        }
    }),
    {
        name: 'Simulacrum',
        author: 'virgil',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=292335#p292335',
        challengeRating: 3
    },
    ...[
        { name: 'Lesser Mezzoloth', challengeRating: 6 },
        { name: 'Lesser Arcanoloth', challengeRating: 8 },
    ].map(({ name, challengeRating }) => {
        return {
            name,
            author: 'Avoraciopoctules',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=259986#p259986',
            challengeRating
        }
    }),
    {
        name: 'Ogre Mage',
        author: 'FruitThatAteItself',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=205209#p205209',
        challengeRating: 5
    },
    {
        name: 'Hill Giants',
        author: 'angelfromanotherpin',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=142353#p142353',
        challengeRating: 4
    },
    {
        name: 'Troll King (Boss)',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=54794#p54794',
        challengeRating: 10
    },
    {
        name: 'Adult Red Dragon (Boss)',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=54909#p54909',
        challengeRating: 15
    },
    {
        name: 'Lolth the Spider Queen (Boss)',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=55483#p55483',
        challengeRating: 21
    },
    {
        name: 'Marilith (Boss)',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=55138#p55138',
        challengeRating: 17
    },
    {
        name: 'Aboleth (Boss)',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=55483#p55483',
        challengeRating: 10
    },
    ...[
        { name: 'Skinny Pete', challengeRating: 2 },
        { name: 'Abhorrent Enforcer', challengeRating: 5 },
        { name: 'Feculus, Lord of the Sewer', challengeRating: 4 },
        { name: 'Neck Redder', challengeRating: 2 },
        { name: 'Hypersonic Fiend', challengeRating: 4 },
        { name: 'Nocturanal Grazer', challengeRating: 3 },
        { name: 'Amorphous Psychic', challengeRating: 2 },
        { name: 'Twilight Hunter', challengeRating: 3 },
        { name: 'Skinny Enforcer', challengeRating: 4 },
    ].map(({ name, challengeRating }) => {
        return {
            name,
            author: 'Prak',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=39742#p39742',
            challengeRating
        }
    }),
    ...[
        {
            mephitType: 'Ash',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=564755#p564755'
        },
        {
            mephitType: 'Radiant',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=564756#p564756'
        },
        {
            mephitType: 'Mineral',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=564757#p564757'
        },
    ].map(({ mephitType, link }) => {
        return {
            name: `${mephitType} Mephit`,
            author: 'Koumei',
            link,
            challengeRating: 3,
        }
    }),
    ...[
        {
            name: 'Half-Fiend Wasp',
            challengeRating: 5,
        },
        {
            name: 'Hawkwasp Devil',
            challengeRating: 10,
        },
        {
            name: 'Greater Advespa',
            challengeRating: 10,
        },
    ].map(({ name, challengeRating }) => ({
        name,
        challengeRating,
        author: 'Prak',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=572328#p572328'
    })),
    ...pokedexRedoneMonsters.map((value) => ({
        ...value, relatedLinks: [{ title: 'Pokedex Redone 2022', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=57904' }],
    })),
    ...pokedexRedoneFakemon.map((value) => ({
        ...value, relatedLinks: [{ title: 'Pokedex Redone 2022', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=57904' }],
    })),
]