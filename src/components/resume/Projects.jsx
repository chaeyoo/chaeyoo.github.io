import Section from "../layout/section";

export default function Projects() {
	return (
		<Section
			title="프로젝트"
			nodes={
				<>
					<div className="experience-item">
						<div className="company-info">
							<h3>챗봇 봇빌더</h3>
							<p>에임메드</p>
							<p>2023.04 ~ 2023.10</p>
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
								{"Next.js, Recoil, prisma, NextAuth, MySql, antd".split(", ").map((v, i) => (
									<div key={i} className="tech-item">{v}</div>
								))}
							</div>
						</div>
					</div>
					<div className="experience-item">
						<div className="company-info">
							<h3>SK하이닉스향 건강관리 서비스 "건강이로움" 백오피스</h3>
							<p>에임메드</p>
							<p>2022.11 ~ 2023.04</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								"건강이로움" 백오피스 프로젝트에서 리액트 프론트엔드와 자바 스프링 백엔드로 기능 구현
							</p>
							<ul>
								<li>Next.js로 기술 환경 세팅 및 전체 기능 구현</li>
								<li>복잡한 계층 구조의 데이터 구조 설계</li>
								<li>텍스트, 이미지, 카드, 옵션플러그인 제작 기능 구현</li>
							</ul>
							<div className="tech-list">
								{"Next.js, Recoil, prisma, NextAuth, MySql, antd".split(", ").map((v, i) => (
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
