class FontChooser extends React.Component {
	constructor(props) {
		super(props);

		this.state = {hidden: true, 
									bold: this.props.bold === 'true' ? true:false, 
									fontSize: Number(this.props.size), 
									fontColor: 'black'};
		/*
		this.print();
		*/
		if (this.state.bold){
			document.getElementById('boldCheckbox').click();
		}
	}
	
	print() {
		var hidden = this.state.hidden === true ? 'true':'false';
		var bold = this.state.bold === true ? 'true':'false';
		var stateString = "hidden:"+hidden+'<br/>bold:'+bold+'<br/>fontSize:'+
				this.state.fontSize+'<br/>fontColor:'+this.state.fontColor;
		
		document.getElementById('test').innerHTML = stateString;
	}

	showControls() {
		this.setState({hidden: !this.state.hidden});
	}

	toggleBold() {
		this.setState({bold: !this.state.bold});
	}

	decreaseFont() {
		var size = ((Number(this.state.fontSize) - 1) >= this.props.min) ?
			Number(this.state.fontSize) - 1 : this.props.min;
		this.setState({fontSize: size});
		this.setState( {fontColor: size == this.props.min ? 'red': 'black'} );
	}

	increaseFont() {
		var size = ((Number(this.state.fontSize) + 1) <= this.props.max) ?
			Number(this.state.fontSize) + 1 : this.props.max;
		this.setState({fontSize: size});
		this.setState( {fontColor: size == this.props.max ? 'red': 'black'} );
	}
	
	reset() {
		this.setState( {fontSize: Number(this.props.size)} );
	}

	render() {
		var weight = this.state.bold === true ? 'bold' : 'normal';
		return ( 
			<div>
			<input type = "checkbox" defaultChecked={this.state.bold} id = "boldCheckbox" hidden = {this.state.hidden} 
				onClick = {this.toggleBold.bind(this)}/>
			<button id = "decreaseButton" hidden = {this.state.hidden} 
				onClick = {this.decreaseFont.bind(this)}> - </button>
			<span id = "fontSizeSpan" hidden = {this.state.hidden} 
				onDoubleClick = {this.reset.bind(this)}
				style = { {
								 color: this.state.fontColor, 
								 fontSize: this.state.fontSize
								} }
				> {this.state.fontSize} </span> 
			<button id = "increaseButton" hidden = {this.state.hidden}
				onClick = {this.increaseFont.bind(this)} > + < /button> 
			<span id = "textSpan" onClick = {this.showControls.bind(this)}
				onDoubleClick = {this.reset.bind(this)}
				style = {{fontWeight: weight, fontSize: this.state.fontSize}}> {this.props.text} </span> 
			< /div >
		);
	}
}
