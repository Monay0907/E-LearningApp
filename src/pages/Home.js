import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './Home.css';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to Learnify !</h1>
        <p>
        Welcome to Learnify, your ultimate one-stop destination for online learning. 
        </p>
        <p>
        At Learnify, we are dedicated to empowering individuals like you to embark on a transformative journey towards knowledge and personal growth. With a diverse array of courses tailored to suit your interests and aspirations, you can unlock your full potential and achieve greatness.
        </p>
        {user ? (
          <Link to="/dashboard" className="cta-button">
            Go to Dashboard
          </Link>
        ) : (
          <Link to="/login" className="cta-button">
            Browse Courses
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
