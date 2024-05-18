import React, { Component } from 'react';

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
      ]
    };
  }

  // Progression 2
  renderItems = () => {
    const data = this.state.userData;
    return data.map((item) => (
      <p key={item.id} className="list-elements">
        <span>Id: {item.id}</span>
        <span>Name: {item.name}</span>
        <span>User Type: {item.user_type}</span>
      </p>
    ));
  };

  // Progression 3
  renderDesigners = () => {
    const designers = this.state.userData.filter(user => user.user_type === 'Designer');
    return designers.map((user) => (
      <p key={user.id} className="list-elements">
        <span>Id: {user.id}</span>
        <span>Name: {user.name}</span>
        <span>User Type: {user.user_type}</span>
      </p>
    ));
  };

  // Progression 4
  renderNamesStartingWithJ = () => {
    const usersWithJ = this.state.userData.filter(user => user.name.startsWith('J'));
    return usersWithJ.map((user) => (
      <p key={user.id} className="list-elements">
        <span>Id: {user.id}</span>
        <span>Name: {user.name}</span>
        <span>User Type: {user.user_type}</span>
      </p>
    ));
  };

  // Progression 5
  renderAgeFilteredUsers = () => {
    const ageFilteredUsers = this.state.userData.filter(user => user.age > 28 && user.age <= 50);
    return ageFilteredUsers.map((user) => (
      <p key={user.id} className="list-elements">
        <span>Id: {user.id}</span>
        <span>Name: {user.name}</span>
        <span>User Type: {user.user_type}</span>
      </p>
    ));
  };

  // Progression 6
  renderTotalExperienceOfDesigners = () => {
    const designers = this.state.userData.filter(user => user.user_type === 'Designer');
    const totalExperience = designers.reduce((total, user) => total + user.years, 0);
    return <div>{totalExperience}</div>;
  };

  render() {
    return (
      <React.Fragment>
          <h1>Display all items</h1>
          <div className="list-group">
          <div className="display-box">
            <p>{this.renderItems()}</p>
          </div>
        </div>
          <h1>Display based on user type</h1>
          <div className="list-group">
          <div className="display-box">
            <p>{this.renderDesigners()}</p>
          </div>
        </div>
          <h1>Filter all the data starting with j</h1>
          <div className="list-group">
          <div className="display-box">
            <p>{this.renderNamesStartingWithJ()}</p>
          </div>
        </div>
       
          <h1>Filter all the data based on age greater than 28 and age less than or equal to 50</h1>
          <div className="list-group">
          <div className="display-box">
            <p>{this.renderAgeFilteredUsers()}</p>
          </div>
        </div>
          <h1>Find the total years of Designers</h1>
          <div className="list-group">
          <div className="display-box">
            {this.renderTotalExperienceOfDesigners()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;



//https://6648470cd4459183b195f1c6--curious-crepe-29b9f2.netlify.app/
