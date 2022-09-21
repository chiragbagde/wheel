import React from "react";

import { MenuVertical } from "neetoicons";
import { Typography, Dropdown } from "neetoui";

const Header = ({ title }) => (
  <div className="flex justify-between font-bold ">
    <Typography style="h4">{title}</Typography>
    <Dropdown buttonStyle="text" icon={MenuVertical}>
      <li>Edit</li>
      <li>Delete</li>
    </Dropdown>
  </div>
);

export default Header;
