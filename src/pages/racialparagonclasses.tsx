import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { racialParagons } from '../data/racialparagonslist';
import { BackToMainPageElement, createRoot } from '.';

export const RacialParagonsDiv = () => {
  return <div className='Content'>
    <h1 className='ThreadTitle'>Racial Paragons</h1>
    <EntryList entries={racialParagons} shouldSort={true} />
  </div>
}

createRoot(
  <>
    <BackToMainPageElement />
    <RacialParagonsDiv />
  </>
);

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <RacialParagonsDiv />
  </div>,
  document.getElementById("root")
);