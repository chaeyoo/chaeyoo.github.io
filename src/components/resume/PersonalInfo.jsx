import Section from "../layout/section";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FaGithub } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { MdContactPhone } from "react-icons/md";
export default function PersonalInfo() {
	let email = 'chaeh0124@gmail.com';
	return (
		<Section
			title="인적사항"
			nodes={
				<>
					<div className="personal-info">
						<div>
							<FaGithub className="info-icon" />
							<a href="https://github.com/chaeyoo" target='_blank'>유채형의 깃허브</a>
						</div>
						<div>
							<ImBooks className="info-icon" />
							<a href="https://yoo-blog.tistory.com/" target='_blank'>유채형의 블로그</a>
						</div>
						<div>
							<MdContactMail className="info-icon" />{email}
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
							<MdContactPhone className="info-icon" />010-9139-3987
						</div>
					</div>
				</>
			}
		/>
	);
}
