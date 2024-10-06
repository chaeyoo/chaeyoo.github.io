import Section from "../layout/section";
import { RiNotionFill } from "react-icons/ri";

export default function SideProject() {
	return (
		<Section
			title="사이드 프로젝트"
			nodes={
				<>
					<div className="experience-item">
						<div className="company-info">
							<h3>넥스트 레벨</h3>

							<p className="highlight">Next.js와 React의 최신 버전 내용 학습</p>
							<div
								className="project-docs"
								onClick={() => {
									window.open("https://oxidized-broom-36d.notion.site/Next-Level-75cc03eaa7174e5492e3909021eec8a2?pvs=4", "_blank");

								}}
							>
								<RiNotionFill className="notion-icon" />
								프로젝트 기술서
							</div>
							<p>2024.08 ~ 2024.09</p>

							<a
								href="https://next-level-theta.vercel.app"
								target='_blank'
							>
								넥스트 레벨 사이트 (테스트 계정: ID - test3@email.com | PW -
								123456)
							</a>

							<br />
							<a
								href="https://github.com/chaeyoo/next-level"
								target='_blank'
							>
								레포지토리
							</a>


						</div>
						<div className="job-description">
							<p className="highlight">
								넥스트와 리액트 최신 버전을 습득하고 서버 컴포넌트를 적극
								활용하여 제작한 앱입니다.
							</p>
							<div className="side-section">
								<ul>
									<li>Next.js 서버컴포넌트 사용</li>
									<li>Next-auth를 사용한 사용자 인증 처리</li>
									<li>대시보드에 통계 3종 구성</li>
								</ul>
							</div>

							<div className="tech-list">
								{"Next.js, tailwind, typescript, postgre, next-auth, pnpm, vercel"
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
							<h3>할일에 대하여</h3>
							<p className="highlight">빌드 도구, 패키지 매니저, 모노레포 기술 구현 이해도 더하기</p>
							<div
								className="project-docs"
								onClick={() => {
									window.open("https://oxidized-broom-36d.notion.site/a3d544bfa1fb4b09bf09992f33b744ce?pvs=4", "_blank");

								}}
							>
								<RiNotionFill className="notion-icon" />
								프로젝트 기술서
							</div>
							<p>2024.08 ~ 2024.09</p>
							<a
								href="https://main.d38wyme95zjr0p.amplifyapp.com/signin"
								target='_blank'
							>
								할일에 대하여 사이트 (테스트 계정: ID - test2@email.com | PW -
								123456)
							</a>

							<br />
							<a
								href="https://github.com/chaeyoo/todo-monorepo"
								target='_blank'
							>
								레포지토리
							</a>
						</div>
						<div className="job-description">
							<p className="highlight">
								간단한 모노레포 앱을 구성하며, 모노레포 앱의 개발 과정과 구조에
								대해 알아보기 위해 제작한 앱입니다.
							</p>
							<div className="side-section">
								<ul>
									<li>모노레포 프로젝트 구성</li>
									<li>supabase를 사용한 사용자 인증 처리</li>
									<li>AWS 배포를 위한 amplify.yml 스크립트 작성</li>
								</ul>
							</div>

							<div className="tech-list">
								{"React, typescript, zustand, emotion, turbo, pnpm, amplify, supabase"
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
							<h3>퀴즈랩</h3>
							<p className="highlight">리액트 테스트 코드 작성 연습</p>
							<div
								className="project-docs"
								onClick={() => {
									window.open("https://oxidized-broom-36d.notion.site/f51b10b82a9c4aac9d0edc566f60a3d0?pvs=4", "_blank");

								}}
							>
								<RiNotionFill className="notion-icon" />
								프로젝트 기술서
							</div>
							<p>2024.06 ~ 2024.09</p>
							<a
								href="https://main.d3102voefpy56i.amplifyapp.com/"
								target='_blank'
							>
								퀴즈랩 사이트
							</a>

							<br />
							<a
								href="https://github.com/chaeyoo/quiz-lab"
								target='_blank'
							>
								레포지토리
							</a>
						</div>
						<div className="job-description">
							<p className="highlight">
								리액트 테스트 코드를 작성하는 법을 익히기 위한 프로젝트 입니다.
								퀴즈랩은 사용자와의 인터랙션이 많은 앱이기 때문에, 사용자 중심의
								테스트를 구상 및 작성을 연습하는 데에 적합한 프로젝트라고
								생각합니다.
							</p>
							<div className="side-section">
								<ul>
									<li>선언적 코드 작성으로 코드 가독성 증가</li>
									<li>
										React Suspense와 Skeleton UI를 활용하여 사용자 경험 개선
									</li>
									<li>디바운싱 기법으로 API 호출 방식 최적화</li>
									<li>
										사용자 인터렉션이 많은 화면에서 React 테스트 코드 작성
									</li>
								</ul>
							</div>

							<div className="tech-list">
								{"React, tailwind, jest, amplify, typescript, npm, zustand, react-testing-library, react-spring"
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
							<h3>해피 파티 데이</h3>
							<p className="highlight">
								리액트 프로젝트 환경을 구성하는 방법과 성능 최적화 방안 고민
							</p>
							<div
								className="project-docs"
								onClick={() => {
									window.open("https://oxidized-broom-36d.notion.site/e22b50537a8a489093663366cc75defc?pvs=4", "_blank");

								}}
							>
								<RiNotionFill className="notion-icon" />
								프로젝트 기술서
							</div>
							<p>2024.05 ~ 2024.06</p>
							<a
								href="https://master.d4zwbzignxki2.amplifyapp.com/"
								target='_blank'
							>
								해피 파티 데이 사이트
							</a>

							<br />
							<a
								href="https://github.com/chaeyoo/happy-party"
								target='_blank'
							>
								레포지토리
							</a>
						</div>
						<div className="job-description">
							<p className="highlight">
								리액트의 프로젝트를 세팅하고, 성능 최적화 방안에 대해 고민해본
								프로젝트입니다. 동영상, 이미지, 폰트, 데이터 페칭의 부분에
								있어서 성능 개선 포인트를 잡고 개발하였습니다.
							</p>
							<div className="side-section">
								<ul>
									<li>선언적 코드 작성으로 코드 가독성 증가</li>
									<li>React Suspense를 활용하여 사용자 경험 개선</li>
									<li>React.Memo를 사용하여 메모리 최적화</li>
									<li>이미지, 동영상, 폰트 최적화</li>
								</ul>
							</div>

							<div className="tech-list">
								{"React, typscript, scss, yarn-berry"
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
