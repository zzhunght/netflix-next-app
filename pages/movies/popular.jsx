import { Col, Row } from 'antd'
import axios from 'axios'
import React, {Fragment, useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import { QueryClient, useInfiniteQuery } from 'react-query'
import Hero from '../../components/Hero'
import {imageUrl, popularMovies} from '../../utils/contant'

const fetchPopular = async({pageParam = 1})=>{
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7292f619013a396c80612a34da77ddaa&language=vi&page=' + pageParam)
    return res.data
}
function PopularPage({hero}) {
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
    } = useInfiniteQuery('popular-movies',fetchPopular,{
       
        getNextPageParam: (lastpage,pages) =>{
            return pages.length + 1
        }
    })
    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView])
    
    return (
        <>
        <Hero data={hero} backdrop="/spider-man.jpg"/>
        <div className="mv">
            <h2 className="mv-title"> Popular</h2>
            <Row gutter={[6,6]} className="mv-row">
                {data?.pages.map((group, i) => (
                    <Fragment key={i}>
                        {group?.results.map((item,index)=>(
                            <Col key={index} xxl={3} md={4} xs={8}>
                            <div className="mv-item">
                                <div className="mv-item-img">
                                    <img src={`${imageUrl}${item.backdrop_path}`} />
                                </div>
                            </div>
                            </Col>
                        ))}
                    </Fragment>
                ))}
            </Row>
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
        </div>
    </>
  )
}

export default PopularPage
export async function getServerSideProps(ctx){
    const hero = await axios.get(`https://api.themoviedb.org/3/movie/634649?api_key=${process.env.API_KEY}&language=vi`)

    return {
        props:{
            hero: hero.data
        }
    }
}
