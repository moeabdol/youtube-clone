import React from 'react';
import {
	Container,
	BrandContainer,
	SearchContainer,
	UserActionsContainer,
} from './styles';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsYoutube, BsCameraVideo, BsBell } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiMicrophone } from 'react-icons/ti';
import { IoAppsSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<Container>
			<BrandContainer>
				<GiHamburgerMenu className="hamburger" size={25} />
				<Link to="/" className="brand">
					<BsYoutube />
					<span>YouTube</span>
				</Link>
			</BrandContainer>

			<SearchContainer>
				<AiOutlineSearch size={25} className="search" />
				<input id="search" type="text" name="search" />
				<AiOutlineClose size={25} className="close" />
				<button type="submit" className="submit">
					<AiOutlineSearch size={25} />
				</button>
				<button className="microphone">
					<TiMicrophone size={25} />
				</button>
			</SearchContainer>

			<UserActionsContainer>
				<BsCameraVideo size={25} />
				<IoAppsSharp size={25} />
				<div className="notifications">
					<BsBell size={25} />
					<span className="count">9+</span>
				</div>
				<img
					src="https://yt3.ggpht.com/6CzN4MzlDItnvfETvzMHtZVX12mngZaryojRRTfiqb16o6rPLHvbh7nxUY4Xww7_morgyDOM=s88-c-k-c0x00ffffff-no-rj-mo"
					alt="User Image"
				/>
			</UserActionsContainer>
		</Container>
	);
}

export default Navbar;
