import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetariam',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ title, vegetarian }) => ({
      title,
      subtitle: vegetarian ? '🌱' : '',
    }),
  },
};
