import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList, MonsterEntryList } from '../entry';
import { backgrounds } from '../data/backgroundslist';
import { spells } from '../data/spellslist';
import { spheres } from '../data/spherelist';
import { bogItemCollections, lesserBoGMagicItems, mediumBoGMagicItems, greaterBoGMagicItems, uncategorizedItems } from '../data/equipmentlist';
import { monsters } from '../data/monsterslist';
import { RacesDiv } from './races';
import { BaseClassesDiv } from './baseclasses';
import { PrestigeClassesDiv } from './prestigeclasses';
import { RacialParagonsDiv } from './racialparagonclasses';
import { NPCClasssesDiv } from './npcclasses';
import { FeatsDiv } from './feats';
import { ScalingFeatsDiv } from './scalingfeats';
import { BackgroundsDiv } from './backgrounds';
import { ACFsDiv } from './alternateclassfeatures';
import { EquipmentDiv } from './equipment';
import { NPCsDiv } from './npcs';
import { MonstersDiv } from './monsters';
import { TemplatesDiv } from './templates';
import { SourcebooksDiv } from './sourcebooks';
import { VariantRulesDiv } from './variantrules';
import { ClassAbilityComponentsDiv } from './classabilitycomponents';
import { OtherEntriesDiv } from './other';

ReactDOM.render(
    <div style={{ padding: "1em" }}>
        <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
        <RacesDiv />
        <div>
            <BaseClassesDiv />
            <PrestigeClassesDiv />
            <RacialParagonsDiv />
            <NPCClasssesDiv />
        </div>
        <div>
            <FeatsDiv />
            <ScalingFeatsDiv />
            <ACFsDiv />
            <BackgroundsDiv />
        </div>
        <div>
            <h1>Class Ability Components</h1>
            <ClassAbilityComponentsDiv />
        </div>
        <EquipmentDiv />
        <NPCsDiv />
        <MonstersDiv />
        <TemplatesDiv />
        <SourcebooksDiv />
        <VariantRulesDiv />
        <OtherEntriesDiv />
    </div>,
    document.getElementById("root")
);