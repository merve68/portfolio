import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Merhaba, Ben Merve</h1>
        <p className={styles.description}>
        React, React Native ve NodeJS'yi kullanarak 2 yıllık deneyime sahip tam yığın geliştiriciyim. Daha fazla bilgi edinmek isterseniz bana ulaşın!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          İletişim
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
