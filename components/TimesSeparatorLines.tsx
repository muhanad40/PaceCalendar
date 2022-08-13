export default function TimesSeparatorLines() {
	return (
		<div className="separator-lines">
			{[...Array(24)].map((_, index) => {
				return <div key={index} className="separator-line"></div>
			})}
		</div>
	)
}