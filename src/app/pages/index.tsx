import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClassAbilityComponentsIndexDiv } from './classabilitycomponents';
import { koumeiMonsterPrcsBBCode } from '../data/koumeimonsterprcslist';

ReactDOM.render(
  <div style={{padding:"1em"}}>
    <h1>Tome Community Material Link Repository</h1>

    <div>
      <div>The Tomes are a set of five book-length sourcebooks made by Frank and K. These books are: </div>
      <ul>
        <li>The <a href="http://www.tgdmb.com/viewtopic.php?t=34248">Tome of Necromancy</a> (<a href="http://www.dnd-wiki.org/wiki/Tome_of_Necromancy_%283.5e_Sourcebook%29">wiki</a>)</li>
        <li>The <a href="http://www.tgdmb.com/viewtopic.php?t=28828">Tome of Fiends</a> (<a href="http://www.dnd-wiki.org/wiki/Tome_of_Fiends_%283.5e_Sourcebook%29">wiki</a>)</li>
        <li>The <a href="http://www.tgdmb.com/viewtopic.php?t=28547">Dungeonomicon</a> (<a href="http://www.dnd-wiki.org/wiki/Dungeonomicon_%283.5e_Sourcebook%29">wiki</a>)</li>
        <li><a href="http://www.tgdmb.com/viewtopic.php?t=33294">Races of War</a> (<a href="http://www.dnd-wiki.org/wiki/Races_of_War_%283.5e_Sourcebook%29">wiki</a>)</li>
        <li><a href="http://www.tgdmb.com/viewtopic.php?t=35813">Book of Gears</a> (<a href="http://www.dnd-wiki.org/wiki/Book_of_Gears_%283.5e_Sourcebook%29">wiki</a>) (only partially complete but worth reading, use Red_Rob's)</li>
      </ul>

      <div>Unofficial Extras</div>
      <ul>
        <li><a href="https://www.tgdmb.com/viewtopic.php?t=51121">Comprehensive Tome Errata, Kaelik</a></li>
        <li><a href = "http://tgdmb.com/viewtopic.php?t=53704">Complete Tome Items and Wish Economy, Red_Rob</a> (<a href="https://dnd-wiki.org/wiki/Tome_Magic_Items_%283.5e_Variant_Rule%29">wiki</a>)</li>
        <li><a href="http://www.tgdmb.com/viewtopic.php?t=53563">Simplified Tome Armour, Red_Rob</a> (<a href="https://dnd-wiki.org/wiki/Tome_Armor_(3.5e_Variant_Rule%29">wiki</a>)</li>
      </ul>
      <div>
      These sourcebooks have the mission of sanitizing the parts of D{'&'}D 3.5 that the writers believe did not make sense. The five books focus, respectively, on the Necromancy rules, the rules for evil outsiders and the lower planes, dungeons and roguish characters, bringing fighter types up to the same power level as casters, and an overhaul of item and wealth rules. Despite only two of the books having "Tome" in the title, that word has been adopted as an adjective to describe the rule set and design philosophy as a whole. Some of the material in the Tomes can look significantly different than what you'd find in most 3.5 sourcebooks, and the rules for fighters especially have a different power level than what many people are used to.
      </div>
      <br/>
      <div>
      This repository aims to catalogue the various homebrew posted by the community on the gaming den that's either explicitly written with Tome in mind, or reasonably compatible with it.
      </div>
      <br/>
      <div>See also: <a href="https://dnd-wiki.org/wiki/Tome_Material">Tome Material in dnd-wiki</a>, as well as <a href="https://dnd-wiki.org/wiki/3.5e_Homebrew">other 3.5e material there</a>. However, ads are terrible on dnd-wiki, so make sure you have an adblocker (I recommend uBlock origin). Also, you can <a href="https://dnd-wiki.org/wiki/Talk:Main_Page#Un-fuckifying_the_sidebar">use this with a custom CSS addon</a> or <a href="https://gist.githubusercontent.com/radthemad4/7a6ef11d9ac97b26b8e92b5ad3590a05/raw/535109dc41ddfafbc06711b78cf874abaaa5d012/dnd-wiki%2520sidebar%2520unfuckerupper">this script with the TamperMonkey addon</a> to reduce the size of the sidebar there.</div>
      <br/>
      <div>If you'd like to see the contents below in a single page, <a href="./gamingdenbookmarks/Single_Page.html">click here</a>.</div>
      
      <br/>
      <div style={{ display: 'grid', width: '100%', gridTemplateColumns: 'auto auto auto' }}>
        <div>
          <div><h2><a href="./gamingdenbookmarks/Races.html">Races</a></h2></div>
          <div>
            <h2>Classes</h2>
            <ul>
              <li><a href="./gamingdenbookmarks/Base_Classes.html">Base</a></li>
              <li><a href="./gamingdenbookmarks/Prestige_Classes.html">Prestige</a></li>
              <li><a href="./gamingdenbookmarks/Racial_Paragon_Classes.html">Racial Paragon</a></li>
              <li><a href="./gamingdenbookmarks/NPC_Classes.html">NPC</a></li>
            </ul>
          </div>
          <div>
            <h2>Character Options</h2>
            <ul>
              <li><a href="./gamingdenbookmarks/Feats.html">Feats</a></li>
              <li><a href="./gamingdenbookmarks/Scaling_Feats.html">Scaling Feats</a></li>
              <li><a href="./gamingdenbookmarks/Alternate_Class_Features.html">Alternate Class Features</a></li>
              <li><a href="./gamingdenbookmarks/Backgrounds.html">Backgrounds</a></li>
            </ul>
          </div>
          <ClassAbilityComponentsIndexDiv/>
          <div>
            <h2><a href="./gamingdenbookmarks/Equipment.html">Equipment</a></h2>
          </div>
        </div>
        <div>
          <h2><a href="./gamingdenbookmarks/NPCs.html">NPCs</a></h2>
          <h2><a href="./gamingdenbookmarks/Monsters.html">Monsters</a></h2>
          <h2><a href="./gamingdenbookmarks/Templates.html">Templates</a></h2>
        </div>
        <div>
          <h2><a href="./gamingdenbookmarks/Sourcebooks.html">Sourcebooks</a></h2>
          <h2><a href="./gamingdenbookmarks/Variant_Rules.html">Variant Rules</a></h2>
          <h2><a href="./gamingdenbookmarks/Other.html">Other</a></h2>
        </div>                
      </div>

    </div>
    {/* <pre>{koumeiMonsterPrcsBBCode()}</pre> */}
  </div>,
  document.getElementById("root")
);