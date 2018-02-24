import React from 'react';

const Coin = ({ id, url, image, i, name }) => {
    const BASE_URL = `https://www.cryptocompare.com`
    return (
        <div className="row text-center">
            <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                {i + 1}
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                <a href={`${BASE_URL}${url}`}>
                    <img className='img-responsive' src={`${BASE_URL}${image}`} />
                </a>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                {name}
            </div>
        </div>
    )
}
export default Coin