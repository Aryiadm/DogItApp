
import React, { useState } from 'react';
import FileUpload from './FileUpload';
import FileList from './FileList';
import '../css/Records.css';

const Records = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileUpload = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // Converts the file to a data URL
    fileReader.onload = (event) => {
      const url = event.target.result;
      setUploadedFiles([...uploadedFiles, { file, url, name: file.name }]);
      setPreviewUrl(url); // Automatically preview uploaded file
    };
  };

  const handleFileRemove = (index) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
    if (uploadedFiles[index].url === previewUrl) {
      setPreviewUrl(''); // Clear the preview if the currently previewed file is removed
    }
  };

  const handleSelectFile = (url) => {
    setPreviewUrl(url); // Set the URL for preview when a file is selected
  };

  return (
    <div>
      <div className="record-container">
        <div className="record-list">
          <h2>Uploaded Medical Records</h2>
          <FileUpload onFileUpload={handleFileUpload} />
          
          <FileList 
            files={uploadedFiles} 
            onFileRemove={handleFileRemove} 
            onFileSelect={handleSelectFile} 
          />
        </div>
        <div className="record-display">
          {previewUrl && (
            <iframe 
              src={previewUrl} 
              style={{ width: '100%', height: '800px' }} 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default Records;

