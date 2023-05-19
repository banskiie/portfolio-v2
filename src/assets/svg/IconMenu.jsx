// icon:menu-3-line | Remix Icon https://remixicon.com/ | Remix Design
import * as React from "react";

function IconMenu(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
    </svg>
  );
}

export default IconMenu;
