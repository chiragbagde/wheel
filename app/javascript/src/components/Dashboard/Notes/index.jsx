import React, { useState, useEffect } from "react";

import { PageLoader } from "neetoui";
import { Container } from "neetoui/layouts";

import { NOTES_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Note from "./Note";
import NotesHeader from "./NotesHeader";
import NewNotePane from "./Pane/Create";

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
    <Container>
      <NotesHeader setShowNewNotePane={setShowNewNotePane} />
      <Note NOTES_DATA={notes} />
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
  );
};

export default Notes;
