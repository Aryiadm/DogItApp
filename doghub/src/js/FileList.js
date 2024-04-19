import React from 'react';
import '../css/FileList.css';  // Assuming you have a separate CSS file for other styles

const FileList = ({ files, onFileRemove, onFileSelect }) => {
  return (
    <div className="file-list">
      {files.map((file, index) => (
        <div key={index} className="file-entry">
          <span className="file-name">{file.name}</span>
          <button 
            className="view-button" 
            onClick={() => onFileSelect(file.url)}
            style={{ fontWeight: 'bold', background: 'green' }}
            >View</button>
          <button
            className="remove-button"
            onClick={() => onFileRemove(index)}
            style={{ fontWeight: 'bold', background: 'red' }}  // Inline styles for bold text and red color
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default FileList;

