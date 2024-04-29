import React from 'react';
import '../css/FileUpload.css'; // Your custom CSS file for styling

const FileUpload = ({ onFileUpload }) => {

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file); // Call the onFileUpload function as soon as the file is selected
    }
  };

  return (
    <div className="file-upload-form">
      <input type="file" id="file-upload" onChange={handleFileChange} hidden />
      <label htmlFor="file-upload" className="custom-file-upload">Choose File</label>
    </div>
  );
};

export default FileUpload;

