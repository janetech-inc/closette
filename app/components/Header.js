import './Header.scss';

const Header = ({slug, category, productTitle}) => (
  <div className="Header">
    <span className="slug">{slug} / </span>
    <span className="category">{category} / </span>
    <span className="productTitle">{productTitle}</span>
  </div>
)

export default Header;