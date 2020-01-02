import React, {Fragment} from 'react'

//image
import example from '../../img/example1.jpg';

const ContentEvents = () => {
    return (
        <Fragment>
            <section className="section-content-events mt-5 d-flex justify-content-center align-items-center flex-column">
                <h4 className="text-dark text-center mb-5">Popular Events In Your Place</h4>
                <div className="events-list">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col">
                            <div className="card">
                                    <img className="img" src={example} alt="Event Images" />
                                <div className="card-body text-center">
                                    <p className="card-title">Konser Rock </p>
                                    <p className="card-text">Event ini dibuat oleh ..........</p>
                                </div>
                                {/* eslint-disable-next-line */}
                                <a href="#!" className="stretched-link"></a>
                                
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                    <img className="img" src={example} alt="Event Images" />
                                <div className="card-body text-center">
                                    <p className="card-title">Event Tahunan</p>
                                    <p className="card-text">Event ini dibuat oleh ..........</p>
                                </div>
                                {/* eslint-disable-next-line */}
                                <a href="#!" className="stretched-link"></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                    <img className="img" src={example} alt="Event Images" />
                                <div className="card-body text-center">
                                    <p className="card-title">Event Tahunan</p>
                                    <p className="card-text">Event ini dibuat oleh ..........</p>
                                </div>
                                {/* eslint-disable-next-line */}
                                <a href="#!" className="stretched-link"></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                    <img className="img" src={example} alt="Event Images" />
                                <div className="card-body text-center">
                                    <p className="card-title">Event Tahunan</p>
                                    <p className="card-text">Event ini dibuat oleh ..........</p>
                                </div>
                                {/* eslint-disable-next-line */}
                                <a href="#!" className="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#!" className="btn btn-primary mt-5 mb-5">View More Events</a>
            </section>
        </Fragment>
    )
}

export default ContentEvents;
