export const QueueAction = (
	message: string,
	type: App.ContextualClassEnum
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
