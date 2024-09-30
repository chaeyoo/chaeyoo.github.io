import Section from "../layout/section";

export default function SideProject() {
    return (
        <Section
            title="사이드 프로젝트"
            nodes={
                <>
                    <div className="experience-item">
                        <div className="company-info">
                            <h3>넥스트레벨
                            </h3>
                            <p className="highlight">최신 버전의 Next, React 기술 사용</p>
                            <p>2024.07 ~ 2024.09</p>
                            <a href="https://www.aimmed.co.kr/" style={{ textDecoration: "underline" }}>보러가기</a>
                        </div>
                        <div className="job-description">
                            <p className="highlight">프로젝트 소개란 입니다. 프로젝트 소개란 입니다.프로젝트 소개란 입니다.
                                프로젝트 소개란 입니다.프로젝트 소개란 입니다.프로젝트 소개란 입니다.프로젝트 소개란 입니다.
                                프로젝트 소개란 입니다.프로젝트 소개란 입니다.
                            </p>
                            <div className="side-section">
                                <p className="side-section-title">구성</p>
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
                            <div className="side-section">
                                <p className="side-section-title">이미지</p>
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
                            <div className="tech-list">
                                {"React, React-query, scss, antd".split(", ").map((v, i) => (
                                    <div key={i} className="tech-item">{v}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>} />
    )
}