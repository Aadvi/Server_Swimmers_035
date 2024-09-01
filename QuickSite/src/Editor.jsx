import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsblocksbasic from "grapesjs-blocks-basic";
import { useParams } from "react-router-dom";
import plugin from "grapesjs-navbar";
import gjsForms from "grapesjs-plugin-forms";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles/main.scss";

const Editor = () => {
  const [editor, setEditor] = useState(null);
  const { id: pageId } = useParams(); // Use 'id' to extract the parameter
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const editorInstance = grapesjs.init({
      container: "#editor",
      plugins: [gjsPresetWebpage, gjsblocksbasic, plugin, gjsForms],
      pluginsOpts: {
        gjsPresetWebpage: {},
        gjsblocksbasic: {},
        plugin: {},
        gjsForms: {},
      },
    });
    setEditor(editorInstance);

    if (pageId) {
      const loadPageData = async () => {
        const controller = new AbortController();
        try {
          const response = await axios.get(
            `http://localhost:5001/api/pages/${pageId}`,
            { signal: controller.signal }
          );
          const pageData = response.data;
          editorInstance.setComponents(pageData.content);
          editorInstance.setStyle(pageData.styles);
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error.message);
          } else {
            console.error("Error loading page data:", error);
            alert("Error loading page data");
          }
        }
        return () => {
          controller.abort(); // Clean up the request
        };
      };

      loadPageData();
    }

    return () => {
      if (editorInstance) {
        editorInstance.destroy();
      }
    };
  }, [pageId]);

  const savePageData = async () => {
    if (editor && user) {
      const components = editor.getComponents();
      const styles = editor.getStyle();
      try {
        const token = await getAccessTokenSilently({
          audience: "https://dev-u4z3nk186scfupkh.us.auth0.com/api/v2/",
        });
        await axios.post(
          "http://localhost:5001/api/pages",
          {
            pageId,
            userId: user.sub,
            content: components,
            styles,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert("Page saved successfully");
      } catch (error) {
        console.error("Error saving page data:", error);
        alert("Error saving page data");
      }
    }
  };

  return (
    <div className="App">
      <div id="editor"></div>
      <button onClick={savePageData}>Save</button>
    </div>
  );
};

export default Editor;
