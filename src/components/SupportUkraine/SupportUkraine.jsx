import React from 'react';
import css from './SupportUkraine.module.css';

// import { ReactComponent as IconAction } from 'assets/images/iconSupport/Mask group.svg';
// import { ReactComponent as IconFrontieres } from 'assets/images/iconSupport/Maskgroup(1).svg';
// import { ReactComponent as IconHope } from 'assets/images/iconSupport/hope.svg';
// import { ReactComponent as IconMedical } from 'assets/images/iconSupport/medical.svg';
// import { ReactComponent as IconPrytula } from 'assets/images/iconSupport/prytula.svg';
// import { ReactComponent as IconRazom } from 'assets/images/iconSupport/razom.svg';
// import { ReactComponent as IconSave } from 'assets/images/iconSupport/save.svg';
// import { ReactComponent as IconUnited } from 'assets/images/iconSupport/united.svg';
// import { ReactComponent as IconWorld } from 'assets/images/iconSupport/world.svg';
const SupportUkraine = () => {
  return (
    <div>
      <ul className={css.supportList}>
        <li className={css.supportItem}>{/* <IconAction /> */}</li>
        <li className={css.supportItem}>{/* <IconFrontieres /> */}</li>
        <li className={css.supportItem}>{/* <IconHope /> */}</li>
        <li className={css.supportItem}>{/* <IconMedical /> */}</li>
        <li className={css.supportItem}>{/* <IconPrytula /> */}</li>
        <li className={css.supportItem}>{/* <IconRazom /> */}</li>
        <li className={css.supportItem}>{/* <IconSave /> */}</li>
        <li className={css.supportItem}>{/* <IconUnited /> */}</li>
        <li className={css.supportItem}>{/* <IconWorld /> */}</li>
      </ul>
    </div>
  );
};

export default SupportUkraine;
