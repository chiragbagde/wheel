import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ refetch, onClose, title }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    Toastr.success("Note deleted successfully");
    setDeleting(true);
    onClose();
    refetch();
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message={`Are you sure you want to continue deleting ${title}. This cannot be undone.`}
      title="Delete note?"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
