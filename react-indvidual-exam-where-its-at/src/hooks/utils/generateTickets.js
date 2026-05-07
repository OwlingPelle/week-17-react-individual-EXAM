import { v4 as uuid } from 'uuid';

// fick lite Konrad & ai-hjälp här...

export function generateTickets(cart) {
	const sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
	const tickets = [];

	for (let item of cart) {
		const section = sections[Math.floor(Math.random() * sections.length)];
		const seat = Math.floor(Math.random() * 30) + 1;
		let { qty, ...ticket } = item;

		for (let i = 0; i < item.qty; i++) {
			const ticketId = '#' + uuid().slice(0, 5).toUpperCase();
			let barcode = '';
			for (let j = 0; j < 3; j++) {
				const digit = Math.floor(Math.random() * 9) + 1;
				barcode += digit;
			}

			ticket = {
				...ticket,
				section: section,
				seat: seat + i,
				barcode: barcode,
				ticketId: ticketId,
			};

			tickets.push(ticket);
		}
	}

	return tickets;
}
