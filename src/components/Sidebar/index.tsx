import React from 'react';
import { Container } from './styles';
import {
	MdHomeFilled,
	MdOutlineSlowMotionVideo,
	MdSubscriptions,
	MdOutlineVideoLibrary,
	MdHistory,
	MdOutlineSmartDisplay,
} from 'react-icons/md';
import { FaRegCompass } from 'react-icons/fa';

function Sidebar() {
	return (
		<Container>
			<ul>
				<li className="item">
					<MdHomeFilled size={22} />
					<span>Home</span>
				</li>
				<li className="item">
					<FaRegCompass size={22} />
					<span>Explore</span>
				</li>
				<li className="item">
					<MdOutlineSlowMotionVideo size={22} />
					<span>Short</span>
				</li>
				<li className="item">
					<MdSubscriptions size={22} />
					<span>Subscriptions</span>
				</li>
			</ul>

			<hr className="separator" />

			<ul>
				<li className="item">
					<MdOutlineVideoLibrary size={22} />
					<span>Library</span>
				</li>
				<li className="item">
					<MdHistory size={22} />
					<span>History</span>
				</li>
				<li className="item">
					<MdOutlineSmartDisplay size={22} />
					<span>Your Videos</span>
				</li>
			</ul>
		</Container>
	);
}

export default Sidebar;
