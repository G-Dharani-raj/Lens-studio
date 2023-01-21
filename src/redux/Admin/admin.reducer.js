import {
	ADMIN_ADD_ERROR,
	ADMIN_ADD_LOADING,
	ADMIN_ADD_SUCCESS,
	ADMIN_DELETE_ERROR,
	ADMIN_DELETE_LOADING,
	ADMIN_DELETE_SUCCESS,
	ADMIN_GET_ERROR,
	ADMIN_GET_LOADING,
	ADMIN_GET_SUCCESS,
	ADMIN_UPDATE_ERROR,
	ADMIN_UPDATE_LOADING,
	ADMIN_UPDATE_SUCCESS,
} from "./admin.types";

const adminInitialState = {
	getItems: {
		loading: false,
		error: false,
	},
	addItem: {
		loading: false,
		error: false,
	},
	updateItem: {
		loading: false,
		error: false,
	},
	removeItem: {
		loading: false,
		error: false,
	},
	data: [],
};

export const adminReducer = (state = adminInitialState, { type, payload }) => {
	switch (type) {
		case ADMIN_GET_LOADING: {
			return {
				...state,
				getItems: {
					loading: true,
					error: false,
				},
			};
		}
		case ADMIN_GET_ERROR: {
			return {
				...state,
				getItems: {
					loading: false,
					error: true,
				},
			};
		}
		case ADMIN_GET_SUCCESS: {
			return {
				...state,
				getItems: {
					loading: false,
					error: false,
				},
				data: [...payload],
			};
		}
		case ADMIN_UPDATE_LOADING: {
			return {
				...state,
				updateItem: {
					loading: true,
					error: false,
				},
			};
		}
		case ADMIN_UPDATE_ERROR: {
			return {
				...state,
				updateItem: {
					loading: false,
					error: true,
				},
			};
		}
		case ADMIN_UPDATE_SUCCESS: {
			return {
				...state,
				updateItem: {
					loading: false,
					error: false,
				},
			};
		}
		case ADMIN_ADD_LOADING: {
			return {
				...state,
				addItem: {
					loading: true,
					error: false,
				},
			};
		}
		case ADMIN_ADD_ERROR: {
			return {
				...state,
				addItem: {
					loading: false,
					error: true,
				},
			};
		}
		case ADMIN_ADD_SUCCESS: {
			return {
				...state,
				addItem: {
					loading: false,
					error: false,
				},
			};
		}
		case ADMIN_DELETE_LOADING: {
			return {
				...state,
				removeItem: {
					loading: true,
					error: false,
				},
			};
		}
		case ADMIN_DELETE_ERROR: {
			return {
				...state,
				removeItem: {
					loading: false,
					error: true,
				},
			};
		}
		case ADMIN_DELETE_SUCCESS: {
			return {
				...state,
				removeItem: {
					loading: false,
					error: false,
				},
			};
		}

		default:
			return state;
	}
};
