export function TimesSeparatorLines() {
	return (
		<div className="separator-lines">
			{[...Array(24)].map(() => {
				return <div className="separator-line"></div>
			})}
		</div>
	)
}