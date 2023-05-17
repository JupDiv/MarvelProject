import Link from 'next/link';
import styles from './styles.module.scss';
import getMarvelHeroes from '../utils/marvelAPI';
import { MarvelApiCharactersTypes } from '../entities/marvelApi';
import Image from 'next/image';

export default async function Page() {
  const heroes = await getMarvelHeroes();

  return (
    <>
      <div className={styles.header}>
        <h1>Test</h1>
        <Link href="/heroes">Click me</Link>
      </div>
      <div>
        {heroes.data.results.map((hero: MarvelApiCharactersTypes) => {
          return (
            <div key={hero.id}>
              <h1>{hero.name}</h1>
              <Image
                width={300}
                height={300}
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt="heroImg"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
