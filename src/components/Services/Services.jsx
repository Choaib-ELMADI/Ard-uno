import React from 'react';

import './Services.css';
import { services } from '../../data';



const Services = () => {
  return (
    <div id='Services' className='app__services'>
        <div className='app__services-intro'>
          <div className='app__services-intro-content'>
            <small><b>Our Services</b></small>
            <h1>Your next <br/>Innovation.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur 
              adipisicing elit. Corporis accusamus 
              voluptas rerum.
            </p>
          </div>
        </div>
        <div className="app__services-main">
          {
            services.map(service => (
              <div className='card' key={ service.title }>
                <div className='icon'>
                  <img src={ service.icon } alt={ service.title } />
                </div>
                <h3>{ service.title }</h3>
                <p>{ service.desc }</p>
              </div>
            ))
          }
          <div className="app__services-more"><small>More information</small></div>
        </div>
    </div>
  );
};

export default Services;