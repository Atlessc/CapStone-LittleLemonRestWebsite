import React, {useState} from 'react';
import Modal from '../Modal';

const Specials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  const specials = [
    {
      imgPath: '/images/greekSalad.jpg',
      name: 'Special Dish 1',
      price: '$9.99',
      blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imgPath: '/images/lemonDessert.jpg',
      name: 'Special Dish 2',
      price: '$12.99',
      blurb: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      imgPath: '/images/greekSalad.jpg',
      name: 'Special Dish 3',
      price: '$14.99',
      blurb: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <div className='specials-container'>
      <div className='specials-section-title'>
        <h2>Specials</h2>
      </div>
      <div className='specials-items'>
      {specials.map((special, index) => (
        <div key={index} className='specials-item'>
          <img src={special.imgPath} alt={special.name} />
          <div>
          <h3>{special.name}</h3>
          <p>{special.price}</p>
          <p>{special.blurb}</p>
          </div>
          <div className='button' onClick={openModal}>Order Now</div>
        </div>
      ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className='order-confirmed'>
          <p>Order confirmed! Your food will be ready for pickup in 20 minutes.</p>
        </div>
      </Modal>
    </div>
  );
};

export default Specials;
