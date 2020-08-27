import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MonsterEntryList } from '../entry';
import { monsters } from '../data/monsterslist';

export const MonstersDiv = () => {
    return <div>
        <h2>Monsters</h2>
        <MonsterEntryList entries={monsters} />
    </div>
}

ReactDOM.render(
    <div style={{ padding: "1em" }}>
        <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
        <MonstersDiv/>
    </div>,
    document.getElementById("root")
);