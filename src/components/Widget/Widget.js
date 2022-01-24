/**
 * Flatlogic Dashboards (https://flatlogic.com/admin-dashboards)
 *
 * Copyright © 2015-present Flatlogic, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./Widget.module.scss";

const Widget = (props) => {
  return (
    <section className={cx(styles.widget, props.className)}>
      {props.title &&
        (typeof props.title === "string" ? (
          <h5 className={styles.title}>{props.title}</h5>
        ) : (
          <header className={styles.title}>{props.title}</header>
        ))}
      <div>{props.children}</div>
    </section>
  );
};

Widget.propTypes = {
  title: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Widget.defaultProps = {
  title: null,
  className: "",
  children: [],
};

export default Widget;
