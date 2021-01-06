import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadImages from "./components/images-upload.component";

function App() {
  return (
    <div className="container">
      <h3>bezkoder.com</h3>
      <h4>React Multiple Images Upload with Preview</h4>

      <div className="content">
        <UploadImages />
      </div>
    </div>
  );
}

export default App;
