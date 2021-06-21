export const QueueAction = (
	message: string,
	type: App.ContextualClass
): App.NotificationsContextAction => {
	return {
		name: 'QUEUE',
		payload: {
			id: Math.random(),
			message,
			type
		}
	}
}
