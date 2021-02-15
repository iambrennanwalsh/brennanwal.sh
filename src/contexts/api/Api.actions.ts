export const AddResourceAction = (data: App.ApiResource): App.ApiContextAction => {
	return {
		name: 'ADD_RESOURCE',
		payload: data
	}
}
