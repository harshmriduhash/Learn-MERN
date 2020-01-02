import React, {Fragment} from 'react';
import ContentList from './ContentList';

//image


const Contents = () => {
    return (
        <Fragment>
            <section className="section-content-events mt-5 d-flex justify-content-center align-items-center flex-column">
                <h4 className="text-dark text-center mb-5">Popular Events In Your Place</h4>
                    <ContentList />
                <a href="#!" className="btn btn-primary mt-5 mb-5">View More Events</a>
            </section>
        </Fragment>
    )
}

export default Contents;
