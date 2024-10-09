import Section from "../layout/section";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FaRegCopy } from "react-icons/fa";
export default function PersonalInfo() {
	let email = 'chaeh0124@gmail.com';
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
							<i className="icon email"></i>{email}
							<CopyToClipboard
								text={email}
								onCopy={() => {
									window.alert('복사가 완료되었습니다.')
								}}
							>
								<FaRegCopy className="copy-icon" />

							</CopyToClipboard>
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
