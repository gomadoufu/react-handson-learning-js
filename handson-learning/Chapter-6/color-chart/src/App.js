import React, { useState } from 'react';
import ColorList from './ColorList.js';
import colorData from './color-data.json';

export default function App() {
  const [colors] = useState(colorData);

  return <ColorList colors={colors} />;
}
