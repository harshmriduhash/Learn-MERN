import React from 'react';
import CategoryList from './CategoryList';



const Category = () => {
    return (
            <section className="section-content-category d-flex justify-content-center align-items-center flex-column">
                <h4 className="text-dark text-center mb-5">Category Events</h4>
                    <CategoryList />
            </section>
    )
}

export default Category;
