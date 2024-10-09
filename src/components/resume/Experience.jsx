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
							<p className="highlight">
								280개 기업에 B2B 헬스 케어 서비스 제공
							</p>
							<a href="https://www.aimmed.co.kr/">https://www.aimmed.co.kr/</a>
							<p>대리</p>
							<p>2022.03 ~ 현재</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								에임메드는 B2B 대상 임직원 건강 관리 서비스, 시니어, 멘탈 케어
								분야에서 정말 다양한 서비스를 제공하고 있습니다. 서비스의 개수가
								많아 한 명의 개발자가 여러 개의 서비스를 담당해야 합니다.
								프론트엔드, 백엔드, 인프라 관련된 업무까지 진행을 하고 있습니다.
								개발이 끝난 프로젝트는 누적으로 운영을 하게 됩니다. 새
								프로젝트를 진행할 때에는 최신 기술을 사용하여 개발하는 것을
								추구하고 있습니다. 새로운 내용에 대한 학습과 프로젝트와 운영을
								동시에 해야 하는 상황에서는 빠르고 정확하게 개발을 하는 것이
								중요합니다. 에임메드에서 개발과 운영을 하면서 큰 이슈없이 업무를
								하였고, 챗봇 봇빌더 프로젝트 부터는 설계부터 개발까지
								전담하였습니다. 팀에서는 최신 기술로 프로젝트를 진행하고 발표하여
								팀 개발 문화 발전에 기여하였습니다.
							</p>
							<ul>
								<li>
									건강관리 플랫폼 <strong>"웰잇고" </strong>백엔드
									고도화 및 어드민 고도화
								</li>
								<li>B2H (Buisiness to Hospital) 고객 유치 사이트 개발</li>

								<li>사내 챗봇 봇빌더 사이트 개발</li>
								<li>
									SK 하이닉스 향 건강 관리 서비스 <strong>"건강이로움"</strong>
									어드민 프론트엔드 개발
								</li>
								<li>직무스트레스 보고서 자동화 시스템 프론트엔드 개발</li>
							</ul>
						</div>
					</div>
					<div className="experience-item">
						<div className="company-info">
							<h3>마크로젠</h3>
							<p className="highlight">국내 유전체 분석 시장점유율 1위 기업</p>
							<a href="https://www.macrogen.com/ko/main/">
								https://www.macrogen.com/
							</a>
							<p>Java & Spring 풀스택 개발자</p>
							<p>2021.03 ~ 2021.11</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								개발자는 끊임없이 공부하고 기술을 연습해야 합니다. 저는 어린
								시절부터 공부하는 것을 좋아하고 새로운 내용을 알아가는 것을
								좋아했습니다. 공부를 하고 좋은 성과를 내는 것에 희열을 느껴
								우수한 학점을 받을 수 있었습니다. 이는 개발을 배우고 실무에서
								일할 때도 적용이 되었습니다. 입사 후 회사의 서비스와 시스템의
								로직에 대해 인수인계를 받으면서 사수로부터 지금까지 본 사람 중에
								가장 열심히 하고 잘한다는 평가를 받았습니다. 빠른 습득력과
								적응력으로 입사 4개월 만에 회사의 메인 서비스의 메인 운영
								담당자를 맡았고, 현업 부서들과 소통하여 시스템 개선을 위해
								이바지하였습니다.
							</p>
							<ul>
								<li>실험실 정보 관리 시스템 운영 및 개선 작업</li>
								<li>
									유전자 분석 결과 자동 발송 관리 페이지 개발 및 모듈 개선
								</li>
								<li>싱가폴/유럽 법인 유전자 분석 - 결과 프로세스 구축 </li>
							</ul>
						</div>
					</div>
				</>
			}
		/>
	);
}
