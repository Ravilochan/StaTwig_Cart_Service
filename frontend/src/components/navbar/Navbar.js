import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav
          id="extended-nav"
          role="banner"
          tabindex="-1"
          style={{ height: 65, background: "#7C5258" }}
        >
          <Link to="/feed">
            <div
              style={{
                display: "inline-block",
                paddingTop: "10px",
                marginLeft: "73%",
                textAlign: "center",
              }}
              className="nav-home"
            >
              <span style={{ display: "inline-block" }}>
                <svg
                  viewBox="0 0 24 24"
                  style={{ color: "white", width: "24px", height: "24px" }}
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 23h-3v-10l8.991-8.005 9.009 8.005v10h-3v-9h-12v9zm1-2h10v2h-10v-2zm0-3h10v2h-10v-2zm10-3v2h-10v-2h10zm-5-14.029l12 10.661-1.328 1.493-10.672-9.481-10.672 9.481-1.328-1.493 12-10.661z"
                    style={{ fill: "#e1e9ee" }}
                  />
                </svg>
              </span>
              <span>
                <div
                  style={{
                    display: "block",
                    "font-size": "0.85rem",
                    "font-weight": 400,
                    color: "#c7d1d8",
                  }}
                >
                  Home
                </div>
              </span>
            </div>
          </Link>
          <Link to="/jobs">
            <div
              style={{
                display: "inline-block",
                marginLeft: 20,
                textAlign: "center",
              }}
              className="nav-home"
            >
              <span id="jobs-tab-icon" class="nav-item__icon" lang="en">
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: "24px", height: "24px" }}
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  class="nav-icon"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 10c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-6.527 4.593c-1.108 1.086-2.275 2.219-3.473 3.407-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 .746-.156 1.496-.423 2.253-.527-.427-1.124-.768-1.769-1.014.122-.425.192-.839.192-1.239 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.109-2.064c.376.557.839 1.048 1.364 1.465z"
                    class="inactive-item"
                    style={{ fill: "#e1e9ee" }}
                  />
                </svg>
              </span>
              <span>
                <div
                  style={{
                    display: "block",
                    "font-size": "0.85rem",
                    "font-weight": 400,
                    color: "#c7d1d8",
                  }}
                >
                  Favorites
                </div>
              </span>
            </div>
          </Link>
          <Link to="/messages">
            <div
              style={{
                display: "inline-block",
                marginLeft: 20,
                textAlign: "center",
              }}
              className="nav-home"
            >
              <span id="messaging-tab-icon" class="nav-item__icon" lang="en">
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: "24px", height: "24px" }}
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  class="nav-icon"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 3v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981zm-5 6h-14v-1h14v1zm0 2h-14v1h14v-1zm-6 3h-8v1h8v-1z"
                    class="inactive-item"
                    style={{ fill: "#e1e9ee" }}
                  />
                </svg>
              </span>
              <span>
                <div
                  style={{
                    display: "block",
                    "font-size": "0.85rem",
                    "font-weight": 400,
                    color: "#c7d1d8",
                  }}
                >
                  Messaging
                </div>
              </span>
            </div>
          </Link>
          <Link to="/notifications">
            <div
              style={{
                display: "inline-block",
                marginLeft: 20,
                textAlign: "center",
              }}
              className="nav-home"
            >
              <span
                id="notifications-tab-icon"
                class="nav-item__icon"
                lang="en"
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: "24px", height: "24px" }}
                  x="0"
                  y="0"
                  preserveAspectRatio="xMinYMin meet"
                  class="nav-icon"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8c-3.169 0-6 2.113-6 5.003 0 1.025.37 2.032 1.023 2.812.027.916-.511 2.228-.997 3.184 1.302-.234 3.15-.754 3.989-1.268.709.173 1.388.252 2.03.252 3.542 0 5.954-2.418 5.954-4.98.001-2.906-2.85-5.003-5.999-5.003zm-.888 7h-2.291v-.492l1.251-1.815v-.01h-1.159v-.683h2.156v.527l-1.224 1.789v.011h1.267v.673zm4.047 0h-3.188v-.674l1.741-2.379v-.014h-1.712v-.933h3v.717l-1.604 2.341v.016h1.763v.926zm-14.159 6h6c0 1.598-1.393 3-2.971 3-1.58 0-3.029-1.402-3.029-3zm3.73-4h-7.181c1.189-1.667 1.605-3.891 1.965-5.815.446-2.39.868-4.648 2.354-5.509 1.379-.801 2.955-.76 4.267 0 .58.336.994.889 1.314 1.576.558-.338 1.167-.612 1.813-.819-.472-1.025-1.123-1.905-2.125-2.486-.644-.374-1.041-1.07-1.04-1.82v-.003c0-1.174-.939-2.124-2.097-2.124s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.04 1.82-4.669 2.709-1.986 11.715-6.863 13.306v1.749h9.782c.356-.699.691-1.318.948-2zm-.73-16c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1z"
                    class="inactive-item"
                    style={{ fill: "#e1e9ee" }}
                  />
                </svg>
              </span>
              <span>
                <div
                  style={{
                    display: "block",
                    "font-size": "0.85rem",
                    "font-weight": 400,
                    color: "#c7d1d8",
                  }}
                >
                  Notifications
                </div>
              </span>
            </div>
          </Link>
          <Link to="/cart">
            <div
              style={{
                display: "inline-block",
                marginLeft: 20,
                textAlign: "center",
              }}
              className="nav-home"
            >
              <span
                id="notifications-tab-icon"
                class="nav-item__icon"
                lang="en"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40px"
                  height="36px"
                  viewBox="0 0 40 36"
                  style={{ width: "24px", height: "24px" }}
                >
                  <g id="Page-1_4_">
                    <g
                      id="Desktop_4_"
                      transform="translate(-84.000000, -410.000000)"
                    >
                      <path
                        id="Cart"
                        class="st0"
                        style={{ fill: "#e1e9ee" }}
                        d="M94.5,434.6h24.8l4.7-15.7H92.2l-1.3-8.9H84v4.8h3.1l3.7,27.8h0.1
                 c0,1.9,1.8,3.4,3.9,3.4c2.2,0,3.9-1.5,3.9-3.4h12.8c0,1.9,1.8,3.4,3.9,3.4c2.2,0,3.9-1.5,3.9-3.4h1.7v-3.9l-25.8-0.1L94.5,434.6"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <span>
                <div
                  style={{
                    display: "block",
                    "font-size": "0.85rem",
                    "font-weight": 400,
                    color: "#c7d1d8",
                  }}
                >
                  Cart
                </div>
              </span>
            </div>
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}
