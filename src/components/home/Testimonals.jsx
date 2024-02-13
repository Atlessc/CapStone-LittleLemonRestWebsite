import React from 'react';

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
      rating: 4.5,
      message: 'Delicious food and friendly staff. Will definitely come back.',
    },
  ];

  return (
    <div>
      <h2>Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <h3>{testimonial.name}</h3>
          <p>Rating: {testimonial.rating}</p>
          <p>{testimonial.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
