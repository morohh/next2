import { countries } from '../../data'; 
import Link from 'next/link';

export default function Country({ params }) {
  const country = countries.find((c) => c.id === parseInt(params.id)); 

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Язык: {country.language}</p>
      <p>Площадь: {country.area.toLocaleString()}</p>
      <p>Население: {country.population.toLocaleString()}</p>
      <h2>Города:</h2>
      <ul>
        {country.cities.map((city) => (
          <li key={city.id}>
            <Link href={`/cities/${city.id}`}>
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}