import { buildSelectOptions } from "utils";
import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  tags: [],
  role: null,
};

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const NOTES_DATA = [
  {
    title: "React",
    text: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly.",
    createdAt: "2022-09-22",
    status: "created",
    id: 1,
  },
  {
    title: "Ruby",
    text: "Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity.Rails is a development tool which gives web developers a framework, providing structure for all the code they write.",
    createdAt: "2019-01-01",
    status: "drafted",
    id: 2,
  },
  {
    title: "Tailwind",
    text: "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework.",
    createdAt: "2019-01-01",
    status: "drafted",
    id: 3,
  },
  {
    title: "Github",
    text: "GitHub, Inc., is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. it quicker to write and maintain the code of your application. By using this utility-first framework.",
    createdAt: "2019-01-01",
    status: "drafted",
    id: 4,
  },
];

export const TAGS = buildSelectOptions([
  "Getting Started",
  "Onboarding",
  "UX",
  "bugs",
]);

export const ROLES = buildSelectOptions(["User", "Admin", "Guest"]);

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES.map(tag => tag.label)),
      value: yup.string().oneOf(ROLES.map(tag => tag.value)),
    })
    .required("Role is required"),
  tags: yup
    .array(
      yup
        .object()
        .nullable()
        .shape({
          label: yup.string().oneOf(TAGS.map(tag => tag.label)),
          value: yup.number().oneOf(TAGS.map(tag => tag.value)),
        })
    )
    .min(1, "Tag is required")
    .required("Tag is required"),
});
