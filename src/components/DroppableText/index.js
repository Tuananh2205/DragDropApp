import React from 'react';
import './index.css';

function DroppableText(props) {
	const drop = (e) => {
		e.preventDefault();
		const text_id = e.dataTransfer.getData('text');

		const text = document.getElementById(text_id);
		e.target.appendChild(text);
	};

	const dragOver = (e) => {
		e.preventDefault();
	};
	return <div className="drop-text" onDrop={drop} onDragOver={dragOver}></div>;
}

export default DroppableText;
