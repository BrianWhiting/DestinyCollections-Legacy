/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

import logo from 'app/logo.svg';
import Icon from 'app/components/Icon';
import LoginCTA from '../LoginCTA';
import DonateButton from 'app/components/DonateButton';
import ProfileDropdown from './ProfileDropdown';
import LanguageDropdown from './LanguageDropdown';

import ClickOutside from 'react-click-outside';

import styles from './styles.styl';

function isOverflowing(el) {
  return el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
}

const link = (name, to) => ({ name, to });
const LINKS = [
  link('Year 7', '/'),
  link('Year 6', '/year-6'),
  link('Year 5', '/year-5'),
  link('Year 4', '/year-4'),
  link('Year 3', '/year-3'),
  link('Year 2', '/year-2'),
  link('Year 1', '/year-1'),
];

const SOCIALS = [
  link('github', 'https://github.com/BrianWhiting/DestinyCollections-Legacy')
];

const SiteName = () => (
  <div className={styles.siteName}>
    <img src={logo} className={styles.logo} alt="" />
    <div>Destiny Collections</div>
  </div>
);

const SiteLinks = ({ showDataExplorerLink }) => (
  <Fragment>
    <div className={styles.dummyLink} />

    {LINKS.map(({ name, to }) => (
      <Link
        key={to}
        className={styles.link}
        activeClassName={styles.active}
        to={to}
      >
        {name}
      </Link>
    ))}
  </Fragment>
);

const SocialLinks = () => (
  <Fragment>
    {SOCIALS.map(({ name, to }) => (
      <a
        key={to}
        className={styles.socialLink}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name={name} brand />
      </a>
    ))}
  </Fragment>
);

function sidebarClickOutside(toggleSidebar, isOpen, ev) {
  if (isOpen) {
    ev.preventDefault();
    toggleSidebar();
  }
}

function Sidebar({
  isAuth,
  isOpen,
  language,
  setLanguage,
  toggleSidebar,
  showDataExplorerLink
}) {
  return (
    <ClickOutside
      className={styles.sidebar}
      onClickOutside={sidebarClickOutside.bind(null, toggleSidebar, isOpen)}
    >
      <div className={styles.sidebarInner}>
        <div className={styles.sidebarTop}>
          <SiteName />
          <button className={styles.toggleSidebar} onClick={toggleSidebar}>
            <Icon name="times" />
          </button>
        </div>

        <SiteLinks showDataExplorerLink={showDataExplorerLink} />

        <div className={styles.hr} />

        {language && (
          <LanguageDropdown
            inline={true}
            language={language}
            setLanguage={setLanguage}
          />
        )}

        {!isAuth && <LoginCTA className={styles.sidebarLoginCta} />}

        <div className={styles.sidebarExtra}>
          <DonateButton />

          <div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </ClickOutside>
  );
}

export default class Header extends Component {
  state = { isOverflowing: false, sidebarActive: false };

  componentDidMount() {
    window.addEventListener('resize', this.checkOverflow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkOverflow);
  }

  componentDidUpdate() {
    this.checkOverflow();
  }

  checkOverflow = () => {
    if (this.state.isOverflowing) {
      return;
    }

    if (isOverflowing(this.linksRef)) {
      this.setState({ isOverflowing: true });
    }
  };

  setLinksRef = ref => {
    this.linksRef = ref;
  };

  toggleSidebar = () => {
    this.setState({ sidebarActive: !this.state.sidebarActive });
  };

  render() {
    const {
      currentProfile,
      allProfiles,
      switchProfile,
      isAuth,
      language,
      setLanguage,
      logout,
      profileCached,
      profileLoading,
      showDataExplorerLink
    } = this.props;

    const { isOverflowing, sidebarActive } = this.state;

    return (
      <div
        className={cx(
          styles.root,
          isOverflowing && styles.isOverflowing,
          sidebarActive && styles.sidebarActive
        )}
      >
        {isOverflowing && (
          <Sidebar
            {...this.props}
            isOpen={sidebarActive}
            toggleSidebar={this.toggleSidebar}
          />
        )}

        <div className={styles.fixed}>
          {isOverflowing && (
            <button
              className={styles.toggleSidebar}
              onClick={this.toggleSidebar}
            >
              <Icon name="bars" />
            </button>
          )}

          <SiteName />

          <div className={styles.links} ref={this.setLinksRef}>
            <SiteLinks showDataExplorerLink={showDataExplorerLink} />
          </div>

          {!isAuth && !isOverflowing && (
            <LoginCTA className={styles.headerLoginCta} />
          )}

          <div className={styles.spacer} />

          <div className={styles.etc}>
            {language && !isOverflowing && (
              <LanguageDropdown language={language} setLanguage={setLanguage} />
            )}

            {currentProfile && (
              <ProfileDropdown
                profileLoading={profileLoading}
                profileCached={profileCached}
                currentProfile={currentProfile}
                allProfiles={allProfiles}
                switchProfile={switchProfile}
                logout={logout}
              />
            )}

            <SocialLinks />
          </div>
        </div>
      </div>
    );
  }
}
