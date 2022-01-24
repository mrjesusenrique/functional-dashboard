import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Icon from "../Icon";
import LinksGroup from "./LinksGroup/LinksGroup";
import styles from "./Sidebar.module.scss";

const Sidebar = () => (
  <nav className={styles.root}>
    <header className={styles.logo}>
      <Link to="/app/main">
        <Icon glyph="logo" />
      </Link>
    </header>
    <ul className={styles.nav}>
      <LinksGroup header="Dashboard" headerLink="/app/main" glyph="dashboard" />
      <LinksGroup
        header="Typography"
        headerLink="/app/typography"
        glyph="typography"
      />
      <LinksGroup
        header="Tables Basic"
        headerLink="/app/tables"
        glyph="tables"
      />
      <LinksGroup
        header="Notifications"
        headerLink="/app/notifications"
        glyph="notifications"
      />
      <LinksGroup
        header="Components"
        headerLink="/app/components"
        childrenLinks={[
          {
            name: "Buttons",
            link: "/app/components/buttons",
          },
          {
            name: "Charts",
            link: "/app/components/charts",
          },
          {
            name: "Icons",
            link: "/app/components/icons",
          },
          {
            name: "Maps",
            link: "/app/components/maps",
          },
        ]}
        glyph="components"
      />
    </ul>
  </nav>
);

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
