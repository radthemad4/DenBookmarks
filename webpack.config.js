const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      index: './src/app/pages/index.tsx',
      races: './src/app/pages/races.tsx',
      baseclasses: './src/app/pages/baseclasses.tsx',
      prestigeclasses: './src/app/pages/prestigeclasses.tsx',
      racialparagonclasses: './src/app/pages/racialparagonclasses.tsx',
      npcclasses: './src/app/pages/npcclasses.tsx',
      feats: './src/app/pages/feats.tsx',
      scalingfeats: './src/app/pages/scalingfeats.tsx',
      alternateclassfeatures: './src/app/pages/alternateclassfeatures.tsx',
      backgrounds: './src/app/pages/backgrounds.tsx',
      classabilitycomponents: './src/app/pages/classabilitycomponents.tsx',
      equipment: './src/app/pages/equipment.tsx',
      monsters: './src/app/pages/monsters.tsx',
      npcs: './src/app/pages/npcs.tsx',
      sourcebooks: './src/app/pages/sourcebooks.tsx',
      variantrules: './src/app/pages/variantrules.tsx',
      templates: './src/app/pages/templates.tsx',
      other: './src/app/pages/other.tsx',
      singlepage: './src/app/pages/singlepage.tsx',
      koumeimonsterprcsindex: './src/app/pages/koumeimonsterprcsindex.tsx',
    },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['public/build']
    }),
    new HtmlWebpackPlugin({
      title: 'Tome Community Material Link Repository',
      filename: 'Gaming_Den_Bookmarks.html',
      template: 'src/templates/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'Races',
      filename: './gamingdenbookmarks/Races.html',
      template: 'src/templates/index.html',
      chunks: ['races']
    }),
    new HtmlWebpackPlugin({
      title: 'Base Classes',
      filename: './gamingdenbookmarks/Base_Classes.html',
      template: 'src/templates/index.html',
      chunks: ['baseclasses']
    }),
    new HtmlWebpackPlugin({
      title: 'Prestige Classes',
      filename: './gamingdenbookmarks/Prestige_Classes.html',
      template: 'src/templates/index.html',
      chunks: ['prestigeclasses']
    }),
    new HtmlWebpackPlugin({
      title: 'Racial Paragon Classes',
      filename: './gamingdenbookmarks/Racial_Paragon_Classes.html',
      template: 'src/templates/index.html',
      chunks: ['racialparagonclasses']
    }),
    new HtmlWebpackPlugin({
      title: 'NPC Classes',
      filename: './gamingdenbookmarks/NPC_Classes.html',
      template: 'src/templates/index.html',
      chunks: ['npcclasses']
    }),
    new HtmlWebpackPlugin({
      title: 'Feats',
      filename: './gamingdenbookmarks/Feats.html',
      template: 'src/templates/index.html',
      chunks: ['feats']
    }),
    new HtmlWebpackPlugin({
      title: 'Scaling Feats',
      filename: './gamingdenbookmarks/Scaling_Feats.html',
      template: 'src/templates/index.html',
      chunks: ['scalingfeats']
    }),
    new HtmlWebpackPlugin({
      title: 'Alternate Class Features',
      filename: './gamingdenbookmarks/Alternate_Class_Features.html',
      template: 'src/templates/index.html',
      chunks: ['alternateclassfeatures']
    }),
    new HtmlWebpackPlugin({
      title: 'Backgrounds',
      filename: './gamingdenbookmarks/Backgrounds.html',
      template: 'src/templates/index.html',
      chunks: ['backgrounds']
    }),
    new HtmlWebpackPlugin({
      title: 'Class Ability Components',
      filename: './gamingdenbookmarks/Class_Ability_Components.html',
      template: 'src/templates/index.html',
      chunks: ['classabilitycomponents']
    }),
    new HtmlWebpackPlugin({
      title: 'Equipment',
      filename: './gamingdenbookmarks/Equipment.html',
      template: 'src/templates/index.html',
      chunks: ['equipment']
    }),
    new HtmlWebpackPlugin({
      title: 'Monsters',
      filename: './gamingdenbookmarks/Monsters.html',
      template: 'src/templates/index.html',
      chunks: ['monsters']
    }),
    new HtmlWebpackPlugin({
      title: 'NPCs',
      filename: './gamingdenbookmarks/NPCs.html',
      template: 'src/templates/index.html',
      chunks: ['npcs']
    }),
    new HtmlWebpackPlugin({
      title: 'Sourcebooks',
      filename: './gamingdenbookmarks/Sourcebooks.html',
      template: 'src/templates/index.html',
      chunks: ['sourcebooks']
    }),
    new HtmlWebpackPlugin({
      title: 'Variant Rules',
      filename: './gamingdenbookmarks/Variant_Rules.html',
      template: 'src/templates/index.html',
      chunks: ['variantrules']
    }),
    new HtmlWebpackPlugin({
      title: 'Templates',
      filename: './gamingdenbookmarks/Templates.html',
      template: 'src/templates/index.html',
      chunks: ['templates']
    }),
    new HtmlWebpackPlugin({
      title: 'Tome Community Material Link Repository',
      filename: './gamingdenbookmarks/Single_Page.html',
      template: 'src/templates/index.html',
      chunks: ['singlepage']
    }),
    new HtmlWebpackPlugin({
      title: 'Templates',
      filename: './gamingdenbookmarks/Templates.html',
      template: 'src/templates/index.html',
      chunks: ['templates']
    }),
    new HtmlWebpackPlugin({
      title: 'Other',
      filename: './gamingdenbookmarks/Other.html',
      template: 'src/templates/index.html',
      chunks: ['other']
    }),
    new HtmlWebpackPlugin({
      title: 'Koumei Monster PrCs Index',
      filename: './gamingdenbookmarks/Koumei_Monster_PrCs_Index.html',
      template: 'src/templates/index.html',
      chunks: ['koumeimonsterprcsindex']
    }),
  ],
  output: {
    path: __dirname + '/public',
    filename: './gamingdenbookmarks/build/[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}