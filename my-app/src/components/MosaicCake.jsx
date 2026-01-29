import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CAKE_ART, COLOR_MAP } from '../pixelArt';

const IMAGES = [
  '/PXL_20251026_024233908.PORTRAIT.jpg'
];

const MosaicCake = ({ onComplete }) => {
  const [pixels, setPixels] = useState([]);
  const [joined, setJoined] = useState(false);

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

    // Trigger the "joining" of pixels after the build animation (max delay 4s + 1.5s duration)
    const timer = setTimeout(() => {
      setJoined(true);
    }, 6000); // 6 seconds to be safe and let user see the mosaic first

    return () => clearTimeout(timer);
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
          gap: joined ? '0px' : '1px', // Remove gap when joined
          margin: '0 auto', // Center the grid itself
          transition: 'gap 2s ease-in-out', // Smooth transition for joining
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
              // User Request: "Increase cake height... don't change zoom... change y offset slightly".
              // Scale: 0.98x (Maintained as per user preference).
              // X: -255 (Maintained).
              // Y: -330 (Shifted DOWN from -390 to reveal Hair, using new bottom pixels for Chin).
              backgroundSize: `${0.98 * GRID_WIDTH}px auto`, 
              backgroundPosition: `${-255 - pixel.x * PIXEL_SIZE}px ${-330 - pixel.y * PIXEL_SIZE}px`,
              gridColumn: pixel.x + 1, 
              gridRow: pixel.y + 1,
              borderRadius: joined ? '0px' : '2px', // Sharpen corners when joined
              boxShadow: isCandle ? '0 0 8px #fbbf24' : (joined ? 'none' : '0 0 2px rgba(0,0,0,0.3)'), // Remove individual shadows when joined
              zIndex: isCandle ? 20 : 1,
              transition: 'all 2s ease-in-out', // Smooth transition for individual pixels
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
