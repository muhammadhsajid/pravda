import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

function Navigation(props) {
  return (
    <div>
      <nav>
        <div>
          {/*}
          <Link class="navbar-brand" to="/">
            Pravda
          </Link>
          */}
          <div>
            <ul>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/profile" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/profile">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);