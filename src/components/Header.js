import React from "react";

const Header = ({ text, icon, backgroundColor }) => (
  <div
    class="topnav"
    style={{
      backgroundColor,
      overflow: "hidden",
      marginBottom: 20,
      marginLeft: -15,
      marginRight: -15
    }}
  >
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          src={icon}
          class="ui mini image"
          alt="icon"
          style={{ marginTop: 10, marginBottom: 10 }}
        />
      </div>
      <div>
        <a
          class="active"
          style={{
            float: "left",
            color: "#f2f2f2",
            textAlign: "center",
            padding: "20px 16px",
            textDecoration: "none",
            fontSize: "17px"
          }}
        >
          {text}
        </a>
      </div>
    </div>
  </div>
);

export default Header;
