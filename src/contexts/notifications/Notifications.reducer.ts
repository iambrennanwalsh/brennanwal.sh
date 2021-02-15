export const NotificationsReducer: App.NotificationsContextReducer = (
	prevState,
	{name, payload}
): App.NotificationsContextState => {
	switch (name) {
		case 'QUEUE':
			return [...prevState, payload]

		default:
			return prevState
	}
}
