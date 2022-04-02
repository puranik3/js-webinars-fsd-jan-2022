import axios from 'axios'
import IBookList from '../models/IBookList'

const getGenres = (id : number) => {
    return axios.get<IBookList[]>(`${process.env.REACT_APP_API_BASE_URL}/libraries/${id}/genres`)
    .then(response => response.data)
}

export {
    getGenres
}