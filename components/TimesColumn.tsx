export function TimesColumn() {
	return (
		<div className="time-col">
			{[...Array(24)].map((_, index) => {
				return <div className="time-label">{index.toString().padStart(2, '0')}:00</div>
			})}
		</div>
	)
}