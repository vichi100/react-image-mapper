var React = require('react');
var ReactDOM = require('react-dom');
var ImageMapper = require('../../src/ImageMapper'); 
import { Router, browserHistory } from 'react-router';

var MAP ={
	name: 'my-map',
	areas:[
		tables data append here:
	]
};

var URL = 'http://199.180.133.121/imagemap/layoutimage/layoutImageOfClub.png'; 

var App = React.createClass({
	getInitialState() {
		return { hoveredArea: null, msg: null, moveMsg: null };
	},
	load() {
		this.setState({ msg: 'Interact with image !' }); 
	},
	
	clicked(area) {
		this.setState({ msg: `You clicked on ${area.href} at coords ${JSON.stringify(area.coords)} !`});
		
	},
	clickedOutside(evt) {
		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({ msg: `You clicked on the image at coords ${JSON.stringify(coords)} !` });
	},
	moveOnImage(evt) {
		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({ moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !` });
	},
	enterArea(area) {
		this.setState({ hoveredArea: area, msg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)} !` });
	},
	leaveArea(area) {
		this.setState({ hoveredArea: null, msg: `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)} !` });
	},
	moveOnArea(area, evt) {
		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({ moveMsg: `You moved on ${area.shape} ${area.name} at coords ${JSON.stringify(coords)} !` });
	},

	getTipPosition(area) {
		return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
	},

	render () {
		return (
			
			<div className='grid'>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>
				<div className="presenter">
					<div style={{ position: 'relative' }}>
						<ImageMapper src={URL} map={MAP} 
							onLoad={() => this.load()}
							onClick={area => this.clicked(area)}
							onMouseEnter={area => this.enterArea(area)}
							onMouseLeave={area => this.leaveArea(area)}
							onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
							onImageClick={evt => this.clickedOutside(evt)}
							onImageMouseMove={evt => this.moveOnImage(evt)}
						/>
					
					</div> 
					
				</div>

			
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
