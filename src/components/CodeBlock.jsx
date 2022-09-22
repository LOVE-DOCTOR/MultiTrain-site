import React from "react";
import { useTheme } from "@mui/material/styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  anOldHope,
  stackoverflowLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
const CodeBlock = ({ code }) => {
  const theme = useTheme();
  const style = React.useMemo(
    () => (theme.palette.mode === "dark" ? anOldHope : stackoverflowLight),
    [theme]
  );
  return (
    <SyntaxHighlighter language="python" style={style}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
