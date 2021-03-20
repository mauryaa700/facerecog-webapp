import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Ironman from './Ironman.png'
const Logo = () => {
	return (
		<div className='ma4 mt0'> 
			<Tilt className="Tilt br2 shadow-2" options={{ max : 66 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner "> 
 					<img style= {{padding: '10px'}} alt='logo' src={Ironman}/>
 				</div>
			</Tilt>

		</div>
 );
}


export default Logo;