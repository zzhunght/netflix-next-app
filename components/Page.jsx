import { Col, Row } from 'antd'
import React,{Fragment} from 'react'
import { imageUrl } from '../utils/contant'

function Page({data,handelModal}) {
  return (
    <div className="mv">
        <h2 className="mv-title"> Trending Movies</h2>
        <Row gutter={[6,6]} className="mv-row">
            {data?.pages.map((group, i) => (
                <Fragment key={i}>
                    {group?.results.map((item,index)=>(
                        <Col
                         key={index} xxl={3} md={4} xs={8} 
                         onClick={() =>handelModal(item)}
                        >
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
        
    </div>
  )
}

export default Page