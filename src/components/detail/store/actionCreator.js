import * as actionType from './actionType.js';


export const setCurrent = (key) => {
	return {
        type: actionType.SET_CURRENT,
        key
	}
}