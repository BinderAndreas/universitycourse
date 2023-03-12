import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";



function PDFViewer({ storageUrl }) {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    if (!storageUrl) return;

    const storageRef = firebase.storage().refFromURL(storageUrl);
    storageRef
      .getDownloadURL()
      .then((url) => setPdfUrl(url))
      .catch((err) => console.error(err));
  }, [storageUrl]);

  if (!pdfUrl) return null;

  return (
    <div>
      <iframe src={pdfUrl} width="100%" height="500px"></iframe>
    </div>
  );
}

export default PDFViewer;
