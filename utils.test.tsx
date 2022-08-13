import { findOverlappingEvents, getSuitableEventBlockLeftPx } from './utils';

const mockEvents = [
	{
		id: '1',
		title: "Walk",
		start: 60,
		end: 120,
	},
	{
		id: '2',
		title: "Call Mike",
		start: 90,
		end: 120,
	},
	{
		id: '3',
		title: "Meeting 1",
		start: 180,
		end: 300,
	},
	{
		id: '4',
		title: "Event Bla",
		start: 360,
		end: 480,
	},
	{
		id: '5',
		title: "Exercise",
		start: 360,
		end: 420,
	},
];

function generateMockElement(leftPx: number) {
	return {
		getBoundingClientRect() {
			return {
				right: leftPx,
			};
		},
	};
}

describe('Utility functions', () => {

	describe('findOverlappingEvents()', () => {
		it('should find overlapping events', () => {
			const results = findOverlappingEvents(mockEvents as any, mockEvents[0])

			expect(results).toHaveLength(1);
			expect(results[0].id).toEqual(mockEvents[1].id);
		});

		it('should not return any events when target event does not overlap with others', () => {
			const results = findOverlappingEvents(mockEvents as any, mockEvents[2]);

			expect(results).toHaveLength(0);
		});
	});

	describe('getSuitableEventBlockLeftPx()', () => {
		it('should find the position of the furthest element to the right in a given list of elements', () => {
			const mockElements = [
				generateMockElement(123),
				generateMockElement(47)
			]
			const furthestRightPointPx = getSuitableEventBlockLeftPx(mockElements as HTMLElement[]);

			expect(furthestRightPointPx).toEqual(123);
		});
	});
});
