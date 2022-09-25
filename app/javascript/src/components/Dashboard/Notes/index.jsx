import React, { useState, useEffect } from "react";

import { PageLoader } from "neetoui";
import { Container } from "neetoui/layouts";

import { NOTES_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Header from "./Header";
import List from "./List";
import NewNotePane from "./Pane/Create";
import SideBar from "./SideBar";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    setNotes(NOTES_DATA);
    setLoading(false);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <SideBar />
      <Container>
        <Header setShowNewNotePane={setShowNewNotePane} />
        <List NOTES_DATA={notes} />
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchNotes}
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
