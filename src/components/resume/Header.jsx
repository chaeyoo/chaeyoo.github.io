import PDFDownloadButton from "./DownloadBtn";


export default function Header() {
	return (
		<div className="header-container">
			<div className="resume-header">
				<h1 className="resume-title">유채형</h1>
				<div className="resume-sub-title">프론트엔드 개발자</div>
			</div>
			<div className="resume-btn-container">
				<PDFDownloadButton
					pdfUrl="https://my-job-image-bucket.s3.ap-northeast-2.amazonaws.com/resume_241011.pdf"
					fileName="유채형_이력서.pdf"
				/>
			</div>
		</div>
	);
}
