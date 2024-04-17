import React, { useState } from 'react';
import FileUpload from './FileUpload';
import FileList from './FileList';
import '../css/Records.css';

const Records = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (file) => {
    setUploadedFiles([...uploadedFiles, file]);
  };

  const handleFileRemove = (index) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  return (
    <div>
      <div className="record-container">
        <div className="record-list">
          <FileUpload onFileUpload={handleFileUpload} />
          <h2>Uploaded Medical Records</h2>
          <FileList files={uploadedFiles} onFileRemove={handleFileRemove} />
        </div>
        <div className="record-display">
          {/* Any additional display or functionality can be added here */}
        </div>
      </div>
    </div>
  );
};

export default Records;
