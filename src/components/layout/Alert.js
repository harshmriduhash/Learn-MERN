import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({alerts}) => 
    alerts !== null && 
    alerts.length > 0 && 
    alerts.map( alert => (
    <div key={alert.id} 
    className={`container mt-3 w-50 alert alert-${alert.alertType}`}
    >
        {alert.msg}
    </div>
));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert);
