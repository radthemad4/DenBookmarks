import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { variantRules } from '../data/variantruleslist';

export const VariantRulesDiv = () => {
  return <div>
    <h2>Variant Rules</h2>
    <EntryList entries={variantRules} shouldSort={true} />
  </div>
}

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <VariantRulesDiv/>
  </div>,
  document.getElementById("root")
);