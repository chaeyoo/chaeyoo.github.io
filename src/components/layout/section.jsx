export default function Section({ title, nodes }) {
	return (
		<section className="resume-section">
			<div className="section-title">{title}</div>
			{nodes}
		</section>
	);
}
