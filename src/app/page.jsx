import Link from 'next/link';
import { countries } from './data'; 

export default function Home() {
  return (
    <div>
      <h1>Страны-Города

      </h1>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            <Link href={`/countries/${country.id}`}>
              {country.name} 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}