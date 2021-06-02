import React from 'react';
import chair1 from '../../images/Products/image1.jpg'
import chair11 from '../../images/Products/image11.jpg'
import chair5 from '../../images/Products/image5.jpg'
import './HomeChair.css'

const HomeChair = () => {
    return (
        <section  style={{width:'99%'}}>
            <div className='row '>
                <div className='col-md-5'>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={chair1} className="d-block w-100" alt="..." height='600'/>
                            </div>
                            <div className="carousel-item">
                                <img src={chair5} className="d-block w-100" alt="..."height='600' />
                            </div>
                            <div className="carousel-item">
                                <img src={chair11} className="d-block w-100" alt="..." height='600'/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-md-7 bedImage bd'>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeChair;