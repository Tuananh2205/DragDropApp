import React from 'react';
import Logout from '../components/Logout/index';
import { useHistory } from 'react-router-dom';
import DraggableImage from '../components/DraggableImage/index';
import DraggableText from '../components/DraggableText/index';
import '../styles/Editor.css';
import DroppableImage from '../components/Droppablemage';
import DroppableText from '../components/DroppableText';
const Editor = () => {
	const history = useHistory();
	return (
		<>
			<div className="header">
				<Logout history={history} />
			</div>
			<div className="content">
				<div className="left-area">
					<DraggableImage />
					<hr />
					<DraggableText />
				</div>
				<div className="right-area">
					<DroppableImage />
					<hr />
					<DroppableText />
				</div>
			</div>
			<div className="navbar-footer">
				<div className="nav1">Font-size</div>
				<div className="nav2">Font-family</div>
				<div className="nav3">Font-color</div>
			</div>
		</>
	);
};

export default Editor;
