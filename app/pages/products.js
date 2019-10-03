import fetch from "isomorphic-unfetch";
import Link from 'next/link';

import { Container, Row, Col } from "react-awesome-styled-grid";

const Products = props => (
    <div>
      <h1>Products</h1>

      <Container>
        <Row>
          {props.products.map(product => (
            <Col className="Col product" key={product.id} noGutter xs={2} sm={2} md={2} lg={2} xl={2}>
              <Link href="/products/[id]" as={`/products/${product.id}`}>
                <img src={product.images[0].src} alt={`${product.title} product shot`}/>
              </Link>
              <div className="details">
                <p className="vendor">{product.vendor}</p>
                <p className="title">{product.title}</p>
                <p className="price">${product.variants[0].price}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .product {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        p {
          margin: 0;
          text-align: center;
        }

        .details {
          padding: 20px 0;
        }

        .price {
          margin: 10px 0;
        }

        img {
          display: block;
          max-height: 300px;
          max-width: 100%;
        }
      `}</style>
    </div>
);

export default Products;