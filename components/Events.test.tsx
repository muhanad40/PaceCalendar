import { cleanup, render } from '@testing-library/react';

import Events from './Events';

describe('<Events />', () => {
	const mockEvents = [
		{
			id: '1',
			title: 'Event 1',
			start: 60,
			end: 120,
		},
		{
			id: '2',
			title: 'Event 2',
			start: 90,
			end: 120,
		},
	]

	beforeEach(cleanup);

	it('should render all events', () => {
		const { getByText } = render(<Events events={mockEvents} />);

		mockEvents.forEach(({ title }) => {
			expect(() => getByText(title)).not.toThrow();
		});
	});

	// I tried implementing this test, but I couldn't get the desired behaviour because this is not being rendered on a browser page for the `left` CSS to be set correctly. If I was to spend more time on this, I'd look into how I can lock this logic in a unit test
	// xit('should render events with correct `left` CSS style so they do not overlap');
});