import { render } from '@testing-library/react';
import Events from './Events';

const mockEvents = [
	{
		id: 1,
		title: "Walk",
		start: 60,
		end: 120,
	},
	{
		id: 2,
		title: "Call Mike",
		start: 90,
		end: 120,
	},
	{
		id: 3,
		title: "Meeting 1",
		start: 180,
		end: 300,
	},
	{
		id: 4,
		title: "Meeting 2",
		start: 240,
		end: 360,
	},
	{
		id: 5,
		title: "Event Bla",
		start: 360,
		end: 480,
	},
	{
		id: 6,
		title: "Exercise",
		start: 360,
		end: 420,
	},
];

function findOverlappingEvents({ id, start, end}) {
	const results = [];

	mockEvents.forEach((event) => {
		if (id === event.id) return;

		if (end > event.start && start < event.end) {
			results.push(event)
		}
	});

	return results;
}

describe('Events', () => {
	it('Finds all other overlapping events', () => {
		const results = findOverlappingEvents({
			id: 6,
			title: "Exercise",
			start: 360,
			end: 420,
		})

		console.log(results)
	});
});
