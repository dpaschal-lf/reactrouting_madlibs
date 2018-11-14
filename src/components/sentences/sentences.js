import React, { Component } from 'react';


class Sentences extends Component{
	render(){
		console.log(this.props.match);
		let output = 'woohoo!';
		if(this.props.match.params){
			output = this.props.match.params.newsentence;
		}
		return (<div>sentence component : {output}</div>);
	}
}

export default Sentences;