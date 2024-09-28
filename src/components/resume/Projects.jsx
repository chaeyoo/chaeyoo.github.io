import Section from "../layout/section";

export default function Projects() {
	return (
		<Section
			title="프로젝트"
			nodes={

				<>
					<div className="experience-item">
						<div className="company-info">
							<h3>건강관리 서비스 "웰잇고" 어드민 고도화</h3>
							<p>에임메드</p>
							<p>2023.07 ~</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								웰잇고 고도화 이후 어드민 고도화에 대한 필요를 느꼈고, 요구사항을 조사하여 고도화를 진행하였습니다.
								기존 관리자의 16 버전 리액트를 18 버전으로 마이그레이션 및 호환되는 라이브러리 업데이트를 수행하여
								개발 생산성과 유지 보수성을 증가시켰습니다. 또한, 월별로 요청이 오는 "레포트 작성을 위한 raw data 추출 업무
								프로세스 개선을 위해 메뉴를 신설하여 비효율적인 업무를 제거하였습니다.
							</p>
							<ul>
								<li>10개 항목에 대한 엑셀 다운로드 메뉴 신설</li>
								<li>프론트엔드 기술 버전 업그레이드 및 상태관리 라이브러리 교체, UI 수정</li>
							</ul>
							<div className="tech-list">
								{"React, antd, zustand".split(", ").map((v, i) => (
									<div key={i} className="tech-item">{v}</div>
								))}
							</div>
						</div>
					</div>
					<div className="experience-item">
						<div className="company-info">
							<h3>건강관리 서비스 "웰잇고" 앱 백엔드 고도화</h3>
							<p>에임메드</p>
							<p>2023.12 ~ 2024.06</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								웰잇고에서 제공하는 건강 관련 데일리 특별 미션과 주마다 건강 정보를
								제공하는 케어 메시지를 사내 챗봇과 연동하여 다양한 서비스를 제공할 수 있도록 함
								생활습관 문진에 대한 API 작성
								또한, 앱 고도화와 관련된 내용만 기획으로 제공되어, 자체적으로 어드민에서 고도화되어야 할
								부분들을 찾아 작업 진행
							</p>
							<ul>
								<li>사내 챗봇 연동을 위해 프로세스 설계</li>
								<li>인스턴스 메시지 배치 개발</li>
								<li>앱이 React에서 React Native로 변경됨에 따라 푸시 프로세스 변경</li>
								<li>어드민 리액트 버전을 16에서 18로 마이그레이션 및 호환 라이브러리 업데이트</li>
							</ul>
							<div className="tech-list">
								{"Java, Spring, Pass, JPA, MyBatis, MySql".split(", ").map((v, i) => (
									<div key={i} className="tech-item">{v}</div>
								))}
							</div>
						</div>
					</div>
					<div className="experience-item">
						<div className="company-info">
							<h3>웰잇고 고객 유치 사이트 개발</h3>
							<p>에임메드</p>
							<p>2023.11 ~ 2023.12</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								Next.js를 사용하여 협약 맺은 병원에서 고객을 유입시킬 수 있도록,
								개인 정보를 받고 웰잇고 사용 접수를 할 수 있는 사이트 제작. 병원마다 URL이 달라져야 하여
								Next.js (App Router) 방식의 dynamic한 routing 방식을 적극 활용함
							</p>
							<ul>
								<li>Next.js App Router로 설계 및 전체 개발</li>
								<li>반응형 UI를 고려하여 제작</li>
								<li>개인 정보와 관련된 부분을 crypto-js로 encode/decode하여 end point에서 안전하게
									통신할 수 있도록 개발
								</li>
							</ul>
							<div className="tech-list">
								{"Next.js (App router), Recoil, scss, crypto-js, prisma".split(", ").map((v, i) => (
									<div key={i} className="tech-item">{v}</div>
								))}
							</div>
						</div>
					</div>
					<div className="experience-item">
						<div className="company-info">
							<h3>챗봇 봇빌더 개발 및 고도화</h3>
							<p>에임메드</p>
							<p>2023.02 ~ 2023.10</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								사내 챗봇 모델 생성과 배포를 위한 봇빌더 사이트 개발하였습니다.
								프로젝트와 데이터 설계 부터, 프론트엔드 백엔드를 혼자 맡아 진행하였습니다.
								빌더를 사용하여 제작한 챗봇은 "웰잇고"와 "고개들고" 등 회사의 여러 서비스에서 사용되고 있습니다.
								봇빌더 프로젝트를 성공적으로 개발하고 고도화까지 진행하여 좋은 성과로 평가받아 조기 진급을 하였습니다.
							</p>
							<ul>
								<li>Next.js로 기술 환경 세팅 및 전체 기능 구현</li>
								<li>복잡한 계층 구조의 데이터 구조 설계</li>
								<li>텍스트, 이미지, 카드, 옵션플러그인 제작 기능 구현</li>
							</ul>
							<div className="tech-list">
								{"Next.js (Page router), Recoil, prisma, NextAuth, MySql, antd".split(", ").map((v, i) => (
									<div key={i} className="tech-item">{v}</div>
								))}
							</div>
						</div>
					</div>
					<div className="experience-item">
						<div className="company-info">
							<h3>SK하이닉스향 건강관리 서비스 "건강이로움" 백오피스 개발</h3>
							<p>에임메드</p>
							<p>2022.11 ~ 2023.02</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								"건강이로움" 백오피스 프로젝트에서 리액트 프론트엔드와 자바 스프링 백엔드로 기능 구현
							</p>
							<ul>
								<li>권한관리, 로그인 등 다양한 기능 개발</li>
								<li>프론트엔드 개발 시 공통 컴포넌트 제작하여 개발 생산성 향상</li>
								<li>빠른 개발속도로 wbs 일정 사전 완료 및 테스트에 시간 할애</li>
							</ul>
							<div className="tech-list">
								{"React, React-query, scss, antd".split(", ").map((v, i) => (
									<div key={i} className="tech-item">{v}</div>
								))}
							</div>
						</div>
					</div>
					<div className="experience-item">
						<div className="company-info">
							<h3>직무스트레스 보고서 사이트 개발 및 고도화</h3>
							<p>에임메드</p>
							<p>2022.04 ~ 2022.10</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								직무 스트레스 검사 결과에 대한 분석을 하여 차트와 표가 포함된 보고서를 자동으로 생성해주는 사이트
							</p>
							<ul>
								<li>React를 사용하여 프론트엔드 개발</li>
								<li>직무스트레스 성별 및 요인별 결과, 직무스트레스 검사 문항별 분석 등 9가지 항목에 대한
									차트, 표, 코멘트를 자동으로 생성하고 PDF 파일로 저장하는 기능 구현</li>
							</ul>
							<div className="tech-list">
								{"React, MUI".split(", ").map((v, i) => (
									<div key={i} className="tech-item">{v}</div>
								))}
							</div>
						</div>
					</div>

					<div className="experience-item">
						<div className="company-info">
							<h3>싱가폴, 유럽 법인 유전자 분석 결과 Raw 파일 서버 업로드 분석 및 결과 발송 프로세스 구축</h3>
							<p>마크로젠</p>
							<p>2021.09 ~ 2021.11</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								기존에는 본사에서 싱가폴과 유럽 법인의 결과 파일을 받아 결과 발송까지 진행하였지만, 관리 체계 분리 필요로 작업 진행
							</p>
							<ul>
								<li>Team viewer로 원격 접근하여 작업 진행</li>
								<li>서버 모듈 및 폴더 세팅</li>
							</ul>
							<div className="tech-list">
								{"JAVA, Spring, JSP, MyBatis, Javascript, jquery, Ajax, HTML, CSS, Oracle".split(", ").map((v, i) => (
									<div key={i} className="tech-item">{v}</div>
								))}
							</div>
						</div>
					</div>
					<div className="experience-item">
						<div className="company-info">
							<h3>실험실 정보관리 시스템 CES 서비스 운영 메인 담당</h3>
							<p>마크로젠</p>
							<p>2021.06 ~ 2021.08</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								시스템을 사용하는 현업 부서의 요구사항에 따른 시스템 기능 개발, 테스트, 반영
							</p>
							<ul>
								<li>시스템의 주문-공정-결과 프로세스 관리, 유지 보수</li>
								<li>시스템 관련 문의 사항 확인, 에러 발생 시 지원</li>
								<li>서버 자동화 모듈 관리 (결과 보정 프로세스 모듈, 결과 분석 모듈, 보고서 생성 모듈, 결과 메일 발송 모듈)</li>
								<li>시스템 기능과 프로세스의 정의와 이력 관리를 위한 산출물 작성</li>
							</ul>
							<div className="tech-list">
								{"JAVA, Spring, JSP, MyBatis, Javascript, jquery, Ajax, HTML, CSS, Oracle".split(", ").map((v, i) => (
									<div key={i} className="tech-item">{v}</div>
								))}
							</div>
						</div>
					</div>
					<div className="experience-item">
						<div className="company-info">
							<h3>실험실 정보관리 시스템 자동결과발송 관리 페이지 신설</h3>
							<p>마크로젠</p>
							<p>2021.04 ~ 2021.05</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								유전자 분석 결과 메일의 자동 발송 여부에 대한 내용을 국가별, 일자/시간별, 계정별로 관리할 수 있는 페이지를 제작하였습니다.
							</p>
							<ul>
								<li>관련 테이블 설계</li>
								<li>Java 모듈 수정</li>
							</ul>
							<div className="tech-list">
								{"JAVA, Spring, JSP, MyBatis, Javascript, jquery, Ajax, HTML, CSS, Oracle".split(", ").map((v, i) => (
									<div key={i} className="tech-item">{v}</div>
								))}
							</div>
						</div>
					</div>
				</>
			}
		/>
	);
}
