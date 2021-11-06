import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import doc from "./2021-11-05-Student,Example.pdf"

pdfjs.GlobalWorkerOptions.workerSrc =  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ViewPDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div style={{ boxShadow: "0 0px 1.2vh black", display: "flex", flexDirection: "column", alignItems: "center", height: "75vh", overflowY: "scroll" }}>
      <Document
        file={doc}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        { Array.from({ length: numPages }, (value, key) => {
          if(key + 1 < numPages) {
            return [
              <Page pageNumber={key + 1} />,
              <div style={{ height: "0.2vh", backgroundColor: "#999999" }}></div>
            ]
          } else {
            return <Page pageNumber={key + 1} />
          }
        }) }
      </Document>
      {/* <div onClick={e => setPageNumber(pageNumber + 1)}>Page {pageNumber} of {numPages}</div> */}
    </div>
  );
}

export default ViewPDF;