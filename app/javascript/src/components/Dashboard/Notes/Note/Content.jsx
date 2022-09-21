import React from "react";

import { Typography } from "neetoui";

const Content = ({ text }) => (
  <>
    <Typography className="mb-4 text-gray-400" style="body2">
      {text}
    </Typography>
    <hr className="mb-4" />
  </>
);

export default Content;
