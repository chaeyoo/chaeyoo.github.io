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
								"프로젝트 문제해결 상세 및 회고, 회사에 끼친 영향, 내가 배운점 "
								웰잇고 고도화 이후 어드민 고도화에 대한 필요를 느꼈고, 웰잇고
								서비스를 관리하는 현업의 요구사항을 조사하여 고도화를
								진행하였습니다. 기존 관리자의 16 버전 리액트를 18 버전으로
								마이그레이션 및 호환되는 라이브러리 업데이트를 수행하여 개발
								생산성과 유지 보수성을 증가시켰습니다. 또한, 월별로 요청이 오는
								"레포트 작성을 위한 raw data 추출 업무 프로세스 개선을 위해
								메뉴를 신설하여 비효율적인 업무를 제거하였습니다. (적극적인
								태도, 자기주도성)
							</p>
							<ul>
								<li>
									웰잇고 고도화에 따른 신기능 추가 요청사항 조사하여 작업 진행
								</li>
								<li>React 16 버전에서 18 버전으로 업그레이드 및 안정화</li>
								<li>레거시 라이브러리 교체 및 컴포넌트 업데이트 </li>
								<li>10개 항목에 대한 엑셀 다운로드 메뉴 신설</li>
								<li>
									AntD 디자인 시스템 버전 업데이트에 따른 UI/컴포넌트 수정
								</li>
							</ul>
							<div className="tech-list">
								{"React, antd, zustand".split(", ").map((v, i) => (
									<div key={i} className="tech-item">
										{v}
									</div>
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
								"프로젝트 문제해결 상세 및 회고, 회사에 끼친 영향, 내가 배운점
								"(문제를 해결해내는 능력)
							</p>
							<ul>
								<li>웰잇고 서비스와 사내 챗봇 연동</li>
								<li>콘텐츠 챗봇 응답 API 개발</li>
								<li>
									특별 미션 관련 API 개발 (당일 미션, 월별 완료 미션 조회 등)
								</li>
								<li>푸시 알림 관련 API 개발 및 스케줄러 작성</li>
							</ul>
							<div className="tech-list">
								{"Java, Spring, Pass, JPA, MyBatis, MySql"
									.split(", ")
									.map((v, i) => (
										<div key={i} className="tech-item">
											{v}
										</div>
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
								"프로젝트 문제해결 상세 및 회고, 회사에 끼친 영향, 내가 배운점 "
								Next.js를 사용하여 협약 맺은 병원에서 고객을 유입시킬 수 있도록
								개인 정보를 받고 웰잇고 사용 접수를 할 수 있는 사이트
								제작하였습니다. 병원마다 URL이 달라져야 하여 Next.js (App
								Router) 방식의 dynamic한 routing 방식을 적극 활용하여
								개발하였습니다. 보안에 신경을 쓴 내용 AWS 인프라 세팅 및 CI/CD
								파이프라인 구성 경험
							</p>
							<ul>
								<li>
									Next.js 기반 설계로 웰잇고 B2H (Business to Hospital) 고객유치
									사이트 개발
								</li>
								<li>
									고객 유치를 위한 개인 정보 저장, 질환별 페르소나 데이터 관리
									로직 개발
								</li>
								<li>반응형 UI 제작</li>
								<li>AWS 인프라 세팅 및 CI/CD 파이프라인 구성</li>
								<li>
									개인 정보와 관련된 부분을 crypto-js로 encode/decode하여 end
									point에서 안전하게 통신할 수 있도록 개발
								</li>
							</ul>
							<div className="tech-list">
								{"Next.js, Recoil, scss, crypto-js, prisma"
									.split(", ")
									.map((v, i) => (
										<div key={i} className="tech-item">
											{v}
										</div>
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
								"프로젝트 문제해결 상세 및 회고, 회사에 끼친 영향, 내가 배운점 "
								사내 챗봇 모델 생성과 배포를 위한 봇빌더 사이트 개발하였습니다.
								프로젝트와 데이터 설계 부터, 프론트엔드 백엔드를 혼자 맡아
								진행하였습니다. 빌더를 사용하여 제작한 챗봇은 "웰잇고"와
								"고개들고" 등 회사의 여러 서비스에서 사용되고 있습니다. 봇빌더
								프로젝트를 성공적으로 개발하고 고도화까지 진행하여 좋은 성과로
								평가받아 조기 진급을 하였습니다. 1 기획자, 1 웹개발자, 1엔진
								개발자 간의 협업이 중요했다.
							</p>
							<ul>
								<li>
									Next.js로 프레임워크 세팅과 레이아웃 구성 및 전체 기능 구현
								</li>
								<li>챗봇 등록, 불러오기, 배포, 수정 등 전체 기능 개발</li>
								<li>텍스트, 이미지, 카드, 옵션플러그인 유형 응답 제작 구현</li>
								<li>배포 프로세스 개선 및 정책 변경사항 지속 반영</li>
								<li>고도화 요건 분석 및 개발</li>
							</ul>
							<div className="tech-list">
								{"Next.js, Recoil, prisma, NextAuth, MySql, antd"
									.split(", ")
									.map((v, i) => (
										<div key={i} className="tech-item">
											{v}
										</div>
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
								"프로젝트 문제해결 상세 및 회고, 회사에 끼친 영향, 내가 배운점 "
								"건강이로움" 백오피스 프로젝트에서 React 프론트엔드와
								Java/Spring 백엔드로 구현하였습니다. 개발하는 속도가 빨라
								프로젝트 인원 중 가장 많은 메뉴를 담당하였습니다.
							</p>
							<ul>
								<li>React 기반 관리자 웹 개발</li>
								<li>
									권한관리, 로그인, 관리자 관리, 공지사항 관리, FAQ 관리, 문의
									관리, 약관 관리 푸시 관리, 이메일 관리, SMS관리, 프로그램 안내
									관리 다수 메뉴 개발
								</li>
								<li>
									기능 추가 및 개선, 테스트, 리팩토링을 통한 서비스 안정화
								</li>
								<li>IP 접근제어, 관리자 이력 저장 등 보안 요구사항 개발</li>
							</ul>
							<div className="tech-list">
								{"React, React-query, scss, antd".split(", ").map((v, i) => (
									<div key={i} className="tech-item">
										{v}
									</div>
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
								"프로젝트 문제해결 상세 및 회고, 회사에 끼친 영향, 내가 배운점 "
								직무 스트레스 검사 결과에 대한 분석을 하여 차트와 표가 포함된
								보고서를 자동으로 생성해주는 사이트입니다. 현업이 엑셀로 직접
								작업하여 차트와 표를 그리고 코멘트를 작성하여 만들던 보고서를
								자동으로 생성하면서 생산성과 업무 효율이 증가하였습니다.
							</p>
							<ul>
								<li>
									React 기반 프론트엔드 개발 및 TypeORM을 활용한 백엔드 개발
								</li>
								<li>로그인 및 인증 기능 구현, 코드 관리 페이지 제작</li>
								<li>HTML Editor, PDF 변환 기술 검토 및 적용</li>
								<li>가공 데이터 9종 보고서 차트/표 바인딩 및 데이터 검토</li>
								<li>코멘트 자동화 시스템 구축</li>
							</ul>
							<div className="tech-list">
								{"React, MUI".split(", ").map((v, i) => (
									<div key={i} className="tech-item">
										{v}
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="experience-item">
						<div className="company-info">
							<h3>
								싱가폴/유럽 법인 유전자 분석 결과 Raw 파일 서버 업로드 분석 및
								결과 발송 프로세스 구축
							</h3>
							<p>마크로젠</p>
							<p>2021.09 ~ 2021.11</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								기존에는 본사에서 싱가폴과 유럽 법인의 결과 파일을 받아 결과
								발송까지 진행하였지만, 관리 체계 분리 필요로 작업을 하였습니다.
								프로세스 구축에 필요한 유전자 분석 기기에 연결된 PC의 폴더
								세팅부터 결과 파일이 생성되고 분석 및 결과 발송 모듈이 실행되는
								서버 구축까지 진행하였습니다.
							</p>
							<ul>
								<li>Team viewer로 원격 접근하여 작업 진행</li>
								<li>서버 모듈 및 폴더 세팅</li>
							</ul>
							<div className="tech-list">
								{"JAVA, Spring, JSP, MyBatis, Javascript, jquery, Ajax, HTML, CSS, Oracle"
									.split(", ")
									.map((v, i) => (
										<div key={i} className="tech-item">
											{v}
										</div>
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
								시스템을 사용하는 현업 부서의 요구사항에 따른 시스템 기능 개발
								및 개선하였습니다.
							</p>
							<ul>
								<li>시스템의 주문-공정-결과 프로세스 관리, 유지 보수</li>
								<li>시스템 관련 문의 사항 확인, 에러 발생 시 지원</li>
								<li>
									서버 자동화 모듈 관리 (결과 보정 프로세스 모듈, 결과 분석
									모듈, 보고서 생성 모듈, 결과 메일 발송 모듈)
								</li>
								<li>
									시스템 기능과 프로세스의 정의와 이력 관리를 위한 산출물 작성
								</li>
							</ul>
							<div className="tech-list">
								{"JAVA, Spring, JSP, MyBatis, Javascript, jquery, Ajax, HTML, CSS, Oracle"
									.split(", ")
									.map((v, i) => (
										<div key={i} className="tech-item">
											{v}
										</div>
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
								유전자 분석 결과 메일의 자동 발송 여부에 대한 내용을 국가별,
								일자/시간별, 계정별로 관리할 수 있는 페이지를 제작하였습니다.
							</p>
							<ul>
								<li>관련 테이블 설계</li>
								<li>Java 모듈 수정</li>
							</ul>
							<div className="tech-list">
								{"JAVA, Spring, JSP, MyBatis, Javascript, jquery, Ajax, HTML, CSS, Oracle"
									.split(", ")
									.map((v, i) => (
										<div key={i} className="tech-item">
											{v}
										</div>
									))}
							</div>
						</div>
					</div>
				</>
			}
		/>
	);
}
