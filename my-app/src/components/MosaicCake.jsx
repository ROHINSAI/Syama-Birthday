import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CAKE_ART, COLOR_MAP } from '../pixelArt';

const IMAGES = [
  '/PXL_20251026_024233908.PORTRAIT.jpg'
];

const MosaicCake = ({ onComplete }) => {
  const [pixels, setPixels] = useState([]);

  useEffect(() => {
    // Flatten grid into coordinate list for easier rendering
    const newPixels = [];
    let pixelCount = 0;
    
    CAKE_ART.forEach((row, rowIndex) => {
      row.split('').forEach((char, colIndex) => {
        if (char !== '.') {
          newPixels.push({
            id: `${rowIndex}-${colIndex}`,
            char: char,
            color: COLOR_MAP[char],
            x: colIndex,
            y: rowIndex,
            image: IMAGES[pixelCount % IMAGES.length]
          });
          pixelCount++;
        }
      });
    });
    setPixels(newPixels);
  }, []);


  const PIXEL_SIZE = 12; // Back to small pixels, but LOTS of them
  const GRID_WIDTH = CAKE_ART[0].length * PIXEL_SIZE;
  const GRID_HEIGHT = CAKE_ART.length * PIXEL_SIZE;

  return (
    <div className="center-content">
      <div
        className="cake-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${CAKE_ART[0].length}, ${PIXEL_SIZE}px)`,
          gap: '1px',
          margin: '0 auto', // Center the grid itself
        }}
      >
        {pixels.map((pixel) => {
          const isCandle = pixel.char === '|' || pixel.char === '^';
          return (
          <motion.div
            key={pixel.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: Math.random() * 4.0, duration: 1.5 }} // Slower, more gradual build
            style={{
              width: `${PIXEL_SIZE}px`,
              height: `${PIXEL_SIZE}px`,
              backgroundColor: pixel.color, 
              backgroundImage: isCandle ? 'none' : `url(${pixel.image})`,
              // Fit the whole image to the grid area
              backgroundSize: `${GRID_WIDTH}px ${GRID_HEIGHT}px`, 
              backgroundPosition: `-${pixel.x * PIXEL_SIZE}px -${pixel.y * PIXEL_SIZE}px`,
              gridColumn: pixel.x + 1, 
              gridRow: pixel.y + 1,
              borderRadius: '2px',
              boxShadow: isCandle ? '0 0 8px #fbbf24' : '0 0 2px rgba(0,0,0,0.3)', // Glow for candles
              zIndex: isCandle ? 20 : 1,
            }}
            whileHover={{ scale: 2.5, zIndex: 100, borderRadius: '4px' }}
          />
        )})}
      </div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        style={{ marginTop: '2rem', textAlign: 'center', fontSize: '2rem' }}
      >
        Happy Birthday!
      </motion.h1>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        onClick={onComplete}
        style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          background: 'var(--accent-color)',
          border: 'none',
          borderRadius: '50px',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(244, 114, 182, 0.4)'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Begin the Journey
      </motion.button>

    </div>
  );
};

export default MosaicCake;
