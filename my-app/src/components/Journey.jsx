import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Music, Heart, Utensils, Mic, Users, Sparkles } from 'lucide-react';

const Journey = () => {
  return (
    <div className="journey-container" style={{ width: '100%', overflow: 'hidden' }}>
      <SectionIntro />
      <SectionFamily />
      <SectionListener />
      <SectionChef />
      <SectionSymphony />
      <SectionLifeGraph />
      <SectionConclusion />
    </div>
  );
};


const GROWTH_IMAGES = [
  '/growth_0.png',
  '/growth_1.png',
  '/growth_2.png',
  '/growth_3.png',
  '/growth_4.png',
  '/growth_5.png',
  '/growth_6.png',
];

// --- 1. The Essence ---
const SectionIntro = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % GROWTH_IMAGES.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
  <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem', textAlign: 'center' }}>
    {/* Artistic Filter Definition */}
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <filter id="pencil-texture">
        <feTurbulence type="turbulence" baseFrequency="0.01 0.02" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
      </filter>
    </svg>

    {/* The Portrait Growth Animation */}
    <div
       style={{ marginBottom: '2rem', position: 'relative', width: '250px', height: '350px' }}
    >
      <AnimatePresence mode='popLayout'>
        <motion.img 
          key={index}
          src={GROWTH_IMAGES[index]}
          alt="Syama Growing Up"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth crossfade
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            // Maintaining the artistic filter for continuity, or can remove if they want pure photos.
            // keeping it for the "Art" request from before, but allowing clear transition.
            filter: 'grayscale(20%) contrast(110%)', 
            boxShadow: '0 0 40px rgba(0,0,0,0.5)',
            borderRadius: '12px',
          }} 
        />
      </AnimatePresence>
      
      {/* Overlay to soften it */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 40%, #020617 100%)', pointerEvents: 'none', zIndex: 10 }} />
    </div>

    <motion.h1 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      style={{ fontSize: '3.5rem', marginBottom: '2rem', background: 'linear-gradient(to right, #60a5fa, #c084fc)', WebkitBackgroundClip: 'text', color: 'transparent' }}
    >
      Syama
    </motion.h1>
    <motion.h3
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
      style={{ fontSize: '1.5rem', fontWeight: 300, color: '#94a3b8', fontStyle: 'italic' }}
    >
      A Quiet Kind of Magic
    </motion.h3>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
      style={{ maxWidth: '600px', marginTop: '3rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#cbd5e1' }}
    >
      She had just finished twenty years of life, yet there was something about her that felt older than time—a calm, patient wisdom that didn’t demand attention. Syama was innocent in the truest sense of the word, untouched by ego, untouched by the need to prove herself to the world. She simply existed, gently, beautifully.
    </motion.p>
  </section>
);
};

