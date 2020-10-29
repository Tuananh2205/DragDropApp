import React, { useState } from 'react';
import Logout from '../components/Logout/index';
import { useHistory } from 'react-router-dom';
import DraggableImage from '../components/DraggableImage/index';
import DraggableText from '../components/DraggableText/index';
import '../styles/Editor.css';
import DroppableImage from '../components/Droppablemage/index';
import DroppableText from '../components/DroppableText/index';
import ControlText from '../components/ControlText/index';

const Editor = () => {
	const history = useHistory();
	const [size, setSize] = useState(12);
	const [font, setFont] = useState(['']);
	const [color, setColor] = useState(['black']);

	const changeSize = (size) => {
		setSize(size);
	};

	// const decreaseSize = e =>{
	// 	const newSize = size - 1
	// 	setSize(newSize)
	// }
	// const increaseSize = e =>{
	// 	const newSize = size + 1
	// 	setSize(newSize)
	//  }

	const changeFont = (font) => {
		setFont(font);
		console.log(`Font: ${font}`);
	};

	const changeColor = (color) => {
		setColor(color);
		console.log(`Color: ${color}`);
	};
	return (
		<>
			<div className="nav">
				<Logout history={history} />
			</div>
			<div className="content">
				<div className="left-area">
					<h1>Editor page</h1>
					<DraggableImage />
					<DraggableText styleSize={size} styleFont={font} styleColor={color} />
				</div>
				<div className="seperator"></div>
				<div className="right-area">
					<h3>This is the Image Editor sceen:</h3>
					<DroppableImage />
					<h3>This is the Text Editor sceen:</h3>
					<DroppableText />
				</div>
			</div>
			<div className="footer">
				<ControlText
					size={size}
					font={font}
					// decreaseSizeProps={decreaseSize}
					// increaseSizeProps={increaseSize}
					changeFontProps={changeFont}
					changeColorProps={changeColor}
					changeSizeProps={changeSize}
				/>
			</div>
		</>
	);
};

export default Editor;
