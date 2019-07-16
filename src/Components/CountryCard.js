import React from 'react';

const CountryCard = ({countries}) => {
	return (
		<div className="card-container">
			{
				countries.map((country, index) => {
					console.log(country);
					return (
						<div className="country-card">
							<img src={country.flag} alt="country flag" />
							<div className="country-card-info">
								<h2>{country.name}</h2>
								<span>Population: {country.population}</span>
								<span>Region: {country.region}</span>
								<span>Capital: {country.capital}</span>
							</div>
						</div>
					)
				})
			}
		</div>
	);
}

export default CountryCard;