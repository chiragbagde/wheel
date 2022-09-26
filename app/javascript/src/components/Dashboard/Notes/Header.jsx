import React, { useState } from "react";

import { Button } from "neetoui";
import { Header as NeetoUIHeader } from "neetoui/layouts";

const Header = ({ setShowNewNotePane }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <NeetoUIHeader
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

export default Header;
