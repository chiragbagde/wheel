import React, { useState } from "react";

import { Button } from "neetoui";
import { Header } from "neetoui/layouts";

const TitleBar = ({ setShowNewNotePane }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Header
      menuBarToggle={() => {}}
      title="All Notes"
      actionBlock={
        <Button
          icon="ri-add-line"
          label="Add New Note"
          onClick={() => setShowNewNotePane(true)}
        />
      }
      searchProps={{
        value: searchTerm,
        onChange: e => setSearchTerm(e.target.value),
      }}
    />
  );
};

export default TitleBar;
