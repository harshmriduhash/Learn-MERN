import React, { Fragment } from 'react';
import Events from '../user/Events';
import Reports from '../user/Reports';

import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Fragment>
      <div className="create-event d-flex justify-content-end align-items-center">
        <Link to="/dashboard/create-events" className="btn btn-primary">
          <i className="fas fa-plus"></i>
        </Link>
      </div>
      <div className="dashboard">
        <Events />
        <Reports />
      </div>
    </Fragment>
  );
};

export default Dashboard;
