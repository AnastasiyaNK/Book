import React, { useState } from 'react';
import css from './SupportUkraine.module.css';
import cn from 'classnames';

import iconPrytula from 'assets/images/iconSupport/prytula.png';
import iconAction from 'assets/images/iconSupport/action.png';
import iconFrontieres from 'assets/images/iconSupport/fronteres.png';
import iconHope from 'assets/images/iconSupport/hope.png';
import iconMedical from 'assets/images/iconSupport/medical.png';

import iconRazom from 'assets/images/iconSupport/razom.png';
import iconSave from 'assets/images/iconSupport/save.png';
import iconUnited from 'assets/images/iconSupport/united.png';
import iconWorld from 'assets/images/iconSupport/world.png';
import iconTrident from 'assets/images/iconSupport/trident.png';

import { ReactComponent as IconSkroll } from 'assets/images/iconSupport/scrol.svg';

const refs = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: iconSave,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: iconHope,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: iconUnited,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: iconMedical,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: iconFrontieres,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: iconRazom,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: iconAction,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: iconWorld,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: iconPrytula,
  },
];

const SupportUkraine = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={css.supporContainer}>
      <div className={css.supporWrapper}>
        <h3 className={css.supporTitle}>SupportUkraine</h3>
        <img className={css.supporIconTrident} src={iconTrident} alt="" />
      </div>
      <ul className={css.supportList}>
        {refs
          .slice(0, showMore ? refs.length : 6)
          .map(({ title, url, img }, index) => {
            return (
              <li key={title} className={css.supportItem}>
                <a className={css.supportLink} href={url}>
                  <span className={css.supportNumber}>0{index + 1}</span>
                  <img
                    className={css.supportIconDonats}
                    src={img}
                    alt={title}
                  />
                </a>
              </li>
            );
          })}
      </ul>
      <button
        onClick={() => setShowMore(prevState => !prevState)}
        className={cn(css.supportBtn, {
          [css.active]: showMore,
        })}
      >
        <IconSkroll />
      </button>
    </div>
  );
};

export default SupportUkraine;
