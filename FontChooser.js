class FontChooser extends React.Component {
	constructor(props) {
		super(props);

		this.state = {hidden: true, bold: false, fontSize: 16};
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

	render() {
		var weight = this.state.bold ? 'bold' : 'normal';
		return ( 
			<div>
			<input type = "checkbox" id = "boldCheckbox" hidden = {this.state.hidden} 
				onClick = {this.toggleBold.bind(this)}/>
			<button id = "decreaseButton" hidden = {this.state.hidden} 
				onClick = {this.decreaseFont.bind(this)}> - </button>
			<span id = "fontSizeSpan" hidden = {this.state.hidden} > {this.state.fontSize}</span> 
			<button id = "increaseButton" hidden = {this.state.hidden}
				onClick = {this.increaseFont.bind(this)} > + < /button> 
			<span id = "textSpan" onClick = {this.showControls.bind(this)}
				style = { {
					fontWeight: weight,
					fontSize: this.state.fontSize
				} } > {this.props.text} < /span> 
			< /div >
		);
	}
}