/**
 * Flatlogic Dashboards (https://flatlogic.com/admin-dashboards)
 *
 * Copyright © 2015-present Flatlogic, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { useState } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";
import photo from "../../images/photo.jpg";
import { logoutUser } from "../../actions/user";
import styles from "./Header.module.scss";
import {
  Navbar,
  Nav,
  NavItem,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

const Header = (props) => {
  const [state, setState] = useState({ isOpen: false });
  const { isOpen } = state;

  const toggleDropdown = () => {
    setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  const doLogout = () => {
    props.dispatch(logoutUser());
  };

  return (
    <Navbar className={styles.root}>
      <Nav>
        <NavItem
          className={cx(
            "visible-xs mr-4 d-sm-up-none",
            styles.headerIcon,
            styles.sidebarToggler
          )}
          href="#"
          onClick={props.sidebarToggle}
        >
          <i className="fa fa-bars fa-2x text-muted" />
        </NavItem>
        <NavItem>
          <InputGroup>
            <Input placeholder="Search for..." />
            <InputGroupAddon addonType="append" className="px-2">
              <i className="fa fa-search" />
            </InputGroupAddon>
          </InputGroup>
        </NavItem>
      </Nav>
      <Nav className="ml-auto">
        <NavItem className={cx("", styles.headerIcon)}>
          <Button>
            <Icon glyph="mail" />
            <span>8</span>
          </Button>
        </NavItem>
        <NavItem className={cx("", styles.headerIcon)}>
          <Button>
            <Icon glyph="notification" />
            <span>13</span>
          </Button>
        </NavItem>
        <NavItem className={cx("", styles.headerIcon)}>
          <Button>
            <Icon glyph="settings" />
          </Button>
        </NavItem>
        <Dropdown isOpen={isOpen} toggle={toggleDropdown}>
          <DropdownToggle nav>
            <img
              className={cx("rounded-circle mr-sm", styles.adminPhoto)}
              src={photo}
              alt="administrator"
            />
            <span className="text-body">Administrator</span>
            <i
              className={cx("fa fa-angle-down ml-sm", styles.arrow, {
                [styles.arrowActive]: isOpen,
              })}
            />
          </DropdownToggle>
          <DropdownMenu style={{ width: "100%" }}>
            <DropdownItem>
              <NavLink to="/app/posts">Posts</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/app/profile">Profile</NavLink>
            </DropdownItem>
            <DropdownItem onClick={doLogout}>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

function mapStateToProps(state) {
  return {
    init: state.runtime.initialNow,
  };
}

Header.propTypes = {
  sidebarToggle: PropTypes.func,
  dispatch: PropTypes.func.isRequired,
};

Header.defaultProps = {
  sidebarToggle: () => {},
};

export default connect(mapStateToProps)(Header);
