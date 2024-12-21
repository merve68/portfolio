import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Hakkımda</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Ön Yüz Yazılım</h3>
              <p>
              Duyarlı ve optimize edilmiş siteler oluşturma konusunda deneyime sahip bir ön uç geliştiricisiyim
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Arka Uç Yazılım</h3>
              <p>
              Hızlı ve optimize edilmiş arka uç sistemleri ve API'leri geliştirme konusunda deneyimim var
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Tasarımcısı</h3>
              <p>
              Birden fazla açılış sayfası tasarladım ve ayrıca tasarım sistemleri oluşturdum
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
