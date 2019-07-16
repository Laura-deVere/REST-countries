import React from 'react';
import IosMoon from 'react-ionicons/lib/IosMoon';
import IosMoonOutline from 'react-ionicons/lib/IosMoonOutline';
import MdGlobe from 'react-ionicons/lib/MdGlobe';

const Nav = () => {
	return (
		<nav>
			<MdGlobe fontSize="60px" color="#ccc" rotate={true}/>
			<div className="set-theme">
				<IosMoon fontSize="1em" color="#000" />
				<span>Dark Mode</span>
				<IosMoonOutline fontSize="1em" color="#000" />
			</div>
		</nav>
	)
}

export default Nav;