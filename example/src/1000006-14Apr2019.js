var React = require('react');var ReactDOM = require('react-dom');var ImageMapper = require('../../src/ImageMapper'); import { Router, browserHistory } from 'react-router';var MAP ={	name: 'my-map',	areas:[		{'name':'RD-1000006-T5' , href:'#RD-1000006-T5', shape: 'rect', coords: [382,50,410,87], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-T6' , href:'#RD-1000006-T6', shape: 'rect', coords: [305,52,337,89], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-T7' , href:'#RD-1000006-T7', shape: 'rect', coords: [388,156,416,192], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-T8' , href:'#RD-1000006-T8', shape: 'rect', coords: [392,270,421,305], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-T9' , href:'#RD-1000006-T9', shape: 'rect', coords: [307,159,334,194], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-T16' , href:'#RD-1000006-T16', shape: 'rect', coords: [199,53,228,88], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-T17' , href:'#RD-1000006-T17', shape: 'rect', coords: [138,53,169,90], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-T18' , href:'#RD-1000006-T18', shape: 'rect', coords: [80,53,109,90], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-VIP2' , href:'#RD-1000006-VIP2', shape: 'rect', coords: [325,348,367,385], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-T19' , href:'#RD-1000006-T19', shape: 'rect', coords: [26,51,54,87], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-VIP1' , href:'#RD-1000006-VIP1', shape: 'rect', coords: [443,349,483,386], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-S1' , href:'#RD-1000006-S1', shape: 'rect', coords: [235,157,265,195], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-VIP3' , href:'#RD-1000006-VIP3', shape: 'rect', coords: [207,349,248,387], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-T3' , href:'#RD-1000006-T3', shape: 'rect', coords: [454,157,485,193], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-T10' , href:'#RD-1000006-T10', shape: 'rect', coords: [153,158,185,195], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-T11' , href:'#RD-1000006-T11', shape: 'rect', coords: [264,275,292,310], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'RD-1000006-T12' , href:'#RD-1000006-T12', shape: 'rect', coords: [158,274,188,310], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , 			]};var URL = 'http://199.180.133.121/imagemap/layoutimage/1000006.png'; var App = React.createClass({	getInitialState() {		return { hoveredArea: null, msg: null, moveMsg: null };	},	load() {		this.setState({ msg: 'Interact with image !' }); 	},		clicked(area) {		this.setState({ msg: `You clicked on ${area.href} at coords ${JSON.stringify(area.coords)} !`});			},	clickedOutside(evt) {		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };		this.setState({ msg: `You clicked on the image at coords ${JSON.stringify(coords)} !` });	},	moveOnImage(evt) {		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };		this.setState({ moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !` });	},	enterArea(area) {		this.setState({ hoveredArea: area, msg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)} !` });	},	leaveArea(area) {		this.setState({ hoveredArea: null, msg: `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)} !` });	},	moveOnArea(area, evt) {		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };		this.setState({ moveMsg: `You moved on ${area.shape} ${area.name} at coords ${JSON.stringify(coords)} !` });	},	getTipPosition(area) {		return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };	},	render () {		return (						<div className='grid'>			<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>				<div className="presenter">					<div style={{ position: 'relative' }}>						<ImageMapper src={URL} map={MAP} 							onLoad={() => this.load()}							onClick={area => this.clicked(area)}							onMouseEnter={area => this.enterArea(area)}							onMouseLeave={area => this.leaveArea(area)}							onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}							onImageClick={evt => this.clickedOutside(evt)}							onImageMouseMove={evt => this.moveOnImage(evt)}						/>										</div> 									</div>						</div>		);	}});ReactDOM.render(<App />, document.getElementById('app'));