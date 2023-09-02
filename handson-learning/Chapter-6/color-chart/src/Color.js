import React from 'react';
import StarRating from './StarRating';

export default function Color({ title, color, rating }) {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ backgroundColor: color, height: 50 }} />
      <StarRating selectedStars={rating} />
    </section>
  );
}
