import React from 'react'

//Images
import example from '../../img/example1.jpg';

 const ContentList = () => {
    return (
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
    )
}

export default ContentList;
