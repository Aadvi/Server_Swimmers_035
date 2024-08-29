import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsblocksbasic from "grapesjs-blocks-basic";
import { useParams } from "react-router-dom";
import plugin from "grapesjs-navbar";
import gjsForms from "grapesjs-plugin-forms";
import "./styles/main.scss";

const Editor = () => {
  const [editor, setEditor] = useState(null);

  const { pageId } = useParams();
  console.log("page :>> ", pageId);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsPresetWebpage, gjsblocksbasic, plugin, gjsForms],

      pluginsOpts: {
        gjsPresetWebpage: {},
        gjsblocksbasic: {},
        plugin: {},
        gjsForms: {},
      },
    });
    setEditor(editor);
  }, []);
  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
};

export default Editor;
