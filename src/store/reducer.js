import { SET_QURAN } from './action'

const initial = {
    quran: []
}

export default (state = initial, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_QURAN:
            return { ...state, quran: payload }
        default:
            return state
    }
}