// --- 2. Roots & Family (Polaroid Stack) ---
const SectionFamily = () => (
  <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: '#0f172a' }}>
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ textAlign: 'center', marginBottom: '3rem' }}
    >
      <Heart size={40} color="#f472b6" style={{ marginBottom: '1rem' }} />
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Her Roots</h2>
    </motion.div>

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', maxWidth: '1000px' }}>
      <p style={{ flex: '1 1 300px', lineHeight: '1.8', fontSize: '1.1rem', color: '#cbd5e1', alignSelf: 'center' }}>
        Born in Guntur, her story began in a home filled with responsibility and love. Her mother was her world—the center of her universe—and she loved her with a devotion that needed no explanation. She cared deeply for her sister and her father too, quietly taking on the role of a protector, a listener, and a pillar of strength.
      </p>
      
      {/* Visual: Stack of 'Polaroids' */}
      <div style={{ position: 'relative', width: '300px', height: '350px' }}>
        {[ '#ec4899', '#8b5cf6', '#3b82f6' ].map((color, i) => (
          <motion.div
            key={i}
            initial={{ rotate: 0, x: 0 }}
            whileInView={{ rotate: (i - 1) * 10, x: (i - 1) * 20 }}
            whileHover={{ scale: 1.1, zIndex: 10, rotate: 0 }}
            transition={{ type: 'spring' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '260px',
              height: '320px',
              background: 'white',
              padding: '10px 10px 40px 10px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
              transformOrigin: 'bottom center',
              zIndex: i
            }}
          >
            <div style={{ width: '100%', height: '100%', background: color,  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '2rem' }}>
              <Heart />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- 3. The Listener (Breathing Text) ---
// --- 3. The Listener (Loud World to Quiet) ---
const SectionListener = () => {
  const [isQuiet, setIsQuiet] = React.useState(false);

  return (
    <section 
      onClick={() => setIsQuiet(true)}
      style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        background: isQuiet ? '#0f172a' : '#1e1b4b', // Deep calm vs Chaotic dark indigo
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'background 2s ease'
      }}
    >
      <AnimatePresence>
        {!isQuiet && (
          <>
            {/* Chaos Particles */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{ 
                  x: [Math.random() * 50 - 25, Math.random() * -50 + 25], 
                  y: [Math.random() * 50 - 25, Math.random() * -50 + 25],
                  scale: [1, 1.5, 0.5]
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
                style={{
                  position: 'absolute',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: '4px',
                  height: '4px',
                  background: i % 2 === 0 ? '#ef4444' : '#fb923c', // Red/Orange triggers
                  borderRadius: '50%'
                }}
              />
            ))}
            
            {/* Shaking Text */}
            <motion.h2 
              animate={{ x: [-2, 2, -1, 1, 0] }}
              transition={{ duration: 0.2, repeat: Infinity }}
              style={{ fontSize: '4rem', color: '#f87171', fontWeight: '900', zIndex: 10 }}
            >
              THE WORLD IS LOUD
            </motion.h2>
            <p style={{ marginTop: '1rem', color: '#fda4af' }}>(Click to silence)</p>
          </>
        )}
      </AnimatePresence>

      {isQuiet && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ zIndex: 10 }}
        >
          <h2 style={{ fontSize: '3rem', color: '#34d399', marginBottom: '2rem' }}>But you always listen.</h2>
          <p style={{ maxWidth: '600px', fontSize: '1.2rem', lineHeight: '1.8', color: '#e2e8f0' }}>
             Syama never judges. Sitting beside her feels like resting after a long journey. You can speak without fear, because she holds your words gently.
          </p>
        </motion.div>
      )}
    </section>
  );
};

