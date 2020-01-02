import React, {Fragment} from 'react'

const SearchContent = () => {
    return (
        <Fragment>
            <section className="section-finder d-flex justify-content-center align-items-center flex-column">
                <h4 className="text-light mb-4">Find some events</h4>
     
                <div className="form-search-events d-flex justify-content-center align-items-center">
                    <div className="form-group form-select">
                        <select className="form-control">
                            <option>Ngentot</option>
                            <option>Ngentot</option>
                            <option>Ngentot</option>
                            <option>Ngentot</option>
                        </select>
                    </div>
                    <div className="form-group input-group form-input ml-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">Find</div>
                        </div>
                        <input type="text" placeholder="Search Event, Organizer or Interest"  className="form-control" />
                    </div>
                </div>

            </section>
        </Fragment>
    )
}

export default SearchContent;