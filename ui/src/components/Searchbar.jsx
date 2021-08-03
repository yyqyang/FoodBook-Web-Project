import React from 'react';
class Searchbar extends React.Component {
    render() {
      return (
        <div>
        <select className="selectpicker" data-live-search="true">
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Barbecue</option>
        </select>
        </div>
       
      )
    }
  }
export default Searchbar;