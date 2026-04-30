import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchEvents = () => {
	const [events, setEvents] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get('https://santosnr6.github.io/Data/events.json')
			.then((response) => setEvents(response.data.events))
			.catch(() => setIsError(true))
			.finally(() => setIsLoading(false));
	}, []);

	return { events, isLoading, isError };
};
