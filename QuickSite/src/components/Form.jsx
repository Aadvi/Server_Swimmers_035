import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Form = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [name, setName] = useState("");
  const [content, setContent] = useState(""); // New state for page content
  const [isValid, setIsValid] = useState(true);
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch pages on component mount
  useEffect(() => {
    const fetchPages = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await axios.get("http://localhost:5001/api/pages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPages(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error("Error fetching pages:", err);
        setError("Failed to fetch pages");
        setPages([]); // Ensure pages is set to an array
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, [getAccessTokenSilently]);

  const handleSubmit = async () => {
    if (!name || !content) {
      setIsValid(false);
      return;
    }

    try {
      setIsValid(true); // Reset validation state on successful submission
      const token = await getAccessTokenSilently();
      const response = await axios.post(
        "http://localhost:5001/api/pages",
        {
          name,
          slug: name.toLowerCase().replace(/ /g, "-"),
          content, // Use the new content state
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        setPages((prevPages) => [...prevPages, response.data]);
        setName(""); // Clear input field after successful submission
        setContent(""); // Clear content field after successful submission
      }
    } catch (error) {
      console.error("Error saving page:", error);
      setError("Error saving page");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <form id="create-page">
            <div className="modal-header">
              <h5 className="modal-title" id="addPageModalLabel">
                Create Page
              </h5>
            </div>
            <div className="modal-body">
              <div className="col-auto mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control form-control-sm ${
                    isValid ? "" : "is-invalid"
                  }`}
                  id="name"
                  name="name"
                  placeholder="Name of Page"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="invalid-feedback">
                  Please provide a valid name.
                </div>
              </div>
              <div className="col-auto mb-3">
                <label htmlFor="content" className="form-label">
                  Content
                </label>
                <textarea
                  className={`form-control form-control-sm ${
                    isValid ? "" : "is-invalid"
                  }`}
                  id="content"
                  name="content"
                  placeholder="Content of the Page"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <div className="invalid-feedback">
                  Please provide valid content.
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setName("");
                  setContent(""); // Clear content when clicking Clear
                }}
              >
                Clear
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 my-2">
          {loading ? (
            <p>Loading pages...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(pages) && pages.length > 0 ? (
                  pages.map((page) => (
                    <tr key={page._id}>
                      <td>{page._id}</td>
                      <td>{page.name}</td>
                      <td>{page.slug}</td>
                      <td>
                        <a href={`/editor/${page._id}`}>Edit</a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No Pages</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
