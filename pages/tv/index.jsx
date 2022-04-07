import axios from 'axios'
import React, { useEffect,useState,useContext} from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from 'react-query'
import Hero from '../../components/Hero'
import Modal from '../../components/Modal'
import Page from '../../components/Page'
import { ModalContext } from '../../context/Modal'
import { ProfileContext } from '../../context/profile'
import { useRouter } from 'next/router'

const fetchTvShow = async({pageParam = 1})=>{
    const res = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=7292f619013a396c80612a34da77ddaa&language=vi&page=' + pageParam)
    return res.data
}
function TvShow({hero}) {
    
    const router = useRouter()
    const {isAuthenticated} = useContext(ProfileContext)
    const {showModal,setShowModal} = useContext(ModalContext)
    const [modalData,setModalData] = useState({})
    
    const  handelModal = (data) => {
        setModalData(data)
        setShowModal(true)
    }
    const { ref, inView } = useInView()
    const {
        status,
        data,
        error,
        isFetching,
        isFetchingNextPage,
        isFetchingPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
    } = useInfiniteQuery('tv-show',fetchTvShow,{
        getNextPageParam: (lastpage,pages) =>{
            return pages.length + 1
        }
    })
    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView])
    useEffect(() => {
        if(!isAuthenticated) router.push('/')
    },[isAuthenticated])
    return (
    <>
        <Hero data={hero} backdrop="/moon-knight.jpg"/>
        <Page data={data}  handelModal={handelModal} label="Tv"/>
        <div>
            <button
            ref={ref}
            onClick={() => fetchNextPage()}
            className="Load More"
            disabled={!hasNextPage || isFetchingNextPage}
            >
            {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load Newer'
                : 'Nothing more to load'}
            </button>
        </div>
        <div>
            {isFetching && !isFetchingNextPage
            ? 'Background Updating...'
            : null}
        </div>
    
        {showModal && <Modal type="tv" data={modalData}/>}
    </>
  )
}

export default TvShow
export async function getServerSideProps(ctx){
    const hero = await axios.get(`https://api.themoviedb.org/3/tv/92749?api_key=${process.env.API_KEY}&language=vi`)

    return {
        props:{
            hero: hero.data
        }
    }
}
