import { cleanup, render } from '@testing-library/react';

import TimesColumn from './TimesColumn';

describe('<TimesColumn />', () => {
	it('should render all hours of the day in the format HH:00', () => {
		const { getByText } = render(<TimesColumn />);
		const allHours = [...Array(24)].map((_, index) => `${index.toString().padStart(2, '0')}:00`);

		allHours.forEach(hour => {
			expect(() => getByText(hour)).not.toThrow();
		})
	});
});