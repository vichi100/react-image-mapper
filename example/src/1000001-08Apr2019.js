var React = require('react');var ReactDOM = require('react-dom');var ImageMapper = require('../../src/ImageMapper'); import { Router, browserHistory } from 'react-router';var MAP ={	name: 'my-map',	areas:[		{'name':'HOP-1000001-V5' , href:'#HOP-1000001-V5', shape: 'rect', coords: [491,337,563,386], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'HOP-1000001-V6' , href:'#HOP-1000001-V6', shape: 'rect', coords: [404,339,476,386], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'HOP-1000001-V7' , href:'#HOP-1000001-V7', shape: 'rect', coords: [230,334,301,388], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'HOP-1000001-V8' , href:'#HOP-1000001-V8', shape: 'rect', coords: [147,335,215,385], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'HOP-1000001-V1' , href:'#HOP-1000001-V1', shape: 'rect', coords: [197,17,277,71], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'HOP-1000001-V2' , href:'#HOP-1000001-V2', shape: 'rect', coords: [294,19,373,72], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'HOP-1000001-V3' , href:'#HOP-1000001-V3', shape: 'rect', coords: [390,17,468,71], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'HOP-1000001-V4' , href:'#HOP-1000001-V4', shape: 'rect', coords: [486,16,565,73], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'HOP-1000001-L3' , href:'#HOP-1000001-L3', shape: 'rect', coords: [468,237,508,283], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'HOP-1000001-L4' , href:'#HOP-1000001-L4', shape: 'rect', coords: [326,254,371,298], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'HOP-1000001-L5' , href:'#HOP-1000001-L5', shape: 'rect', coords: [183,245,225,292], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'HOP-1000001-L6' , href:'#HOP-1000001-L6', shape: 'rect', coords: [131,82,171,130], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'HOP-1000001-L1' , href:'#HOP-1000001-L1', shape: 'rect', coords: [328,107,374,151], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'HOP-1000001-L2' , href:'#HOP-1000001-L2', shape: 'rect', coords: [468,88,506,133], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'HOP-1000001-PDR' , href:'#HOP-1000001-PDR', shape: 'rect', coords: [12,273,131,388], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , 			]};var URL = 'http://199.180.133.121/imagemap/layoutimage/1000001.png'; var App = React.createClass({	getInitialState() {		return { hoveredArea: null, msg: null, moveMsg: null };	},	load() {		this.setState({ msg: 'Interact with image !' }); 	},		clicked(area) {		this.setState({ msg: `You clicked on ${area.href} at coords ${JSON.stringify(area.coords)} !`});			},	clickedOutside(evt) {		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };		this.setState({ msg: `You clicked on the image at coords ${JSON.stringify(coords)} !` });	},	moveOnImage(evt) {		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };		this.setState({ moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !` });	},	enterArea(area) {		this.setState({ hoveredArea: area, msg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)} !` });	},	leaveArea(area) {		this.setState({ hoveredArea: null, msg: `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)} !` });	},	moveOnArea(area, evt) {		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };		this.setState({ moveMsg: `You moved on ${area.shape} ${area.name} at coords ${JSON.stringify(coords)} !` });	},	getTipPosition(area) {		return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };	},	render () {		return (						<div className='grid'>			<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>				<div className="presenter">					<div style={{ position: 'relative' }}>						<ImageMapper src={URL} map={MAP} 							onLoad={() => this.load()}							onClick={area => this.clicked(area)}							onMouseEnter={area => this.enterArea(area)}							onMouseLeave={area => this.leaveArea(area)}							onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}							onImageClick={evt => this.clickedOutside(evt)}							onImageMouseMove={evt => this.moveOnImage(evt)}						/>										</div> 									</div>						</div>		);	}});ReactDOM.render(<App />, document.getElementById('app'));