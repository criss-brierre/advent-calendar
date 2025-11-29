import { useEffect, useState } from 'react';

const ChristmasAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Animation se cache après 8 secondes
    const timer = setTimeout(() => {
      setShow(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Effet de neige intense */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full opacity-80 animate-snow-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              top: `${-10 + Math.random() * 20}%`
            }}
          ></div>
        ))}
      </div>

      {/* Message central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border-8 border-christmas-gold animate-pulse-slow max-w-md mx-4">
          <div className="text-center">
            {/* Icônes festives */}
            <div className="flex justify-center gap-3 mb-6 text-5xl">
              <span className="animate-bounce-slow">🎄</span>
              <span className="animate-wiggle">🎅</span>
              <span className="animate-bounce-slow" style={{ animationDelay: '0.3s' }}>🎁</span>
            </div>

            {/* Message */}
            <h2 className="text-4xl sm:text-5xl font-bold text-christmas-red mb-4 animate-pulse-slow">
              Joyeux Noël !
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              C'est le grand jour ! 🌟
            </p>

            {/* Étoiles scintillantes */}
            <div className="flex justify-center gap-2 text-3xl">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="animate-sparkle"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  ⭐
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feux d'artifice (émojis animés) */}
      <div className="absolute top-10 left-10 text-6xl animate-bounce-slow">
        ✨
      </div>
      <div className="absolute top-20 right-20 text-6xl animate-wiggle" style={{ animationDelay: '0.5s' }}>
        ✨
      </div>
      <div className="absolute bottom-20 left-20 text-6xl animate-sparkle">
        ✨
      </div>
      <div className="absolute bottom-10 right-10 text-6xl animate-bounce-slow" style={{ animationDelay: '0.3s' }}>
        ✨
      </div>
    </div>
  );
};

export default ChristmasAnimation;
