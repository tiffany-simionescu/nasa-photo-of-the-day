import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';

class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu); 
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown">
         <div className="button" onClick={this.showDropdownMenu}>NASA Photos</div>

          { this.state.displayMenu ? (
          <ul>
         <li><Link to="/photo-of-the-day">Photo of the Day</Link></li>
         <li><Link to="/dougie-birthday">Dougie's Birthday</Link></li>
         <li><Link to="/sophie-birthday">Sophie's Birthday</Link></li>
         <li><Link to="/my-birthday">My Birthday</Link></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>
    );
  }
}

export default Dropdown;