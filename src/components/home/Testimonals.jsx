import React from 'react';
import Star from '../../assets/filledStar.svg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      rating: 5,
      message: 'The food here is amazing! I highly recommend it.',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      message: 'Great variety of dishes and excellent service.',
    },
    {
      name: 'Mike Johnson',
      rating: 4,
      message: 'Delicious food and friendly staff. Will definitely come back.',
    },
  ];

  return (
    <div className='testimonal-container'>
      <h2>Testimonials</h2>
      <div className='testimonal-items'>
      {testimonials.map((testimonial, index) => (
        <div key={index} className='testimonal-item'>
          <h3>{testimonial.name}</h3>
          <div className='rating'>
          {[...Array(testimonial.rating)].map((_, i) => (
            <img key={i} src={Star} alt='star' className='star' width={50} />
          ))}

            </div>
          <p>{testimonial.message}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Testimonials;
