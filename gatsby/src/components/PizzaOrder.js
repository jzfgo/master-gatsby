import Img from 'gatsby-image';
import React from 'react';
import MenuItemStyles from '../styles/MenuItemStyles';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
  return (
    <>
      {order.map((item, index) => {
        const pizza = pizzas.find((p) => p.id === item.id);

        return (
          <MenuItemStyles key={item.id}>
            <Img
              width="50"
              height="50"
              fluid={pizza.image.asset.fluid}
              alt={pizza.name}
            />
            <h2>
              {pizza.name} ({item.size})
            </h2>
            <p>
              {formatMoney(calculatePizzaPrice(pizza.price, item.size))}
              <button
                type="button"
                className="remove"
                title={`Remove ${item.size} ${pizza.name} from Order`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
      <p>Order</p>
      <p>You have {order.length} items in your order.</p>
    </>
  );
}
