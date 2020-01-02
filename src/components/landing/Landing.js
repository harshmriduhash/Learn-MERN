import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Contents from './Contents';
import Category from './Category';

const Landing = () => {
  return (
    <Fragment>
      <main className="main-landing d-flex justify-content-center align-items-center flex-column text-light">
        <section className="cta d-flex justify-content-center align-items-center flex-column">
          <h2 className="text-uppercase text-center text-edit font-weight-bold">
            Create events and starts selling tickets.
          </h2>
          <p className="text-uppercase text-edit font-weight-bold">Fast, Easy and Reliable</p>
          <Link to="/Register" className="btn btn-md nav-link btn-primary text-uppercase">
            Create Event
          </Link>
        </section>
      </main>
      <Search />
      <Contents />
      <Category />
    </Fragment>
  );
};

export default Landing;
