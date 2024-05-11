import React from 'react';
import spinner from './spinner.gif';
import './spinner.css';

export default () => {
  return (
    <div class="no-freeze-spinner">
  
    <img src="https://images.pexels.com/photos/606542/pexels-photo-606542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    <div id="no-freeze-spinner">
      <div>
        <i class="material-icons">
          account_circle
        </i>
        <i class="material-icons">
         home
        </i>
        <i class="material-icons">
          work
        </i>
        <div>
        </div>
      </div>
    </div>
  </div>
  );
};