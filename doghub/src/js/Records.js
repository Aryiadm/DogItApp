import React, { useState } from 'react';
import FileUpload from './FileUpload';
import FileList from './FileList';
import '../css/Records.css';

const Records = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileUpload = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); 
    fileReader.onload = (event) => {
      const url = event.target.result;
      setUploadedFiles([...uploadedFiles, { file, url, name: file.name }]);
      setPreviewUrl(url); 
    };
  };

  const handleFileRemove = (index) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
    if (uploadedFiles[index].url === previewUrl) {
      setPreviewUrl(''); 
    }
  };

  const handleSelectFile = (url) => {
    setPreviewUrl(url);
  };

  return (
    <div>
      <div className="record-container">
        <div className="record-list">
          <h1>Medical Records</h1>
          <FileUpload onFileUpload={handleFileUpload} />
          
          <FileList 
            files={uploadedFiles} 
            onFileRemove={handleFileRemove} 
            onFileSelect={handleSelectFile} 
          />
        </div>
        <div className="record-display">
          {previewUrl ? (
            <iframe 
              src={previewUrl} 
              style={{ width: '100%', height: '700px' }} 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          ) : (
            <img 
              src={`${process.env.PUBLIC_URL}/img/File.svg`}
              alt="File Icon" 
              style={{ maxWidth: '100%', maxHeight: '100%'}} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Records;


