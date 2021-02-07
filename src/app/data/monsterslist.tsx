import { MonsterEntry } from "../entry";

export const monsters: MonsterEntry[] = [
    ...[
        { name: 'H Poke', challengeRating: 10 },
        { name: 'Arceus', challengeRating: 13 },
    ].map(({ name, challengeRating }) => {
        return {
            name: name,
            author: 'Koumei',
            link: 'http://www.tgdmb.com/viewtopic.php?p=144506#144506',
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
    {
        name: 'Rifle Demon',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/viewtopic.php?p=154820#154820',
        challengeRating: 10
    },
    {
        name: 'Culler',
        author: 'virgil',
        link: 'http://tgdmb.com/viewtopic.php?p=516835#516835',
        challengeRating: 10
    },
    {
        name: 'Functionary',
        author: 'virgil',
        link: 'http://tgdmb.com/viewtopic.php?p=529657#529657',
        challengeRating: 3
    },
    {
        name: 'Huge Giant (Air)',
        author: 'virgil',
        link: 'http://tgdmb.com/viewtopic.php?p=490913#490913',
        challengeRating: 8
    },
    ...[
        { name: 'Killer Pillow', challengeRating: 1 },
        { name: 'Flannel Beast', challengeRating: 3 },
        { name: 'Sheet Phantom', challengeRating: 5 },
    ].map(({ name, challengeRating }) => {
        return {
            name: name,
            author: 'Prak',
            link: 'http://tgdmb.com/viewtopic.php?p=488914#488914',
            challengeRating: challengeRating,
        };
    }),
    ...[
        { name: 'Cushion Fungus', challengeRating: 5 },
        { name: 'Sheet fungus', challengeRating: 3 },
    ].map(({ name, challengeRating }) => {
        return {
            name: name,
            author: 'Prak',
            link: 'http://tgdmb.com/viewtopic.php?p=488922#488922',
            challengeRating: challengeRating,
        };
    }),
    {
        name: 'Lock Lurker',
        author: 'Prak',
        link: 'http://tgdmb.com/viewtopic.php?p=489008#489008',
        challengeRating: 4
    },
    {
        name: 'Palimpsest',
        author: 'Prak',
        link: 'http://tgdmb.com/viewtopic.php?p=489100#489100',
        challengeRating: 2
    },
    ...[
        ...[
            { name: 'Fairy', link: 'http://www.tgdmb.com/viewtopic.php?p=472264#472264' },
            { name: 'Happy Bunny', link: 'http://www.tgdmb.com/viewtopic.php?p=472407#472407' },
            { name: 'Matoran', link: 'http://www.tgdmb.com/viewtopic.php?p=468716#468716' },
            { name: 'Planetouched', link: 'http://www.tgdmb.com/viewtopic.php?p=428664#42866' },
            { name: 'Shadow', link: 'http://tgdmb.com/viewtopic.php?p=546707#546707' },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 0.5
            }
        }),
        ...[
            { name: 'Bohrak-Va', link: 'http://www.tgdmb.com/viewtopic.php?p=471073#471073' },
            { name: 'Cactoid', link: 'http://www.tgdmb.com/viewtopic.php?p=472405#472405' },
            { name: 'Gria', link: 'http://www.tgdmb.com/viewtopic.php?p=457540#457540' },
            { name: 'Kappa', link: 'http://tgdmb.com/viewtopic.php?p=489536#489536' },
            { name: 'Merfolk', link: 'http://www.tgdmb.com/viewtopic.php?p=465680#465680' },
            { name: 'Town Guard', link: 'http://www.tgdmb.com/viewtopic.php?p=446296#446296' },
            { name: 'Witch', link: 'http://www.tgdmb.com/viewtopic.php?p=424325#424325' },
            { name: 'Zenythri', link: 'http://tgdmb.com/viewtopic.php?p=413827#413827' },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 1
            }
        }),
        ...[
            { name: "Baaz Draconian", link: "http://www.tgdmb.com/viewtopic.php?p=464367#464367" },
            { name: "Bandit", link: "http://www.tgdmb.com/viewtopic.php?p=420973#420973" },
            { name: "Cassisian", link: "http://tgdmb.com/viewtopic.php?p=384917#384917" },
            { name: "Chocobo", link: "http://www.tgdmb.com/viewtopic.php?p=457302#457302" },
            { name: "Coure Eladrin", link: "http://tgdmb.com/viewtopic.php?p=381368#381368" },
            { name: "Cultist", link: "http://www.tgdmb.com/viewtopic.php?p=455982#455982" },
            { name: "Formian Worker", link: "http://www.tgdmb.com/viewtopic.php?p=509490#509490" },
            { name: "Frost Draconian", link: "http://www.tgdmb.com/viewtopic.php?p=518795#518795" },
            { name: "Ichthon", link: "http://www.tgdmb.com/viewtopic.php?p=472406#472406" },
            { name: "Lantern Archon", link: "http://tgdmb.com/viewtopic.php?p=384851#384851" },
            { name: "Mining Robot", link: "http://www.tgdmb.com/viewtopic.php?p=452995#452995" },
            { name: "Lumberjack Robot", link: "http://www.tgdmb.com/viewtopic.php?p=453000#453000" },
            { name: "Monodrone", link: "http://tgdmb.com/viewtopic.php?p=387183#387183" },
            { name: "Mud Slaad", link: "http://tgdmb.com/viewtopic.php?p=384642#384642" },
            { name: "Musteval", link: "http://tgdmb.com/viewtopic.php?p=383987#383987" },
            { name: "Nightlurker", link: "http://www.tgdmb.com/viewtopic.php?p=509492#509492" },
            { name: "Orc Warrior", link: "http://www.tgdmb.com/viewtopic.php?p=446997#446997" },
            { name: "Small Earth Elemental", link: "http://www.tgdmb.com/viewtopic.php?p=460668#460668" },
            { name: "Small Ice Paramental", link: "http://www.tgdmb.com/viewtopic.php?p=440038#440038" },
            { name: "Small Magma Paramental", link: "http://www.tgdmb.com/viewtopic.php?p=446999#446999" },
            { name: "Wyrmling Dragon", link: "http://tgdmb.com/viewtopic.php?p=483328#483328" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 2
            }
        }),
        ...[
            { name: "Draugr", link: "http://tgdmb.com/viewtopic.php?p=464931#464931" },
            { name: "Nigawarai", link: "http://www.tgdmb.com/viewtopic.php?p=498964#498964" },
            { name: "Positive Mephit", link: "http://tgdmb.com/viewtopic.php?p=387184#387184" },
            { name: "Spyglass Archon", link: "http://tgdmb.com/viewtopic.php?p=383572#383572" },
            { name: "Very Young Dragon", link: "http://tgdmb.com/viewtopic.php?p=483328#483328" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 3
            }
        }),
        ...[
            { name: "Bohrok", link: "http://tgdmb.com/viewtopic.php?p=468546#468546" },
            { name: "Bomb", link: "http://www.tgdmb.com/viewtopic.php?p=496103#496103" },
            { name: "Dabus", link: "http://tgdmb.com/viewtopic.php?p=398221#398221" },
            { name: "Energy Hound", link: "http://www.tgdmb.com/viewtopic.php?p=471244#471244" },
            { name: "Flan", link: "http://www.tgdmb.com/viewtopic.php?p=472409#472409" },
            { name: "Hordling, Small", link: "http://tgdmb.com/viewtopic.php?p=387338#387338" },
            { name: "Kapak Draconian", link: "http://tgdmb.com/viewtopic.php?p=502374#502374" },
            { name: "Medium Earth Elemental", link: "http://www.tgdmb.com/viewtopic.php?p=460668#460668" },
            { name: "Medium Ice Paramental", link: "http://www.tgdmb.com/viewtopic.php?p=440038#440038" },
            { name: "Medium Magma Paramental", link: "http://www.tgdmb.com/viewtopic.php?p=446999#446999" },
            { name: "Nighthunter", link: "http://www.tgdmb.com/viewtopic.php?p=510384#510384" },
            { name: "Okubi", link: "http://www.tgdmb.com/viewtopic.php?p=498991#498991" },
            { name: "Sleipnir", link: "http://www.tgdmb.com/viewtopic.php?p=472408#472408" },
            { name: "Turaga", link: "http://www.tgdmb.com/viewtopic.php?p=542821#542821" },
            { name: "Winemaker Genie", link: "http://tgdmb.com/viewtopic.php?p=412084#412084" },
            { name: "Young Dragon", link: "http://tgdmb.com/viewtopic.php?p=483328#483328" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 4
            }
        }),
        ...[
            { name: "Abiorach", link: "http://tgdmb.com/viewtopic.php?p=384174#384174" },
            { name: "Artist Genie", link: "http://www.tgdmb.com/viewtopic.php?p=416706#416706" },
            { name: "Battlemage", link: "http://www.tgdmb.com/viewtopic.php?p=422066#422066" },
            { name: "Barbazu", link: "http://tgdmb.com/viewtopic.php?p=501269#501269" },
            { name: "Bonnacon", link: "http://www.tgdmb.com/viewtopic.php?p=426245#426245" },
            { name: "Fader Bull", link: "http://www.tgdmb.com/viewtopic.php?p=471245#471245" },
            { name: "Juvenile Dragon", link: "http://tgdmb.com/viewtopic.php?p=483328#483328" },
            { name: "Nightcharger", link: "http://www.tgdmb.com/viewtopic.php?p=507328#507328" },
            { name: "Noviere", link: "http://tgdmb.com/viewtopic.php?p=387596#387596" },
            { name: "Observer", link: "http://www.tgdmb.com/viewtopic.php?p=507324#507324" },
            { name: "Red Slaad", link: "http://tgdmb.com/viewtopic.php?p=384645#384645" },
            { name: "Salamander, Flamebrother", link: "http://www.tgdmb.com/viewtopic.php?p=426395#426395" },
            { name: "Thri-Kreen Hunter", link: "http://www.tgdmb.com/viewtopic.php?p=432510#432510" },
            { name: "Tiefling Fighter", link: "http://www.tgdmb.com/viewtopic.php?p=420898#420898" },
            { name: "Vahki", link: "http://www.tgdmb.com/viewtopic.php?p=468257#468257" },
            { name: "Wood Soldier", link: "http://www.tgdmb.com/viewtopic.php?p=455655#455655" },
            { name: "Bluespawn Stormlizard", link: "http://www.tgdmb.com/viewtopic.php?p=545424#545424" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 5
            }
        }),
        ...[
            { name: "Bralani Eladrin", link: "http://tgdmb.com/viewtopic.php?p=381365#381365" },
            { name: "Dryad", link: "http://tgdmb.com/viewtopic.php?p=414635#414635" },
            { name: "Hordling, Medium", link: "http://tgdmb.com/viewtopic.php?p=387338#387338" },
            { name: "Hound Archon", link: "http://tgdmb.com/viewtopic.php?p=381374#381374" },
            { name: "Irda", link: "http://www.tgdmb.com/viewtopic.php?p=509491#509491" },
            { name: "Janni", link: "http://tgdmb.com/viewtopic.php?p=413443#413443" },
            { name: "Large Earth Elemental", link: "http://www.tgdmb.com/viewtopic.php?p=460668#460668" },
            { name: "Large Ice Paramental", link: "http://www.tgdmb.com/viewtopic.php?p=440038#440038" },
            { name: "Large Magma Paramental", link: "http://www.tgdmb.com/viewtopic.php?p=446999#446999" },
            { name: "Malakim", link: "http://tgdmb.com/viewtopic.php?p=384915#384915" },
            { name: "Mezzoloth", link: "http://tgdmb.com/viewtopic.php?p=536092#536092" },
            { name: "Pyromancer", link: "http://www.tgdmb.com/viewtopic.php?p=446292#446292" },
            { name: "Redspawn Firebelcher", link: "http://www.tgdmb.com/viewtopic.php?p=518392#518392" },
            { name: "Steel Devil", link: "http://www.tgdmb.com/viewtopic.php?p=498989#498989" },
            { name: "Vaati", link: "http://tgdmb.com/viewtopic.php?p=427312#427312" },
            { name: "Vapor Draconian", link: "http://www.tgdmb.com/viewtopic.php?p=518797#518797" },
            { name: "Yuki-on-na", link: "http://www.tgdmb.com/viewtopic.php?p=436950#436950" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 6
            }
        }),
        ...[
            { name: "Bozak Draconian", link: "http://tgdmb.com/viewtopic.php?p=502375#502375" },
            { name: "Hill Giant", link: "http://tgdmb.com/viewtopic.php?p=383040#383040" },
            { name: "Nightmare", link: "http://www.tgdmb.com/viewtopic.php?p=446912#446912" },
            { name: "Nymph", link: "http://tgdmb.com/viewtopic.php?p=424982#424982" },
            { name: "Phoelarch", link: "http://www.tgdmb.com/viewtopic.php?p=455980#455980" },
            { name: "Slime", link: "http://www.tgdmb.com/viewtopic.php?p=498990#498990" },
            { name: "Visorak", link: "http://www.tgdmb.com/viewtopic.php?p=468579#468579" },
            { name: "Young Adult Dragon", link: "http://tgdmb.com/viewtopic.php?p=483328#483328" },
            { name: "Kenmun", link: "http://tgdmb.com/viewtopic.php?p=547487#547487" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 7
            }
        }),
        ...[
            { name: "Abishai", link: "http://www.tgdmb.com/viewtopic.php?p=543922#543922" },
            { name: "Adult Dragon", link: "http://tgdmb.com/viewtopic.php?p=483328#483328" },
            { name: "Angeloid", link: "http://www.tgdmb.com/viewtopic.php?p=453008#453008" },
            { name: "Blue Slaad", link: "http://tgdmb.com/viewtopic.php?p=384311#384311" },
            { name: "Bohrok-Kal", link: "http://www.tgdmb.com/viewtopic.php?p=470892#470892" },
            { name: "Doom Viper", link: "http://www.tgdmb.com/viewtopic.php?p=471772#471772" },
            { name: "Drowned", link: "http://tgdmb.com/viewtopic.php?p=383583#383583" },
            { name: "Erinyes", link: "http://tgdmb.com/viewtopic.php?p=491651#491651" },
            { name: "Fire Reaver", link: "http://tgdmb.com/viewtopic.php?p=392257#392257" },
            { name: "Flesh Render", link: "http://tgdmb.com/viewtopic.php?p=392261#392261" },
            { name: "Hordling, Large", link: "http://tgdmb.com/viewtopic.php?p=387338#387338" },
            { name: "Huge Earth Elemental", link: "http://www.tgdmb.com/viewtopic.php?p=460668#460668" },
            { name: "Huge Ice Paramental", link: "http://www.tgdmb.com/viewtopic.php?p=440038#440038" },
            { name: "Huge Magma Paramental", link: "http://www.tgdmb.com/viewtopic.php?p=446999#446999" },
            { name: "Ice Flenser", link: "http://tgdmb.com/viewtopic.php?p=392254#392254" },
            { name: "Justice Archon", link: "http://tgdmb.com/viewtopic.php?p=382123#382123" },
            { name: "Lupinal", link: "http://tgdmb.com/viewtopic.php?p=383994#383994" },
            { name: "Malcubus", link: "http://www.tgdmb.com/viewtopic.php?p=518719#518719" },
            { name: "Mind Flayer", link: "http://tgdmb.com/viewtopic.php?p=411431#411431" },
            { name: "Movanic Deva", link: "http://tgdmb.com/viewtopic.php?p=384172#384172" },
            { name: "Nightslaver", link: "http://www.tgdmb.com/viewtopic.php?p=509494#509494" },
            { name: "Oni/Ogre Mage", link: "http://www.tgdmb.com/viewtopic.php?p=509505#509505" },
            { name: "Salamander", link: "http://www.tgdmb.com/viewtopic.php?p=426396#426396" },
            { name: "Sky Bison", link: "http://www.tgdmb.com/viewtopic.php?p=442307#442307" },
            { name: "Vanth", link: "http://www.tgdmb.com/viewtopic.php?p=545423#545423" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 8
            }
        }),
        ...[
            { name: "Architect Genie", link: "http://tgdmb.com/viewtopic.php?p=460250#460250" },
            { name: "Avoral Guardinal", link: "http://tgdmb.com/viewtopic.php?p=381372#381372" },
            { name: "Burning Bull", link: "http://tgdmb.com/viewtopic.php?p=537826#537826" },
            { name: "Cuprilach", link: "http://tgdmb.com/viewtopic.php?p=384175#384175" },
            { name: "Kikanalo", link: "http://tgdmb.com/viewtopic.php?p=471246#471246" },
            { name: "Lampad", link: "http://tgdmb.com/viewtopic.php?p=464299#464299" },
            { name: "Lightning Draconian", link: "http://www.tgdmb.com/viewtopic.php?p=505698#505698" },
            { name: "Narzugon", link: "http://www.tgdmb.com/viewtopic.php?p=491649#491649" },
            { name: "Primatal", link: "http://tgdmb.com/viewtopic.php?p=384524#384524" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 9
            }
        }),
        ...[
            { name: "Arrow Demon", link: "http://tgdmb.com/viewtopic.php?p=383588#383588" },
            { name: "Chasme", link: "http://tgdmb.com/viewtopic.php?p=544339#544339" },
            { name: "Coeurl", link: "http://www.tgdmb.com/viewtopic.php?p=513148#513148" },
            { name: "Dao", link: "http://tgdmb.com/viewtopic.php?p=387597#387597" },
            { name: "Dementor", link: "http://www.tgdmb.com/viewtopic.php?p=429343#429343" },
            { name: "Djinn", link: "http://tgdmb.com/viewtopic.php?p=412996#412996" },
            { name: "Efreeti", link: "http://tgdmb.com/viewtopic.php?p=411415#411415" },
            { name: "Falxugon (Harvester Devil)", link: "http://tgdmb.com/viewtopic.php?p=412084#412084" },
            { name: "Fire Snake", link: "http://www.tgdmb.com/viewtopic.php?p=426288#426288" },
            { name: "Firre Eladrin", link: "http://tgdmb.com/viewtopic.php?p=381367#381367" },
            { name: "Gazer", link: "http://www.tgdmb.com/viewtopic.php?p=472177#472177" },
            { name: "Greater Earth Elemental", link: "http://www.tgdmb.com/viewtopic.php?p=460668#460668" },
            { name: "Greater Ice Paramental", link: "http://www.tgdmb.com/viewtopic.php?p=440038#440038" },
            { name: "Greater Magma Paramental", link: "http://www.tgdmb.com/viewtopic.php?p=446999#446999" },
            { name: "Green Slaad", link: "http://tgdmb.com/viewtopic.php?p=387185#387185" },
            { name: "Holy Dragon", link: "http://tgdmb.com/viewtopic.php?p=448701#448701" },
            { name: "Ice Golem", link: "http://tgdmb.com/viewtopic.php?p=424983#424983" },
            { name: "Incarnate", link: "http://www.tgdmb.com/viewtopic.php?p=471560#471560" },
            { name: "Khayal", link: "http://tgdmb.com/viewtopic.php?p=416181#416181" },
            { name: "Mature Adult Dragon", link: "http://tgdmb.com/viewtopic.php?p=483328#483328" },
            { name: "Marid", link: "http://tgdmb.com/viewtopic.php?p=413005#413005" },
            { name: "Nighthaunter", link: "http://www.tgdmb.com/viewtopic.php?p=511925#511925" },
            { name: "Osyluth (Bone Devil)", link: "http://www.tgdmb.com/viewtopic.php?p=518588#518588" },
            { name: "Per", link: "http://tgdmb.com/viewtopic.php?p=382124#382124" },
            { name: "Qorrashi", link: "http://tgdmb.com/viewtopic.php?p=416896#416896" },
            { name: "Rahkshi", link: "http://www.tgdmb.com/viewtopic.php?p=468258#468258" },
            { name: "Schalris", link: "http://tgdmb.com/viewtopic.php?p=416756#416756" },
            { name: "Shiere", link: "http://tgdmb.com/viewtopic.php?p=384686#384686" },
            { name: "Spectral Death", link: "http://tgdmb.com/viewtopic.php?p=384700#384700" },
            { name: "Wood Giant", link: "http://tgdmb.com/viewtopic.php?p=383039#383039" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 10
            }
        }),
        ...[
            { name: "Arcanaloth", link: "http://tgdmb.com/viewtopic.php?p=383986#383986" },
            { name: "Asura", link: "http://tgdmb.com/viewtopic.php?p=483326#483326" },
            { name: "Deepspawn", link: "http://tgdmb.com/viewtopic.php?p=510243#510243" },
            { name: "Dogai", link: "http://tgdmb.com/viewtopic.php?p=491650#491650" },
            { name: "Excruciarch", link: "http://www.tgdmb.com/viewtopic.php?p=443753#443753" },
            { name: "Hezrou", link: "http://tgdmb.com/viewtopic.php?p=499615#499615" },
            { name: "Visorak, Kahgarak", link: "http://www.tgdmb.com/viewtopic.php?p=544502#544502" },
            { name: "Malboro", link: "http://tgdmb.com/viewtopic.php?p=496099#496099" },
            { name: "Mercane", link: "http://tgdmb.com/viewtopic.php?p=491652#491652" },
            { name: "Reaper", link: "http://www.tgdmb.com/viewtopic.php?p=500987#500987" },
            { name: "Stone Giant", link: "http://tgdmb.com/viewtopic.php?p=371443#371443" },
            { name: "Sword Archon", link: "http://tgdmb.com/viewtopic.php?p=380238#380238" },
            { name: "Ursinal Guardinal", link: "http://tgdmb.com/viewtopic.php?p=381373#381373" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 11
            }
        }),
        ...[
            { name: "Amnizu", link: "http://tgdmb.com/viewtopic.php?p=547647#547647" },
            { name: "Aspect of Bahamut", link: "http://tgdmb.com/viewtopic.php?p=537828#537828" },
            { name: "Aspect of Nerull", link: "http://www.tgdmb.com/viewtopic.php?p=471391#471391" },
            { name: "Astral Deva", link: "http://tgdmb.com/viewtopic.php?p=384171#384171" },
            { name: "Barraki", link: "http://www.tgdmb.com/viewtopic.php?p=470829#470829" },
            { name: "Decaton", link: "http://tgdmb.com/viewtopic.php?p=405438#405438" },
            { name: "Elder Earth Elemental", link: "http://www.tgdmb.com/viewtopic.php?p=460668#460668" },
            { name: "Elder Ice Paramental", link: "http://www.tgdmb.com/viewtopic.php?p=440038#440038" },
            { name: "Elder Magma Paramental", link: "http://www.tgdmb.com/viewtopic.php?p=446999#446999" },
            { name: "Ghaele Eladrin", link: "http://tgdmb.com/viewtopic.php?p=382134#382134" },
            { name: "Glatorian", link: "http://www.tgdmb.com/viewtopic.php?p=469547#469547" },
            { name: "Hordling, Huge", link: "http://tgdmb.com/viewtopic.php?p=387338#387338" },
            { name: "Kelvezu", link: "http://www.tgdmb.com/viewtopic.php?p=520147#520147" },
            { name: "Leonal", link: "http://tgdmb.com/viewtopic.php?p=381369#381369" },
            { name: "Leukoloth", link: "http://www.tgdmb.com/viewtopic.php?p=513373#513373" },
            { name: "Mist Golem", link: "http://www.tgdmb.com/viewtopic.php?p=424999#424999" },
            { name: "Nightflyer", link: "http://www.tgdmb.com/viewtopic.php?p=510380#510380" },
            { name: "Night Hag", link: "http://www.tgdmb.com/viewtopic.php?p=538736#538736" },
            { name: "Old Dragon", link: "http://tgdmb.com/viewtopic.php?p=483328#483328" },
            { name: "Oread", link: "http://tgdmb.com/viewtopic.php?p=382133#382133" },
            { name: "Sand Giant", link: "http://tgdmb.com/viewtopic.php?p=399209#399209" },
            { name: "Salamander, Noble", link: "http://www.tgdmb.com/viewtopic.php?p=426397#426397" },
            { name: "Shocker", link: "http://tgdmb.com/viewtopic.php?p=414722#414722" },
            { name: "Slayer Genie", link: "http://www.tgdmb.com/viewtopic.php?p=415959#415959" },
            { name: "Sun Giant", link: "http://tgdmb.com/viewtopic.php?p=371442#371442" },
            { name: "Treant", link: "http://tgdmb.com/viewtopic.php?p=414634#414634" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 12
            }
        }),
        ...[
            { name: "Drow Archpriestess", link: "http://www.tgdmb.com/viewtopic.php?p=446301#446301" },
            { name: "Hound Action Hero", link: "http://www.tgdmb.com/viewtopic.php?p=456856#456856" },
            { name: "Thanaloth", link: "http://tgdmb.com/viewtopic.php?p=408106#408106" },
            { name: "Wolf of Day", link: "http://www.tgdmb.com/viewtopic.php?p=456902#456902" },
            { name: "Wolf of Night", link: "http://www.tgdmb.com/viewtopic.php?p=456907#456907" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 13
            }
        }),
        ...[
            { name: "Behemoth Brute", link: "http://www.tgdmb.com/viewtopic.php?p=496536#496536" },
            { name: "Cloud Giant", link: "http://tgdmb.com/viewtopic.php?p=377698#377698" },
            { name: "Codlagh Eladrin", link: "http://www.tgdmb.com/viewtopic.php?p=491646#491646" },
            { name: "Fire Giant, Muspel", link: "http://tgdmb.com/viewtopic.php?p=371441#371441" },
            { name: "Frost Giant, Jotun", link: "http://tgdmb.com/viewtopic.php?p=366813#366813" },
            { name: "Grey Slaad", link: "http://tgdmb.com/viewtopic.php?p=387186#387186" },
            { name: "Makhai", link: "http://www.tgdmb.com/viewtopic.php?p=470124#470124" },
            { name: "Morrigna", link: "http://www.tgdmb.com/viewtopic.php?p=510009#510009" },
            { name: "Piraka", link: "http://www.tgdmb.com/viewtopic.php?p=471965#471965" },
            { name: "Shiradi Eladrin", link: "http://www.tgdmb.com/viewtopic.php?p=415968#415968" },
            { name: "Thunderbird", link: "http://tgdmb.com/viewtopic.php?p=384525#384525" },
            { name: "Trumpet Archon", link: "http://tgdmb.com/viewtopic.php?p=384910#384910" },
            { name: "Very Old Dragon", link: "http://tgdmb.com/viewtopic.php?p=483328#483328" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 14
            }
        }),
        ...[
            { name: "Baernaloth", link: "http://tgdmb.com/viewtopic.php?p=384308#384308" },
            { name: "Fiend of Sorrow", link: "http://tgdmb.com/viewtopic.php?p=387189#387189" },
            { name: "Invisible", link: "http://www.tgdmb.com/viewtopic.php?p=510670#510670" },
            { name: "Kanohi Dragon", link: "http://www.tgdmb.com/viewtopic.php?p=511926#511926" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 15
            }
        }),
        ...[
            { name: "Ancient Dragon", link: "http://tgdmb.com/viewtopic.php?p=483328#483328" },
            { name: "Brachyurus", link: "http://tgdmb.com/viewtopic.php?p=403030#403030" },
            { name: "Dao, Noble", link: "http://tgdmb.com/viewtopic.php?p=413366#413366" },
            { name: "Djinn, Noble", link: "http://tgdmb.com/viewtopic.php?p=413000#413000" },
            { name: "Efreet, Noble", link: "http://tgdmb.com/viewtopic.php?p=411984#411984" },
            { name: "Gelugon", link: "http://tgdmb.com/viewtopic.php?p=384633#384633" },
            { name: "Goristro", link: "http://tgdmb.com/viewtopic.php?p=384176#384176" },
            { name: "Hellfire Wyrm", link: "http://www.tgdmb.com/viewtopic.php?p=456390#456390" },
            { name: "Invisible", link: "http://www.tgdmb.com/viewtopic.php?p=510670#510670" },
            { name: "Justicator", link: "http://tgdmb.com/viewtopic.php?p=383585#383585" },
            { name: "Khayal, Noble", link: "http://www.tgdmb.com/viewtopic.php?p=416353#416353" },
            { name: "Marid, Noble", link: "http://tgdmb.com/viewtopic.php?p=413438#413438" },
            { name: "Memitim", link: "http://www.tgdmb.com/viewtopic.php?p=498988#498988" },
            { name: "Planetar", link: "http://tgdmb.com/viewtopic.php?p=384306#384306" },
            { name: "Qorrash, Noble", link: "http://www.tgdmb.com/viewtopic.php?p=416902#416902" },
            { name: "Sea Giant", link: "http://tgdmb.com/viewtopic.php?p=380244#380244" },
            { name: "Sentinel", link: "http://tgdmb.com/viewtopic.php?p=471779#471779" },
            { name: "Spellbeing", link: "http://www.tgdmb.com/viewtopic.php?p=428116#428116" },
            { name: "Star Archon", link: "http://www.tgdmb.com/viewtopic.php?p=491648#491648" },
            { name: "Storm Giant", link: "http://tgdmb.com/viewtopic.php?p=371744#371744" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 16
            }
        }),
        ...[
            { name: "Death Giant", link: "http://tgdmb.com/viewtopic.php?p=375663#375663" },
            { name: "Nightstalker", link: "http://www.tgdmb.com/viewtopic.php?p=518823#518823" },
            { name: "Sandworm", link: "http://www.tgdmb.com/viewtopic.php?p=514887#514887" },
            { name: "Snowhair", link: "http://tgdmb.com/viewtopic.php?p=382133#382133" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 17
            }
        }),
        ...[
            { name: "Cherubim", link: "http://tgdmb.com/viewtopic.php?p=395650#395650" },
            { name: "Hound Archon Hero", link: "http://www.tgdmb.com/viewtopic.php?p=456025#456025" },
            { name: "Lilim", link: "http://tgdmb.com/viewtopic.php?p=415619#415619" },
            { name: "Tulani", link: "http://tgdmb.com/viewtopic.php?p=384687#384687" },
            { name: "War Giant", link: "http://tgdmb.com/viewtopic.php?p=372566#372566" },
            { name: "Wyrm Dragon", link: "http://tgdmb.com/viewtopic.php?p=483328#483328" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 18
            }
        }),
        ...[
            { name: "Behemoth", link: "http://tgdmb.com/viewtopic.php?p=489073#489073" },
            { name: "Death Slaad", link: "http://tgdmb.com/viewtopic.php?p=387187#387187" },
            { name: "Great Wyrm Dragon", link: "http://tgdmb.com/viewtopic.php?p=483328#483328" },
            { name: "Hellfire Engine", link: "http://tgdmb.com/viewtopic.php?p=491654#491654" },
            { name: "Mortai", link: "http://tgdmb.com/viewtopic.php?p=382136#382136" },
            { name: "Phoenix", link: "http://tgdmb.com/viewtopic.php?p=380239#380239" },
            { name: "Pit Fiend", link: "http://www.tgdmb.com/viewtopic.php?p=490029#490029" },
            { name: "Solar", link: "http://tgdmb.com/viewtopic.php?p=384005#384005" },
            { name: "Ultroloth", link: "http://tgdmb.com/viewtopic.php?p=468194#468194" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 20
            }
        }),
        ...[
            { name: "Erathaol (AKA Celestial Scholar, The Seer, Bringer of Knowledge, Timereaver)", link: "http://tgdmb.com/viewtopic.php?p=408111#408111" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 22
            }
        }),
        ...[
            { name: "Queen Morwel (AKA  Lady of the Lake, Queen of Stars, Faerie Queen)", link: "http://tgdmb.com/viewtopic.php?p=403390#403390" },
            { name: "Cryonax (AKA Bringer of Endless Winter, Prince of Evil Ice Creatures, The Bleak Monarch)", link: "http://www.tgdmb.com/viewtopic.php?p=424326#424326" },
            { name: "Imix (AKA Lord of Hellfire, Prince of Evil Fire Creatures, The Eternal Flame)", link: "http://www.tgdmb.com/viewtopic.php?p=454073#454073" },
            { name: "Tiamat (AKA The Queen of Evil Dragons, Her Dark Majesty, Takhisis)", link: "http://www.tgdmb.com/viewtopic.php?p=476599#476599" },
        ].map(({ name, link }) => {
            return {
                name: name,
                link: link,
                challengeRating: 24
            }
        }),
    ].map(({ name, link, challengeRating }) => {
        return {
            name: name,
            link: link,
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
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=277156#277156',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Litwick', challengeRating: 4 },
            { name: 'Lampent', challengeRating: 8 },
            { name: 'Chandelure ', challengeRating: 16 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=277156#277156',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Joltik', challengeRating: 1 },
            { name: 'Galvantula', challengeRating: 9 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Prak',
                link: 'http://tgdmb.com/viewtopic.php?p=277257#277257',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Vanillite', challengeRating: 3 },
            { name: 'Vanillish', challengeRating: 6 },
            { name: 'Vanilluxe', challengeRating: 10 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=277342#277342',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Drilbur', challengeRating: 6 },
            { name: 'Excadrill', challengeRating: 12 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=277346#277346',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Roggenrola', challengeRating: 4 },
            { name: 'Boldore', challengeRating: 12 },
            { name: 'Gigalith', challengeRating: 20 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=277352#277352',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Jellicent', challengeRating: 6 },
            { name: 'Frillish', challengeRating: 12 },
            { name: 'Munna', challengeRating: 5 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=277485#277485',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Woobat', challengeRating: 4 },
            { name: 'Swoobat', challengeRating: 8 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=277630#277630',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Solosis', challengeRating: 3 },
            { name: 'Duosion', challengeRating: 8 },
            { name: 'Reuniclus', challengeRating: 15 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=277642#277642',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Joltik (Alternate)', challengeRating: 1 },
            { name: 'Galvantula (Alternate)', challengeRating: 9 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Prak',
                link: 'http://tgdmb.com/viewtopic.php?p=277911#277911',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Venipede', challengeRating: 3 },
            { name: 'Whirlipede', challengeRating: 6 },
            { name: 'Scolipede', challengeRating: 12 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=278579#278579',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Sandile', challengeRating: 5 },
            { name: 'Krokorok', challengeRating: 10 },
            { name: 'Krookodile', challengeRating: 15 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=278581#278581',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Yamask', challengeRating: 6 },
            { name: 'Cofagrigus', challengeRating: 13 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=278748#278748',
                challengeRating: challengeRating,
            };
        }),
        {
            name: 'Petilil',
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=279442#279442',
            challengeRating: 3,
        },
        ...[
            { name: 'Larvesta', challengeRating: 4 },
            { name: 'Volcarona', challengeRating: 11 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=279443#279443',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Heatmor', challengeRating: 10 },
            { name: 'Durant', challengeRating: 8 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=279467#279467',
                challengeRating: challengeRating,
            };
        }),
        {
            name: 'Magnezone',
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=279578#279578',
            challengeRating: 16,
        },
        ...[
            { name: 'Klink', challengeRating: 1 },
            { name: 'Klang', challengeRating: 5 },
            { name: 'Klingklang', challengeRating: 10 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=279467#279467',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Klink', challengeRating: 1 },
            { name: 'Klang', challengeRating: 5 },
            { name: 'Klingklang', challengeRating: 10 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=279467#279467',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Pawniard', challengeRating: 4 },
            { name: 'Bisharp', challengeRating: 9 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=279812#279812',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Timburr', challengeRating: 4 },
            { name: 'Gurdurr', challengeRating: 7 },
            { name: 'Conkeldurr', challengeRating: 11 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=279812#279812',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Snivy', challengeRating: 1 },
            { name: 'Servine', challengeRating: 6 },
            { name: 'Serperior ', challengeRating: 11 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=280759#280759',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Tepig', challengeRating: 1 },
            { name: 'Pignite', challengeRating: 6 },
            { name: 'Emboar', challengeRating: 11 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=280842#280842',
                challengeRating: challengeRating,
            };
        }),
        {
            name: 'Sableye',
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=280995#280995',
            challengeRating: 4,
        },
        ...[
            { name: 'Croagunk', challengeRating: 4 },
            { name: 'Toxicroak', challengeRating: 10 },
            { name: 'Emboar', challengeRating: 11 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=281824#281824',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Gastly', challengeRating: 4 },
            { name: 'Haunter', challengeRating: 8 },
            { name: 'Gengar', challengeRating: 12 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=281847#281847',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Beldum', challengeRating: 1 },
            { name: 'Metang', challengeRating: 4 },
            { name: 'Metagross', challengeRating: 10 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=282485#282485',
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
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=282767#282767',
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
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=282777#282777',
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
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=283622#283622',
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
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=283958#283958',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'Zigzagoon', challengeRating: 1 },
            { name: 'Linoone', challengeRating: 5 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=284505#284505',
                challengeRating: challengeRating,
            };
        }),
        ...[
            { name: 'UFO', challengeRating: 20 },
            { name: 'Mechannitar', challengeRating: 10 },
            { name: 'Mechannitar Mk II', challengeRating: 12 },
        ].map(({ name, challengeRating }) => {
            return {
                name: name,
                author: 'Koumei',
                link: 'http://tgdmb.com/viewtopic.php?p=287732#287732',
                challengeRating: challengeRating,
            };
        }),
    ].map(({ name, author, link, challengeRating }) => {
        return {
            name: name,
            author: author,
            link: link,
            challengeRating: challengeRating,
            relatedLinks: [{ title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },]
        }
    }),
    {
        name: 'Trickpuncher Abra',
        author: 'Koumei',
        link: 'http://tgdmb.com/viewtopic.php?p=56877#56877',
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
            name: name,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=57224#57224',
            challengeRating: challengeRating,
            relatedLinks: [
                { title: 'Statblock', link: statblockLink },
                { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
            ]
        }
    }),
    ...[
        { name: 'Croagunk (Old)', challengeRating: 3, updatedVersionLink: 'http://tgdmb.com/viewtopic.php?p=281824#281824' },
        { name: 'Toxicroak (Old)', challengeRating: 8, updatedVersionLink: 'http://tgdmb.com/viewtopic.php?p=281824#281824' },
    ].map(({ name, challengeRating, updatedVersionLink }) => {
        return {
            name,
            author: 'Koumei',
            link: 'http://tgdmb.com/viewtopic.php?p=57503#57503',
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
        link: 'http://tgdmb.com/viewtopic.php?p=422313#422313',
        challengeRating: 0.5,
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: 'Arachnal ',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=233522#233522',
        challengeRating: 4,
    },
    {
        name: 'Sea Turtle',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=169157#169157',
        challengeRating: 2,
    },
    {
        name: 'Shibboleth',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=397721#397721',
        challengeRating: 12
    },
    {
        name: 'Goby Swarm',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=426306#426306',
        challengeRating: 1
    },
    {
        name: 'Nethar Symbiote',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=495227#495227',
    },
    {
        name: 'Baku',
        author: 'Prak',
        link: 'http://www.tgdmb.com/viewtopic.php?p=155961#155961',
        challengeRating: 2
    },
    {
        name: 'Clockwork Man',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/viewtopic.php?p=140559#140559',
        challengeRating: 3
    },
    {
        name: '"Javan" Light Steam Tank / Transport',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/viewtopic.php?p=141936#141936',
        challengeRating: 5
    },
    {
        name: 'Taino',
        author: 'virgil',
        link: 'http://tgdmb.com/viewtopic.php?p=489974#489974',
        challengeRating: 3
    },
    {
        name: 'Scapegrace',
        author: 'virgil',
        link: 'http://tgdmb.com/viewtopic.php?p=476388#476388',
        challengeRating: 1 / 3
    },
    {
        name: 'Time Golem',
        author: 'Prak',
        link: 'http://tgdmb.com/viewtopic.php?p=427314#427314',
        challengeRating: 7
    },
    {
        name: 'X Golem',
        author: 'Foxwarrior',
        link: 'http://tgdmb.com/viewtopic.php?p=436610#436610',
        challengeRating: 9
    },
    {
        name: 'Your Mom',
        author: 'DrPraetor',
        link: 'http://tgdmb.com/viewtopic.php?p=295983#295983',
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
            link: 'http://tgdmb.com/viewtopic.php?p=313514#313514',
            challengeRating: challengeRating
        }
    }),
    {
        name: 'Simulacrum',
        author: 'virgil',
        link: 'http://tgdmb.com/viewtopic.php?p=292335#292335',
        challengeRating: 3
    },
    ...[
        { name: 'Lesser Mezzoloth', challengeRating: 6 },
        { name: 'Lesser Arcanoloth', challengeRating: 8 },
    ].map(({ name, challengeRating }) => {
        return {
            name: name,
            author: 'Avoraciopoctules',
            link: 'http://tgdmb.com/viewtopic.php?p=259986#259986',
            challengeRating: challengeRating
        }
    }),
    {
        name: 'Ogre Mage',
        author: 'FruitThatAteItself',
        link: 'http://tgdmb.com/viewtopic.php?p=205209#205209',
        challengeRating: 5
    },
]