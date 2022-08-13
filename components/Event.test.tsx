import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Event from './Event';

describe('<Event />', () => {
	const mockEvent = {
		id: '1',
		title: 'Test event',
		start: 60,
		end: 120,
	};

	beforeEach(cleanup);

	it('should render event name', () => {
		const { getByText } = render(<Event event={mockEvent} />);

		expect(() => getByText(mockEvent.title)).not.toThrow();
	});

	it('should render event name in title attribute', () => {
		const { getByTitle } = render(<Event event={mockEvent} />);

		expect(() => getByTitle(mockEvent.title)).not.toThrow();
	});

	it('should forward `ref` prop correctly', () => {
		const testRef = React.createRef<HTMLDivElement>();
		const { getByTitle } = render(<Event ref={testRef} event={mockEvent} />);

		expect(testRef.current).toEqual(getByTitle(mockEvent.title));
	});

	it('should render with correct `top` CSS style', () => {
		const { getByText } = render(<Event event={mockEvent} />);
		const eventBlock = getByText(mockEvent.title);
		const eventStartHour = mockEvent.start / 60;
		const eventBlockFixedHeightPx = 50;
		
		expect(eventBlock.style.top).toEqual(`${eventBlockFixedHeightPx * eventStartHour}px`)
	});
});
