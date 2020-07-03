import React from 'react';

import products from '../../data/products';
import './Challenge_Products.css'

export default (props) => {
  const items = products.map(product => {
    return (
      <tr key={ product.id }>
        <td>{ product.id }</td>
        <td>{ product.name }</td>
        <td>R$ { product.price.toFixed(2).replace('.', ',') }</td>
      </tr>
    )
  });

  return (
    <div className="Table">
      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Product name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          { items }
        </tbody>

      </table>
    </div>
  )
};