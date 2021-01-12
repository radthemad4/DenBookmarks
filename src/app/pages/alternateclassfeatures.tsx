import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { acfLists } from '../data/acfslist';

export const ACFsDiv = () => {
    return <div>
        <h2>Alternate Class Features</h2>
        {acfLists.map(({ name, link, acfs, relatedLinks }) => <div>
            <h3><a href={link}>{name}</a>{relatedLinks == null ? "": <span> ( related links: {relatedLinks.map(({name, link}, index)=>{
                return <span><a href={link}>{name}</a>{relatedLinks.length > 1 && index < relatedLinks.length - 1 ? ', ' : ''}</span>
            })} )</span>}</h3>
            <EntryList entries={acfs} shouldSort={true} />
        </div>)}

    </div>
}

ReactDOM.render(
    <div style={{ padding: "1em" }}>
        <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
        <ACFsDiv />
    </div>,
    document.getElementById("root")
);