import { MonsterEntry } from "../entry";


export const pokedexRedoneMonsters: MonsterEntry[] = [
  ...[
    ...[
      {
        name: 'Bulbasaur',
        challengeRating: 0.5,
      },
      {
        name: 'Ivysaur',
        challengeRating: 4,
      },
      {
        name: 'Venusaur',
        challengeRating: 7,
      },
    ].map(({ name, challengeRating }) => ({
      name,
      challengeRating,
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=558368#p558368',
    })),
    ...[
      {
        name: 'Charmander',
        challengeRating: 0.5,
      },
      {
        name: 'Charmeleon',
        challengeRating: 4,
      },
      {
        name: 'Charizard',
        challengeRating: 7,
      },
    ].map(({ name, challengeRating }) => ({
      name,
      challengeRating,
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=558612#p558612',
    })),
    ...[
      {
        name: 'Squirtle',
        challengeRating: 0.5,
      },
      {
        name: 'Wartortle',
        challengeRating: 4,
      },
      {
        name: 'Blastoise',
        challengeRating: 7,
      },
    ].map(({ name, challengeRating }) => ({
      name,
      challengeRating,
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=558945#p558945',
    })),
    ...[
      {
        name: 'Caterpie',
        challengeRating: 0.125,
      },
      {
        name: 'Metapod',
        challengeRating: 2,
      },
      {
        name: 'Butterfree',
        challengeRating: 3,
      },
    ].map(({ name, challengeRating }) => ({
      name,
      challengeRating,
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=562197#p562197',
    })),
    ...[
      {
        name: 'Weedle',
        challengeRating: 0.25,
      },
      {
        name: 'Kakuna',
        challengeRating: 2,
      },
      {
        name: 'Beedrill',
        challengeRating: 3,
      },
    ].map(({ name, challengeRating }) => ({
      name,
      challengeRating,
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=563745#p563745',
    })),
  ].map(({ name, challengeRating, link }) => {
    return {
      name,
      author: 'Koumei',
      link,
      challengeRating,
      relatedLinks: [{ title: 'Pokedex Redone 2022', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=57904' }],
    };
  }),
];