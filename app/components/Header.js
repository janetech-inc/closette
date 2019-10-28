import Link from 'next/link';
import './Header.scss';

const Header = ({slug, category, productTitle}) => (
  <div className="Header">
    <Link href={`/${slug.toLowerCase()}`}>
      <a>{slug} / </a>
    </Link>
    <span className="category">{category} / </span>
    <span className="productTitle">{productTitle}</span>
  </div>
)

export default Header;