import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Typography, Avatar, Dropdown } from "neetoui";

const { Menu, MenuItem } = Dropdown;

export const contactsTableColumnData = handleDelete => [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: (name, contact) => (
      <div className="align-items-center flex">
        <Avatar
          size="large"
          user={{
            name: contact.name,
            imageUrl: "https://i.pravatar.cc/280",
          }}
        />
        <div className="ml-2">
          <Typography style="h4">{name}</Typography>
          <Typography className="neeto-ui-text-gray-500" style="body2">
            {contact.role}
          </Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "30%",
  },
  {
    title: "",
    dataIndex: "more",
    key: "more",
    width: "10%",
    render: () => (
      <Dropdown
        buttonStyle="text"
        icon={MenuHorizontal}
        position="bottom-start"
      >
        <Menu>
          <MenuItem.Button>Edit</MenuItem.Button>
          <MenuItem.Button style="danger" onClick={handleDelete}>
            Delete
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    ),
  },
];
