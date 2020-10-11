import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  return order.reduce((runningTotal, item) => {
    const pizza = pizzas.find((p) => p.id === item.id);

    return runningTotal + calculatePizzaPrice(pizza.price, item.size);
  }, 0);
}
