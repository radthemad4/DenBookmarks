import { PrestigeClassEntry, MonsterEntry } from "../entry";

export const koumeiMonsterPrcs: PrestigeClassEntry[] = [
    ...[
        {
            name: 'Abeil Soldier PrC: Stormwing Champion',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543836#543836',
            minimumStartingLevel: 8
        },
        ...[
            { name: 'Memory Architect', link: 'http://www.tgdmb.com/viewtopic.php?p=543872#543872' },
            { name: 'Flesh Sculptor', link: 'http://www.tgdmb.com/viewtopic.php?p=543876#543876' },
        ].map(({ name, link }) => {
            return {
                name: `Aboleth PrC: ${name}`,
                link: link,
                minimumStartingLevel: 11
            }
        }),
        {
            name: 'Abyssal Drake PrC: Abyssal Wyrm',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543878#543878',
            minimumStartingLevel: 12
        },
        ...[
            { name: 'Spellspinner', link: 'http://www.tgdmb.com/viewtopic.php?p=543880#543880' },
            { name: 'Lord of the Flies', link: 'http://www.tgdmb.com/viewtopic.php?p=543887#543887' },
            { name: 'Spider Queen', link: 'http://www.tgdmb.com/viewtopic.php?p=543892#543892' },
        ].map(({ name, link }) => {
            return {
                name: `Aranea PrC: ${name}`,
                link: link,
                minimumStartingLevel: 6
            }
        }),
        {
            name: 'Archon: Hound Archon PrC: Heavenly Bloodhound',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543909#543909',
            minimumStartingLevel: 7
        },
        {
            name: 'Archon: Justice Archon PrC: Retribution Archon',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543911#543911',
            minimumStartingLevel: 8
        },
        {
            name: 'Archon: Sword Archon PrC: Blade of Justice',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543915#543915',
            minimumStartingLevel: 13
        },
        {
            name: 'Archon: Warden Archon PrC: Paragon Guardian',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543916#543916',
            minimumStartingLevel: 10
        },
        {
            name: 'Archon: Word Archon PrC: Ishim',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543918#543918',
            minimumStartingLevel: 11
        },
        {
            name: 'Asura PrC: Righteous Avenger',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543919#543919',
            minimumStartingLevel: 10
        },
        ...[
            { name: 'Necrocrafter', link: 'http://www.tgdmb.com/viewtopic.php?p=543920#543920' },
            { name: 'Herald of Kyuss', link: 'http://www.tgdmb.com/viewtopic.php?p=543921#543921' },
        ].map(({ name, link }) => {
            return {
                name: `Avolakia PrC: ${name}`,
                link: link,
                minimumStartingLevel: 12
            }
        }),
        {
            name: 'Blackwing PrC: Sky Tyrant',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543919#543919',
            minimumStartingLevel: 11
        },
        {
            name: 'Blink Dog PrC: Aspect of Sarama',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543941#543941',
            minimumStartingLevel: 4
        },
        {
            name: 'Chuul PrC: Subterranean Stalker',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543944#543944',
            minimumStartingLevel: 10
        },
        ...[
            { name: 'Caper', link: 'http://www.tgdmb.com/viewtopic.php?p=543953#543953' },
            { name: 'Resplendent Robe', link: 'http://www.tgdmb.com/viewtopic.php?p=543956#543956' },
        ].map(({ name, link }) => {
            return {
                name: `Cloaker PrC: ${name}`,
                link: link,
                minimumStartingLevel: 7
            }
        }),
        {
            name: 'Coatl PrC: Questing Coatl',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543958#543958',
            minimumStartingLevel: 13
        },
        {
            name: 'Darkweaver PrC: Horror',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543970#543970',
            minimumStartingLevel: 12
        },
        {
            name: 'Demon: Armanite PrC: Abyssal Siegebreaker',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543971#543971',
            minimumStartingLevel: 9
        },
        {
            name: 'Demon: Arrow Demon PrC: Abyssal Archer',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543972#543972',
            minimumStartingLevel: 9
        },
        {
            name: 'Demon: Babau PrC: Abyssal Marauder',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543980#543980',
            minimumStartingLevel: 8
        },
        {
            name: 'Demon: Bulezau PrC: Horned Reaper',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543981#543981',
            minimumStartingLevel: 11
        },
        {
            name: 'Demon: Chasme PrC: Infestation',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543981#543981',
            minimumStartingLevel: 12
        },
        {
            name: 'Demon: Glabrezu PrC: Stranger Bearing Gifts',
            link: 'http://www.tgdmb.com/viewtopic.php?p=543983#543983',
            minimumStartingLevel: 14
        },
        {
            name: 'Demon: Jovoc PrC: Karmic Corruptor',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544031#544031',
            minimumStartingLevel: 6
        },
        {
            name: 'Demon: Palrethee PrC: Burning Overlord',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544033#544033',
            minimumStartingLevel: 10
        },
        {
            name: 'Quasit PrC: Vile Familiar',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544035#544035',
            minimumStartingLevel: 4
        },
        {
            name: 'Demon: Shadow Demon PrC: Hidden Overlord',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544036#544036',
            minimumStartingLevel: 11
        },
        ...[
            { name: 'Deceiver', link: 'http://www.tgdmb.com/viewtopic.php?p=544048#544048' },
            { name: 'Bargainer', link: 'http://www.tgdmb.com/viewtopic.php?p=544051#544051' },
            { name: 'Black Maiden', link: 'http://www.tgdmb.com/viewtopic.php?p=544063#544063' },
            { name: 'Night Blade', link: 'http://www.tgdmb.com/viewtopic.php?p=544065#544065' },
        ].map(({ name, link }) => {
            return {
                name: `Demon: Succubus PrC: ${name}`,
                link: link,
                minimumStartingLevel: 10
            }
        }),
        {
            name: 'Demon: Uridezu PrC: Sneaky Rat',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544067#544067',
            minimumStartingLevel: 8
        },
        {
            name: 'Demon: Vrock PrC: Vile Dancer',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544071#544071',
            minimumStartingLevel: 11
        },
        {
            name: 'Desmodu PrC: Desmodu Warmaster',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544104#544104',
            minimumStartingLevel: 11
        },
        {
            name: 'Devil: Advespa PrC: Baatorian Swarmlord',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544105#544105',
            minimumStartingLevel: 7
        },
        {
            name: 'Devil: Amnizu PrC: Fugitive Hunter of Baator',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544105#544105',
            minimumStartingLevel: 9
        },
        ...[
            { name: 'Baator Battle Captain', link: 'http://www.tgdmb.com/viewtopic.php?p=544111#544111' },
            { name: 'Soul Handler', link: 'http://www.tgdmb.com/viewtopic.php?p=544112#544112' },
        ].map(({ name, link }) => {
            return {
                name: `Devil: Barbazu PrC: ${name}`,
                link: link,
                minimumStartingLevel: 7
            }
        }),
        {
            name: 'Devil: Brachina PrC: Aka Manah',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544119#544119',
            minimumStartingLevel: 13
        },
        {
            name: 'Devil: Dogai PrC: Third Party',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544122#544122',
            minimumStartingLevel: 13
        },
        ...[
            { name: 'Erinyes Recruitment Specialist', link: 'http://www.tgdmb.com/viewtopic.php?p=544134#544134' },
            { name: 'Fury of the Nine Hells', link: 'http://www.tgdmb.com/viewtopic.php?p=544135#544135' },
            { name: 'Infernal Supervisor', link: 'http://www.tgdmb.com/viewtopic.php?p=544136#544136' },
        ].map(({ name, link }) => {
            return {
                name: `Demon: Erinyes PrC: ${name}`,
                link: link,
                minimumStartingLevel: 10
            }
        }),
        {
            name: 'Devil: Excruciarch PrC: Painmaker',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544148#544148',
            minimumStartingLevel: 9
        },
        {
            name: 'Devil: Falxugon PrC: Pact Master',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544150#544150',
            minimumStartingLevel: 9
        },
        {
            name: 'Devil: Gelugon PrC: Canian Overlord',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544152#544152',
            minimumStartingLevel: 16
        },
        {
            name: 'Devil: Hamatula PrC: Master of the Spined Arts',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544171#544171',
            minimumStartingLevel: 13
        },
        ...[
            { name: 'Sycophant', link: 'http://www.tgdmb.com/viewtopic.php?p=544172#544172' },
            { name: 'Offering', link: 'http://www.tgdmb.com/viewtopic.php?p=544185#544185' },
        ].map(({ name, link }) => {
            return {
                name: `Devil: Imp PrC: ${name}`,
                link: link,
                minimumStartingLevel: 4
            }
        }),
        ...[
            { name: 'Hell Flayer', link: 'http://www.tgdmb.com/viewtopic.php?p=544188#544188' },
            { name: 'Nightmare Warden', link: 'http://www.tgdmb.com/viewtopic.php?p=544189#544189' },
        ].map(({ name, link }) => {
            return {
                name: `Devil: Kyton PrC: ${name}`,
                link: link,
                minimumStartingLevel: 9
            }
        }),
        {
            name: 'Devil: Logokron PrC: Devil in the Details',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544204#544204',
            minimumStartingLevel: 16
        },
        {
            name: 'Devil: Narzugon PrC: Narzugon Lancer',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544205#544205',
            minimumStartingLevel: 8
        },
        {
            name: 'Devil: Orthon PrC: Infernal Weaponmaster',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544208#544208',
            minimumStartingLevel: 10
        },
        {
            name: 'Devil: Osyluth PrC: Stygian Overlord',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544210#544210',
            minimumStartingLevel: 11
        },
        {
            name: 'Dread Guard PrC: Angry Armour',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544221#544221',
            minimumStartingLevel: 5
        },
        ...[
            { name: 'Tree Speaker', link: 'http://www.tgdmb.com/viewtopic.php?p=544222#544222' },
            { name: 'Thorn Tree', link: 'http://www.tgdmb.com/viewtopic.php?p=544225#544225' },
        ].map(({ name, link }) => {
            return {
                name: `Dryad PrC: ${name}`,
                link: link,
                minimumStartingLevel: 5
            }
        }),
        {
            name: 'Deva: Monadic PrC: Elemental Steward',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544229#544229',
            minimumStartingLevel: 14
        },
        {
            name: 'Deva: Movanic PrC: Worldly Dominion',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544229#544229',
            minimumStartingLevel: 11
        },
        {
            name: 'Eladrin: Bralani PrC: Hero of the Storm',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544238#544238',
            minimumStartingLevel: 9
        },
        {
            name: 'Eladrin: Courre PrC: Navi',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544238#544238',
            minimumStartingLevel: 6
        },
        {
            name: 'Eladrin: Firre PrC: Hashmallim ',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544288#544288',
            minimumStartingLevel: 15
        },
        ...[
            { name: 'Chosen of the Inner Source', link: 'http://www.tgdmb.com/viewtopic.php?p=544290#544290' },
            { name: 'Blade of Entropy', link: 'http://www.tgdmb.com/viewtopic.php?p=544292#544292' },
        ].map(({ name, link }) => {
            return {
                name: `Elemental: Small PrC: ${name}`,
                link: link,
                minimumStartingLevel: 4
            }
        }),
        {
            name: 'Eye of Fear and Flame PrC: Burning Terror',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544293#544293',
            minimumStartingLevel: 10
        },
        {
            name: 'Faerie Dragon PrC: Ancient Prankster',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544305#544305',
            minimumStartingLevel: 9
        },
        {
            name: 'Flame Snake: Lesser PrC: Life Burner',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544306#544306',
            minimumStartingLevel: 9
        },
        ...[
            { name: 'Obsidian Gargoyle', link: 'http://www.tgdmb.com/viewtopic.php?p=544327#544327' },
            { name: 'Continental Drifter', link: 'http://www.tgdmb.com/viewtopic.php?p=544328#544328' },
        ].map(({ name, link }) => {
            return {
                name: `Gargoyle PrC: ${name}`,
                link: link,
                minimumStartingLevel: 5
            }
        }),
        {
            name: 'Genie: Dao PrC: Earthen Khan',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544346#544346',
            minimumStartingLevel: 9
        },
        {
            name: 'Genie: Djinni PrC: Djinn Sultan',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544347#544347',
            minimumStartingLevel: 8
        },
        {
            name: 'Genie: Efreeti PrC: Solar Overlord',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544352#544352',
            minimumStartingLevel: 11
        },
        ...[
            { name: 'Harmonic Manifestation', link: 'http://www.tgdmb.com/viewtopic.php?p=544353#544353' },
            { name: 'Full Genie Hero', link: 'http://www.tgdmb.com/viewtopic.php?p=544360#544360' },
        ].map(({ name, link }) => {
            return {
                name: `Genie: Janni PrC: ${name}`,
                link: link,
                minimumStartingLevel: 6
            }
        }),
        {
            name: 'Genie: Khayal PrC: Malik',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544408#544408',
            minimumStartingLevel: 8
        },
        {
            name: 'Genie: Marid PrC: Rainmaker',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544411#544411',
            minimumStartingLevel: 11
        },
        {
            name: 'Genie: Qorrashi PrC: Blessing of the Blizzards',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544435#544435',
            minimumStartingLevel: 8
        },
        ...[
            { name: 'Ghastly Ravager', link: 'http://www.tgdmb.com/viewtopic.php?p=544438#544438' },
            { name: 'Ghoul Lord', link: 'http://www.tgdmb.com/viewtopic.php?p=544439#544439' },
        ].map(({ name, link }) => {
            return {
                name: `Ghoul: Ghast PrC: ${name}`,
                link: link,
                minimumStartingLevel: 5
            }
        }),
        {
            name: 'Giant: Fire Giant PrC: Magma King',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544445#544445',
            minimumStartingLevel: 12
        },
        {
            name: 'Giant: Frost Giant PrC: Frost Jarl',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544446#544446',
            minimumStartingLevel: 11
        },
        {
            name: 'Grimweird PrC: Withered Conjurer',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544469#544469',
            minimumStartingLevel: 13
        },
        {
            name: 'Guardinal: Avoral PrC: Heavenly Sky Hunter',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544478#544478',
            minimumStartingLevel: 11
        },
        {
            name: 'Guardinal: Cervidal PrC: Blessed of the Adamant Horn',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544490#544490',
            minimumStartingLevel: 5
        },
        {
            name: 'Guardinal: Leonal PrC: Celestial Lionheart',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544517#544517',
            minimumStartingLevel: 14
        },
        {
            name: 'Hag: Annis PrC: Dweller Within the Mere',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544520#544520',
            minimumStartingLevel: 8
        },
        {
            name: 'Hag: Dune PrC: Dweller Within the Wastes',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544524#544524',
            minimumStartingLevel: 6
        },
        {
            name: 'Hag: Green PrC: Dweller Within the Fen',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544526#544526',
            minimumStartingLevel: 7
        },
        {
            name: 'Hag: Marzana (Winter) PrC: Dweller Within the Frost',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544526#544526',
            minimumStartingLevel: 8
        },
        {
            name: 'Hag: Sea PrC: Dweller Within the Deep',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544565#544565',
            minimumStartingLevel: 6
        },
        {
            name: 'Hag: Shrieking PrC: Dweller Within the Mountains',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544566#544566',
            minimumStartingLevel: 12
        },
        ...[
            { name: 'Harpy Archer', link: 'http://www.tgdmb.com/viewtopic.php?p=544571#544571' },
            { name: 'Harpy Chord', link: 'http://www.tgdmb.com/viewtopic.php?p=544594#544594' },
        ].map(({ name, link }) => {
            return {
                name: `Harpy PrC: ${name}`,
                link: link,
                minimumStartingLevel: 6
            }
        }),
        ...[
            { name: 'Nessian Warhound', link: 'http://www.tgdmb.com/viewtopic.php?p=544596#544596' },
            { name: 'Haraknin', link: 'http://www.tgdmb.com/viewtopic.php?p=544618#544618' },
        ].map(({ name, link }) => {
            return {
                name: `Hell Hound PrC: ${name}`,
                link: link,
                minimumStartingLevel: 5
            }
        }),
        {
            name: 'Hellwasp Swarm PrC: Swarm Within',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544666#544666',
            minimumStartingLevel: 11
        },
        {
            name: 'Inevitable: Kolyarut PrC: Enforcer of Oaths',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544704#544704',
            minimumStartingLevel: 14
        },
        {
            name: 'Inevitable: Zelekhut PrC: Enforcer of Justice',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544704#544704',
            minimumStartingLevel: 11
        },
        {
            name: 'Ironmaw PrC: Ferocious Flora',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544711#544711',
            minimumStartingLevel: 14
        },
        {
            name: 'Jackal Lord PrC: Jackal Baron',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544743#544743',
            minimumStartingLevel: 10
        },
        {
            name: 'Joystealer PrC: Heartless Prankster',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544744#544744',
            minimumStartingLevel: 8
        },
        {
            name: 'Lillend PrC: Divine Muse',
            link: 'http://www.tgdmb.com/viewtopic.php?p=544750#544750',
            minimumStartingLevel: 9
        },
        {
            name: 'Manticore PrC: Manticore Scout',
            link: 'http://tgdmb.com/viewtopic.php?p=544769#544769',
            minimumStartingLevel: 7
        },
        {
            name: 'Marrash PrC: Blight of Yeenoghu',
            link: 'http://tgdmb.com/viewtopic.php?p=544770#544770',
            minimumStartingLevel: 7
        },
        {
            name: 'Medusa PrC: Statue Collector',
            link: 'http://tgdmb.com/viewtopic.php?p=544773#544773',
            minimumStartingLevel: 11
        },
        ...[
            { name: "Sha'ir", link: 'http://tgdmb.com/viewtopic.php?p=544778#544778' },
            { name: 'Elemental Master', link: 'http://tgdmb.com/viewtopic.php?p=544780#544780' },
            { name: 'Mephit King', link: 'http://tgdmb.com/viewtopic.php?p=544781#544781' },
        ].map(({ name, link }) => {
            return {
                name: `Mephit PrC: ${name}`,
                link: link,
                minimumStartingLevel: 4
            }
        }),
        ...[
            { name: "Facsimile", link: 'http://tgdmb.com/viewtopic.php?p=544783#544783' },
            { name: "Pandora's Box", link: 'http://tgdmb.com/viewtopic.php?p=544785#544785' },
        ].map(({ name, link }) => {
            return {
                name: `Mimic PrC: ${name}`,
                link: link,
                minimumStartingLevel: 6
            }
        }),
        ...[
            { name: "Far Realm Caller", link: 'http://tgdmb.com/viewtopic.php?p=544798#544798' },
            { name: "Illithid Mastermind", link: 'http://tgdmb.com/viewtopic.php?p=544799#544799' },
            { name: "Mind Owner", link: 'http://tgdmb.com/viewtopic.php?p=544800#544800' },
        ].map(({ name, link }) => {
            return {
                name: `Mind Flayer PrC: ${name}`,
                link: link,
                minimumStartingLevel: 11
            }
        }),
        {
            name: 'Minotaur PrC: Maze Stalker',
            link: 'http://tgdmb.com/viewtopic.php?p=544802#544802',
            minimumStartingLevel: 6
        },
        {
            name: 'Moon Dog PrC: Very Good Dog',
            link: 'http://tgdmb.com/viewtopic.php?p=544803#544803',
            minimumStartingLevel: 14
        },
        ...[
            { name: "Saboteur", link: 'http://tgdmb.com/viewtopic.php?p=544804#544804' },
            { name: "Tide Master", link: 'http://tgdmb.com/viewtopic.php?p=544805#544805' },
        ].map(({ name, link }) => {
            return {
                name: `Moonrat PrC: ${name}`,
                link: link,
                minimumStartingLevel: 1
            }
        }),
        ...[
            { name: "Mummy Lord", link: 'http://tgdmb.com/viewtopic.php?p=544812#544812' },
            { name: "Cursed One", link: 'http://tgdmb.com/viewtopic.php?p=547481#547481' },
        ].map(({ name, link }) => {
            return {
                name: `Mummy PrC: ${name}`,
                link: link,
                minimumStartingLevel: 7
            }
        }),
        {
            name: 'Myconid Sovereign PrC: Mushroom King',
            link: 'http://tgdmb.com/viewtopic.php?p=544828#544828',
            minimumStartingLevel: 8
        },
        {
            name: 'Neogi: Adult PrC: Neogi Powermonger',
            link: 'http://tgdmb.com/viewtopic.php?p=544847#544847',
            minimumStartingLevel: 6
        },
        {
            name: 'Nereid PrC: Oceanic Questor',
            link: 'http://tgdmb.com/viewtopic.php?p=544852#544852',
            minimumStartingLevel: 6
        },
        {
            name: 'Nerra PrC: Sillit',
            link: 'http://tgdmb.com/viewtopic.php?p=544872#544872',
            minimumStartingLevel: 9
        },
        {
            name: 'Nethersight Mastiff PrC: Astral Fang',
            link: 'http://tgdmb.com/viewtopic.php?p=544883#544883',
            minimumStartingLevel: 10
        },
        {
            name: 'Night Hag PrC: Covey Countess',
            link: 'http://tgdmb.com/viewtopic.php?p=544885#544885',
            minimumStartingLevel: 11
        },
        ...[
            { name: "Cauchemare", link: 'http://tgdmb.com/viewtopic.php?p=544888#544888' },
            { name: "Night Terror", link: 'http://tgdmb.com/viewtopic.php?p=544894#544894' },
        ].map(({ name, link }) => {
            return {
                name: `Nightmare PrC: ${name}`,
                link: link,
                minimumStartingLevel: 7
            }
        }),
        ...[
            { name: "Summer Court Queen", link: 'http://tgdmb.com/viewtopic.php?p=544901#544901' },
            { name: "Winter Court Queen", link: 'http://tgdmb.com/viewtopic.php?p=544902#544902' },
        ].map(({ name, link }) => {
            return {
                name: `Nymph PrC: ${name}`,
                link: link,
                minimumStartingLevel: 9
            }
        }),
        {
            name: 'Ogre PrC: Creeping Mountain',
            link: 'http://tgdmb.com/viewtopic.php?p=544907#544907',
            minimumStartingLevel: 4
        },
        {
            name: 'Ogre-Mage PrC: Taotieh',
            link: 'http://tgdmb.com/viewtopic.php?p=544913#544913',
            minimumStartingLevel: 9
        },
        {
            name: 'Oread PrC: Mountain Whisperer',
            link: 'http://tgdmb.com/viewtopic.php?p=544915#544915',
            minimumStartingLevel: 9
        },
        {
            name: 'Ormyrr PrC: Magic Seeker',
            link: 'http://tgdmb.com/viewtopic.php?p=544925#544925',
            minimumStartingLevel: 8
        },
        {
            name: 'Formian: Taskmaster PrC: Conscriptor',
            link: 'http://tgdmb.com/viewtopic.php?p=544928#544928',
            minimumStartingLevel: 9
        },
        {
            name: 'Formian: Myrmarch PrC: Agent of the Colony',
            link: 'http://tgdmb.com/viewtopic.php?p=544929#544929',
            minimumStartingLevel: 12
        },
        {
            name: 'Pegasus PrC: Protector of Dreams',
            link: 'http://tgdmb.com/viewtopic.php?p=544937#544937',
            minimumStartingLevel: 5
        },
        {
            name: 'Pixie PrC: Fairy Archer',
            link: 'http://tgdmb.com/viewtopic.php?p=544943#544943',
            minimumStartingLevel: 6
        },
        {
            name: 'Rakshasa: Naityan PrC: Champion of Ravana',
            link: 'http://tgdmb.com/viewtopic.php?p=544954#544954',
            minimumStartingLevel: 9
        },
        {
            name: 'Rakshasa: Naztharune PrC: Phantom Feline',
            link: 'http://tgdmb.com/viewtopic.php?p=544958#544958',
            minimumStartingLevel: 13
        },
        {
            name: 'Reason Stealer PrC: Face Wearer',
            link: 'http://tgdmb.com/viewtopic.php?p=544974#544974',
            minimumStartingLevel: 7
        },
        {
            name: 'Rejkar PrC: Great Goat God',
            link: 'http://tgdmb.com/viewtopic.php?p=544976#544976',
            minimumStartingLevel: 7
        },
        {
            name: 'Rusalka PrC: Ice Sickle',
            link: 'http://tgdmb.com/viewtopic.php?p=544977#544977',
            minimumStartingLevel: 3
        },
        {
            name: 'Awakened Porpoise PrC: Puppeteer',
            link: 'http://tgdmb.com/viewtopic.php?p=544985#544985',
            minimumStartingLevel: 3
        },
        ...[
            { name: "Harvester", link: 'http://tgdmb.com/viewtopic.php?p=544986#544986' },
            { name: "Verdant Sage", link: 'http://tgdmb.com/viewtopic.php?p=544987#544987' },
        ].map(({ name, link }) => {
            return {
                name: `Awakened Tree (Huge) PrC: ${name}`,
                link: link,
                minimumStartingLevel: 7
            }
        }),
        {
            name: 'Saguaro Sentinel PrC: Warden of the Waste',
            link: 'http://tgdmb.com/viewtopic.php?p=544988#544988',
            minimumStartingLevel: 11
        },
        {
            name: 'Salamander: Average PrC: Flameforger',
            link: 'http://tgdmb.com/viewtopic.php?p=544989#544989',
            minimumStartingLevel: 8
        },
        ...[
            { name: "Night Shark", link: 'http://tgdmb.com/viewtopic.php?p=544992#544992' },
            { name: "Ocean Strike Leader", link: 'http://tgdmb.com/viewtopic.php?p=544993#544993' },
        ].map(({ name, link }) => {
            return {
                name: `Sahuagin PrC: ${name}`,
                link: link,
                minimumStartingLevel: 3
            }
        }),
        {
            name: 'Scyllan PrC: Sea Devil',
            link: 'http://tgdmb.com/viewtopic.php?p=545006#545006',
            minimumStartingLevel: 16
        },
        {
            name: 'Shadow: Greater PrC: King of Shadows',
            link: 'http://tgdmb.com/viewtopic.php?p=545010#545010',
            minimumStartingLevel: 10
        },
        {
            name: 'Shadow Mastiff PrC: Shadurakul',
            link: 'http://tgdmb.com/viewtopic.php?p=545011#545011',
            minimumStartingLevel: 7
        },
        {
            name: 'Sirine PrC: Mind Changer',
            link: 'http://tgdmb.com/viewtopic.php?p=545012#545012',
            minimumStartingLevel: 7
        },
        {
            name: 'Sisiutl PrC: Chosen of Winalagalis',
            link: 'http://tgdmb.com/viewtopic.php?p=545023#545023',
            minimumStartingLevel: 11
        },
        {
            name: 'Skull Lord PrC: Unholy Trinity',
            link: 'http://tgdmb.com/viewtopic.php?p=545025#545025',
            minimumStartingLevel: 9
        },
        {
            name: 'Slaad: Blue PrC: Battletoad',
            link: 'http://tgdmb.com/viewtopic.php?p=545027#545027',
            minimumStartingLevel: 10
        },
        {
            name: 'Slaad: Green PrC: Giant Frog',
            link: 'http://tgdmb.com/viewtopic.php?p=545028#545028',
            minimumStartingLevel: 11
        },
        {
            name: 'Slaad: Grey PrC: Death Slaad',
            link: 'http://tgdmb.com/viewtopic.php?p=545029#545029',
            minimumStartingLevel: 12
        },
        ...[
            { name: "Spectral Reaper", link: 'http://tgdmb.com/viewtopic.php?p=545030#545030' },
            { name: "Soul Eater", link: 'http://tgdmb.com/viewtopic.php?p=545031#545031' },
        ].map(({ name, link }) => {
            return {
                name: `Spectre PrC: ${name}`,
                link: link,
                minimumStartingLevel: 10
            }
        }),
        {
            name: 'Tengu: Human-Headed PrC: Kaze Mahoujin',
            link: 'http://tgdmb.com/viewtopic.php?p=545063#545063',
            minimumStartingLevel: 7
        },
        {
            name: 'Thunderbird PrC: Stormbeak',
            link: 'http://tgdmb.com/viewtopic.php?p=545064#545064',
            minimumStartingLevel: 16
        },
        ...[
            { name: "World Changer", link: 'http://tgdmb.com/viewtopic.php?p=545071#545071' },
            { name: "Flesh Hunter", link: 'http://tgdmb.com/viewtopic.php?p=545072#545072' },
        ].map(({ name, link }) => {
            return {
                name: `Troll PrC: ${name}`,
                link: link,
                minimumStartingLevel: 7
            }
        }),
        {
            name: 'Ulgurstasta PrC: Death Crawler',
            link: 'http://tgdmb.com/viewtopic.php?p=545083#545083',
            minimumStartingLevel: 14
        },
        {
            name: 'Unicorn PrC: Celestial Charger',
            link: 'http://tgdmb.com/viewtopic.php?p=545085#545085',
            minimumStartingLevel: 5
        },
        {
            name: 'Urskan PrC: Ice Crusher',
            link: 'http://tgdmb.com/viewtopic.php?p=545086#545086',
            minimumStartingLevel: 7
        },
        {
            name: 'Valkyrie PrC: Valhallan Champion',
            link: 'http://tgdmb.com/viewtopic.php?p=545114#545114',
            minimumStartingLevel: 11
        },
        {
            name: 'Vine Horror PrC: Tangled Master',
            link: 'http://tgdmb.com/viewtopic.php?p=545115#545115',
            minimumStartingLevel: 6
        },
        {
            name: 'Vorr PrC: Vultivor',
            link: 'http://tgdmb.com/viewtopic.php?p=545116#545116',
            minimumStartingLevel: 6
        },
        ...[
            { name: "Grave Guard", link: 'http://tgdmb.com/viewtopic.php?p=545119#545119' },
            { name: "Deathly Corruptor", link: 'http://tgdmb.com/viewtopic.php?p=545120#545120' },
        ].map(({ name, link }) => {
            return {
                name: `Wight PrC: ${name}`,
                link: link,
                minimumStartingLevel: 5
            }
        }),
        {
            name: "Winter Wolf PrC: Winter's Emissary",
            link: 'http://tgdmb.com/viewtopic.php?p=545126#545126',
            minimumStartingLevel: 7
        },
        ...[
            { name: "Icy Void", link: 'http://tgdmb.com/viewtopic.php?p=545127#545127' },
            { name: "Shape of Fire", link: 'http://tgdmb.com/viewtopic.php?p=545128#545128' },
            { name: "Haunting Presence", link: 'http://tgdmb.com/viewtopic.php?p=545131#545131' },
        ].map(({ name, link }) => {
            return {
                name: `Wraith: Dread PrC: ${name}`,
                link: link,
                minimumStartingLevel: 13
            }
        }),
        ...[
            { name: "Xill Marauder", link: 'http://tgdmb.com/viewtopic.php?p=545134#545134' },
            { name: "Xill Moral Guide", link: 'http://tgdmb.com/viewtopic.php?p=545135#545135' },
        ].map(({ name, link }) => {
            return {
                name: `Xill PrC: ${name}`,
                link: link,
                minimumStartingLevel: 8
            }
        }),
        {
            name: "Yak Folk PrC: Yakultist",
            link: 'http://tgdmb.com/viewtopic.php?p=545156#545156',
            minimumStartingLevel: 6
        },
        ...[
            { name: "Yuan-ti Infiltrator", link: 'http://tgdmb.com/viewtopic.php?p=545165#545165' },
            { name: "Dungeon Delver of Mershaulk", link: 'http://tgdmb.com/viewtopic.php?p=545166#545166' },
        ].map(({ name, link }) => {
            return {
                name: `Yuan-ti: Pureblood PrC: ${name}`,
                link: link,
                minimumStartingLevel: 5
            }
        }),
        {
            name: "Yuan-ti: Halfblood PrC: Serpent-Whisperer of Mershaulk",
            link: 'http://tgdmb.com/viewtopic.php?p=545167#545167',
            minimumStartingLevel: 7
        },
        ...[
            { name: "Holy Guardian", link: 'http://tgdmb.com/viewtopic.php?p=545196#545196' },
            { name: "Anathema Incarnate", link: 'http://tgdmb.com/viewtopic.php?p=545197#545197' },
        ].map(({ name, link }) => {
            return {
                name: `Yuan-ti: Abomination PrC: ${name}`,
                link: link,
                minimumStartingLevel: 9
            }
        }),
        {
            name: "Yuan-ti: Ignan PrC: Raging Flame",
            link: 'http://tgdmb.com/viewtopic.php?p=545200#545200',
            minimumStartingLevel: 10
        },
        {
            name: "Yugoloth: Marraenoloth PrC: Ferryman",
            link: 'http://tgdmb.com/viewtopic.php?p=545245#545245',
            minimumStartingLevel: 11
        },
        {
            name: "Yugoloth: Nycaloth PrC: Nycaloth Commander",
            link: 'http://tgdmb.com/viewtopic.php?p=545246#545246',
            minimumStartingLevel: 13
        },
        {
            name: "Yuki-On-Na PrC: Tsurara-Onna",
            link: 'http://tgdmb.com/viewtopic.php?p=545250#545250',
            minimumStartingLevel: 7
        },
        ...[
            { name: "Great Wyrm of the Sky", link: 'http://tgdmb.com/viewtopic.php?p=545342#545342' },
            { name: "True Dragon", link: 'http://tgdmb.com/viewtopic.php?p=545397#545397' },
            { name: "Dread Wyrm", link: 'http://tgdmb.com/viewtopic.php?p=545473#545473' },
        ].map(({ name, link }) => {
            return {
                name: `Wyvern PrC: ${name}`,
                link: link,
                minimumStartingLevel: 8
            }
        }),
        ...[
            { name: "Chosen of Al-Ishtus", link: 'http://tgdmb.com/viewtopic.php?p=545498#545498' },
            { name: "Enforcer of the Sands", link: 'http://tgdmb.com/viewtopic.php?p=545524#545524' },
            { name: "Deathstalker", link: 'http://tgdmb.com/viewtopic.php?p=545541#545541' },
        ].map(({ name, link }) => {
            return {
                name: `Scorpionfolk PrC: ${name}`,
                link: link,
                minimumStartingLevel: 9
            }
        }),
        ...[
            { name: "Bone Golem", link: 'http://tgdmb.com/viewtopic.php?p=547370#547370' },
            { name: "Skeleton Knight", link: 'http://tgdmb.com/viewtopic.php?p=547373#547373' },
        ].map(({ name, link }) => {
            return {
                name: `Awakened Skeleton Class: ${name}`,
                link: link,
                minimumStartingLevel: 1
            }
        }),
        ...[
            { name: "Handcrafted Archer", link: 'http://tgdmb.com/viewtopic.php?p=547381#547381' },
            { name: "Artillerist", link: 'http://tgdmb.com/viewtopic.php?p=547397#547397' },
        ].map(({ name, link }) => {
            return {
                name: `Awakened Zombie Class: ${name}`,
                link: link,
                minimumStartingLevel: 1
            }
        }),
        {
            name: "Awakened Bloodfire Ooze PrC: Blood Phantasm",
            link: 'http://tgdmb.com/viewtopic.php?p=547601#547601',
            minimumStartingLevel: 10
        },
    ].map(({ name, link, minimumStartingLevel }) => {
        return {
            name,
            author: 'Koumei',
            link,
            minimumStartingLevel,
        }
    }),
];

