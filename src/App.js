import "./App.css";

import { useState } from "react";

import QRcode from "react-qr-code";
import QRcodeLink from "qrcode";

function App() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState("");

  function handleGenerate(link_url) {
    QRcodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 3,
      },
      function (err, url) {
        setQrcodeLink(url);
      }
    );
  }

  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className="container">
      <h1>Gerador de Qrcode</h1>

      <QRcode value={link} />

      <input
        placeholder="Digite seu link"
        className="input"
        value={link}
        onChange={(e) => handleQrcode(e)}
      />

      <a href={qrcodeLink} download={`qrcode.png`}>
        Baixar QrCode
      </a>
    </div>
  );
}

export default App;
