export interface IEvent {
	id: string;
	title: string;
	start: number;
	end: number;
}

export type IAddedEvent = IEvent & {
	element: HTMLElement;
}