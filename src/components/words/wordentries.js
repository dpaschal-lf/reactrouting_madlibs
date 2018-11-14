
import React from 'react';

export default (props)=>{
	let output = '';
	if(props.words!==undefined){
		output = props.words.join(', ');
	} else {
		output = props.sentence;
	}
	return( 
		<div>
			<textarea onChange={(event)=>{
				props.changeCallback(props.type, event.target.value);
			}}>{output}</textarea>
		</div>
	);
}