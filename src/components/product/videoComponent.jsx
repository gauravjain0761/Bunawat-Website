import React from 'react'

const VideoComponent = ({ url, index, width }) => {
    return (
        <div className="col-md-4 col-sm-6" style={width ? (index == 0 ? { paddingRight: '58px' } : (index == 2 ? { paddingLeft: '58px' } : {})) : {}}>
            <div className="structured_fabric_img">
                <video key={url + index} loop autoPlay muted style={{
                    width: '100%',
                    height: '340px',
                    objectFit: 'fill'
                }}>
                    <source src={url} type="video/mp4" />
                </video>
            </div>
            <div className="product_left_details" style={width ? (index == 2 ? { paddingLeft: '88px' } : {}) : {}}>
                {index == 0 &&
                    <>
                        <p>Structured Fabric</p>
                        <span>Keeps its shape</span>
                    </>
                }
                {index == 1 &&
                    <>
                        <p>Quality Embroidery</p>
                        <span>Hand-made by artisans</span>
                    </>
                }
                {index == 2 &&
                    <>
                        <p>Pleated Pajama Pants</p>
                        <span>Pair it with</span>
                    </>
                }
            </div>
        </div>
    )
}

export default VideoComponent