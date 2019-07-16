import React from 'react';
import './style.css';


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
        <div  className="dropdown" style = {{background: "#0086b3" }} >
	 <div className="button" onClick={this.showDropdownMenu}>WORKS </div>
          { this.state.displayMenu ? (
           <ul>    		   
            <li><a href="/all">ALL</a></li>
            <li><a href="/graphic">GRAPHIC</a></li>
            <li><a href="/design">DESIGN</a></li>
    	    <li><a href="/logo">LOGO</a></li>
    	    <li><a href="/website">WEBSITE</a></li>
           </ul>
           ):(null)
          }
	 </div>
    );
  }


}


export default Dropdown;
