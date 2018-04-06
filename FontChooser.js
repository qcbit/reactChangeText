class FontChooser extends React.Component {
	constructor(props) {
		super(props);

		this.state = {hidden: true, 
                  bold: false, 
                  fontSize: this.props.size};
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
	}

	increaseFont() {
		var size = ((Number(this.state.fontSize) + 1) <= this.props.max) ?
			Number(this.state.fontSize) + 1 : this.props.max;
		this.setState({fontSize: size});
	}
	
	reset() {
		this.setState( {fontSize: this.props.size} );
	}

	render() {
		var weight = this.state.bold ? 'bold' : 'normal';
		var color = (this.state.fontSize == this.props.min || 
								 this.state.fontSize == this.props.max) ? 'red':'black';
		return ( 
			<div>
			<input type = "checkbox" id = "boldCheckbox" hidden = {this.state.hidden} 
				onClick = {this.toggleBold.bind(this)}/>
			<button id = "decreaseButton" hidden = {this.state.hidden} 
				onClick = {this.decreaseFont.bind(this)}> - </button>
			<span id = "fontSizeSpan" hidden = {this.state.hidden} 
				onDoubleClick = {this.reset.bind(this)}> {this.state.fontSize}</span> 
			<button id = "increaseButton" hidden = {this.state.hidden}
				onClick = {this.increaseFont.bind(this)} > + < /button> 
			<span id = "textSpan" onClick = {this.showControls.bind(this)}
				style = { {
					fontWeight: weight,
					fontSize: this.state.fontSize,
					color: color
				} } > {this.props.text} < /span> 
			< /div >
		);
	}
}
