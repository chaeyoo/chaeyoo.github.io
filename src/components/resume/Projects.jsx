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

							<p>담당파트</p>
							<p>2022.03 ~ 현재</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								사내 챗봇 봇빌더 사이트 설계와 풀스택 개발
							</p>
							<ul>
								<li>작업1</li>
								<li>작업1</li>
								<li>작업1</li>
								<li>작업1</li>
							</ul>
						</div>
					</div>
					<div className="experience-item">
						<div className="company-info">
							<h3>챗봇 봇빌더</h3>

							<p>담당파트</p>
							<p>2022.03 ~ 현재</p>
						</div>
						<div className="job-description">
							<p className="highlight">
								사내 챗봇 봇빌더 사이트 설계와 풀스택 개발
							</p>
							<ul>
								<li>작업1</li>
								<li>작업1</li>
								<li>작업1</li>
								<li>작업1</li>
							</ul>
						</div>
					</div>
				</>
			}
		/>
	);
}
