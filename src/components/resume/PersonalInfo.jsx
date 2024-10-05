import Section from "../layout/section";

export default function PersonalInfo() {
	return (
		<Section
			title="인적사항"
			nodes={
				<>
					<div className="personal-info">
						<div>
							<i className="icon github"></i>
							<a href="https://github.com/chaeyoo" target='_blank'>유채형의 깃허브</a>
						</div>
						<div>
							<i className="icon blog"></i>
							<a href="https://yoo-blog.tistory.com/" target='_blank'>유채형의 블로그</a>
						</div>
						<div>
							<i className="icon email"></i>chaeh0124@gmail.com
						</div>
						<div>
							<i className="icon phone"></i>010-9139-3987
						</div>
					</div>
				</>
			}
		/>
	);
}
