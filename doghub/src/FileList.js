import React from 'react';

const FileList = ({ files, onFileRemove }) => {
    return (
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name}
            <button onClick={() => onFileRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default FileList;