import React from 'react';
import './App.css';
import pic from './futurama.jpg';
import Dropdown from './Dropdown.js';

function App() {
  return (
   <div>    
    <div className="Header">
     <div className="Header-menu">
      <a className="Header-menu" href="/react">MENU</a>
      <span>|</span>
      <a className="Header-menu" href="/sometext">SOME TEXT</a>
      <span>|</span>
      <a className="Header-menu" href="/anotheritem" >ANOTHER ITEM</a>
      <span>|</span>	
      <a className="Header-menu" href="/onemore">ONE MORE</a>
      <span>|</span>
      <a className="Header-menu" href="/andlastone">AND LAST ONE</a>
     </div>

	<div className="row">
	 <div className="column" style={{fontSize: "20px"}}>
	  <div>
	   <span style={{fontWeight: "bold", textAlign: "left", marginLeft: "20px"}}>DEMO</span>
 	   <span>SITE</span>
	  </div>
	  </div>
	 <div className="column" style={{fontWeight: "bold", textAlign: "right"}} >
          <div style={{fontWeight: "bold", allignment: "right"}}>	 
	  <a className="Header-menu" href="/home">HOME</a>
	  <a className="Header-menu" href="/service">SERVICE</a>
          <Dropdown/>
	  <a className="Header-menu" href="/about">ABOUT ME</a>
	  <a className="Header-menu" href="/contact">CONTACT</a> 	
	  </div>	
	 </div> 
	</div>
    </div>

    <div className="Welcome">
     <div className="row">
      <div className="column" style={{
			              backgroundColor: "#0086b3",
				      padding: "20px",
				      border: "solid",
 				      borderColor: "white",
				      borderLeft: "250px solid white",
				      borderTop: "50px solid white",
				      borderRight: "50px solid white",
				     }}>
       <div>
       <p style={{fontWeight: "bold", color: "white", fontSize: "22px"}}>WELCOME</p>
       <hr style={{maxWidth: "100px", width: "30px", margin: "0px", color: "white"}}/>
       <p style={{color: "white",		       
		       backgroundColor: "#0086b3",
		       borderColor: "white"}}>
	At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
       </p>
       </div>
       <button style={{color: "white",
		       border: "solid",
		       width: "120px",
                       lenght: "30px",
                       margin: "10px",
		       marginLeft: "50%",
		       marginTop: "30%",
		       backgroundColor: "#0086b3",
		       borderColor: "white"}}>
	LEARN MORE
       </button>
      </div>
      <div className="column" style={{			              				      
				      border: "solid",
 				      borderColor: "white",
				      borderRight: "223px solid white",
				      borderTop: "50px solid white",
				     }}>
       <div className="row">
       	<img src={pic}/>
       </div>
       <div className="row">
	<div style={{backgroundColor: "#cccccc", paddingLeft: "40px", paddingRight: "20px" }} >
	<p style={{fontWeight: "bold", color: "black"}}> UI/UX Design </p>
	<p style={{color: "#595959"}} >Nsi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
	</div>
       </div>
      </div>
     </div>
    </div>


   </div>
     
	
  );
}

export default App;
