import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';
import '../../App.css';

const Navbar = ({ auth: {isAuthenticated, loading }, logout }) =>  {
      let logoName = 'MakeItSimple';
      const authLinks = (
          <Link to='/' onClick={logout} className="nav-link btn btn-primary">Logout</Link>
      );
      const guestLinks = (
          <Link to="/Login" className="nav-link btn btn-primary">Login</Link>  
      );

      const authRoutes = (
        <Link to='/dashboard' className="nav-link text-light font-weight-bold text-uppercase">{logoName}</Link>
      );

      const guestRoutes = (
        <Link to='/' className="nav-link text-light font-weight-bold text-uppercase">{logoName}</Link>
      )

      return (
        <header className="container-fluid  header">
          <nav className="navbar d-flex justify-content-between align-items-center mx-auto">
            {!loading && (<Fragment>{isAuthenticated ? authRoutes : guestRoutes}</Fragment>)}
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}    
          </nav>     
        </header>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps,{logout})(Navbar);