// --- 4. The Master Chef (Menu Card) ---
const SectionChef = () => (
  <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
    <motion.div
      initial={{ rotateX: 90, opacity: 0 }}
      whileInView={{ rotateX: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: '#fff',
        color: '#1e293b',
        width: '100%',
        maxWidth: '500px',
        padding: '3rem',
        borderRadius: '8px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        textAlign: 'center',
        fontFamily: 'serif'
      }}
    >
      <Utensils size={40} style={{ marginBottom: '1rem', color: '#334155' }} />
      <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', borderBottom: '2px solid #334155', display: 'inline-block', paddingBottom: '0.5rem' }}>The Chef's Special</h2>
      <p style={{ marginTop: '2rem', fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic' }}>
        "I had tasted her food only once, yet it remained unforgettable—the best vegetarian meal I had ever eaten. It wasn’t just food; it was comfort served on a plate. Not trained in fancy kitchens, but in love, patience, and instinct."
      </p>
      <div style={{ marginTop: '3rem', fontSize: '0.9rem', opacity: 0.6 }}>★★★★★ Five Stars</div>
    </motion.div>
  </section>
);

// --- 5. The Symphony (Waveform Connections) ---
const SectionSymphony = () => (
  <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#020617', padding: '2rem' }}>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      style={{ textAlign: 'center', marginBottom: '4rem' }}
    >
      <Music size={40} color="#38bdf8" style={{ marginBottom: '1rem', display: 'inline-block' }} />
      <h2 style={{ fontSize: '2.5rem', color: '#38bdf8' }}>Symphony of Connections</h2>
      <p style={{ color: '#94a3b8', marginTop: '1rem' }}>Click the waves to listen to the feeling.</p>
    </motion.div>

    <div style={{ width: '100%', maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <WaveformTrack 
        feeling="Your mother’s love shaped you." 
        name="Amma" 
        color="#fb7185" // Rose
      />
      <WaveformTrack 
        feeling="The one you trusted with your world." 
        name="Sailaja" 
        color="#facc15" // Gold
      />
      <WaveformTrack 
        feeling="Laughter that stayed." 
        name="Uma, Charitha, Vaishnavi" 
        color="#38bdf8" // Sky
      />
      <WaveformTrack 
        feeling="The start of the journey." 
        name="Gokul & Tanvitha" 
        color="#2dd4bf" // Teal
      />
    </div>
  </section>
);

const WaveformTrack = ({ feeling, name, color }) => {
  const [revealed, setRevealed] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => setRevealed(true)}
      style={{ cursor: 'pointer', padding: '1rem' }}
      whileHover={{ scale: 1.02 }}
    >
      {!revealed ? (
         <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Play Button Icon */}
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: `2px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: `10px solid ${color}`, marginLeft: '4px' }} />
            </div>
            
            {/* Dynamic Waveform */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '4px', height: '40px', overflow: 'hidden' }}>
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [10, Math.random() * 30 + 10, 10] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', delay: i * 0.05, ease: 'easeInOut' }}
                  style={{ width: '4px', background: color, borderRadius: '2px', opacity: 0.7 }}
                />
              ))}
            </div>
         </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)' }} 
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <h3 style={{ fontSize: '1.5rem', color: color, marginBottom: '0.5rem' }}>{feeling}</h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f8fafc' }}>{name}</div>
        </motion.div>
      )}
    </motion.div>
  );
};




const LIFE_STAGES = [
  { img: '/pic1.jpeg', text: "It started with her..." },
  { img: '/pic2.jpeg', text: "...then love grew roots (Amma & Nanna)." },
  { img: '/pic3.jpeg', text: "...shared with new bonds." },
  { img: '/pic4.jpg', text: "...and expanded forever (Uma & Vaishnavi)." },
];

// --- 6. Life Accumulation (Expanding Circle) ---
const SectionLifeGraph = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % LIFE_STAGES.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#020617', padding: '2rem' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#f472b6', marginBottom: '3rem' }}>The Circle of Love</h2>
      
      <div style={{ position: 'relative', width: '100%', maxWidth: '600px', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
        <AnimatePresence mode='popLayout'>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <img 
              src={LIFE_STAGES[index].img} 
              alt={LIFE_STAGES[index].text}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ color: 'white', fontSize: '1.5rem', textAlign: 'center', fontWeight: '500' }}
              >
                {LIFE_STAGES[index].text}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// --- 7. Conclusion ---
const SectionConclusion = () => (

  <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
    {/* Simple animated stars */}
    {[...Array(50)].map((_, i) => (
       <motion.div
         key={i}
         animate={{ opacity: [0, 1, 0] }}
         transition={{ duration: Math.random() * 3 + 1, repeat: Infinity, delay: Math.random() * 5 }}
         style={{
           position: 'absolute',
           top: `${Math.random() * 100}%`,
           left: `${Math.random() * 100}%`,
           width: '3px',
           height: '3px',
           background: 'white',
           borderRadius: '50%'
         }}
       />
    ))}

    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 2 }}
      style={{ zIndex: 10, maxWidth: '700px', padding: '2rem' }}
    >
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '3rem', color: '#cbd5e1' }}>
        For me, she became someone special. Someone who trusted me with her stories. Syama is not someone who demands attention, yet she deserves all of it. On her birthday, this story is a reminder of the gentle light she brings into the world.
      </p>
      
      <h1 style={{ fontSize: '4rem', fontWeight: 700, background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', color: 'transparent', marginBottom: '1rem' }}>
        Happy Birthday
      </h1>
      <h2 style={{ fontSize: '2rem', color: 'white' }}>Syama</h2>
      
      <div style={{ marginTop: '2rem', color: '#94a3b8', fontSize: '0.9rem' }}>
        The world is softer because you are in it.
      </div>
    </motion.div>
  </section>
);

export default Journey;
