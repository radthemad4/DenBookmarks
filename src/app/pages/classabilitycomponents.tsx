import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { spells } from '../data/spellslist';
import { spheres } from '../data/spherelist';

export const ClassAbilityComponentsIndexDiv = () => {
    return <div>
        <h2><a href='./gamingdenbookmarks/Class_Ability_Components.html'>Class Ability Components</a></h2>
        <ul>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Domains'>Domains</a></li>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Kaelik_Cleric_Domains'>Kaelik Cleric Domains</a></li>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Kaelik_Cleric_Spells'>Kaelik Cleric Spells</a></li>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Spells'>Spells</a></li>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Spheres'>Spheres</a></li>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Tome_Monk_Fighting_Styles'>Tome Monk Fighting Styles</a></li>
        </ul>
    </div>
}

export const ClassAbilityComponentsDiv = () => {
    return <div>
        <h2 id='Domains'>Domains</h2>
        <h2 id='Kaelik_Cleric_Domains'>Kaelik Cleric Domains</h2>
        <h2 id='Kaelik_Cleric_Spells'>Kaelik Cleric Spells</h2>
        <h2 id='Spells'>Spells</h2>
        <EntryList entries={spells} shouldSort={true} />
        <h2 id='Spheres'>Spheres</h2>
        <EntryList entries={spheres} shouldSort={true} />
        <h2 id='Tome_Monk_Fighting_Styles'>Tome Monk Fighting Styles</h2>
    </div>
}

ReactDOM.render(
    <div style={{ padding: "1em" }}>
        <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
        <h1>Class Ability Components</h1>
        <ClassAbilityComponentsDiv />
    </div>,
    document.getElementById("root")
);