import React from 'react';
import { GlobalStyles } from './App.styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Navbar />
			<Routes>
				<Route path="/search" element={<Home />} />
				<Route path="/watch/:id" element={<Home />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
