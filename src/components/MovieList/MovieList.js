import React from 'react';

export default class MovieList extends React.Component {
	

	constructor(props) {
		super(props);
		
	}

	

	render() {
		return (
			<div className="row">

			{
				this.props.movies.map(movie=>(


				<div key={movie.id} className="col-lg-4 col-sm-2">
					<div style={{outline:'4px solid orange'}}className="card mb-4 shadow-sm movieCard bg-dark text-warning">
						<img src={movie.image} className="card-img-top" alt="Sample Movie"/>
						<div className="card-body">
							<h5 className="card-title">
								{movie.title}
							</h5>
							<p style={{height:'70%'}} className="card-text">{movie.description}</p>
							<div className="d-flex justifiy-content-between align-items-center">
								<button onClick={(e)=>this.props.deleteEvent(movie)}type="button"  className="btn btn-md btn-outline-light">Delete</button>								
								<h2><span className="badge badge-info text-light">Only {movie.price} $</span></h2>
							</div>
						</div>
					</div>					
				</div>

			))
		}

			</div>
		);
	}
}
