import React from 'react';
import User from '../../models/user';
// import UserComponent from '../user/user-profile.component';

interface IUserCardProps {
  user: User;
}

export default class userCardComponent extends React.PureComponent<IUserCardProps> {
  render() {
    const User = this.props.user;
    console.log(User);
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{User.username}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">First Name: {User.firstName}</li>
          <li className="list-group-item">Last Name: {User.lastName}</li>
          <li className="list-group-item">Email: {User.email}</li>
          <li className="list-group-item">Role ID: {User.role.roleId}</li>
          <li className="list-group-item">
            <button className="btn btn-danger">Delete</button>
          </li>
        </ul>
      </div>
    )
  }
}