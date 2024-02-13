import React, { useState } from 'react';

const MenuPage = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const menuItems = [
    { name: 'Burger', price: 9.99 },
    { name: 'Pizza', price: 12.99 },
    { name: 'Salad', price: 7.99 },
    { name: 'Pasta', price: 10.99 },
    { name: 'Sandwich', price: 8.99 },
    { name: 'Soup', price: 6.99 },
    { name: 'Steak', price: 15.99 },
    { name: 'Sushi', price: 14.99 },
    { name: 'Chicken Wings', price: 9.99 },
    { name: 'Tacos', price: 11.99 },
  ];

  const handleOrderOnline = (foodName) => {
    setSelectedFood(foodName);
  };

  const handleCloseModal = () => {
    setSelectedFood(null);
  };

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => handleOrderOnline(item.name)}>Order Online</button>
          </li>
        ))}
      </ul>
      {selectedFood && (
        <Modal>
        <div>
          <h2>Your {selectedFood} is on its way!</h2>
        </div>
        </Modal>
      )}
    </div>
  );
};

export default MenuPage;
