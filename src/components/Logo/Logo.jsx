import React from 'react';
import Link from 'gatsby-link';
import MainLogoImage from 'assets/images/logo-main.svg';
import styles from './styles.module.scss';

export const Logo = () => (
  <div className={styles.container}>
    <Link to="/">
      <img
        className={styles.logo}
        alt="Logo principal de Webconf edición 2019"
        src={MainLogoImage}
      />
    </Link>
  </div>
);
