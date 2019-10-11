import React from "react";
import Link from 'next/link';
import Glide from '@glidejs/glide'

import "./ProductCarousel.scss";
import ProductCard from "./ProductCard";
import ProgressBar from "./ProgressBar";
// import { isMobile } from "../utils/helper_functions";

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [{
        "id": 4190148296797,
        "title": "Black Leather Bag",
        "body_html": "<p>Womens black leather bag, with ample space. Can be worn over the shoulder, or remove straps to carry in your hand.</p>",
        "vendor": "partners-demo",
        "product_type": "",
        "created_at": "2019-10-04T11:38:02-04:00",
        "handle": "black-leather-bag",
        "updated_at": "2019-10-10T12:03:14-04:00",
        "published_at": "2019-10-04T11:38:01-04:00",
        "template_suffix": null,
        "tags": "women",
        "published_scope": "web",
        "admin_graphql_api_id": "gid://shopify/Product/4190148296797",
        "variants": [
            {
                "id": 30395369324637,
                "product_id": 4190148296797,
                "title": "Default Title",
                "price": "30.00",
                "sku": null,
                "position": 1,
                "inventory_policy": "deny",
                "compare_at_price": null,
                "fulfillment_service": "manual",
                "inventory_management": null,
                "option1": "Default Title",
                "option2": null,
                "option3": null,
                "created_at": "2019-10-04T11:38:02-04:00",
                "updated_at": "2019-10-04T11:38:02-04:00",
                "taxable": true,
                "barcode": null,
                "grams": 0,
                "image_id": null,
                "weight": 0.0,
                "weight_unit": "kg",
                "inventory_item_id": 31822841741405,
                "inventory_quantity": 1,
                "old_inventory_quantity": 1,
                "requires_shipping": true,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/30395369324637"
            }
        ],
        "options": [
            {
                "id": 5465475645533,
                "product_id": 4190148296797,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "images": [
            {
                "id": 12956232220765,
                "product_id": 4190148296797,
                "position": 1,
                "created_at": "2019-10-04T11:38:02-04:00",
                "updated_at": "2019-10-04T11:38:02-04:00",
                "alt": null,
                "width": 925,
                "height": 617,
                "src": "https://cdn.shopify.com/s/files/1/0278/8451/9517/products/black-bag-over-the-shoulder_925x_42f5fc8a-b06c-4ef9-8fea-3a6740a8c1e2.jpg?v=1570203482",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/12956232220765"
            }
        ],
        "image": {
            "id": 12956232220765,
            "product_id": 4190148296797,
            "position": 1,
            "created_at": "2019-10-04T11:38:02-04:00",
            "updated_at": "2019-10-04T11:38:02-04:00",
            "alt": null,
            "width": 925,
            "height": 617,
            "src": "https://cdn.shopify.com/s/files/1/0278/8451/9517/products/black-bag-over-the-shoulder_925x_42f5fc8a-b06c-4ef9-8fea-3a6740a8c1e2.jpg?v=1570203482",
            "variant_ids": [],
            "admin_graphql_api_id": "gid://shopify/ProductImage/12956232220765"
        }
    },
    {
        "id": 4190148690013,
        "title": "Blue Silk Tuxedo",
        "body_html": "<p>Blue silk tuxedo with marbled aquatic pattern and dark lining. Sleeves are complete with rounded hem and black buttons.</p>",
        "vendor": "Closette",
        "product_type": "",
        "created_at": "2019-10-04T11:38:10-04:00",
        "handle": "blue-silk-tuxedo",
        "updated_at": "2019-10-10T12:03:15-04:00",
        "published_at": "2019-10-04T11:38:09-04:00",
        "template_suffix": null,
        "tags": "men",
        "published_scope": "web",
        "admin_graphql_api_id": "gid://shopify/Product/4190148690013",
        "variants": [
            {
                "id": 30395370078301,
                "product_id": 4190148690013,
                "title": "Default Title",
                "price": "70.00",
                "sku": "",
                "position": 1,
                "inventory_policy": "deny",
                "compare_at_price": null,
                "fulfillment_service": "manual",
                "inventory_management": null,
                "option1": "Default Title",
                "option2": null,
                "option3": null,
                "created_at": "2019-10-04T11:38:10-04:00",
                "updated_at": "2019-10-04T11:47:43-04:00",
                "taxable": true,
                "barcode": "",
                "grams": 0,
                "image_id": null,
                "weight": 0.0,
                "weight_unit": "kg",
                "inventory_item_id": 31822842495069,
                "inventory_quantity": 1,
                "old_inventory_quantity": 1,
                "requires_shipping": true,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/30395370078301"
            }
        ],
        "options": [
            {
                "id": 5465476104285,
                "product_id": 4190148690013,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "images": [
            {
                "id": 12956233498717,
                "product_id": 4190148690013,
                "position": 1,
                "created_at": "2019-10-04T11:38:10-04:00",
                "updated_at": "2019-10-04T11:38:10-04:00",
                "alt": null,
                "width": 925,
                "height": 617,
                "src": "https://cdn.shopify.com/s/files/1/0278/8451/9517/products/man-adjusts-blue-tuxedo-bowtie_925x_95ae7ee6-be64-40c5-a5a0-cbc3956ad421.jpg?v=1570203490",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/12956233498717"
            }
        ],
        "image": {
            "id": 12956233498717,
            "product_id": 4190148690013,
            "position": 1,
            "created_at": "2019-10-04T11:38:10-04:00",
            "updated_at": "2019-10-04T11:38:10-04:00",
            "alt": null,
            "width": 925,
            "height": 617,
            "src": "https://cdn.shopify.com/s/files/1/0278/8451/9517/products/man-adjusts-blue-tuxedo-bowtie_925x_95ae7ee6-be64-40c5-a5a0-cbc3956ad421.jpg?v=1570203490",
            "variant_ids": [],
            "admin_graphql_api_id": "gid://shopify/ProductImage/12956233498717"
        }
    },
    {
        "id": 4190148526173,
        "title": "Chequered Red Shirt",
        "body_html": "<p>Classic mens plaid flannel shirt with long sleeves, in chequered style, with two chest pockets.</p>",
        "vendor": "partners-demo",
        "product_type": "",
        "created_at": "2019-10-04T11:38:07-04:00",
        "handle": "chequered-red-shirt",
        "updated_at": "2019-10-10T12:03:15-04:00",
        "published_at": "2019-10-04T11:38:06-04:00",
        "template_suffix": null,
        "tags": "men",
        "published_scope": "web",
        "admin_graphql_api_id": "gid://shopify/Product/4190148526173",
        "variants": [
            {
                "id": 30395369848925,
                "product_id": 4190148526173,
                "title": "Default Title",
                "price": "50.00",
                "sku": null,
                "position": 1,
                "inventory_policy": "deny",
                "compare_at_price": null,
                "fulfillment_service": "manual",
                "inventory_management": null,
                "option1": "Default Title",
                "option2": null,
                "option3": null,
                "created_at": "2019-10-04T11:38:07-04:00",
                "updated_at": "2019-10-04T11:38:07-04:00",
                "taxable": true,
                "barcode": null,
                "grams": 0,
                "image_id": null,
                "weight": 0.0,
                "weight_unit": "kg",
                "inventory_item_id": 31822842265693,
                "inventory_quantity": 1,
                "old_inventory_quantity": 1,
                "requires_shipping": true,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/30395369848925"
            }
        ],
        "options": [
            {
                "id": 5465475940445,
                "product_id": 4190148526173,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "images": [
            {
                "id": 12956232810589,
                "product_id": 4190148526173,
                "position": 1,
                "created_at": "2019-10-04T11:38:07-04:00",
                "updated_at": "2019-10-04T11:38:07-04:00",
                "alt": null,
                "width": 925,
                "height": 617,
                "src": "https://cdn.shopify.com/s/files/1/0278/8451/9517/products/red-plaid-shirt_925x_831376ef-14c8-4bc0-aa03-92f3f6ff14a3.jpg?v=1570203487",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/12956232810589"
            }
        ],
        "image": {
            "id": 12956232810589,
            "product_id": 4190148526173,
            "position": 1,
            "created_at": "2019-10-04T11:38:07-04:00",
            "updated_at": "2019-10-04T11:38:07-04:00",
            "alt": null,
            "width": 925,
            "height": 617,
            "src": "https://cdn.shopify.com/s/files/1/0278/8451/9517/products/red-plaid-shirt_925x_831376ef-14c8-4bc0-aa03-92f3f6ff14a3.jpg?v=1570203487",
            "variant_ids": [],
            "admin_graphql_api_id": "gid://shopify/ProductImage/12956232810589"
        }
    },
    {
        "id": 4190148001885,
        "title": "Classic Leather Jacket",
        "body_html": "<p>Womans zipped leather jacket. Adjustable belt for a comfortable fit, complete with shoulder pads and front zip pocket.</p>",
        "vendor": "partners-demo",
        "product_type": "",
        "created_at": "2019-10-04T11:37:57-04:00",
        "handle": "classic-leather-jacket",
        "updated_at": "2019-10-10T12:03:14-04:00",
        "published_at": "2019-10-04T11:37:57-04:00",
        "template_suffix": null,
        "tags": "women",
        "published_scope": "web",
        "admin_graphql_api_id": "gid://shopify/Product/4190148001885",
        "variants": [
            {
                "id": 30395369062493,
                "product_id": 4190148001885,
                "title": "Default Title",
                "price": "80.00",
                "sku": null,
                "position": 1,
                "inventory_policy": "deny",
                "compare_at_price": null,
                "fulfillment_service": "manual",
                "inventory_management": null,
                "option1": "Default Title",
                "option2": null,
                "option3": null,
                "created_at": "2019-10-04T11:37:58-04:00",
                "updated_at": "2019-10-04T11:37:58-04:00",
                "taxable": true,
                "barcode": null,
                "grams": 0,
                "image_id": null,
                "weight": 0.0,
                "weight_unit": "kg",
                "inventory_item_id": 31822841479261,
                "inventory_quantity": 1,
                "old_inventory_quantity": 1,
                "requires_shipping": true,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/30395369062493"
            }
        ],
        "options": [
            {
                "id": 5465475317853,
                "product_id": 4190148001885,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "images": [
            {
                "id": 12956231827549,
                "product_id": 4190148001885,
                "position": 1,
                "created_at": "2019-10-04T11:37:58-04:00",
                "updated_at": "2019-10-04T11:37:58-04:00",
                "alt": null,
                "width": 925,
                "height": 617,
                "src": "https://cdn.shopify.com/s/files/1/0278/8451/9517/products/leather-jacket-and-tea_925x_64d2dc42-5c3d-4dcf-9cac-5722478d8902.jpg?v=1570203478",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/12956231827549"
            }
        ],
        "image": {
            "id": 12956231827549,
            "product_id": 4190148001885,
            "position": 1,
            "created_at": "2019-10-04T11:37:58-04:00",
            "updated_at": "2019-10-04T11:37:58-04:00",
            "alt": null,
            "width": 925,
            "height": 617,
            "src": "https://cdn.shopify.com/s/files/1/0278/8451/9517/products/leather-jacket-and-tea_925x_64d2dc42-5c3d-4dcf-9cac-5722478d8902.jpg?v=1570203478",
            "variant_ids": [],
            "admin_graphql_api_id": "gid://shopify/ProductImage/12956231827549"
        }
    },
    {
        "id": 4190147706973,
        "title": "Classic Varsity Top",
        "body_html": "<p>Womens casual varsity top, This grey and black buttoned top is a sport-inspired piece complete with an embroidered letter.</p>",
        "vendor": "Closette",
        "product_type": "",
        "created_at": "2019-10-04T11:37:52-04:00",
        "handle": "classic-varsity-top",
        "updated_at": "2019-10-10T12:03:14-04:00",
        "published_at": "2019-10-04T11:37:52-04:00",
        "template_suffix": null,
        "tags": "women",
        "published_scope": "web",
        "admin_graphql_api_id": "gid://shopify/Product/4190147706973",
        "variants": [
            {
                "id": 30395368505437,
                "product_id": 4190147706973,
                "title": "Small",
                "price": "60.00",
                "sku": "",
                "position": 1,
                "inventory_policy": "deny",
                "compare_at_price": null,
                "fulfillment_service": "manual",
                "inventory_management": null,
                "option1": "Small",
                "option2": null,
                "option3": null,
                "created_at": "2019-10-04T11:37:53-04:00",
                "updated_at": "2019-10-04T11:47:27-04:00",
                "taxable": true,
                "barcode": null,
                "grams": 0,
                "image_id": null,
                "weight": 0.0,
                "weight_unit": "kg",
                "inventory_item_id": 31822840594525,
                "inventory_quantity": 1,
                "old_inventory_quantity": 1,
                "requires_shipping": true,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/30395368505437"
            },
            {
                "id": 30395368538205,
                "product_id": 4190147706973,
                "title": "Medium",
                "price": "60.00",
                "sku": "",
                "position": 2,
                "inventory_policy": "deny",
                "compare_at_price": null,
                "fulfillment_service": "manual",
                "inventory_management": null,
                "option1": "Medium",
                "option2": null,
                "option3": null,
                "created_at": "2019-10-04T11:37:53-04:00",
                "updated_at": "2019-10-04T11:47:27-04:00",
                "taxable": true,
                "barcode": null,
                "grams": 0,
                "image_id": null,
                "weight": 0.0,
                "weight_unit": "kg",
                "inventory_item_id": 31822840627293,
                "inventory_quantity": 1,
                "old_inventory_quantity": 1,
                "requires_shipping": true,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/30395368538205"
            },
            {
                "id": 30395368570973,
                "product_id": 4190147706973,
                "title": "Large",
                "price": "60.00",
                "sku": "",
                "position": 3,
                "inventory_policy": "deny",
                "compare_at_price": null,
                "fulfillment_service": "manual",
                "inventory_management": null,
                "option1": "Large",
                "option2": null,
                "option3": null,
                "created_at": "2019-10-04T11:37:53-04:00",
                "updated_at": "2019-10-04T11:47:27-04:00",
                "taxable": true,
                "barcode": null,
                "grams": 0,
                "image_id": null,
                "weight": 0.0,
                "weight_unit": "kg",
                "inventory_item_id": 31822840660061,
                "inventory_quantity": 1,
                "old_inventory_quantity": 1,
                "requires_shipping": true,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/30395368570973"
            }
        ],
        "options": [
            {
                "id": 5465474924637,
                "product_id": 4190147706973,
                "name": "Size",
                "position": 1,
                "values": [
                    "Small",
                    "Medium",
                    "Large"
                ]
            }
        ],
        "images": [
            {
                "id": 12956231106653,
                "product_id": 4190147706973,
                "position": 1,
                "created_at": "2019-10-04T11:37:52-04:00",
                "updated_at": "2019-10-04T11:37:52-04:00",
                "alt": null,
                "width": 925,
                "height": 617,
                "src": "https://cdn.shopify.com/s/files/1/0278/8451/9517/products/casual-fashion-woman_925x_d43ab43c-db7d-495f-9451-a86b982df803.jpg?v=1570203472",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/12956231106653"
            }
        ],
        "image": {
            "id": 12956231106653,
            "product_id": 4190147706973,
            "position": 1,
            "created_at": "2019-10-04T11:37:52-04:00",
            "updated_at": "2019-10-04T11:37:52-04:00",
            "alt": null,
            "width": 925,
            "height": 617,
            "src": "https://cdn.shopify.com/s/files/1/0278/8451/9517/products/casual-fashion-woman_925x_d43ab43c-db7d-495f-9451-a86b982df803.jpg?v=1570203472",
            "variant_ids": [],
            "admin_graphql_api_id": "gid://shopify/ProductImage/12956231106653"
        }
    }],
      currentSlide: 0,
      width: 0, 
      height: 0
    }
  }

  componentDidMount() {
    let glide = new Glide('.glide', {
      type: 'slider',
      perView: 3.5,
      breakpoints: {
        768: {
          perView: 2.5
        }
      },
      rewind: false
    })
    
    glide.on('run.after', () => {
      this.setState({ currentSlide: glide.index });
    })
    
    glide.mount();
  }

  render() {
    return (
      <div className="ProductCarousel">
        <div className="carousel-header">
          <h3>You May Also Like</h3>
          <Link href="/">
            <a>All &#8594;</a>
          </Link>
        </div>

        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {this.state.products.map((product, i) => {
                return <ProductCard className="glide__slide" key={i} product={product}/>
              })}
            </ul>
          </div>

          {/* Arrows To Go To Next or Prev Slide*/}
          {/* {
            !isMobile() &&
              <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
              </div>
          } */}
          
        </div>
        <ProgressBar percentage={((this.state.currentSlide + 1)/(this.state.products.length)) * 100}></ProgressBar>
      </div>
    );
  }
}

export default ProductCarousel;