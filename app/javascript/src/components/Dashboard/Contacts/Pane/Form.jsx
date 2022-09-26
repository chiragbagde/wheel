import React, { useState } from "react";

import { Formik, Form as NeetoUIForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select, Textarea } from "neetoui/formik";

import { CONTACTS_FORM_INITIAL_FORM_VALUES, ROLES } from "../constants";

const Form = ({ onClose, contact }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    Toastr.success("Contact added successfully.");
    onClose();
  };

  return (
    <Formik
      initialValues={contact}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_INITIAL_FORM_VALUES}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <NeetoUIForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              rows={1}
            />
            <Select
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={ROLES}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label="Save Changes"
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </NeetoUIForm>
      )}
    </Formik>
  );
};

export default Form;
