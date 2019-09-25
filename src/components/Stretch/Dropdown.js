import React from 'react';
import '../../App.css';
import MyBirthday from './MyBirthday';
import DougieBirthday from './DougieBirthday.js';
import SophieBirthday from './SophieBirthday';
import PhotoOfTheDay from '../PhotoOfTheDay';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
      //  displayMyBirthday: false
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  // this.showMyBirthday = this.showMyBirthday.bind(this);
  // this.hideMyBirthday = this.hideMyBirthday.bind(this);

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

  // showMyBirthday() {
  //   event.preventDefault();
  //   this.setState({displayMyBirthday: true}, () => {
  //     document.addEventListener("click", this.hideMyBirthday);
  //   });
  // }

  // hideMyBirthday() {
  //   this.setState({displayMyBirthday: false}, () => {
  //     document.removeEventListener('click', this.hideMyBirthday);
  //   });
  // }

  render() {
    return (
        <div  className="dropdown">
         <div className="button" onClick={this.showDropdownMenu}>NASA Photos</div>

          { this.state.displayMenu ? (
          <ul>
         <li><a href={<PhotoOfTheDay />}>Photo of the Day</a></li>
          <li><a href={<DougieBirthday />}>Dougie's Birthday</a></li>
         <li><a href={<SophieBirthday />}>Sophie's Birthday</a></li>
         <li><a href={<MyBirthday />}>My Birthday</a></li>
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