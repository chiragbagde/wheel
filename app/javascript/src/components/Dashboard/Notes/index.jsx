import React, { useState, useEffect } from "react";

import { PageLoader } from "neetoui";
import { Container } from "neetoui/layouts";

import { NOTES_DATA } from "./constants";
import Header from "./Header";
import List from "./List";
import NewNotePane from "./Pane/Create";
import SideBar from "./SideBar";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
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
        <List NOTES_DATA={notes} fetchNotes={fetchNotes} />
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
      </Container>
    </>
  );
};

export default Notes;
