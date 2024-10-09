import Section from "../layout/section";

export default function Projects() {
	return (
		<Section
			title="프로젝트"
			nodes={
				<>
					<div className="experience-item">
						<div className="company-info">
							<h3>건강관리 플랫폼 "웰잇고" 어드민 고도화</h3>
							<p>에임메드</p>
							<p>2023.07 ~</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								웰잇고 앱 백엔드 고도화를 하면서 어드민 고도화에 대한 필요성을 느끼게 되어,
								웰잇고 서비스를 운영하는 2개의 팀에 직접 어드민 사이트의 신규 및 개선 요구사항을 조사하여 고도화를 추진하였습니다.
								요구사항은 관리 프로세스가 복잡하다고 생각하는 화면에 대한 개선과 정기적으로 요청하는 데이터 추출과 관련된 업무를
								자동화할 수 있는 방법에 대한 내용이었습니다. 어드민 고도화를 주도하는 입장이다보니
								기획자가 따로 없어 화면 기획을 직접하고 개발을 진행하였습니다. 사용자가 불편함을 느끼는 페이지의 구조와 UI를 변경하였습니다. (이벤트 관리)
								또한, 월별로 통계 레포트 작성을 위해 서비스 운영팀에서 요청했던 raw 데이터를 날짜 조건과 기업 조건으로 손쉽게 추출할 수
								있는 메뉴를 제작하였습니다 (엑셀 다운로드). 이에 따라, 복잡한 내용을 없애고 비효울적인 업무를 제거할 수 있었습니다.
								이에 더해, 기능을 추가 개선하면서 앱의 라이브러리 버전 업그레이드를 하여 개발 생산성과 유지 보수성을 증가시켰습니다.
							</p>
							<ul>
								<li>
									웰잇고 고도화에 따른 신규 및 개선 요구사항 수렴
								</li>
								<li>React 16 버전에서 18 버전으로 업그레이드 및 안정화</li>
								<li>레거시 라이브러리 교체 및 컴포넌트 업데이트 </li>
								<li>복잡한 프로세스의 페이지 구조 및 UI 변경
								</li>
								<li>10개 항목에 대한 엑셀 다운로드 메뉴 신설</li>
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
							<h3>건강관리 플랫폼 "웰잇고" 앱 백엔드 고도화</h3>
							<p>에임메드</p>
							<p>2023.12 ~ 2024.06</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								건강관리 플랫폼 “웰잇고”는 챗봇을 적극적으로 활용한 서비스입니다.
								매일의 특별미션에 제공되는 콘텐츠 챗봇, 건강 등급 산정을 위해 수행하는
								생활습관 문진 챗봇, 건강 상담에 활용되는 AI 상담챗봇, 주마다 건강 지식을 전달하는
								케어메시지 챗봇이 있습니다. 이렇게 다양하게 이용되는 챗봇을 종류별로 웰잇고에 적절하게 연동하기 위한
								방법과 데이터 관리 로직을 설계 하였습니다. 복잡한 내용이었지만 꼼꼼한 설계로 오픈 이후에도 문제없이
								운영되고 있습니다.앱 백엔드를 고도화하면서 앱 프론트는 RN으로 전환개발 되었습니다.
								이에 따라, 푸시에 연결되는 웹앱 URL이 딥링크로 변환되어 이전에 웹앱 URL로 관리하던 부분에 대해 전부 점검하여 변경 및 추가하였습니다.
							</p>
							<ul>
								<li>웰잇고 서비스와 챗봇의 연동/푸시/어드민/배치 관련 내용 총괄
								</li>
								<li>앱 백엔드 고도화 시 추가된 기능에 필요한 데이터 세팅
								</li>
								<li>콘텐츠 챗봇 응답 API 개발</li>
								<li>
									특별 미션 관련 API 개발
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
								에임메드와 협약을 맺은 병원에서의 고객 유입을 위해 개인 정보를 받아 웰잇고에
								가입할 수 있는 프로세스를 구축하는 고객 유치 사이트를 개발하였습니다.
								이 프로젝트는 Next.js의 App Router 방식의 dynamic한 routing 방식을 적극
								활용하여 개발하였습니다. 해당 구조를 반영하여 테이블을 설계하였고, 신규 협약
								병원 URL 추가 요청이 있을 때 신속한 URL 생성이 가능했습니다. 또한,
								이 프로젝트의 경우 동료/선배 개발자 분들에게 조언을 구해 AWS 인프라 세팅과
								CI/CD 파이프라인까지 직접 구성하였습니다.
							</p>
							<ul>
								<li>
									Next.js 기반 설계로 웰잇고 B2H (Business to Hospital) 고객유치 사이트 개발
								</li>
								<li>AWS 인프라 세팅 및 CI/CD 파이프라인 구성</li>
								<li>
									고객 유치를 위한 개인 정보 접수 기능

								</li>
								<li>접수된 데이터의 유효성 체크 후 참여자 테이블로의 마이그레이션 스케줄러 작성
								</li>
								<li>
									개인 정보와 관련된 부분을 crypto-js로 encode/decode하여 end
									point에서 안전하게 통신할 수 있도록 개발
								</li>
								<li>고도화 단계에서 접수 이후 문자로 앱스토어 연결 링크 발송하여 인입 프로세스 개선
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
								사내 챗봇 모델 생성과 배포를 위한 봇빌더 사이트 개발하였습니다.
								프로젝트와 데이터 설계 부터, 프론트엔드 백엔드를 전담하였습니다.
								빌더를 사용하여 제작한 챗봇은 "웰잇고"와 "고개들고" 등 회사의 여러 서비스에서
								사용되고 있습니다. 봇빌더 프로젝트를 성공적으로 개발하고 2차 고도화까지 완료하여
								좋은 성과로 평가받았습니다. 처음으로 주도적으로
								진행한 프로젝트인 만큼 애자일한 방식으로 개발을 하고 싶다는 생각을 하였습니다.
								2주 단위로 피드백 회의를 잡아서 빌더 기획자와 엔진 개발자와 함께 개발된
								사안에 대하여 피드백을 받고 기능이 대한 개선점에 대해 논의하였습니다.
								이러한 방식을 통해 혼자 개발을 하는 환경에서 앞으로 나아가고
								있다는 느낌을 받을 수 있었고, 요구사항을 충족하는 시스템을 만들고 있다는
								생각이 더 좋은 결과물을 만들수 있는 원동력이 되었습니다.

							</p>
							<ul>
								<li>
									Next.js로 프레임워크 세팅과 레이아웃 구성 및 전체 기능 구현
								</li>
								<li>챗봇 등록, 불러오기, 배포, 수정 등 전체 기능 개발</li>
								<li>텍스트, 이미지, 카드 유형 응답 제작 구현</li>
								<li>챗봇 모델의 배포 및 삭제 프로세스 개선 및 정책 변경사항 지속 반영</li>
								<li>1차 고도화 단계에서 바로가기 메뉴, 배너, 옵션 플러그인, 챗봇 프로필 설정 기능 개발</li>
								<li>2차 고도화 단계에서 기존 양식 불러오기, 시나리오/블록 순서 변경, 시나리오/블록 검색 기능 개발
								</li>
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
								"건강이로움" 백오피스 프로젝트에 참여하여 React 프론트엔드와 Java/Spring
								백엔드로 개발하였습니다. 특이사항은 개발 속도가 빨라서 WBS에 표기된
								업무에 할당된 비중이 가장 높았습니다.
							</p>
							<ul>
								<li>React, Spring boot 기반 어드민 사이트 개발</li>
								<li>
									권한관리, 로그인, 관리자 관리, 공지사항 관리, FAQ 관리, 문의 관리, 약관 관리 푸시 관리, 이메일 관리, SMS관리, 프로그램 안내 관리 다수 메뉴 개발

								</li>
								<li>S3 file 업로드, 파일 관리 공통 로직 개발 (Editor 업로드, 일반 파일 업로드)</li>
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
								직무 스트레스 검사 결과에 대한 분석을 하여 차트와 표가 포함된 보고서를
								자동으로 생성해주는 사이트입니다. 서비스 운영자가 엑셀로 직접 작업하여 차트와 표를
								그리고 코멘트를 작성하여 만들던 보고서를 자동으로 생성하면서 생산성과
								업무 효율이 증가하였습니다.
							</p>
							<ul>
								<li>
									React 기반 프론트엔드 개발 및 TypeORM을 활용한 백엔드 개발
								</li>
								<li>로그인 및 인증 기능 구현, 코드 관리 페이지 제작</li>
								<li>HTML Editor, PDF 변환 기술 검토 및 적용</li>
								<li>보고서 화면 제작 및 가공 데이터 9종 보고서 차트/표 바인딩 작업</li>
								<li>고도화 단계에서 결과에 따라 적절한 코멘트 조회하는 코멘트 자동화 기능 개발</li>
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
								기존에 본사에서 싱가폴과 유럽 법인의 결과 파일을 받아 결과
								발송을 했었는데 관리 체계 분리 필요로 작업을 하였습니다.
								프로세스 구축에 필요한 유전자 분석 기기에 연결된 PC의 폴더
								세팅부터 결과 파일이 생성되고 분석 및 결과 발송 모듈이 실행되는
								서버 구축까지 진행하였습니다.
							</p>
							<ul>
								<li>Team viewer로 원격 접속</li>
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
								<li>관련 테이블 설계 및 개발</li>
								<li>자동 결과 발송 Java 모듈 중 자동 발송 조건 판단 로직 추가</li>
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