export const koumeiMonsterPrcsBBCode = () => {
    let minimumLevels: number[] = [];
    let minimumLevelToEntriesMap = new Map<number, PrestigeClassEntry[]>()

    let nullMinimumEntries: PrestigeClassEntry[] = [];

    for (let prestigeClassEntry of koumeiMonsterPrcs) {
        if (prestigeClassEntry.minimumStartingLevel != null) {
            if (minimumLevelToEntriesMap.has(prestigeClassEntry.minimumStartingLevel)) {
                minimumLevelToEntriesMap.get(prestigeClassEntry.minimumStartingLevel).push(prestigeClassEntry);
            } else {
                minimumLevels.push(prestigeClassEntry.minimumStartingLevel);
                minimumLevelToEntriesMap.set(prestigeClassEntry.minimumStartingLevel, [prestigeClassEntry]);
            }
        } else {
            nullMinimumEntries.push(prestigeClassEntry);
        }
    }

    minimumLevels.sort(function (a, b) {
        return a - b;
    });

    let output = '';

    for (let minimumLevel of minimumLevels) {
        output += `\n[b]Level ${minimumLevel - 1}[/b]\n`;
        for (let entry of minimumLevelToEntriesMap.get(minimumLevel)) {
            output += `[url=${entry.link}]${entry.name}[/url]\n`;
        }
    }

    return output;
};