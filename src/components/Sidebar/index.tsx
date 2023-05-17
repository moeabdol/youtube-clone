import React from 'react';
import { Container } from './styles';
import {
	MdHomeFilled,
	MdOutlineSlowMotionVideo,
	MdSubscriptions,
	MdOutlineVideoLibrary,
	MdHistory,
	MdOutlineSmartDisplay,
	MdOutlineWatchLater,
	MdThumbUpOffAlt,
	MdOutlineSportsVolleyball,
	MdSettings,
	MdOutlinedFlag,
	MdOutlineHelpOutline,
	MdOutlineFeedback,
} from 'react-icons/md';
import { TbMusic, TbDeviceGamepad2 } from 'react-icons/tb';
import { GiFilmStrip } from 'react-icons/gi';
import { FaRegCompass } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<Container>
			<ul>
				<li className="item">
					<Link to="#">
						<MdHomeFilled size={22} />
						<span>Home</span>
					</Link>
				</li>
				<li className="item">
					<Link to="#">
						<FaRegCompass size={22} />
						<span>Explore</span>
					</Link>
				</li>
				<li className="item">
					<Link to="#">
						<MdOutlineSlowMotionVideo size={22} />
						<span>Short</span>
					</Link>
				</li>
				<li className="item">
					<Link to="#">
						<MdSubscriptions size={22} />
						<span>Subscriptions</span>
					</Link>
				</li>
			</ul>

			<hr className="separator" />

			<ul>
				<li className="item">
					<Link to="#">
						<MdOutlineVideoLibrary size={22} />
						<span>Library</span>
					</Link>
				</li>
				<li className="item">
					<Link to="#">
						<MdHistory size={22} />
						<span>History</span>
					</Link>
				</li>
				<li className="item">
					<Link to="#">
						<MdOutlineSmartDisplay size={22} />
						<span>Your Videos</span>
					</Link>
				</li>
				<li className="item">
					<Link to="#">
						<MdOutlineWatchLater size={22} />
						<span>Watch Later</span>
					</Link>
				</li>
				<li className="item">
					<Link to="#">
						<MdThumbUpOffAlt size={22} />
						<span>Liked Videos</span>
					</Link>
				</li>
			</ul>

			<hr className="separator" />

			<ul>
				<li className="item">
					<Link to="#">
						<TbMusic size={22} />
						<span>Music</span>
					</Link>
				</li>
				<li className="item">
					<Link to="#">
						<MdOutlineSportsVolleyball size={22} />
						<span>Sports</span>
					</Link>
				</li>
				<li className="item">
					<Link to="#">
						<TbDeviceGamepad2 size={22} />
						<span>Gaming</span>
					</Link>
				</li>
				<li className="item">
					<Link to="#">
						<GiFilmStrip size={22} />
						<span>Films</span>
					</Link>
				</li>
			</ul>

			<hr className="separator" />

			<ul>
				<li className="item">
					<Link to="#">
						<MdSettings size={22} />
						<span>Settings</span>
					</Link>
				</li>
				<li className="item">
					<Link to="#">
						<MdOutlinedFlag size={22} />
						<span>Report</span>
					</Link>
				</li>
				<li className="item">
					<Link to="#">
						<MdOutlineHelpOutline size={22} />
						<span>Help</span>
					</Link>
				</li>
				<li className="item">
					<Link to="#">
						<MdOutlineFeedback size={22} />
						<span>Send Feedback</span>
					</Link>
				</li>
			</ul>

			<hr className="separator" />

			<ul className="links">
				<li>
					<Link to="#">About</Link>
				</li>
				<li>
					<Link to="#">Press</Link>
				</li>
				<li>
					<Link to="#">Copyright</Link>
				</li>
				<li>
					<Link to="#">Contact us</Link>
				</li>
				<li>
					<Link to="#">Creator</Link>
				</li>
				<li>
					<Link to="#">Advertise</Link>
				</li>
				<li>
					<Link to="#">Developers</Link>
				</li>
			</ul>

			<div className="copyright">&copy; 2023 Google Inc.</div>
			<div className="disclaimer">
				This YouTube clone is for educational purposes only.
			</div>
		</Container>
	);
}

export default Sidebar;
