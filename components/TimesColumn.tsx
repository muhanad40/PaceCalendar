export function TimesColumn() {
	return (
		<div className="time-col">
			{[...Array(24)].map((_, index) => {
				const label = `${index.toString().padStart(2, '0')}:00`;
				return <div className="time-label" key={label}>{label}</div>
			})}
		</div>
	)
}