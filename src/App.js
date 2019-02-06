import React, { Component } from 'react';
import ResponsiveContainer from "react-responsive-widget";

import imageBck from "./images/photo-rubrique-1_0.jpg";

var myStyle = {
	backgroundImage: 'url(' + imageBck + ')',
	backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
	flex: 1,
	flexDirection: 'row',
	alignItems: 'strech',
	justifyContent: 'center',
	padding: '10px 10px 10px 10px'
}

var myStyleDiv = {

	minWidth: 200

}

let myCol = "app-col-xs-12 app-col-sm-3 app-col-md-3 app-col-lg-3"
//let myCol = "app-col"

class App extends Component {

 render() {
    return (
<ResponsiveContainer>
                <div className="app-row" style={myStyle}>
                    <div className={myCol}><img src={require('./images/eye.svg')} style={myStyleDiv} /></div>
                    <div className={myCol}><img src={require('./images/nurse.svg')} style={myStyleDiv} /></div>
                    <div className={myCol}><img src={require('./images/bed.svg')} style={myStyleDiv} /></div>
		   <div className={myCol}><img src={require('./images/heart.svg')} style={myStyleDiv} /></div>


		</div>
            </ResponsiveContainer>
    );
  }
}

export default App;
