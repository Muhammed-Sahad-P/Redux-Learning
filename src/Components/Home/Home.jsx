import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Redux Todo App!</h1>
      <p>Your go-to app for managing tasks efficiently and staying organized.</p>
      <div className="links">
        <Link to="/productlist" className="home-link">View Products</Link>
        <Link to="/todo" className="home-link">Manage Todos</Link>
      </div>
    </div>
  );
};

export default Home;
