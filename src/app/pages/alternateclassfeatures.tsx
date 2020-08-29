import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { acfs } from '../data/acfslist';
import { koumeiMonsterPrcsBBCode } from '../data/koumeimonsterprcslist'

export const ACFsDiv = () => {
    return <div>
        <h2>Alternate Class Features</h2>
        <EntryList entries={acfs} shouldSort={true} />
    </div>
}

ReactDOM.render(
    <div style={{ padding: "1em" }}>
        <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
        <ACFsDiv/>
        {/* <pre>{koumeiMonsterPrcsBBCode()}</pre> */}
    </div>,
    document.getElementById("root")
);