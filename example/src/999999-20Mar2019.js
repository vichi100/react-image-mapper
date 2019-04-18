var React = require("react");
var ReactDOM = require("react-dom");
var ImageMapper = require("../../src/ImageMapper");
import { Router, browserHistory } from "react-router";
var MAP = {
	name: "my-map",
	areas: [
		{
			name: "TS-999999-PDR",
			href: "#TS-999999-PDR",
			shape: "rect",
			coords: [463, 306, 558, 379],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-C1",
			href: "#TS-999999-C1",
			shape: "rect",
			coords: [299, 308, 417, 347],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-03",
			href: "#TS-999999-03",
			shape: "rect",
			coords: [124, 77, 171, 133],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-14",
			href: "#TS-999999-14",
			shape: "rect",
			coords: [333, 193, 371, 228],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-25",
			href: "#TS-999999-25",
			shape: "rect",
			coords: [460, 247, 488, 276],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-02",
			href: "#TS-999999-02",
			shape: "rect",
			coords: [37, 76, 91, 135],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-24",
			href: "#TS-999999-24",
			shape: "rect",
			coords: [520, 273, 557, 295],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-05",
			href: "#TS-999999-05",
			shape: "rect",
			coords: [298, 76, 347, 123],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-04",
			href: "#TS-999999-04",
			shape: "rect",
			coords: [232, 73, 281, 122],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-18",
			href: "#TS-999999-18",
			shape: "rect",
			coords: [329, 264, 368, 294],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-06",
			href: "#TS-999999-06",
			shape: "rect",
			coords: [377, 75, 426, 124],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-9A",
			href: "#TS-999999-9A",
			shape: "rect",
			coords: [384, 191, 423, 230],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-19",
			href: "#TS-999999-19",
			shape: "rect",
			coords: [383, 264, 416, 291],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-21",
			href: "#TS-999999-21",
			shape: "rect",
			coords: [523, 187, 557, 211],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-20",
			href: "#TS-999999-20",
			shape: "rect",
			coords: [459, 187, 487, 217],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-01",
			href: "#TS-999999-01",
			shape: "rect",
			coords: [41, 153, 87, 214],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-12",
			href: "#TS-999999-12",
			shape: "rect",
			coords: [383, 141, 429, 178],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-23",
			href: "#TS-999999-23",
			shape: "rect",
			coords: [522, 245, 562, 265],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-11",
			href: "#TS-999999-11",
			shape: "rect",
			coords: [336, 142, 370, 179],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		},
		{
			name: "TS-999999-22",
			href: "#TS-999999-22",
			shape: "rect",
			coords: [523, 219, 559, 238],
			alwaysOn: true,
			preFillColor: "rgba(0,255,0, .2)"
		}
	]
};
var URL = "http://199.180.133.121/imagemap/layoutimage/999999.png";
var App = React.createClass({
	getInitialState() {
		return { hoveredArea: null, msg: null, moveMsg: null };
	},
	load() {
		this.setState({ msg: "Interact with image !" });
	},
	clicked(area) {
		this.setState({
			msg: `You clicked on ${area.href} at coords ${JSON.stringify(
				area.coords
			)} !`
		});
	},
	clickedOutside(evt) {
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({
			msg: `You clicked on the image at coords ${JSON.stringify(coords)} !`
		});
	},
	moveOnImage(evt) {
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({
			moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`
		});
	},
	enterArea(area) {
		this.setState({
			hoveredArea: area,
			msg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(
				area.coords
			)} !`
		});
	},
	leaveArea(area) {
		this.setState({
			hoveredArea: null,
			msg: `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(
				area.coords
			)} !`
		});
	},
	moveOnArea(area, evt) {
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({
			moveMsg: `You moved on ${area.shape} ${
				area.name
			} at coords ${JSON.stringify(coords)} !`
		});
	},
	getTipPosition(area) {
		return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
	},
	render() {
		return (
			<div className="grid">
				{" "}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js" />{" "}
				<div className="presenter">
					{" "}
					<div style={{ position: "relative" }}>
						{" "}
						<ImageMapper
							src={URL}
							map={MAP}
							onLoad={() => this.load()}
							onClick={area => this.clicked(area)}
							onMouseEnter={area => this.enterArea(area)}
							onMouseLeave={area => this.leaveArea(area)}
							onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
							onImageClick={evt => this.clickedOutside(evt)}
							onImageMouseMove={evt => this.moveOnImage(evt)}
						/>{" "}
					</div>{" "}
				</div>{" "}
			</div>
		);
	}
});
ReactDOM.render(<App />, document.getElementById("app"));
