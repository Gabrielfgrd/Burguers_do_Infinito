import _ from 'lodash';

const INITIAL_STATE = {
    id: ''
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modificaId':
            return { ...state, id: action.payload }
    }
    return state;
}