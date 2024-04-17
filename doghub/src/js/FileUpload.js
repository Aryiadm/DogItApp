import React, { useState } from 'react';

const FileUpload = ({ onFileUpload }) => {
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (selectedFile) {
        onFileUpload(selectedFile);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    );
  };

export default FileUpload;
