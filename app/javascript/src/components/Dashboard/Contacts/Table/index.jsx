import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { contactsTableColumnData } from "./utils";

import { CONTACTS_LIST } from "../constants";

const Table = ({ handleDelete }) => (
  <NeetoUITable
    allowRowClick
    pagination
    rowSelection
    columnData={contactsTableColumnData(handleDelete)}
    currentPageNumber={1}
    defaultPageSize={10}
    handlePageChange={() => {}}
    rowData={CONTACTS_LIST}
    onRowClick={() => {}}
    onRowSelect={() => {}}
  />
);

export default Table;
