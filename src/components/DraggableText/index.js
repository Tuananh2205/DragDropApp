import React, { useState } from 'react';
import './index.css';

function DraggableText(props) {
	const [text, setText] = useState('');
	const [datas, setData] = useState([]);
	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setData([...datas, text]);
		return datas;
		// setText('');
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
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Write something here" value={text} onChange={handleChange} />
				</form>
			</div>
			<br />
			<div className="text-output">
				<div id="text" className="drag-wrapper" draggable="true" onDragStart={dragStart} onDragOver={dragOver}>
					<p>{lastEl}</p>
				</div>
			</div>
		</>
	);
}

export default DraggableText;
