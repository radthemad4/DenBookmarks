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
    ...[
      {
        name: 'Pidgey',
        challengeRating: 1 / 3,
      },
      {
        name: 'Pidgeotto',
        challengeRating: 5,
      },
      {
        name: 'Pidgeot',
        challengeRating: 8,
      },
    ].map(({ name, challengeRating }) => ({
      name,
      challengeRating,
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=566176#p566176',
    })),
    ...[
      {
        name: 'Rattata',
        challengeRating: 1 / 3,
      },
      {
        name: 'Alolan Rattata',
        challengeRating: 1 / 3,
      },
      {
        name: 'Raticate',
        challengeRating: 4,
      },
      {
        name: 'Alolan Raticate',
        challengeRating: 4,
      },
    ].map(({ name, challengeRating }) => ({
      name,
      challengeRating,
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=566268#p566268',
    })),
    ...[
      {
        name: 'Spearow',
        challengeRating: 1,
      },
      {
        name: 'Fearow',
        challengeRating: 4,
      },
    ].map(({ name, challengeRating }) => ({
      name,
      challengeRating,
      link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=566398#p566398',
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