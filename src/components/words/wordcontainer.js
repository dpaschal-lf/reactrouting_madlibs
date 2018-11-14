import React, { Component } from 'react';
import './wordcontainer.css';
import WordEntry from './wordentries';


class WordContainer extends Component{
	constructor(props){
		super(props);
		this.state = {
			words: {
				nouns: ['dog','cat','tree'],
				verbs: ['run','jump','yell'],
			}	
		}
		this.handleTextChange = this.handleTextChange.bind(this);
	}
	handleTextChange(inputType, text){
		debugger;
		const words = text.split(',');
		const cleanedWords = words
								.map( word=> word.trim())
								.filter( word=> word!=='')
		const newState = {
			words: {}
		}
		newState.words[inputType] = cleanedWords;
		this.setState( newState );

		// this.setState({
		// 	words: {
		// 		[inputType]: cleanedWords
		// 	}
		// })
	}
	makeWordEntries(){
		const wordEntries = [];
		for(let key in this.state.words){
			// WordEntry( { 
			// 	words: ['dog','cat','tree'], 
			// 	changeCallback : this.handleTextChange 
			// })

			let wordEntryComponent = <WordEntry type={key} changeCallback={this.handleTextChange} key={key} words={this.state.words[key]}/>
			wordEntries.push( wordEntryComponent );
		}
		return wordEntries;
	}

	render(){
		return(<div>
			{this.makeWordEntries()}
		</div>);
	}
}

export default WordContainer;