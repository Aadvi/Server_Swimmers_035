import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsblocksbasic from "grapesjs-blocks-basic";
import "./styles/main.scss";
import grapesjsblocksbootstrap from "grapesjs-blocks-bootstrap4";

function App() {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsPresetWebpage, gjsblocksbasic],

      pluginsOpts: {
        gjsPresetWebpage: {},
        gjsblocksbasic: {},
      },
    });
    setEditor(editor);
  }, []);

  return (
    <div>
      <h1>Website Builder</h1>
      <div id="editor"></div>
    </div>
  );
}

export default App;
