import Section from "../layout/section";

export default function Experience() {
	return (
		<Section
			title="경력"
			nodes={
				<>
					<div className="experience-item">
						<div className="company-info">
							<h3>에임메드</h3>
							<a href="https://www.aimmed.co.kr/">https://www.aimmed.co.kr/</a>
							<p>주임연구원</p>
							<p>2022.03 ~ 현재</p>
						</div>
						<div className="job-description">
							<p className="highlight">280개 기업이 사용하는 헬스케어 서비스</p>
							<ul>
								<li>직무스트레스 보고서 자동화 시스템 프론트엔드 개발</li>
								<li>사내 챗봇 봇빌더 사이트 개발</li>
								<li>
									SK 하이닉스 향 건강 관리 서비스 <strong>"건강이로움"</strong>{" "}
									어드민 프론트엔드 개발
								</li>
								<li>
									에임메드 건강관리 서비스 <strong>"웰잇고" </strong>백엔드 및
									어드민 고도화
								</li>
								<li>고객 유치 사이트 개발</li>
							</ul>
						</div>
					</div>
					<div className="experience-item">
						<div className="company-info">
							<h3>마크로젠</h3>
							<a href="https://www.macrogen.com/ko/main/">
								https://www.macrogen.com/
							</a>
							<p>Java & Spring 풀스택 개발자</p>
							<p>2021.03 ~ 2021.11</p>
						</div>
						<div className="job-description">
							<p className="highlight">국내 유전체 분석 시장점유율 1위 기업</p>
							<ul>
								<li>실험실 정보 관리 시스템 운영</li>
								<li>유전자 분석 결과 발송 시스템 자동화 모듈 개발</li>
								<li>싱가폴 법인 유전자 분석 - 결과 프로세스 구축 </li>
							</ul>
						</div>
					</div>
				</>
			}
		/>
	);
}
