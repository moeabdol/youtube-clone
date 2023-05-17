import React from 'react';
import { GlobalStyles, BodyContainer } from './App.styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Navbar />
			<BodyContainer>
				<Sidebar />
				<Routes>
					<Route path="/search" element={<Home />} />
					<Route path="/watch/:id" element={<Home />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</BodyContainer>
		</BrowserRouter>
	);
}

export default App;
