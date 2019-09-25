import React from 'react';
import '../../App.css';

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
         <li><a href="#photo-of-the-day">Photo of the Day</a></li>
         <li><a href="#dougie-birthday">Dougie's Birthday</a></li>
         <li><a href="#sophie-birthday">Sophie's Birthday</a></li>
         <li><a href="#my-birthday">My Birthday</a></li>
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