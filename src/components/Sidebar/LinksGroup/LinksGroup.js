import React, { useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Collapse } from "reactstrap";
import { Route } from "react-router";
import Icon from "../../Icon/Icon";
import styles from "./LinksGroup.module.scss";

const LinksGroup = (props) => {
  const [state, setState] = useState({ isOpen: false });
  const { className, childrenLinks, headerLink, header, glyph } = props;
  const { isOpen } = state;

  if (!childrenLinks) {
    return (
      <li className={cx(styles.headerLink, className)}>
        <NavLink
          to={headerLink}
          activeClassName={styles.headerLinkActive}
          exact
        >
          <div>
            {glyph && <Icon glyph={glyph} />}
            <span>{header}</span>
          </div>
        </NavLink>
      </li>
    );
  }
  /* eslint-disable */
  return (
    <Route
      path={headerLink}
      children={({ match }) => {
        return (
          <li className={cx(styles.headerLink, className)}>
            <a
              className={cx({
                [styles.headerLinkActive]:
                  !!match && match.url.indexOf(headerLink) !== -1,
              })}
              onClick={() => setState({ isOpen: !isOpen })}
            >
              <div>
                {glyph && <Icon glyph={glyph} />}
                <span>{header}</span>
              </div>
              <b
                className={cx("fa fa-angle-left arrow", styles.arrow, {
                  [styles.arrowActive]: isOpen,
                })}
              />
            </a>
            {/* eslint-enable */}
            <Collapse className={styles.panel} isOpen={isOpen}>
              <ul>
                {childrenLinks &&
                  childrenLinks.map((child) => (
                    <li key={child.name}>
                      <NavLink
                        to={child.link}
                        exact
                        onClick={() =>
                          setState({
                            isOpen: true,
                          })
                        }
                        activeClassName={styles.headerLinkActive}
                      >
                        {child.name}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </Collapse>
          </li>
        );
      }}
    />
  );
};

LinksGroup.propTypes = {
  header: PropTypes.node.isRequired,
  headerLink: PropTypes.string,
  childrenLinks: PropTypes.array,
  glyph: PropTypes.string,
  className: PropTypes.string,
};

LinksGroup.defaultProps = {
  headerLink: null,
  childrenLinks: null,
  className: "",
  glyph: null,
};

export default LinksGroup;
