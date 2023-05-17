import Link from 'next/link';
import style from './styles.module.scss';

export default function EndPoint() {
  return (
    <div className={style.test}>
      <h1>EndPoint</h1>
      <Link href="/">Click me</Link>
    </div>
  );
}
