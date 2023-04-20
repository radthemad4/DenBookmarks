import { EntryList } from '../entry';
import { backgrounds } from '../data/backgroundslist';
import { createRoot, BackToMainPageElement } from '.';

export const BackgroundsDiv = () => {
  return <div className='Content'>
    <h1 className='ThreadTitle'>Backgrounds</h1>
    <EntryList entries={backgrounds} shouldSort={true} />
  </div>
}

createRoot(
  <>
    <BackToMainPageElement />
    <BackgroundsDiv />
  </>
);