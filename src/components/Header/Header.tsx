import React from 'react';

import './Header.scss';

export const Header = () => {
  const onDownloadButtonClick = () => {
    window.postMessage({
      event: 'downloadImageClicked',
    });
  };

  return (
    <header className="header">
      <div className="freddieAndTitle">
        <img src="freddie.png" className="freddie" />
        <h1 className="title">Map Builder</h1>
      </div>
      <button className="downloadButton" onClick={onDownloadButtonClick}>
        Download Image
      </button>
    </header>
  );
};
