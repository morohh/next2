import { countries } from '../../data'; 
import Link from 'next/link';

export default function City({ params }) {
  const cityId = parseInt(params.id);
  let city, country;

  for (const c of countries) {
    const foundCity = c.cities.find((ct) => ct.id === cityId); 
    if (foundCity) {
      city = foundCity;
      country = c;
      break;
    }
  }
  return (
    <div>
      <h1>{city.name}</h1>
      <p>Площадь: {city.area.toLocaleString()}</p>
      <p>Население: {city.population.toLocaleString()}</p>
      <p>Год основания: {city.foundationYear}</p>
      <Link href={`/countries/${country.id}`}>
        Страна: {country.name} 
      </Link>
    </div>
  );
}
