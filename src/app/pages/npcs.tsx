import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MonsterEntryList } from '../entry';
import { npcs } from '../data/npcslist';

export const NPCsDiv = () => {
    return <div>
        <h2>NPCs</h2>
        <MonsterEntryList entries={npcs} />
    </div>
}

ReactDOM.render(
    <div style={{ padding: "1em" }}>
        <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
        <NPCsDiv/>
    </div>,
    document.getElementById("root")
);