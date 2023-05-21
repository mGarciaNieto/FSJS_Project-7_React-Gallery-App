import React from 'react'

const myStyle = {
	width: '400px',
	height: '400px'
}

export const NotFound404Error = () => {
	return (
		<div className='not-found'>
			<h3>Error 404</h3>
			<p>Page not found.</p>
      <img style={myStyle} src={require('../img/pageNotFound_404_error.png')} alt='404 page not found!' />
		</div>
	)
}
