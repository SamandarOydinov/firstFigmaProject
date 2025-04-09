import React from 'react';
import BComponent from './BComponent';
import { useLanguage } from './Language';

function AComponent() {
  const { lang, setLang } = useLanguage();
  return (
    <>
      <div className="flex gap-[10px] fixed top-[30px] right-[30px]">
        <select className="rounded-[2px] border-1" onChange={(e) => setLang(e.target.value)}>
          <option defaultValue="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
        {/* <button className="w-[40px] border-[1px]" onClick={() => setLang('uz')}>
          UZ
        </button>
        <button className="w-[40px] border-[1px]" onClick={() => setLang('en')}>
          EN
        </button> */}
        <p>Tanlangan til: {lang}</p>
      </div>
      <div>
        <h1 className="text-4xl">A Component</h1>
        <BComponent />
      </div>
    </>
  );
}

export default AComponent;
