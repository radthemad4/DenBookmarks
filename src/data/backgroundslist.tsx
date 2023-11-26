import { Entry } from "../entry";

export const backgrounds: Entry[] = [
    {
        name: 'Raised by Humans',
        author: "Koumei",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?p=141532#p141532",
    },
    ...['Spider-Born', 'Web Fetishist'].map((value) => {
        return {
            name: value,
            author: "Nachtigallerator",
            link: "http://tgdmb.com/phpBB3/viewtopic.php?p=141533#p141533",
        }
    }),
    {
        name: "Chosen One",
        author: "Koumei",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534",
        relatedLinks: [{ title: "Yuan-Ti Halfblood", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534" }],
    },
    {
        name: "Death Cult",
        author: "Koumei",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534"
    },
    {
        name: "Tainted One",
        author: "Koumei",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534",
    },
    {
        name: "Overlord's Vassal",
        author: "Koumei",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?p=141535#p141535",
    },
    {
        name: "Penitent",
        author: "Koumei",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?p=141535#p141535",
    },
    {
        name: "House Plant",
        author: "Nachtigallerator",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?p=141536#p141536",
    },
    ...['Center Stage', 'Outlaw', 'Refugee', 'Wanderer', 'Craftsman', 'Scholar', 'Farmer'].map((value) => {
        return {
            name: value,
            author: "Wiseman",
            link: "http://tgdmb.com/phpBB3/viewtopic.php?p=405125#p405125",
            relatedLinks: [{ title: 'Pokemon Mystery Dungeon D20', link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=55558' }]
        }
    }),
    ...[
        {
            name: 'War Profiteer',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#War_Profiteer'
        },
        {
            name: 'Veteran of The War',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Veteran_of_The_War'
        },
        {
            name: 'Street Rat',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Street_Rat'
        },
        {
            name: 'Slave of the Hobgoblin Clans',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Slave_of_the_Hobgoblin_Clans'
        },
        {
            name: 'Royalty of a Fallen Nation',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Royalty_of_a_Fallen_Nation'
        },
        {
            name: 'The Resistance',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#The_Resistance'
        },
        {
            name: 'Refugee from The War',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Refugee_from_The_War'
        },
        {
            name: 'Raised by Owlbears',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Raised_by_Owlbears'
        },
        {
            name: 'Moil Wrought',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Moil_Wrought'
        },
        {
            name: 'Hero of the Peasants',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Hero_of_the_Peasants'
        },
        {
            name: 'Experimental Stock',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Experimental_Stock'
        },
        {
            name: 'Apprenticed',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Apprenticed'
        },
        {
            name: 'Amnesia',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Amnesia'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=33298#p33298',
            wikiLink: element.wikiLink
        }
    }),
    {
        name: "Dungeonborn",
        author: 'Libertad',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=246649#p246649',
    },
    ...['Exile', 'Former Claudia Miner', 'Disgruntled Airship Hand', 'Really Big Game Hunter', 'Student of Superstition',].map((value) => {
        return {
            name: value,
            author: "Josh_Kablack",
            link: "http://tgdmb.com/phpBB3/viewtopic.php?p=178501#p178501",
        }
    }),
    ...["Mage's assistant", "Mage's bodyguard", 'Rouge Modron', 'Rogue Modron', 'The Old One',].map((name) => {
        return {
            name: `${name} (Warforged)`,
            author: "schpeelah",
            link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=125241#p125241",
        }
    }),
    {
        name: `Elementforged`,
        author: "schpeelah",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=125850#p125850",
    },
    ...['Raised by the Church of Pelor', 'Dragon Descendant',].map((name) => {
        return {
            name,
            author: "spongeknight",
            link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=431919#p431919",
        }
    }),
    ...['Raised by Monks', 'Despotic Seed', 'Treasure Hunter'].map((name) => {
        return {
            name,
            author: "erik",
            link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=431927#p431927",
        }
    }),
    {
        name: `Living Weapon`,
        author: "Prak",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=431931#p431931",
    },
    ...['Fruit Salad', 'Swamp Fox', 'REMF', 'K9 Unit',].map((name) => {
        return {
            name,
            author: "Insomniac",
            link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=431981#p431981",
        }
    }),
    {
        name: `Slave of the Drow`,
        author: "Wiseman",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=432072#p432072",
    },
    ...['Artificial', 'Gladiator', 'Magical Girl',].map((name) => {
        return {
            name,
            author: "Prak",
            link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=432099#p432099",
        }
    }),
    ...['Cultural Stereotype', 'Defying Stereotype', 'Thief replacement', 'Institutionalized racism', 'hated ethnic group', 'Transracial',].map((name) => {
        return {
            name,
            author: "OgreBattle",
            link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=432107#p432107",
        }
    }),
    ...['Medic', 'Cook', 'Animal Magnetism',].map((name) => {
        return {
            name,
            author: "Prak",
            link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=432110#p432110",
        }
    }),
    ...['Touched By His Noodly Appendage', 'Bullysaurus!', 'Whipmaster!',].map((name) => {
        return {
            name,
            author: "Insomniac",
            link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=432127#p432127",
        }
    }),
    ...['Unconventional Religion', 'Quick-Purse', 'Strongman',].map((name) => {
        return {
            name,
            author: "Aryxbez",
            link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=432184#p432184",
        }
    }),
    ...['Crocodile Charmer', 'Sea Monkey', 'Giant Frog',].map((name) => {
        return {
            name,
            author: "Prak",
            link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=432319#p432319",
        }
    }),
    ...['University Graduate', 'Smuggler', 'Raised by Fey', 'Flame-touched', 'Ex-Cop', 'Electric', 'Corrosive', 'Cold-blooded', 'Captured by Mind Flayers', 'Aristocrat'].map((name) => {
        return {
            name,
            author: "RobbyPants",
            link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=432434#p432434",
        }
    }),
    {
        name: `Escaped from Dark Ones`,
        author: "radthemad4",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=432450#p432450",
    },
    {
        name: `Cave born`,
        author: "tenngu",
        link: "https://lh3.googleusercontent.com/fife/AK0iWDxt0uC-gBY0Nln6xX_tiq-1_tpUW_u-_waOlWYceKxWamRQfc7lxbnXWmfmnmCzbLliGawr7VJWwi_ioUuk2NU9Mr3N4JjL0rRKDuuh4ol_1cH3_7oLgsGeOHh-NWCMxZl4KQ4uI8dTMgflYB7eMfKE5kiIGCWaQh9ORoghVqEly76ia7qMkFyKE_ih5HcbEKeWmMoORe4D2ilhXdujazimCgvtQvNVaY54YxehKIGXolIeUQ2Wczflowlsnxk3GzsOMzFud6JMeA0h4lIVY5KJD63Sb72UBIuNijy9XX9-rM1ZbBMkOs6CI-WBWCfIoi91Nnk6rXmZBh63a6TXuaue_O2GiRuxaGzyIYNbEWJrhd91LGRTDF6zbidnpqFRfOLzhyNgcqxzrtj-18uP5cb2aBbI_m_GlNGO72QCQcO9ES6Xb7Ls07WXJMgLqaHkGkTKtM7a99LDsQMtavR09W5PB2RjeKOiWUr9J_XubBVkl5FujQqv_XKf-x-dwaHnjlv621HYhiS3HN-PUMdHiOnAI9pyT9f6BxQRKrObHKj-2mn3zwpEjOLaabk36UwjOLVRO8_P7h4SpvCgKeSk3uA71qKlkieijc7Yy0JsXs6MTpSFqxuRoTVJKg0qFCgMy9yJ_RB0ONlyNZzj4V7Tks86jo848XtXUjqFYvBZR_Bt6PZCl0e1JE_db3fVSxxcd7cOS3Hrp7mLZjO8dsOxK6jWiuby3FBlBi7WmZpuMZNNkh4AEeK-irQGccqkkFdpF4Zbi_LozSFC6__NrqSpzUpvGCesEzJZrEwBMcqVZZGD8zswHkyls-0Hed9Z13QBCfRkBz7ya3AQ-E9y8t1HyHlS_SGVpBVvyPTz25At5a39-xE3Bu1XTahyFELJvgamRKfic6ff9pEkrOlWNQwYMEU8MYncFSyDGtXes9o3pW2_tEdncaczEj0l6NWA9231Bq7AxKnhNq8XF0C1km8463yUqbpVT5CCsS0lBbg5g9gYv1BmBj0ITkSIzJnOva8j1WnPBhcTch4jNQPx1mzDculFyq6BHlDc4I9EPVavo4MhsX78ItBCAxw3mYQzDPFJY2HIjhuNxmlhfODnuMNeBZe5zunLAhkdzih29lX4LZo3NcQPPDmZ7zhtZdkhhrO8d0mEL5k9tbWN9U3d1-2dniO-XTVzl1Atd7zbJ2Ndoh1-qbCPWvjyxwGlpr5SCgrOEu3pXzQQUd07e8Tl2AG4bpo8nPgGGEPbhNjGyTx0UemYDPOFkvrlRHAyFMYxZiS5F54Tt-4HsIwL9D4LpkqsFWBQiOnVTCiDPWHh7BgxKpCnxoQCVL3jZLzhVUIzZJxZYIdubOYYJ4ytIxGQKk7a7Hf2rAxYGL--vHZQdSSxCVcrOCLOuytzAngqOmFkyNXBAMxWYNgJk7lzOxzjgDUfeyIwQiLJC8fYwlFiBdT3VtyW2zTzzfyxHMoxPFVpALOxjhypb1rYAHfeqjP7iCTVby4JP2pOex6BN3CR5NkgIds29tv4bRvHhpk=w1600-h775",
    },
    {
        name: `Animal Form`,
        author: "Prak",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=555409#p555409",
    },
    {
        name: `Wizard's Apprentice`,
        author: "Kaelik",
        link: "https://lh3.googleusercontent.com/fife/AK0iWDwx8bLJfRceJ2Gamiud_46NwV_oY4vvcvR8dfbvFOi0u9rg6xxzAUl5rPoTVC6ugqd_QohMZm7JW_z20kX-0rf0bicBGo-Sm8wjC8EDVfQytd1LVyt5H6Vg9gA-oMUOjIVKGZGg1mYaG3xLscZ9x7Ox9iieqyvXIcQtjKvMIwJiws4d2VXdX9WX0w8heUytaBcr3Pzsrj37j0Rk6jaaZN5QZHGkHKvYqNTEh7p_Ui9q9BCf9JAFcf8HQ0n6-LR3eoU9OLy4Hz_EyDNy7fwRR7tDnvtzKQXaVZjjEoDqB7PIFh_Nwx3yDkB4nsmD88aQ6HkNMUeaSFb7EXqEPMzL0lhmjRRPyUJXjplXnw3BHMapu7CQknI5ajZlfCnap2iL13LWXvt5cmYD8uf70TYiMOj-w-QN2uBhVi7ZtcK03lgiNZ4cCsuAr7ojBhepBxBLNlpe7xeh6-OQNbpKgJNBcKZ3P7x68ujPgdjpxhAK_bAFMxaERqOBCJiQSjs8pRcvotR2k8cEJhvo9WJz_ncWd_4OCr6gJpFfPMuc3dzEp18nIl-t5SUCu81Q0l9Mex7tHV5tVv4FWehz7WWPHKa3NTQEj9YkHdcKK1m-EI9SVbdWDXOTTHTm52gcwmZoTEBRvw32EBzON8MOMmksB8w2fqhJ_sGMMIPyn6WqTwC-9fx_ZOFynFKCJaq9XQ6nCxBNg9rs4oYRUicSR96p5vUYKiK8HJWJbc1cqBQQMwhWLJZseR1bEp4Zr2dRNtRAUji5zPDuPtr6g5awalOTeJUFjJ2GRzkYqurrhDSh3aBtNWgR0xr5Y3CsVaEFtI4nM8pmtN3yPCJEIgf0FL3cjBqbZc_3__SxxGdQfcUK7aGWL8lR72MfglZXGTKtDRiOrpNnIkyikTi7p0h2M5elOIUNKZDBgu06h9yVkyMHrPUiaOIVgHRM5Bbm-xqUzTEwHRY4ofY4ql_nbvXYEYFnJ970nvK7Dzd22eSTphh9ET5f2npP3OKYIwqBVQDbvnVttIMhv491HHLPfhRqx1UsvTm30v715asoCxnvJk154v-YnecKHdVP4kE-dZ_WtVLweJFQRy6eXROkoYOAjTCtIQ88Q-_wbusoQCAaVV8OYG003TWefueVaTsm5eBpYZCr26AtpGTOOVSXonmvyKif5E57_iMN9XINNaGL6bfElGDzO37HWMEbBebJE1FnfgoiNv_SuZv9tKqoH0HnR5uwxLgkGJQBS3IZ096RutKwjSQyBaWhBwMi7DyzkWhmDlmo0MbNAeV_41um2oU7uJeP62yrce5PsHiFtIgJQ3-7hRAgBYjdxL7yvEl-K5UsXc4r4oNmWLzd1VECcvQ6b8ROCy1IzMmTH-Jz6X87rQiNXBHoTKNaYFeothIIadpJ6BFHZ5ybuC7SuON5aS6DSM0Z1mrDvOzjMJO9MYP2Eit1Ku9YrWFDD-NshEJeq7YDKXp_QovetjrwsU1Vkb468hN0hLRbwk3pBZiKC3BWjAve5RjPDrf9Z0vP8K13X54=w1600-h775",
    },
    {
        name: `Mountain Explorer`,
        author: "Kaelik",
        link: "https://lh3.googleusercontent.com/fife/AK0iWDw0D7G7JzW7g0l2h0kZtY1B-kW_t0oyEvFvhPb5lnqVumkBKGj21m7c4jX6h9-ClVL30dz44Jo6nIIVF2qdILCssFbv8lOXJWLZyziAnSD5U_XIdvGjteTaRm1oeAKTyn_ldtkfVJ7gMW8Oo2Xr-UsvBp_bL4oAQqOx6EEDp-4JHPk2DbWwMAy3uotSMOlnN7toTcz70bbX88J8kMpHnhX75EinLHawQnC3Yet0ehLXiukhjGeuCfbEUsypAppHcXgd8Xghr7nQ46HGxWBzihGRbOtRFefviaReznXh0yXuqfEdmRH4Fnzrb-4nCpMZ7No_zOT8zsHTpcctThClKeSrI4gHDoUq8JYXkZmZqrUEtHGWrEZSuMbB9e9UST_RCOsRzYlZdMbNRWC8939nynC-1yDg19QNYZP3_-KPtmty0SnctrmASGnPwtGpLuCtNCT9-yudbpz5Gb9IVcvhAyOGPBrAAuMYkFx0o3fjtKSmgXDDQih0Hoq5pmZUa5PJgLf73hfA_DCE1OIO0GNhMAZjJUnVp4YgB_oGG08vR7VfhNnvuGwWixa3I_pkZ55OR_bwRy1SvcZt0JOGm1sG7IlU3J3Hoq8BevJSpzDx6PIb5KKnDCTGJjOL0mPiXRIQWQVQRRsSnh8RHzvQHeN83myeU6NnhqQe9OqcgtzKMfoyTo2AZ81be9FZE23ouvMkyBA22nQCmqyUCsS3lKEgVNG_Yne36XkTP-ci90nGTx8g_-DVX7mKE1S6hFVNNf4MPkB3pjRLs6wVVhCQIgDBYGVNvYYi4_qU4SFuMaUByF-usTuuYqcKqu6ZUNyWRK-6yMgVOqsFoqavUDHcoGi4QUMkkdr-nq7BeN81w8SYcgsdtNOaKkR0JqdPaz2-wT9MA95Tg4KVcbkEeFVT7lZBX-g3YdDjC0Jxm8243ST_lCPT0iMFraTmxerbNTC-9NlnrAEu4tDH7taZuzKjJu8epoCVMBTySDI6xbcOxnkEheDtk3hBTauH9y_RmKZvQVILEUi_yoreiFqoaGZq-5PUs-dirDztDCXmV82ECM53MVhvJxqxPV_fmTIe2kNDar-ZAfltTV2CLF0oXWaI8_hDxBYv1sjfSE6ldCX_JxT9HqxbyXj1L3CkoffsdzxIuSYd1kmoHb2mZmvsE3X070Q87Mfc_Wtqln-MvZ4BQjx0fYjyPByGvUdLODSxWvnjwm3QQ5AWKBO2yLNZKUz8JaI2c45ULZN8vsr8_PWEHZkqqxJUsCxkHLjPw5BWy3eLIO8KoA_oSUP2lI_xU6IFbgkN2vKgctQGEzeJrI7nJTshMmEgc2xwaedBdXPc0P7zw0LOJLvhRrv-q8AJpJz8gnoXxW_GDdm_k62SFxRl59zLoJVESmLxcnaHXTUhgykdCC-xlY12BBn-AV5MXV0Htzyd4xkHd59lwhUOizqi62FTZRaqnvY_gNBaMhKwNi0BOIp0PbZdxOe_pnL2UHLLSO0ymvicydwr5362avLZO3aHccWW5r4y_ucZrLA=w1600-h775",
    },
    {
        name: `Nondescript`,
        author: "Prak",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=556318#p556318",
    },
    {
        name: `Prophesied Sacrifice`,
        author: "Kaelik",
        link: "https://lh3.googleusercontent.com/fife/AK0iWDyvwTC3zQY5reIgNmKaDvW7fhgQ924PEahPa4aS56UncKLr7xV5fvWOzHzexIVJO0pTCT5L97jazO7PKt43C4Yi11kEFiVUh74rMvAoXSa0eUMhzF7v7VojFDQIh8iyOSX_DhN17KorcvhNmBwzxFCbJHL7Z5mi8ThSgGwQ6DnZ_Mq0kHj_9sV6Euh3m6GOGe6Tlvw3SHdawLRJRSBZ5KwtUIdQBC03K3uNtd6NuPZtnCi-vaZ52fhtfbOG35rTqNaqe1je-e6OumPIkzsz1s8adlub9Nutl1dnKSRzeZivSqELHpkZsAuI7JuJFbM7dddPbjOVWjx_0rynfe2AWWv-S0-dThBQcQ4YXLZXUqv40AVNFKHN_ylU3Pnt0gJDydjObeFjjjRLXTPbSwxcde-MsMS-83IlFbDW5f70bJryGFxr6RV89G-bmurI4rDz6ClRnNFOvivmaapRk-ny1YFH3xKRD11gooOTGDyyJtz4X3a4CrSRDS0B5Q5j7j_8ghBTzbVI5vVtXvpsg4TSyfP5sYW7QWE7DPMUlTUv4PBQEiflUVkNHKgZBxnpqXhd5z7opswcGsTjMYSUjX3UZbQSPpodf3gE7qUDaE4dh7l8ppirWTCs8E5Clb7BrRMQZs9oZuWxkII6uFyny_cA0crV2JvaDQslykC6avk8KpafBtdpiEPj0d_yChwOK6M9i9d20IOXv7ibaQy9DsXW9MOnrX8br5Ig_4vBWI9zcGUiEhSWJ8b2zK-o1CBwIKC2ElRxILlKHfHG7da59RFmFUJL1uAU-njDOtlg9nuwPhfMb9pK9et3WT71FqPUiFh2LNLd_89JEuf_8Ovoi3le_iAVZ4bPoaBY7w4GKi3qluSmUcQguUG4axrP4Q2vwO_Q0ahoRnqPOf3YlhazE2-blSpJ6hE-HZNdXO-iyvorTyLSm-KkEEG_XWDcY_DYxl4TDhcMMkHaWNKlWE8WJAtM9bwNVzJjL457ZjJr30dd7OWp0kIEUvJOcvLJFw7mAw3HSCUwNoSJWak5v6F4kqItcylDhzhg2XGP7wzituJkEpRec2Nqd3ZQZEMAhblh7QgGfT_A_B0wk5MKZaKMq7B4S8GqxDwFW1UjDSxM61Pee7AATjTtAR-cZW5SmiQnoleh7xmEUekmVli73G_5nMhkYJiY630Ou36WrGDa0fDDtBgXBjZlcIDtFZPxZ-b_zVlAy3_VAr3pw4MMIw_XeNozAETwFxvHXycI1J42xYgaNC948pdtKNNjC3rUT2euLyZqyH2O91XZd--cQ3kwzjBFcPJqXEQXluOxy9bdnjSbDeaGFY3jzjdPHG4cBXp0SKsivYlfwO5iEahi7VBeCksT_YEcYHJdP2gac1T4BzkH2iqACSRXhATAkVfFvOI7lIszZuL2mkET3h6P3pZAUdRmLS6FcvbJtWN23yGCp9plEqT4vFufo0X5iaJK9sW1LBZoIj44h7WWlAHWYg7yaS08fN5GY00eJy-dm8oUKHnwTN778FEJKYTvkC4=w1600-h775",
    },
    {
        name: `Born Yesterday`,
        author: "Kaelik",
        link: "https://lh3.googleusercontent.com/fife/AK0iWDymrZWl97ObTHPtLk0CxTtRTdFNQH2Mruw0G3YHOMUrbkHqLtzi1Lf4_s1DsE_wUtIIwW9D2xzffjjneBqSX0PW03mcjteU-j5ydAQmLLdhxSCYiMHgBhRmt6kI1G6H1fYQBOkRuD7VEBhU4c4QOWdkGDCNTkm7UwOsGeGs5AtVHlKOMmnASWKuWiwRNCHdSgMf2yxg2w9JQmV6Lz7QM6PBl_C4dpKm9I8f-oE0M48A_Ng696SkajNVSJqnweKIOqtsccRf1c5EwEk7mUCyO6FRGw2RbzxTe817BZnpWQru15w413Xo2bFhYX4C4D_x5-DPFZX6VK_-jeznpKQJYDWwYbD7rceEIVWVMwuYf3IhmATr3xyrrDFbHPpLktIfL_QlsSGV1O80_PC2ap-IWwKMfwcn_5ojPS2oSvYvsTbEr2wRBSioQJ__GU1zkYC5Zp2vxhBM6GlRsgVQon2OoT-ynizNtdE7pwiN0SnWjMwiqX06_skAATLmHBMnbllnkMv9O38MAnyH4D_RkX1r1XaycCCtN7qoafReI9tX_zwQ_j3ypAOVp7oXFkhYgTANn5-o-lDWbyh57D2l3T47b4DkBlxyLUqoUhtI7eE3efNwudoACceCimHU9c0t725bG7IvtJUH2FrqFaEVm78wbkydlJZ0_teLB_ENJsvVQHgPtvRwMwniydn3hR3QUI3_1eLJDAeg8vKGjJsyS4Svz-2L2IF5hPoORGKtS6CdetH4QjYKFu9-bLOJEsyr16DwtVkmsPPy94cIt6LkTgEolAguO71OHDXQe_C3K_vAeOPYZVcUM0BMij1W7Vjh-0dUigOwYb0xyQydH1LnGQEEoxxwtWIl1AvnL7p69gwWDGD5pn37aIrgnTe98cEkMnc6Cqmu11MRNfxMnUHT9YfcgmhhDfRagox07PlMRJB7lGGYIU5PvBVHOBFyYL_cZyCOZhf0wiGkECcNwP3fqUqwqYkkABEFNM7jssqcjiEABvpciH9OkxL_4lc_9c2LxzM8Q4XuI4raOeInX2fzCmjvo48ISg2HhA4niic2MXN3Orjaj25ifUifvRWQ_O_mIRxU-WqCZD4ZganxTnreXiVYoWww3dC-EGmDGIGmSwwCPc3mtQHW6d1NzacCUq_LWqPEMkyi3ZZKFlIqyt-xYuQk0eKeRfGFqL0bymRGN6WXhhkj89bI5FiakHfCAXo9KrOqwwdOamuZZOH3Uu3q6us7Zi7qdjW_x0ifG7tAFflhDQAaOVND4g7cZBaBkMxFZvlRne-_ROEUyn-ywStAcNNGNCDuv_2rvjjJHBxHh_ivM7F0xU-J19ih4Zv5nei7wPku6lxAPDHY5Bn-g1uXpcHPyd-w_3U5P_j8NOtH5LZ0sPK3ebYO35y0BSe5zCy-syUnQJ7MKK2r2IsCrwesGtNo1dzEH3_dBWVQJfbexHNaC1YEfYmaR0V_ipzhCkrYWCTnW3898XkvvbxxV1pZW-oUe-zxKBQei4Myj70zWZI9eGIrQXZc8cvjrKQ=w1600-h775",
    },
    {
        name: `Skeleton Commonality`,
        author: "Darth Rabbitt",
        link: "https://lh3.googleusercontent.com/fife/AK0iWDyjuHSLuXm2FpX3TTu9hfVEA0IIV1La56_DSz4krnZutaFtREw7ZuByWLsPkhHPugphbWAMtQHuyALcgL-iNQabDLt1B3eO7CTT4gq82uqsnIrNASBrB9G7dor8lZzpA3VbRcdpE8v_7E8P0iZtbfdGqbIUPkIVDAI-Tsr1yckZJvoDQCnZGiPz4Qsiehhmmh5CpeugbTpHUu3fPnSqat_6um2wZXKss4MmD23r8WVCmi3-23H3z_pwDpkhHCyhp95FdEuySoqaYhRHwkMLIgqEKeSpgu48hYgzMEBwFy3D6HEwTvKoLkvEU1qoefemSRPG3CDUYlMyRiz4BSFU7R5xw6PJcKMmjNW0KZGou6gBT7p7mMXXsaa2kryQJ13TQaHSjkxGjuGIra4Z_KhJMRctwNW1AIi5h7CnUEr3644ufaywsj8sa5fl56C8Yz-nWcAAblmxB7WzGgHzFKFkiqI32SOyzkNIPE1gn9IU0NocuZvt1eZ2M78q2IjywArG-g_slZaqXhKu1Rp0KIhge6Z8dOQmeTcjYKyy13w-3zTMaSGn7ELBrFQHQH0M-JVLGcZhA0V-wUGAareI2prK6fkAnwurDqTI2WHgzLXM8PWEGVAfPrBfm3uMg6vUz8l_i2BxWj-zCpEdp56Y3pFyAEuMjqGkES4nJIEQQhgrm2wTTONGJYRuAP_MAAl9xhA0zoCweron780eBDgH0AZkEK3IohYcyXBPDxGjbdo6317iR-FhIB1Vy1V4D7FumlPo8qig3Hq8zfGjNOkTo6ilixl7O2h1VoHC7I8zpq2yD1BeCl1zRxASBSVsqVf5kV7NDL0-yYceX-UpyIWyupWOoY02nseDtZQWb8_Z9J3YyoTUdv4O31t19aPLB0UkGTSVwiSPseMJ0yFfe1wZFq5GNnWXW6kFih-nl4Qd8FkM-Gc6-Ob2LMWueyInwN7RWlOJP69T3Vc5oN4-nlaIdCRVQkPp6a4pDrP7EGbUCsmK0pP93syj8a4Gc7ezoUy9AgV2exzFjQ7nSQZ8INlgdAGqDlOna_dqr5ryKWnsNRLZVxQYeoD9fiYq1epV0WNo3N_UyJcrTqjz1FORc_oEmuSekpFpf1QEZtEPb4UVOU1AYHqpb3X7IYH8Is6P00cFhpt0O8my_xSPJr7x5jaQBiMKHL9-RHrjYubOuN7A4AOFaUV8A2hCS-HnxlTHhd3nOnvVHbi4FNlFF2NgNwzWZsVm-oyCvHYiEfkMcSvAAXoYmdA_9DSLCARgCOMXknIqfb1hBwe6yYXFd5cshsAK0MGIDqauQMy7OqubOH7XjIc2NXz8vc9KC1v_ce9zSDv04OAaiccMlrpala3nqtjHoxq8yR4O8BzTtgDAaJao3N1K6g7hoaG9rT5PV6bSQ5fAVhX775hin8uplNraKM-5a55SIiPqMpodhrQHptG4ShSB93hg_khBXqGJkuQsJRjGW8flEgfmZE2NksqH_x95b9wzKunArNn1BxJaqgkxfm06Tx_rLG2rXLzczjg=w1600-h775",
        relatedLinks: [{ title: 'Skeletongue', link: 'https://dnd-wiki.org/wiki/Skeletongue_(3.5e_Feat)' }],
    },
    {
        name: `Big Game Hunter`,
        author: "Kaelik",
        link: "https://lh3.googleusercontent.com/fife/AK0iWDww0O-I9YeLDXkwA6ZOcTBOlBI0hFlUwCJ19XYRyua7fjwDuOtXVqqRx7bjETekVqWXZu-iKbto1S87O15ywwkVZp629Oxhbl0uM8HCwUz57GcOE073IwoahTm7Y9XUaDIWTuQ3Oak4ZcCxv7AS0x4CwH-qV-tIvmgfQbZRAzlpOBvp6g9EeaFcqqImIxlHx6u4kPrMyC5OxhvXOyjT87Me_JR6zpxsEWlkckDEOyNFY5L97jCB9b1I_1fS7a62uFKqK_l2mcUU22rFxGK3GxbgjCg2vxpA3WdAoVxtgBGn-ZW25oeZAujlYQ7Ds4L_ef4NuGJ87mDPcUVQr_cGueC-W4bnSgDJPPsOInJQ7A4BAmsqU50iDjNHPxWK0LlXl9iVMP_i_5Dle3JqOC4EzTQqsaRqyHQ6N7cE-VLy2FNnhvMu_TexGq253KePh5elEMfdOP5tnUqoXPasP2ZYs8JZPAoAGhqvJ519ZvT6DetKNeZohYJn6wcQZU7Bw-V72WGJGaV2nqXo7FXDwnEetEiDS7kuzjhOOHXohWgqmLvCE72Jki_gEJUzcR6zYJGHAW2gpZ9PJSGtIM5NlI_TULYLZZDN5WTRb538NNZp1aREzAUStEbrzmUo5xoWROXrVs9lnAwgvNvsl6V5dqkkeYKaheJRQcE67KRjTr7YzLmFNW51y-12VWYmx_TafxisKJbmMcp2-ULBDmOvYVYCdPIwlLk7gqxMVqjtZvGh7kaDEl07bPyNZS1_U_0tmfYVfJW1d_SUB1HrSlc_9K9qGsYEbbOGGlm33b17Lq_PHylUnyjof_4cQhnDTZ7KpxV5l-SbIorVAJE6tQAYVIgh2J4qXotXLdADV5ExXe1KGzvtaiK_RaOJYf1byxkTyV2pqb2czqPkCy3cl_pn2hOMnDuQJDVcXF5xjvHcO1vjgQgIPrLpbO-aSycDpRjypivx06G1Ug4WGwD-6GC0gMO9KhvP0M5j0jsmZrE0ZK_3qj9WNZemdgC4wabSW8UmgTDdpPo8Fq0iv-bqk41WnXU5HBxd0enkCUZ60PTXVmz81YvMY9z9Q8b35kCHbQP56D_dpvJW9nruj3CczWOVNNRDBC8zL6Ex7laQhmCnF8yP2hviFPbKlK0FHw0zbEz9mu0GJahFWOwK4CTsvWxnFsXeg6nPbkGhlOSh2zhjcZL0nxbqpEDXBlfwKAYzXNJ--66UkLj0QOsn4MVCMF4TUhdTDYPS8pmyXlHp0hJKeG-EeS0bKiQ7Ca-LuW_B3sQvBBXanSz6ByAvpYNaBQ2tMriKyTIKaBxthVbdMmyg4hV_a3u815zEbxu1ohIbYPax-4cE3ZZqpa6yD3RK5xvji_d1n9fZMJqtrQMjWoZNOOd8MbfEqeWIWG13BFjgOQJZOaBF6oPKgW8TH-aQb05j6XSe-4jM_qz5XszctXX2TqMbxzBJKj0Jt4YaoXORJ977x9Y8xQ9y0rlZL0lzXXG6KMMQEKO63g7U1KK2MViOcyVJMUYB8_USWHzVF5g=w1600-h775",
    },
    {
        name: `Abducted by Aliens`,
        author: "erik",
        link: "https://lh3.googleusercontent.com/fife/AK0iWDzxXmyPt1Z9XMonLwSkZDwfKCkxxRaaOg-Jua5Chz-ykH2ohxxRu6g1Nr_KInr2irvlV2PswM_3vEOI3bo0VLPLUQz2GT1Y95cTonNWG8M6kvCxCLI5ltObxdcpDdwVaWnrsGbQR5cZjQm2QsSiQ4t1EwqWOGxNm9uViJm8q-8TQ1oIi3mBQ-28AEyttlbA5L2FhL1S7fLEgh0WBZ5UGdp7z6CkXXe5ve2a02gyZz6jWwfAdwEOOYIjvL2MFXln5lb1negEjf8vR4X57gJcOeJhPtm3qfVlSe86BgZpPkucWS6r4emvqIy-Osx5DEEgkBmC5rpZqZB5C-zQZJ9CwOJN6k3bVPJnWb624irq4DLppIjSiIzgkxUvnmYnOV87OmawuAE5HDlANetzp1pHWjTlFM7CtvOSNTfEh1I1gh6-hSrhBHcj99schBvjnK1fHybuK3DOYW3KNKyWqf-p3YOoZXC0IQtw206w6tlILpnDzTXRysZHqy5CFeckTT14LlCRZVegLJG_0nuDbMDa6nkTeLSgz2_KqIySSNHU1tKKQovW8pGWow_81ZkzN03PZ7Mjz1wCWlWbwuq-nBPqgO0lim-lbtglM23aw36OEIg_Q9o4MIuaToRTnP13Utz5CD1cih3ku88DIBMZ1HGYDkrXfnqdsodZLfyiGUNYpypp6b_19BEY3b1y84W7b92iklqV6cBhahJAllnogu8FcpU2PY6Lvk1HnPLvEM121N5Lgsrv_TmOjmlaJ-hGYDJe2LO0RknIalrygUSjWGqTZsU4eZms4vLILxOf2REYg8HgAKvs1ffs6FarbtfWN0NZ1a4djBhaI5bsDKE16SnicWv67isiiY7veEy1gE2rO7HuQ6kKkE8Ge5meImMM8o2-eIN2RCfDN2NmzkG7v3sr-C_4EqZXg27eVUskdoZwnty2EzdyM0DlId0dJowBzaT6lcic8YcmSebmHeeGh_FK4rRCM2z60quxyTmCcFiQ1QkSogxsOFGaJSNUxvi1I4Sjk1dXhdhoVH9RTRorpFCXIj0n7QcpGbjUX6-s_aczIEa6CRv6q1kHPiwpM9bYXtcuvJH8aclZ2UkNk-S3v4BAQL3G0dkcqRGxko3qM7LQmKH58eYKXKgzO9XJ3jOTa6bxSzHREsnGvXq5kqvctE63UxrCQsz34xeex_ZSxxEvrstnct1X6_UG-TUklLyyiMxWMwGwxvc6onsY45hDu0aUrLqYqt1hdghcHJAjHcCZDeCqb-csKNbzhTlhEDoUkIYB7pcwlBo7CgQ69gyjF_xbRnZ7Br59vjnD_z2QF93qpqKyNZ78vojIWNQ-DE2PPSFM0FA5oIaCP0Mf5qKJrV5HYOFrRdaux83a_Ae67hdBohKX7pNfEYKZDaTDMZMzcspz5aWPf5d1bC1xn1e3it4gVEIoRrzXd75rTTsSbSy-c8kJCjtNpN9aSNQk6BzEEjNGZWgaV8rEIbqJkl9G_N12Ee5soqAgbX2HlyrpEP7IHm8ECvyfnZpbe_o=w1600-h775",
    },
    {
        name: `They See Me Rollin`,
        author: "erik",
        link: "https://lh3.googleusercontent.com/fife/AK0iWDzupIMJYMne1SOTrVLTrClPcL1p6yAHIVMAkaJnqle88Knz-ZlIFGratBilKatxfMqJUuocb7kYZzMj3IberWjnGVlZr5PXRc26xRsFkVKKMa7Q_GUoXbencD6-a2QHeKox-YyEDvTmC3qy3mqccQOv2rzF8W9QrCRYDo18TJEDWkDzZsyU63lzZj8LH67XgqY03JoL51dCgDJXsnhrdrmTRLGquvx7fznKCKV0lHnMjUol2wGLaX_w_KmLAnMgeRj4mLiiVTEFr5z9LHTmvwJjtw6VPPHzrwv3QvGSgaNkmc9ByiLk9WGannUvz_F7LRpyVFFB70HGNTDsuyj8zzhGgCoT3uEivL2PdARd1oToi6i4jwNwnMxPbbreN6rKXW8oOM9z7-z2154hQ0UG7ONUFHiIUmNI67D2K3lncDoOUfqX63LbH2XwdWlcPD327rRuxYa3nVWZ1Ft_Pci-dXFUP_fuWhPy8-FrpHjC-41FKvQL3yJ7DRLxGBu23w9iXzgOjgLKE_FYdC6CyzR3-Ib2zrKkBhtV9-Hwb5ejkGX-FjCfr8BKVjzZtYphhfEHPdpfwpJR1Q3T4BGLCXl29XhaVJlFBzrMZSlUvC6ndEODgKPEA7PVuQdA8sN7uZDqDUiD2yapECjsoCLi9DZjM2zoCxcgLN1aUc_4yYRz7iAp4qg6Pb71zHeUDGZ4E0X01EDjbqZIKHmJFqvJD-mJa-awZpNCtwlkGWDvDbWMwS1ZvRVa8iijpBCwn4ybYtQKKPynhrNs9d5b4bxUs8FYOMkJpxGhzNXgXjP3TpJaLEBXiGzZ_e-kiaUvNkTMB3kASEIAcaOSyYkz5G9uHDwLnLZvHJFnW9himni8wF7F2avsXtaQGD5c9LQTFjiiJh5d_Dw1Z_UXX231iIUpc-1Z-W5XYU4LqKMoyhFbGy9-_rMFoAiRVOQjRI4mNmjE7gfzxrWuVmzJpPIDe5RwRIIQz7p72vgK-0rLlNHPF0O7e_iWff_KbT9zjEqVUHjaBkO-1L72WD8EWb0cSo70_5epQ3fqjr3ciaC0aGWCwOrw0KFZbyr8qBhPUkcad8lIdwKNeqfICghBx4nD4USTJwQi95QXlzB7tutPbCuDO69kF0FFgPSYf8E33F124qsVo-9VgqA90nene3T_pl_YcNrQze90esQoPJBP0XLdzCdICiV3K6jAJCzjOf5pPs-VS18DX49Jdv38UAxqUBt6bXwOy73ymdIjr05cSXq3UAA2UtY5jR7vrUkTgp_7NO0AsTfrHkrg8HvbjgOxNPIl4r8YVifs2wKYfGvA-exrorneucFMj4HtBjAviWXBSCNdWhPhmjlsvZWxGHUTkYrPn4pmO4uBbKkVxaJ4MlhZfhlxGUh01PVc2RC2O_MN50RhUK9t3aJoglCo0GJzqfMrLfhpBIZji-kx2ysv0Sif6eHEZGYXLY0YQE4ft9vRpIY5tpFGxE4Tb0KASl3h_uDKY-0DoG-6mmV8WzMs44f4y6Meo5oPl38LFArS3Lk=w1600-h775",
    },
    {
        name: `Planar Exile`,
        author: "Darth Rabbitt",
        link: "https://lh3.googleusercontent.com/fife/AK0iWDwAudvuuVK7kQaVuVdBzgajGrxYa7NoBrglDqalqIe1SoiFNoB6QHo_2qaqSELFNvdaAmD01Xv7MONao76_1BO7Ve8Op8hx2YXD0w3GyKIxQ70qJ9C0ObMyytQtCndZlw63bM9c2tA2fu2_paynoXhPKIqtqSb5ipGoHryfHWM-kp0-JdpF59ALRQ5ocIC8FvWiR_lSNkkkV6F2iUVKj82fPnxxqdUUqS_z51ONZIu1KPRUJg4JZReuwid17lBse_1v3sECWGeAFr5NHOf5AbfvM_qxQ-1Bz4LdFNm7DyyW7JwlruSGwTZzhfsDCu-ybl7SVYzXK_aicg495beUnQMkPbV9ny6TeolwkLYWWJ2kykR0Pn3GRmgMtBaXHRVxz2h83EskXrmCzjd7W1CHjwlW2IbX2v0XSQXNWKAaAKZl0pH2ojNfhJbZBakB8GXT3B-9rDgIe5Cn6XEFn56hghSG5FMiJ1_cAMdCPJ6E6_Qpn5s-ktmhnV0-3PpSY12HZadL_S3uuUT8fwTHT32wBz1yPJwg-fGHUH28h_C6ITv7ldvIMhqw2aQz2RJn3nk8pDQENjrOaedhW94a98rs3TJbvXFCeBZZy_wWImLTcJe-iXsMd7QPTuT-nsTxOrjdGKhyKIyyBJ00OAs4V2Gf9Sw7IFLq4z__vDXB4FgyrnbZPZNXdHk-gqnRKnrpF8cHNWuXSQJSB2VeJuER5KSAnKhAUEn7UCa12KRx3a8YHIrazIFxnAaQg7PG9ROdgoiIrqUHPx3z4Z11TrDISqWAMJHv2nYfogp2Q7coqTKg-AR717rd8teCtDPS5dALVZ-4mqzh4rduu1WeZBGoZ3kQzYqHVdfbCQMf-PBn5Rk7wItAWE1pZnsdQvUP0hodLgZxjH9lT6OBXJjKjDXNxIRSXjPvXQYmqvwv5gB_Rh0ryBVJFGTehOreZzVTF2uQa0p7AsLLj4jEG5NnLi8wJLqhdE4fpGwoTzk1AcDmiz4G0GVzbKa9vtzXo6yTJFrmE5XOWYh6xyGOFc9vwuqvsR5xZmOpLo58FL9OLCb8VRbrECASsleYkLlBeHwH2tubd5L7AHjYit6G_jqcrAqSPpKdD8mCv5uCt_T6IhGlBQdavSi0oqztE7KYceR91wJGKdRxMvO0IHI5JHpeuhuOFuDCGMzK42H4KRGl2_nXP6FjdKPVqucLWU5laKgyn5H25SiUrZdxCfmvfmTWe7o0lcK5vXDP3T8J6n2FbhbqtpbQ6nRiW7RdwtrcYVe2uO5oZFjSFeDUwOcGzq783A_gFbKEcS5Wrk2wa0vbd1T4tk8kftB_MY-ReX8eVKWySoPtdb3C2QIqYnyt1PLfk-u8xX9Kgrrnp0UhrvbpWtrsujVCgC16KyHbfoJk-0rXKex3H7kbczySixYBXFqjSe0CiuXPx1P5aa5UfDG9-TOJF55RrtfZIVitjVyn7wzPIigksV4DFS6qHTCwtsGc-_oMdOfNB2JhAIdBd3vk9PHLoLUYNjJePhQPSrNS59Y=w1600-h775",
    },
    {
        name: `Return of the Living Dead`,
        author: "Prak",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=567221#p567221",
    },
    {
        name: `Exitree`,
        author: "Kaelik",
        link: "https://lh3.googleusercontent.com/fife/AK0iWDz5lMR20KhX38cQCAAhYg36StA4OqN3dVk0y1XDVDUsY_zGlfZfUCQmhpwta36Q0KDU_C_q6An7tVrjINQFUifprHNlZxKAvG1T0iYji1bm27ZXGNUzsrFvc-pAftKqjXGLvRU8Pusnz6x9jkRCP6gCsNaAulOgt_k9xnyDpoJvVVs_Pxg_KzkKc4ufdQN8KWI7qzTOEXIQLPbgkeI1VOJTfUoB_RGi3y4Z5RbDi8VavcY2xGn-BEStm_w26k57ROblU3Xevi3JuyKaNSZy_48AtVsBkXBxMlEWEAzkB94NAd3_tniYHeCL_9nJClzPnI8KKGQayHPQdvu1VfK_-rWNbelMUluWBOmURVfII-vzE5E0yri65uZcpP4xIu7LrgVlInRkwKHMYbKnQmSK2v8puYxDz-kbwor5Te1TlH3Tey6ybytWinUbx1BdNgQkqReZOPOlcwX3RPNkBRLHPcNXmFnwvrRLnLzGGXUnRY3L78OaYvkbO82k4xNudBMyzmZBvIV3V-6De_eGQWcs8PzjVQ-J72RrMfMFa9MStA_B6YTSyuqTlNFMTZjbaofBGdkC9FhfzRpS20yPqnT60muR6SNv137iekKfPYEufdgFYIgZmJ3Q7AtYLfbuocFenWMosmI93Z7_jVCyG-ApSLLuWh5k4-4MKtOG0CGmhJNZvcpObd_l2z3ZUgicA0uHW42f16ILkCPV5dayQAPdnw9t2uNj10zVI2LEKMf_Tno9F2Wkvp89JYaBLjYmEHCOgKFU0iwgcN7g0KMeDZBEpTYQ6lEtTLO-CcuqJXXgmCZxEqYEHJVSWvNAy1V5lY_yYpTA6iZucQJTsYPOCRlB8-rQBnzglgdStNclTbmjlgVGPCbDi9Hj95e-DT3MVVaXEfd0xhI9DfX_hlW8oLnMrfJZCAX7up74jCwFVQkITZUJj52-2IlKs9QCme8DZsxmwSBKxNNn-zFjdmfUIsxP2pepAhHew6L_dv6X7qHAdcKtsQbI0m1z7xbVwfUke5xO241iqYO1UPoB_gGNG7zDPuaiskVeUFg_cwNqhJg8Npt-C0XzE6Qm81yeLtUIKM87hvn_84C6lNnZMYR62aCtAwZqaRz3dBrwWRkJIjgyCpkHhqJcJVBXwcL7Vz-BiN6YgyCpkqrJv0dzlb1_wPA2kJv1LJfaRRu3DxyrHRuQyn-hu0glBsK6m4hcz2oG9Wmz0-daRAKUSMz5mx-frlPgM3tF1_nmZKo8JlDjEOM7cr5faJEPtLCT-1nLUXGc_UKNh_hDkqR4kLMQpqXwOzIHt-rM53kkUH58lGfCgYxrD5f9HHSG-tNXHQETz2mx7HYmkn1DQN3phC0erepvdEKQXoejMJF3ccsCFr4OTg9Thc-2636DbjbRYaFSY6aA157kmMFlrwVOOYjYVjpPAOxE-1DcyP9Wfp3pMvzqQtIHBtkHAgnurkYUpiT9UGtN6Jk42upTQrWWKTiI0nzuUztGgoCbLVmTle6P7FzgtEE3izHds8p7PRw4yHQ=w1600-h775",
    },
    {
        name: `Druidic Dabbler`,
        author: "Darth Rabbit",
        link: "https://lh3.googleusercontent.com/fife/AK0iWDzGTRct_yVoSf1jxvn0t5u5lTreUwV6X_s4vNnfAuXyUnAAX6gKyNVustf8PSrmXiii8gDigGDscNHS9G7rocg9s8z4UrT9SR8lMk7Nfpe7rBSjowOjyHomwJBHIlx_D8xrQjJScD-YdaOtFnknqVzVDkoKIYDJZ-5sdgLiyv1GMKDJ03ysc_F24BrAyw5Zj_qs9vcfxmEo_E6TxdkifSlstsrPEbXzBKsuMDcI0OHeGZ6TSQkbU3iVdxmH83-aV4ROVQ1_WtTfKmHKhW33bT1Sp3hQCpUTxz6KfNduCF1gkOF_p537icVA4ss7YT_AVi7e4yxpDFCk4FDorKquAy9rrFHEjxAtgYkMIPyPMGfOA1Ge3TC9ja8rilUp3wPldjO6otX9aOSrL8w_nTS5WnqBKUD_6_XC43y0eTo_fDDoRQUy5VuJnP2lrvQCtMZC5z3_ke3AssCuDtvyM5VdVdDzzaje8VKpuselJm6oTxpZVUd-CNgkEbah_grqewSHNUwjcsiad6YdWV9YJNiKbOjMMiFOMvpRyHKrYUG5kA9n2eyboPXbG3GN8Htnd4oF77dLpNXSJS5BzlqQSEhjCdqkrlaNuA_lHRIxmdC3azRdbt2RnDKhz93WLn3f0r-Vla5Nv3r7xO3oKb_LVP6wsnEJYIlOyaQlRiddcTb7czrzyA8sBEey_cLiuPfzMq_nnn66EVprm8LZDE7F4N7Hj5ZImi52UYiaeQ8Y-IiFOarxO7RAF37ElmPUDXyw5wRPomlazankACDMWboBeoSTZXlBQM2AbBFCXIerUHDiunfky_LrQwjJr8lh6I__3nTCnrlB1eOLnEd5I15cplGTffI-nPH7_I1hcOFlTeo6BUOatSL6pkeSKV2OK7JKwMP9y7AotX3IejcTIhI95n6fbSm0WIrE9JSoBv4P1wY5JxhkJ9I1y4rt71MqaE-4ebyBhMEPebivrbcpCwRG6hJjayf3CcnhNyMp1l-ynRBDgvF07r5vS00NnG925wf8hUWmABp7_dxn_sMXrW9F4JzTNKxYcRet3jtHzcyo6YCteCqXAJAnRZbk3xByxVuAo73DJFKtw8N-oLoMaQr-UIm0mZf8maKjCz3KfNeNh0ufEc99NhOF09V1XZpelmkyFt7ZghTx9k1J1i89Eq7c3EquK9408lQ6LBbYLbcpAeYASxoVjouwo4NeTUsHqNjcy4bO52iJ6FWh0jg7K9LKTgKpXHyYnilUtMoBzhjU84xbvct3MrEpAbLclkcFd6UznbpyJ1HLJDztOpEAhya4dGcqJpI3vxk6Z9V4Hhh-dWgXAgMlCHV9s7alFEDrTOoS7ny-JF6LcuezLUHpHYtRY9Pg1jaPSEiE59uHnI3SXK7JC9dzxHPOPs4bCmd16gab95FXBnJFNOVZdpD2nkHF6GXqAWOt1Y9d4iTIK2PYKN_NKrcHu1WrqEiiZNh9VA52zOAFKb3RaxUu6P45IHPVYmHz8xUqS_BJdyLhRTmP6y5sNA18TyC9pLYNn4nAoBmrDVs=w1600-h775",
    },
];