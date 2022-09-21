import React from "react";

import { Clock } from "neetoicons";
import { Typography, Button, Avatar } from "neetoui";

const Footer = ({ createdAt }) => (
  <div className="flex flex-row items-center justify-between">
    <Button
      className="text-gray-400"
      label="Getting Started"
      style="secondary"
    />
    <div className="flex flex-row gap-2 text-gray-400">
      <Clock />
      <Typography style="body2">{createdAt}</Typography>
      <Avatar
        size="small"
        user={{
          imageUrl: "https://i.pravatar.cc/300",
          name: "Sam Smith",
        }}
        onClick={() => {}}
      />
    </div>
  </div>
);

export default Footer;
