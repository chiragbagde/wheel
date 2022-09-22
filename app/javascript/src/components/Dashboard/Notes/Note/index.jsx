// eslint-disable-next-line react/jsx-filename-extension
import React from "react";

import { Button, Typography } from "neetoui";

import Footer from "./Footer";
import Header from "./Header";

import { formatDateAndTime, calculateCreatedAgo } from "../utils";

const Note = ({ NOTES_DATA }) =>
  NOTES_DATA.map(NOTE => (
    <>
      <div className="border-slate-300 shadow-slate-300 order-none box-border h-40 w-full flex-grow-0 items-start self-stretch rounded-sm border-2 bg-white p-4 shadow-md">
        <Header title={NOTE.title} />
        <Typography className="mb-4 text-gray-400" style="body2">
          {NOTE.text}
        </Typography>
        <hr className="mb-4" />
        <Footer createdAt={calculateCreatedAgo(NOTE.createdAt)} />
        {NOTE.status === "created" && (
          <Button
            className="absolute right-12"
            label={formatDateAndTime(NOTE.createdAt)}
            onClick={() => {}}
          />
        )}
      </div>
      <br />
    </>
  ));

export default Note;
