import React from "react";
import "../pages/OracleDecks.css";

const DownloadLink = ({ filePath }) => {
  const handleDownload = (event) => {
    event.preventDefault();

    const url = filePath;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "FreeGuide.png"); // Set the download attribute without a value
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <a className="explanation-font" href={filePath} onClick={handleDownload}>
        Click here for a FREE guide to making your own oracle cards.
      </a>
    </div>
  );
};

export default DownloadLink;
