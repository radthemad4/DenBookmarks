import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let pages = [
  {
    entryName: 'index',
    title: 'Tome Community Material Link Repository',
    filename: 'Gaming_Den_Bookmarks.html',
  },
  {
    entryName: 'races',
    title: 'Races',
    filename: 'gamingdenbookmarks/Races.html',
  },
  {
    entryName: 'baseclasses',
    title: 'Base Classes',
    filename: 'gamingdenbookmarks/Base_Classes.html',
  },
  {
    entryName: 'prestigeclasses',
    title: 'Prestige Classes',
    filename: 'gamingdenbookmarks/Prestige_Classes.html',
  },
  {
    entryName: 'racialparagonclasses',
    title: 'Racial Paragon Classes',
    filename: 'gamingdenbookmarks/Racial_Paragon_Classes.html',
  },
  {
    entryName: 'npcclasses',
    title: 'NPC Classes',
    filename: 'gamingdenbookmarks/NPC_Classes.html',
  },
  {
    entryName: 'feats',
    title: 'Feats',
    filename: 'gamingdenbookmarks/Feats.html',
  },
  {
    entryName: 'scalingfeats',
    title: 'Scaling Feats',
    filename: 'gamingdenbookmarks/Scaling_Feats.html',
  },
  {
    entryName: 'alternateclassfeatures',
    title: 'Alternate Class Features',
    filename: 'gamingdenbookmarks/Alternate_Class_Features.html',
  },
  {
    entryName: 'backgrounds',
    title: 'Backgrounds',
    filename: 'gamingdenbookmarks/Backgrounds.html',
  },
  {
    entryName: 'classabilitycomponents',
    title: 'Class Ability Components',
    filename: 'gamingdenbookmarks/Class_Ability_Components.html',
  },
  {
    entryName: 'equipment',
    title: 'Equipment',
    filename: 'gamingdenbookmarks/Equipment.html',
  },
  {
    entryName: 'monsters',
    title: 'Monsters',
    filename: 'gamingdenbookmarks/Monsters.html',
  },
  {
    entryName: 'npcs',
    title: 'NPCs',
    filename: 'gamingdenbookmarks/NPCs.html',
  },
  {
    entryName: 'sourcebooks',
    title: 'Sourcebooks',
    filename: 'gamingdenbookmarks/Sourcebooks.html',
  },
  {
    entryName: 'variantrules',
    title: 'Variant Rules',
    filename: 'gamingdenbookmarks/Variant_Rules.html',
  },
  {
    entryName: 'templates',
    title: 'Templates',
    filename: 'gamingdenbookmarks/Templates.html',
  },
  {
    entryName: 'other',
    title: 'Other',
    filename: 'gamingdenbookmarks/Other.html',
  },
  {
    entryName: 'singlepage',
    title: 'Tome Community Material Link Repository',
    filename: 'gamingdenbookmarks/Single_Page.html',
  },
  {
    entryName: 'koumeimonsterprcsindex',
    title: 'Monster Prestige Classes (A Reprint) Index',
    filename: 'gamingdenbookmarks/Koumei_Monster_PrCs_Index.html',
  },
  {
    entryName: 'pokedexredoneindex',
    title: 'Pokedex Redone Index',
    filename: 'gamingdenbookmarks/Pokedex_Reborn_Index.html',
  },
];

const entry: { [key: string]: string } = {};

for (const page of pages) {
  entry[page.entryName] = `./src/pages/${page.entryName}.tsx`;
}

const output = {
  path: __dirname + '/build/',
  filename: './gamingdenbookmarks/build/[name].[contenthash].js'
};


const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({ filename: 'gamingdenbookmarks/build/[name].css' }),
  ...pages.map(({ entryName, title, filename }) => {
    return new HtmlWebpackPlugin({
      title,
      filename,
      template: 'public/index.html',
      chunks: [entryName],
    });
  }),
];

// console.log(plugins);

module.exports = {
  webpack: {
    configure: (webpackConfig: any, { env, paths }: { env: any, paths: any }) => {
      webpackConfig.entry = entry;
      webpackConfig.output = output;
      webpackConfig.plugins = plugins;
      return webpackConfig;
    },
  },
};