import React from 'react';

const Specials = () => {
  const specials = [
    {
      name: 'Special Dish 1',
      price: '$9.99',
      blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Special Dish 2',
      price: '$12.99',
      blurb: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Special Dish 3',
      price: '$14.99',
      blurb: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <div>
      <h2>Specials</h2>
      {specials.map((special, index) => (
        <div key={index}>
          <h3>{special.name}</h3>
          <p>{special.price}</p>
          <p>{special.blurb}</p>
        </div>
      ))}
    </div>
  );
};

export default Specials;
