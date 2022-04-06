import { useRouter } from 'next/router'
import React, {useState, useEffect,useContext} from 'react'
import { ModalContext } from '../context/Modal'
import { imageUrl } from '../utils/contant'

function Modal({data,type}) {
    const router = useRouter()
    const [movie,setMovies] = useState(data)
    const {showModal,setShowModal} = useContext(ModalContext)

    useEffect(() => {
        setMovies(data)
    },[data])

    const handelOnClick = (e) => {
        console.log('e',e)
        router.push(`/watch/${e.media_type || type}/${e.id}`)
    }
    return (
    <div className="modal-wr">
        <div
         className="modal-overlay"
         onClick={() =>setShowModal(false)}
        ></div>
        <div className="modal-ct">
            <div className="modal-close" onClick={() =>setShowModal(false)}></div>

            <div className="modal-head" style={{backgroundImage:`url(${imageUrl}${data?.backdrop_path})`}}>
                <div className="play-btn">
                    <button
                     className="btn btn-play"
                     onClick={() =>handelOnClick(data)}
                    >
                        Play
                    </button>
                </div>
            </div>
            <div className="modal-body">
                <h2 className="modal-movie-name">{data?.name || data?.title || data?.original_title || data?.original_name}</h2> 
                <p className="modal-movie-overview">
                    {data?.overview}
                </p>
            </div>
            <div className="modal-ft">
                <h2 className="modal-ft-title">
                    Info on {data?.name || data?.title || data?.original_title || data?.original_name}
                </h2>
                <p className="modal-ft-info">
                    Release date : <span className="span-bold">{data?.release_date}</span>
                </p>
                <p className="modal-ft-info">
                    Average vote : <span className="span-bold">{data?.vote_average}</span>
                </p>
                <p className="modal-ft-info">
                    Original Langue : <span className="span-bold">{data?.original_language}</span>
                </p>
                <p className="modal-ft-info">
                    Vote : <span className="span-bold">{data?.vote_count}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Modal