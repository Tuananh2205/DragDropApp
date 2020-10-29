import React from 'react';
import './index.css';
function DroppableImage(props) {
	const dropImage = (e) => {
		e.preventDefault();
		const image_id = e.dataTransfer.getData('picture');

		e.target.appendChild(document.getElementById(image_id));
	};

	const dragOver = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<div className="drop-image" onDrop={dropImage} onDragOver={dragOver}></div>
			<button className="btn-save">Save</button>
		</div>
	);
}

export default DroppableImage;
