import React from 'react';
import '../css/FileUpload.css';

const FileUpload = ({ onFileUpload }) => {

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="file-upload-form">
      <input type="file" id="file-upload" onChange={handleFileChange} hidden />
      <label htmlFor="file-upload" className="custom-file-upload">Upload</label>
    </div>
  );
};

export default FileUpload;

