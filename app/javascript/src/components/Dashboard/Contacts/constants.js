import { buildSelectOptions } from "utils";

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  role: null,
  email: "",
};

export const ROLES = buildSelectOptions(["User", "Admin", "Super Admin"]);

export const CONTACTS_LIST = [
  {
    name: "Sam Smith",
    email: "samsmith@yahoo.com",
    createdAt: "Jan 1, 2022",
    role: "User",
    id: 1,
  },
  {
    name: "Oliver Smith",
    email: "oliversmith@yahoo.com",
    createdAt: "Feb 1, 2022",
    role: "Admin",
    id: 2,
  },
  {
    name: "Sam Smith",
    email: "samsmith@gmail.com",
    createdAt: "March 1, 2022",
    role: "Super Admin",
    id: 3,
  },
  {
    name: "oliver smith",
    email: "oliversmith@gmail.com",
    createdAt: "April 1, 2022",
    role: "User",
    id: 4,
  },
  {
    name: "Ronald Richards",
    email: "ronalrichards@gmail.com",
    createdAt: "May 1, 2022",
    role: "Admin",
    id: 5,
  },
  {
    name: "Anonymous coder",
    email: "anonymouscoder@yahoo.com",
    createdAt: "June 1, 2022",
    role: "Super Admin",
    id: 6,
  },
];
