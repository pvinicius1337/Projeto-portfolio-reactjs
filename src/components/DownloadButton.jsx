import React from 'react';
import '../styles/components/sidebar.sass'

const DownloadButton = ({ fileName }) => {
  const handleDownload = () => {
    const pdfUrl = '/Paulo Vinicius Mota - Currículo.pdf'
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <a onClick={handleDownload} className='btn'>Baixar curriculo</a>
  );
};

export default DownloadButton;
