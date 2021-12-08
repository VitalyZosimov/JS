const API_KEY = '03848f0f3f1857a72e798faa4f5a504d';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';
// trending/all/day?api_key=<<api_key>>

const getData = url => fetch(url)
        .then(response  => {
            if (response.ok) {
                return response.json()
            }
            throw `ошибочка ${response.status}`
        })
      //  .catch(err => console.error(err));




export const getTriends = async (type = 'all', period = 'week', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    const data = await getData(url);
    
};