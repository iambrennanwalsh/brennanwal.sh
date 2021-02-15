export const ApiReducer: App.ApiContextReducer = (
	prevState,
	{name, payload}
): App.ApiContextState => {
	switch (name) {
		case 'ADD_RESOURCE':
			return {...prevState, ...payload}

		default:
			return prevState
	}
}
