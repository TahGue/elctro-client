import React, { useState } from 'react';
import setLanguage from 'next-translate/setLanguage';
import style from './languageSwitcher.module.css';

import { LanguageSwitcher, useLanguageQuery } from 'next-export-i18n';
import { ClickAway } from '../../ui/ClickAway';

function CustomLanguageSwitcher() {
  const [query] = useLanguageQuery();
  const lang = query?.lang;
  const [displayMenu, setDisplayMenu] = useState(false);
  const renderImage = (lan: string) => {
    if (lan === 'en') {
      return '/british.png';
    }
    if (lan === 'sv') {
      return '/swedish.png';
    }
    if (lan === 'da') {
      return '/dansk.jpeg';
    }
    return '/swedish.png';
  };
  return (
    <div className={style.switcherContainer}>
      {displayMenu === true && (
        <ClickAway onClickAway={() => setDisplayMenu(false)}>
          <div data-aos='fade-up' className={style.modelContainer}>
            <div style={{ paddingTop: 10, cursor: 'pointer' }}>
              <LanguageSwitcher lang={'en'}>
                <img
                  src={'/british.png'}
                  className={style.buttonImage}
                  width={50}
                  height={26}
                />
              </LanguageSwitcher>
            </div>

            <div style={{ paddingTop: 5, cursor: 'pointer' }}>
              <LanguageSwitcher lang={'sv'}>
                <img
                  src={'/swedish.png'}
                  className={style.buttonImage}
                  width={50}
                  height={26}
                />
              </LanguageSwitcher>
            </div>

            <div style={{ paddingTop: 5, cursor: 'pointer' }}>
              <LanguageSwitcher lang={'da'}>
                <img
                  src={'/dansk.jpeg'}
                  className={style.buttonImage}
                  width={50}
                  height={26}
                />
              </LanguageSwitcher>
            </div>
          </div>
        </ClickAway>
      )}

      <div
        onClick={() => setDisplayMenu((prev) => !prev)}
        className={style.button}
      >
        <img
          src={renderImage(lang)}
          className={style.buttonImage}
          width={50}
          height={26}
        />
      </div>
    </div>
  );
}

export default CustomLanguageSwitcher;
