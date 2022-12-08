import React, { Fragment } from 'react';

import styles from './styles.styl';

export default function Footer({ item, children }) {
  return (
    <div className={styles.footer}>
      {children && (
        <Fragment>
          <br />
          {children}
          <br />
        </Fragment>
      )}
      Maintained by{' '}
      <a
        href="https://github.com/BrianWhiting"
        target="_blank"
        rel="noopener noreferrer"
      >
        Brian Whiting
      </a>.
      <br />
      Originally made by{' '}
      <a
        href="https://twitter.com/joshhunt"
        target="_blank"
        rel="noopener noreferrer"
      >
        Josh Hunt
      </a>{' '}
      and{' '}
      <a
        href="https://twitter.com/Jakosaur"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jakosaur
      </a>{' '}
      for Destiny fans.
      <br />
      Having issues or need help?{' '}
      <a
        href="https://github.com/BrianWhiting/DestinyCollections-Legacy/issues"
        target="_blank"
        rel="noopener noreferrer"
      >
        File an issue on GitHub
      </a>
      .
      <br />
      Many thanks to{' '}
      <a
        href="https://twitter.com/JpDeathBlade"
        target="_blank"
        rel="noopener noreferrer"
      >
        JpDeathBlade
      </a>{' '}
      and{' '}
      <a
        href="https://www.todayindestiny.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        TodayInDestiny
      </a>{' '}
      for the Eververse Bright Dust schedule.
      <br />
      <br />
      Destiny is a registered trademark of Bungie. Data and images sourced from Bungie.
    </div>
  );
}
