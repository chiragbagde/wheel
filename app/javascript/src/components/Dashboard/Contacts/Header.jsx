import React, { useState } from "react";

import { Button } from "neetoui";
import { Header as NeetoUIHeader } from "neetoui/layouts";

const Header = ({ setShowNewContactPane }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <NeetoUIHeader
      menuBarToggle={() => {}}
      title="All Contacts"
      actionBlock={
        <Button
          icon="ri-add-line"
          label="Add New Contact"
          onClick={() => setShowNewContactPane(true)}
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
