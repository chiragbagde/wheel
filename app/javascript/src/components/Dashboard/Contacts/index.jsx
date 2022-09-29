import React, { useState, useEffect } from "react";

import { PageLoader } from "neetoui";
import { Container } from "neetoui/layouts";

import DeleteAlert from "./DeleteAlert";
import Header from "./Header";
import Create from "./Pane/Create";
import SideBar from "./SideBar";
import Table from "./Table";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    setLoading(false);
  };

  if (loading) {
    return <PageLoader />;
  }

  const handleDelete = () => {
    setShowDeleteAlert(true);
  };

  return (
    <>
      <SideBar />
      <Container>
        <Header setShowNewContactPane={setShowNewContactPane} />
        <Create
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
        <Table handleDelete={handleDelete} />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
      </Container>
    </>
  );
};

export default Contacts;
