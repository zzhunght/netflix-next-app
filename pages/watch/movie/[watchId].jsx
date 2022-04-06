import React,{useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'


function Watch({recomment}) {
    const router = useRouter()
  return (
    <div>hello</div>
  )
}

export default Watch
export async function getServerSideProps(ctx){
    const id = ctx.params.watchId
    const recomment = await axios.get(`https://api.themoviedb.org/3/movie/634649/recommendations?api_key=${process.env.API_KEY}&language=vi`)
    return {
        props: {
            recomment: recomment.data
        }
    }
}