import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { spells } from '../data/spellslist';

export const SpellsDiv = () => {
  return <div>
    <h2>Spells</h2>
    <EntryList entries={spells} shouldSort={true} />
  </div>
}

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <SpellsDiv/>
  </div>,
  document.getElementById("root")
);