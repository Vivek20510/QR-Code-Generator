import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
// This import can be removed since we're using index.css

const QRCodeGenerator = () => {
    const [inputValue, setInputValue] = useState('');
    const [qrSize, setQrSize] = useState(128);
    const [errorCorrectionLevel, setErrorCorrectionLevel] = useState('L');
    const [foregroundColor, setForegroundColor] = useState('#000000');
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const [downloadFormat, setDownloadFormat] = useState('png');
    const [downloadLink, setDownloadLink] = useState('');
    const [history, setHistory] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSizeChange = (e) => {
        setQrSize(Number(e.target.value));
    };

    const handleErrorCorrectionChange = (e) => {
        setErrorCorrectionLevel(e.target.value);
    };

    const handleForegroundChange = (e) => {
        setForegroundColor(e.target.value);
    };

    const handleBackgroundChange = (e) => {
        setBackgroundColor(e.target.value);
    };

    const handleFormatChange = (e) => {
        setDownloadFormat(e.target.value);
    };

    const handleDownload = () => {
        const canvas = document.getElementById('qrcode');
        const imageUrl = canvas.toDataURL(`image/${downloadFormat}`);
        setDownloadLink(imageUrl);

        // Add the current QR code to history
        const newHistoryItem = {
            value: inputValue,
            image: imageUrl,
        };
        setHistory([...history, newHistoryItem]);
    };

    return (
        <div className="qr-code-container">
            <h1>QR Code Generator</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter text or URL"
            />
            <div>
                <label>QR Code Size: </label>
                <select onChange={handleSizeChange} value={qrSize}>
                    <option value={128}>128x128</option>
                    <option value={256}>256x256</option>
                    <option value={512}>512x512</option>
                </select>
            </div>
            <div>
                <label>Error Correction Level: </label>
                <select onChange={handleErrorCorrectionChange} value={errorCorrectionLevel}>
                    <option value="L">L (Low)</option>
                    <option value="M">M (Medium)</option>
                    <option value="Q">Q (Quartile)</option>
                    <option value="H">H (High)</option>
                </select>
            </div>
            <div>
                <label>Foreground Color: </label>
                <input type="color" value={foregroundColor} onChange={handleForegroundChange} />
            </div>
            <div>
                <label>Background Color: </label>
                <input type="color" value={backgroundColor} onChange={handleBackgroundChange} />
            </div>
            <div>
                <label>Download Format: </label>
                <select onChange={handleFormatChange} value={downloadFormat}>
                    <option value="png">PNG</option>
                    <option value="jpeg">JPEG</option>
                </select>
            </div>
            <div className="qr-code-display">
                <QRCodeCanvas
                    id="qrcode"
                    value={inputValue}
                    size={qrSize}
                    level={errorCorrectionLevel}
                    fgColor={foregroundColor}
                    bgColor={backgroundColor}
                />
            </div>
            <button onClick={handleDownload} type="button">
                Download QR Code
            </button>
            {downloadLink && (
                <a href={downloadLink} download={`qrcode.${downloadFormat}`}>
                    <button type="button">Download Link</button>
                </a>
            )}
            <h2>History of QR Codes</h2>
            <div className="history">
                {history.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={`QR Code for ${item.value}`} />
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QRCodeGenerator;
