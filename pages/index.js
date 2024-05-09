import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";

import GrapesJS from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import "grapesjs/dist/css/grapes.min.css";

import { TemplateDisplay } from "./components/TemplateDisplay";

export default function Index() {
  const [htmlString, setHtmlString] = useState(null);
  const [cssString, setCssString] = useState("");
  const [pluginLoaded, setPluginLoaded] = useState(false);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    console.log({ htmlString, cssString });
  });

  useEffect(() => {
    if (!pluginLoaded) {
      // Pass the state setters to the timer plugin, so that each time the bell is pressed these gets called
      // and the TemplateDisplay gets updated withthe new values
      setPluginLoaded(true);
    } else if (!editor) {
      const e = GrapesJS.init({
        container: `#example-editor`,
        fromElement: true,
        plugins: [gjsPresetWebpage]
      });
      console.log({ GrapesJS });
      setEditor(e);
    }
  });

  return (
    <>
      <Container>
        <div id="example-editor" />
        <TemplateDisplay jsxString={htmlString} cssString={cssString} />
      </Container>
    </>
  );
}
