import React from "react";
import "../main.css";
import Clock from "react-live-clock";

class Main extends React.Component {
	render() {
		return (
			<div>
				<p>Hello World!</p>
				<Clock format={"dddd D MMMM YYYY"} ticking={true} timezone={"Europe/Stockholm"}/>
				<p/>
				<Clock format={"HH:mm:ss"} ticking={true} timezone={"Europe/Stockholm"}/>
			</div>
		);
	}
}

module.exports = Main;