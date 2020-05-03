import axios from 'axios'

export const SET_QURAN = 'SET_QURAN'

export const setQuran = (data) => {
    return { type: SET_QURAN, payload: data }
}


function fetchQuran() {
    return axios.get('https://al-quran-8d642.firebaseio.com/data.json?print=pretty')
}

export const getQuran = () => {
    return dispatch => {
        fetchQuran()
            .then(({ data }) => dispatch(setQuran(data)))
            .catch(console.log)
    }
}