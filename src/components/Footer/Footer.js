/**
 * Flatlogic Dashboards (https://flatlogic.com/admin-dashboards)
 *
 * Copyright © 2015-present Flatlogic, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <footer className={cx(styles.root, props.className)}>
      <div className={styles.container}>
        <span>
          © {new Date().getFullYear()} &nbsp;
          <a
            href="https://flatlogic.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Developed by Jesus Casañas
          </a>
        </span>
        <span className={styles.spacer}>·</span>
        <Link to="/app/tos">Terms of Service</Link>
        <span className={styles.spacer}>·</span>
        <Link to="/app/privacy">Privacy Policy</Link>
        <span className={styles.spacer}>·</span>
        <Link to="/app/not-found">Support</Link>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: "",
};

export default Footer;
