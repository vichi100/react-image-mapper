var React = require('react');
var ReactDOM = require('react-dom');
// var ImageMapper = require('react-image-mapper'); 
var ImageMapper = require('../../src/ImageMapper'); 
import { Router, browserHistory } from 'react-router';

// var MAP = {
// 	name: 'my-map',
// 	areas: [
// 		{name: '1', href:'#1', shape: 'poly', coords: [25,33,27,300,128,240,128,94], preFillColor: 'green', fillColor: 'blue'},
// 		{name: '2', href:'#1', shape: 'poly', coords: [219,118,220,210,283,210,284,119], preFillColor: 'pink'},
// 		{name: '3', href:'#1', shape: 'poly', coords: [381,241,383,94,462,53,457,282], fillColor: 'yellow'},
// 		{name: '4', href:'#1', shape: 'poly', coords: [245,285,290,285,274,239,249,238], preFillColor: 'red'},
// 		{name: '5', href:'#1', shape: 'circle', coords: [170, 100, 25 ]},
// 	]
// };


var MAP = {
	name: 'my-map',
	areas: [
		//{id:'available', data-mapid:'available', data-maphilight:'{"fillColor":"027ce8","alwaysOn":true, "fillOpacity":0.5, "strokeColor":"027ce8"}' , href:'#BJ-1000004-VIP2' ,title:'BJ-1000004-VIP2', alt:'BJ-1000004-VIP2', coords:'42,182,96,240', shape:'rect'},
		{ href:'#HOP-1000001-V1', shape: 'rect', coords: [268,274,306,303], preFillColor: '#a5d6a7', alwaysOn:true},
		{'name': '3', href:'#HOP-1000001-V2', shape: 'rect', coords: [222,276,258,304], preFillColor: 'rgba(0,255,0, .2)', alwaysOn:true},
		{name: '4', href:'#HOP-1000001-V3', shape: 'rect', coords: [309,346,347,375], preFillColor: '#027ce8', alwaysOn:true},
		{name: '5', href:'#HOP-1000001-V4', shape: 'rect', coords: [409,234,467,260], preFillColor: '#027ce8', alwaysOn:true},
	]
};

var MAP ={
	name: 'my-map',
	area:[
		tables data append here:
	]
	
}

var URL = 'https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg';

var App = React.createClass({
	getInitialState() {
		return { hoveredArea: null, msg: null, moveMsg: null };
	},
	load() {
		this.setState({ msg: 'Interact with image !' }); 
	},
	
	clicked(area) {
		this.setState({ msg: `You clicked on ${area.href} at coords ${JSON.stringify(area.coords)} !`});
		browserHistory.push(`vichi`); 
		//this.context.router.push(`${area.href}`);
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
						<ImageMapper src={URL} map={MAP} width={500}
							onLoad={() => this.load()}
							onClick={area => this.clicked(area)}
							onMouseEnter={area => this.enterArea(area)}
							onMouseLeave={area => this.leaveArea(area)}
							onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
							onImageClick={evt => this.clickedOutside(evt)}
							onImageMouseMove={evt => this.moveOnImage(evt)}
						/>
						{
							this.state.hoveredArea &&
							<span className="tooltip" style={{ ...this.getTipPosition(this.state.hoveredArea)}}>
								{ this.state.hoveredArea && this.state.hoveredArea.name}
							</span>
						}
					</div>
					<pre className="message">{this.state.msg ? this.state.msg : null}</pre>
					<pre>{this.state.moveMsg ? this.state.moveMsg : null}</pre>
				</div>
				<div className="source">
					<h2>Example with custom tooltips :</h2>
					<p>(message logic is not present, to keep it clear)</p>
					<pre><code>{
						'<div className="container">\n' +
						'    <ImageMapper src={URL} map={MAP} width={500}\n' +
						'    	onLoad={() => this.load()}\n' +
						'    	onClick={area => this.clicked(area)}\n' +
						'    	onMouseEnter={area => this.enterArea(area)}\n' +
						'    	onMouseLeave={area => this.leaveArea(area)}\n' +
						'    	onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}\n' +
						'    	onImageClick={evt => this.clickedOutside(evt)}\n' +
						'    	onImageMouseMove={evt => this.moveOnImage(evt)}\n' +
						'    />\n' +
						'    {\n' +
						'    	this.state.hoveredArea &&\n' +
						'    	<span className="tooltip"\n' +
						'    	    style={{ ...this.getTipPosition(this.state.hoveredArea)}}>\n' +
						'    		{ this.state.hoveredArea && this.state.hoveredArea.name}\n' +
						'    	</span>\n' +
						'    }\n' +
						'</div>\n'
					}</code></pre>
					<pre><code className="json">{
						'URL = "https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg"\n' +
						'MAP = {\n' +
						'  name: "my-map",\n' +
						'  areas: [\n' +
						'    { name: "1", shape: "poly", coords: [25,33,27,300,128,240,128,94], preFillColor: "green", fillColor: "blue"  },\n' +
						'    { name: "2", shape: "poly", coords: [219,118,220,210,283,210,284,119], preFillColor: "pink"  },\n' +
						'    { name: "3", shape: "poly", coords: [381,241,383,94,462,53,457,282], fillColor: "yellow"  },\n' +
						'    { name: "4", shape: "poly", coords: [245,285,290,285,274,239,249,238], preFillColor: "red"  },\n' +
						'    { name: "5", shape: "circle", coords: [170, 100, 25 ] },\n' +
						'  ]\n}'
					}</code></pre>

					Handler details : &nbsp;
					<span onClick={() => this.setState({ codeDetails: !this.state.codeDetails })}>
						{ this.state.codeDetails ? '[-]' : '[+]' }
					</span>
					<pre><code className="js" style={{ display: this.state.codeDetails ? 'block' : 'none' }}>{
						'enterArea(area) {\n' +
						'    this.setState({ hoveredArea: area });\n' +
						'}\n\n' +
						'leaveArea(area) {\n' +
						'    this.setState({ hoveredArea: null });\n' +
						'}\n\n' +
						'getTipPosition(area) {\n' +
						'    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };\n' +
						'}\n\n'
					}</code></pre>

					Styling details : &nbsp;
					<span onClick={() => this.setState({ stylindDetails: !this.state.stylindDetails })}>
						{ this.state.stylindDetails ? '[-]' : '[+]' }
					</span>
					<pre><code className="css" style={{ display: this.state.stylindDetails ? 'block' : 'none' }}>{
						'.container {\n' +
						'    position: relative;\n' +
						'}\n\n' +
						'.tooltip {\n' +
						'    position: absolute;\n' +
						'    color: #fff;\n' +
						'    padding: 10px;\n' +
						'    background: rgba(0,0,0,0.8);\n' +
						'    transform: translate3d(-50%, -50%, 0);\n' +
						'    border-radius: 5px;\n' +
						'    pointer-events: none;\n' +
						'    z-index: 1000;\n' +
						'}\n'
					}</code></pre>
				</div>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
