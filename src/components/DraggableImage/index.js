import React, { useState } from 'react';
import './index.css';
function DraggableImage(props) {
	const [uploadFile, setUploadFile] = useState('');

	const getImage = (e) => {
		setUploadFile(URL.createObjectURL(e.target.files[0]));
	};

	const displayImage = (e) => {
		const image = e.target;
		if (image === uploadFile) {
			return image;
		}
	};

	const dragStart = (e) => {
		e.dataTransfer.setData('picture', e.target.id);
	};

	const dragOver = (e) => {
		e.stopPropagation();
	};
	return (
		<div>
			<div className="input-image">
				<h3>IMAGE FIELD</h3>
				<form onSubmit={displayImage}>
					<input type="file" onChange={getImage} />
				</form>
			</div>
			<br />
			<div className="output-image">
				<div className="pic-container">
				<img
					id="picture"
					className="image"
					src={uploadFile}
					alt="pic"
					draggable="true"
					onDragStart={dragStart}
					onDragOver={dragOver}
				/>
				</div>
			</div>
		</div>
	);
}

export default DraggableImage;
