import React,{ useState } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Register = ({setAlert, register, isAuthenticated}) => {
    const [ formData, setFromData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { username, email, password, password2 } = formData;

    const onChange = e => setFromData({ ...formData, [e.target.name] : e.target.value });
    
    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2){
            setAlert('Password do not match', 'danger');
        }else{
            register({username,email,password});
        }
    };

    if(isAuthenticated){
        return <Redirect to="/dashboard" />;
    }

    return (
    <section className="login d-flex justify-content-center align-items-start">
        <div className="card card-width">
            <div className="card-header">
                <div className="card-text text-center">
                  <h4>Create Account</h4>
                </div>
            </div>
                <div className="card-body">
                        <form className="form" onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input 
                                className="form-control" 
                                type="text" 
                                placeholder="Username" 
                                name="username" 
                                value={username}
                                onChange={e => onChange(e)} />
                            </div>                
                            <div className="form-group">
                                <input 
                                className="form-control" 
                                type="text" 
                                placeholder="Email" 
                                name="email" 
                                value={email}
                                onChange={e => onChange(e)} 
                                />
                            </div>                
                            <div className="form-group">
                                <input 
                                className="form-control" 
                                type="password" 
                                placeholder="Password" 
                                name="password" 
                                value={password}
                                onChange={e => onChange(e)} 
                                />    
                            </div>                
                            <div className="form-group">
                                <input 
                                className="form-control" 
                                type="password" 
                                placeholder="Verify Password" 
                                name="password2" 
                                value={password2}
                                onChange={e => onChange(e)} 
                                />    
                            </div>                
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Create Account</button>
                            </div>                
                        </form>
                </div>
                <div className="card-footer text-center">
                        <small>Already have an account?</small>
                        <Link to="/login" className="ml-1 ">Login</Link>
                </div>
        </div>
    </section>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps, {setAlert, register})(Register);
