import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className="pa2">
			<input 
				type="search" 
				placeholder="Search robots"
				className="bg-lightest-blue pa3 ba b--green"
				onChange={ searchChange }
				/>
		</div>
	);
}

export default SearchBox;