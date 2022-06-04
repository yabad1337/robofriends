import React from 'react';
import CardList from './cardlist';
import { robots } from './robots';
import SearchBox from './searchbox';

const App = () => {
	return (
		<div className="tc">
			<h1>Robofriends</h1>
			<SearchBox />
			<CardList robots={robots}/>
		</div>
	);
}

export default App;