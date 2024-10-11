import PDFDownloadButton from "./DownlodaBtn";

export default function Header() {
	return (
		<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
			<div className="resume-header">
				<h1 className="resume-title">유채형</h1>
				<div className="resume-sub-title">프론트엔드 개발자</div>
			</div>
			<div style={{marginTop: '35px'}}>
				<PDFDownloadButton
					pdfUrl="https://my-job-image-bucket.s3.ap-northeast-2.amazonaws.com/chyoo_resume.pdf"
					fileName="유채형_이력서.pdf"
				/>
			</div>
		</div>
	);
}
