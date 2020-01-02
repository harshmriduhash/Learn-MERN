import React from 'react'

//image
import example from '../../img/example1.jpg';

 const CategoryList = () => {
    return (
        <div className="category-list">
                   <div className="row d-flex justify-content-evenly align-items-center">
                       <div className="col-4">
                            <div className="card">
                                <img className="img" src={example} alt="Event Images" />
                                     {/* eslint-disable-next-line */}
                                    <a href="#!" className="stretched-link"></a>                          
                            </div>
                       </div>
                       <div className="col-4">
                            <div className="card">
                                <img className="img" src={example} alt="Event Images" />
                                    {/* eslint-disable-next-line */}
                                <a href="#!" className="stretched-link"></a>                          
                            </div>
                       </div>
                       <div className="col-4">
                            <div className="card">
                                <img className="img" src={example} alt="Event Images" />
                                    {/* eslint-disable-next-line */}
                                    <a href="#!" className="stretched-link"></a>                          
                            </div>
                       </div>                                                 
                   </div>
                   <div className="row d-flex justify-content-center align-items-center mt-3">
                   <div className="col-4">
                            <div className="card">
                                <img className="img" src={example} alt="Event Images" />
                                     {/* eslint-disable-next-line */}
                                    <a href="#!" className="stretched-link"></a>                          
                            </div>
                       </div>
                       <div className="col-4">
                            <div className="card">
                                <img className="img" src={example} alt="Event Images" />
                                    {/* eslint-disable-next-line */}
                                    <a href="#!" className="stretched-link"></a>                          
                            </div>
                       </div>
                       <div className="col-4">
                            <div className="card">
                                <img className="img" src={example} alt="Event Images" />
                                    {/* eslint-disable-next-line */}
                                    <a href="#!" className="stretched-link"></a>                          
                            </div>
                       </div>                                                                            
                   </div>
                </div>
    )
}

export default CategoryList;
