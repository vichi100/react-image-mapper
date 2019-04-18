var React = require('react');var ReactDOM = require('react-dom');var ImageMapper = require('../../src/ImageMapper'); import { Router, browserHistory } from 'react-router';var MAP ={	name: 'my-map',	areas:[		{'name':'BM-1000003-BM2' , href:'#BM-1000003-BM2', shape: 'rect', coords: [195,89,250,119], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-AM3' , href:'#BM-1000003-AM3', shape: 'rect', coords: [265,7,319,28], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-BM1' , href:'#BM-1000003-BM1', shape: 'rect', coords: [143,89,175,134], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-AM2' , href:'#BM-1000003-AM2', shape: 'rect', coords: [191,8,247,30], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-AM1' , href:'#BM-1000003-AM1', shape: 'rect', coords: [143,20,173,67], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-BM5' , href:'#BM-1000003-BM5', shape: 'rect', coords: [233,161,296,191], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-BM4' , href:'#BM-1000003-BM4', shape: 'rect', coords: [337,107,371,173], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-AM5' , href:'#BM-1000003-AM5', shape: 'rect', coords: [221,52,287,75], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-BM3' , href:'#BM-1000003-BM3', shape: 'rect', coords: [259,86,314,117], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-AM4' , href:'#BM-1000003-AM4', shape: 'rect', coords: [341,17,368,68], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-C2' , href:'#BM-1000003-C2', shape: 'rect', coords: [454,85,506,120], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-R1' , href:'#BM-1000003-R1', shape: 'rect', coords: [384,290,423,337], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-R4' , href:'#BM-1000003-R4', shape: 'rect', coords: [466,213,506,260], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-R5' , href:'#BM-1000003-R5', shape: 'rect', coords: [466,305,504,352], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-R2' , href:'#BM-1000003-R2', shape: 'rect', coords: [382,190,422,234], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-R3' , href:'#BM-1000003-R3', shape: 'rect', coords: [441,134,482,178], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-L2' , href:'#BM-1000003-L2', shape: 'rect', coords: [102,264,142,309], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-L3' , href:'#BM-1000003-L3', shape: 'rect', coords: [55,156,95,200], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-L1' , href:'#BM-1000003-L1', shape: 'rect', coords: [46,299,89,344], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-L4' , href:'#BM-1000003-L4', shape: 'rect', coords: [104,194,143,238], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-D2' , href:'#BM-1000003-D2', shape: 'rect', coords: [95,83,128,121], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-D3' , href:'#BM-1000003-D3', shape: 'rect', coords: [524,127,564,210], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-D1' , href:'#BM-1000003-D1', shape: 'rect', coords: [51,84,86,122], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-D4' , href:'#BM-1000003-D4', shape: 'rect', coords: [530,252,563,343], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-DF1' , href:'#BM-1000003-DF1', shape: 'rect', coords: [155,340,189,376], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-DF4' , href:'#BM-1000003-DF4', shape: 'rect', coords: [337,205,370,243], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-DF3' , href:'#BM-1000003-DF3', shape: 'rect', coords: [338,274,369,310], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , {'name':'BM-1000003-DF2' , href:'#BM-1000003-DF2', shape: 'rect', coords: [337,340,369,378], alwaysOn:true , preFillColor: 'rgba(0,255,0, .2)'} , 			]};var URL = 'http://199.180.133.121/imagemap/layoutimage/1000003.png'; var App = React.createClass({	getInitialState() {		return { hoveredArea: null, msg: null, moveMsg: null };	},	load() {		this.setState({ msg: 'Interact with image !' }); 	},		clicked(area) {		this.setState({ msg: `You clicked on ${area.href} at coords ${JSON.stringify(area.coords)} !`});			},	clickedOutside(evt) {		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };		this.setState({ msg: `You clicked on the image at coords ${JSON.stringify(coords)} !` });	},	moveOnImage(evt) {		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };		this.setState({ moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !` });	},	enterArea(area) {		this.setState({ hoveredArea: area, msg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)} !` });	},	leaveArea(area) {		this.setState({ hoveredArea: null, msg: `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)} !` });	},	moveOnArea(area, evt) {		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };		this.setState({ moveMsg: `You moved on ${area.shape} ${area.name} at coords ${JSON.stringify(coords)} !` });	},	getTipPosition(area) {		return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };	},	render () {		return (						<div className='grid'>			<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>				<div className="presenter">					<div style={{ position: 'relative' }}>						<ImageMapper src={URL} map={MAP} 							onLoad={() => this.load()}							onClick={area => this.clicked(area)}							onMouseEnter={area => this.enterArea(area)}							onMouseLeave={area => this.leaveArea(area)}							onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}							onImageClick={evt => this.clickedOutside(evt)}							onImageMouseMove={evt => this.moveOnImage(evt)}						/>										</div> 									</div>						</div>		);	}});ReactDOM.render(<App />, document.getElementById('app'));