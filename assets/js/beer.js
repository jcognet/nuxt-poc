import axios from "axios"

export const getBeers = () => {
  console.log(process.env.API_BEER_BASE_URL+`beers?key=`+process.env.API_BEER_KEY)
  return  axios.get(process.env.API_BEER_BASE_URL+`beers?key=`+process.env.API_BEER_KEY);
}
