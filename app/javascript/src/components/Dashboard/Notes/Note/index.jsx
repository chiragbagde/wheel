// eslint-disable-next-line react/jsx-filename-extension
import React from "react";

import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Tooltip from "./Tooltip.jsx";

const Note = ({ NOTES_DATA }) =>
  NOTES_DATA.map(NOTE => (
    <>
      <div className="border-slate-300 shadow-slate-300 order-none box-border h-40 w-full  flex-grow-0 items-start self-stretch rounded-sm border-2 bg-white p-4 shadow-md">
        <Header title={NOTE.title} />
        <Content text={NOTE.text} />
        <Footer createdAt={NOTE.createdAt} />
        {NOTE.createdAt.includes("Created") && <Tooltip />}
      </div>
      <br />
    </>
  ));

export default Note;
