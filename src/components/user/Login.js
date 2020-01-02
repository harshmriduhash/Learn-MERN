import React,{useState} from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });

    const {email, password} = formData;

    const onChange = e =>
    setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
      e.preventDefault();
      login(email,password);
    };

    // Redirect if logged in
    if(isAuthenticated){
      return <Redirect to="/dashboard" />;
    }


  return (
    <section className="login d-flex justify-content-center align-items-start">
      <div className="card card-width">
        <div className="card-header">
          <div className="card-text text-center">
            <h4>Login</h4>
          </div>
        </div>
        <div className="card-body">
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                name="email"
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block">Login</button>
            </div>
          </form>
        </div>
        <div className="card-footer text-center">
          <small>Doesn't have an account?</small>
          <Link to="/Register" className="ml-1 ">
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
