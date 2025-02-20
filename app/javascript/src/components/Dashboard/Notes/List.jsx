import React, { useState } from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Button, Typography, Avatar, Tooltip, Dropdown } from "neetoui";

import DeleteAlert from "./DeleteAlert";
import { formatDateAndTime, calculateCreatedAgo } from "./utils";

const { MenuItem, Menu } = Dropdown;

const List = ({ NOTES_DATA, fetchNotes }) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [title, setTitle] = useState("");

  const handleDelete = id => {
    setShowDeleteAlert(true);
    setTitle(id);
  };

  return NOTES_DATA.map(NOTE => (
    <React.Fragment key={NOTE.id}>
      <div className="border-slate-300 shadow-slate-300 order-none box-border h-40 w-full flex-grow-0 items-start self-stretch rounded-sm border-2 bg-white p-4 shadow-md">
        <div className="flex justify-between font-bold ">
          <Typography style="h4">{NOTE.title}</Typography>
          <Dropdown buttonStyle="text" icon={MenuVertical}>
            <Menu>
              <MenuItem.Button>Edit</MenuItem.Button>
              <MenuItem.Button
                style="danger"
                onClick={() => handleDelete(NOTE.title)}
              >
                Delete
              </MenuItem.Button>
            </Menu>
          </Dropdown>
        </div>
        {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchNotes}
            title={title}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
        <Typography className="text-gray-400" style="body2">
          {NOTE.text}
        </Typography>
        <hr className="mb-2" />
        <div className="flex items-center justify-between">
          <Button label="Getting Started" style="secondary" />
          <div className="flex justify-between gap-2">
            <Clock />
            <Tooltip
              content={formatDateAndTime(NOTE.createdAt)}
              followCursor="horizontal"
              position="top"
            >
              <Typography style="body2">
                {`${NOTE.status} ${calculateCreatedAgo(NOTE.createdAt)}`}
              </Typography>
            </Tooltip>
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
      </div>
      <br />
    </React.Fragment>
  ));
};

export default List;
