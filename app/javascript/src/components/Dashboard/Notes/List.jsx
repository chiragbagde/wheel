import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Button, Typography, Avatar, Dropdown } from "neetoui";

import { formatDateAndTime, calculateCreatedAgo } from "./utils";

const { MenuItem, Menu } = Dropdown;

const List = ({ NOTES_DATA }) =>
  NOTES_DATA.map(NOTE => (
    <React.Fragment key={NOTE.id}>
      <div className="border-slate-300 shadow-slate-300 order-none box-border h-40 w-full flex-grow-0 items-start self-stretch rounded-sm border-2 bg-white p-4 shadow-md">
        <div className="flex justify-between font-bold ">
          <Typography style="h4">{NOTE.title}</Typography>
          <Dropdown buttonStyle="text" icon={MenuVertical}>
            <Menu>
              <MenuItem.Button>Edit</MenuItem.Button>
              <MenuItem.Button style="danger">Delete</MenuItem.Button>
            </Menu>
          </Dropdown>
        </div>
        <Typography className="text-gray-400" style="body2">
          {NOTE.text}
        </Typography>
        <hr className="mb-2" />
        <div className="flex flex-row items-center justify-between text-gray-400">
          <Button label="Getting Started" style="secondary" />
          <div className="flex flex-row gap-2">
            <Clock />
            <Typography style="body2">
              {`${NOTE.status} ${calculateCreatedAgo(NOTE.createdAt)}`}
            </Typography>
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
        {NOTE.status === "created" && (
          <Button
            className="absolute right-12"
            label={formatDateAndTime(NOTE.createdAt)}
            onClick={() => {}}
          />
        )}
      </div>
      <br />
    </React.Fragment>
  ));

export default List;
