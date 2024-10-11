import React from 'react';
import { Download } from 'lucide-react';

const PDFDownloadButton = ({ pdfUrl, fileName }) => {

    const handleDownload = async () => {
        try {
            const response = await fetch(pdfUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName || 'resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('PDF 다운로드 중 오류 발생:', error);
            alert('PDF 다운로드에 실패했습니다. 다시 시도해 주세요.');
        }
    };

    return (
        <button onClick={handleDownload} className="resume-download-btn">
            <Download size={20} />
            <span>이력서 PDF 다운로드</span>
        </button>
    );
};

export default PDFDownloadButton;