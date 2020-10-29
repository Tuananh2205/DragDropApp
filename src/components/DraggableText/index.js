import React, { useState } from 'react';
import './index.css';

function DraggableText(props) {
	const [text, setText] = useState('');
	const [datas, setData] = useState([]);
	const {styleSize, styleFont, styleColor} = props
	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setData([...datas, text]);
		setText('');
		return datas;
		
	};

	const lastEl = datas[datas.length - 1];

	const dragStart = (e) => {
		e.dataTransfer.setData('text', e.target.id);
	};

	const dragOver = (e) => {
		e.stopPropagation();
	};

	return (
		<>
			<div className="text-input">
				<h3>TEXT FIELD</h3>
				<form onSubmit={handleSubmit}>
					<label className="text-label">Input Text: </label>
					<input className="text-placeholder" type="text" placeholder="Write something here" value={text} onChange={handleChange} />
				</form>
			</div>
			<br />
			<div className="text-output">
					<p id="text" 
				className="drag-wrapper" 
				style= {{fontSize:styleSize + "px", fontFamily:styleFont, color:styleColor}} 
				draggable="true" 
				onDragStart={dragStart} 
				onDragOver={dragOver}>{lastEl}</p>
			</div>
			
		</>
	);
}

export default DraggableText;
