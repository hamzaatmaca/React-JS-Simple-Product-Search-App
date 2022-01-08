import React from 'react';

export default class SearchBar extends React.Component {
	
	constructor(props) {
		super(props);
		
		
	}

	handleFormSubmit = (event)=>{

		event.preventDefault();
	}

	render() {
		return (
			<div>
			<h1 className="mt-3 text-warning" style={{textShadow:'0 0 5px orange',letterSpacing:'4px'}}>
				React JS Product Card - <a target="_blank" style={{color:'orange',textDecoration:'none'}} href="https://hamzaatmaca.net">hamzaatmaca.net</a>
			</h1>
				<form onSubmit={this.handleFormSubmit}>
					<div className="form-row mt-5 mb-5">
						<div className="col-12">
							<input 
								
								onChange={this.props.searchMovieProp} 
								type="text" 
								className="form-control bg-dark text-warning btn-outline-warning" 
								placeholder="Search All Products"/>

						</div>
					</div>
				</form>
			</div>
		);
	}
}
