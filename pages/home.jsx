import Hero from "../components/Hero"
import axios from "axios"
import { popularMovies, top_ratedMovies, trending, tvShowPopular, tvShowTopRated } from "../utils/contant"
import List from "../components/List"

function HomePage ({hero,popular,top_rated,tvShowPopular,tvShowTopRated,trendingMovies}){
   
    
    return (
        <div className="Home-wr">
            <Hero data={hero} backdrop='/home-hero.jpg'/>
            <div className="lists-of-list-movies">
                <List label="Trending Movies" data={trendingMovies}/>
                <List label="Popular Movies" data={popular}/>
                <List label="Top Rated Movies" data={top_rated}/>
                <List label="Tv Shows Popular" data={tvShowPopular}/>
                <List label="Tv Shows Top Rated" data={tvShowTopRated}/>
            </div>
        </div>
    )
}

export default HomePage

export async function getServerSideProps(ctx){
    const hero = await axios.get(`https://api.themoviedb.org/3/movie/425909?api_key=${process.env.API_KEY}&language=vi`)
    const popular = await axios.get(`${popularMovies}`)
    const topratedMovies = await axios.get(`${top_ratedMovies}`)
    const tvShowPopularMovies = await axios.get(`${tvShowPopular}`)
    const tvShowTopratedMovies = await axios.get(`${tvShowTopRated}`)
    const trendingMovies = await axios.get(`${trending}`)

    return {
        props: {
            hero : hero.data,
            popular : popular.data,
            top_rated: topratedMovies.data,
            tvShowPopular: tvShowPopularMovies.data,
            tvShowTopRated:tvShowTopratedMovies.data,
            trendingMovies: trendingMovies.data
        }
    }
}