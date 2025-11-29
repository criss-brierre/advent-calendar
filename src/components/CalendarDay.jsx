import { useState } from 'react';

const CalendarDay = ({ day, isUnlocked, isPast, isToday, onOpen }) => {
  const [isFlipping, setIsFlipping] = useState(false);

  const handleClick = () => {
    if (isUnlocked || isPast) {
      setIsFlipping(true);
      setTimeout(() => {
        onOpen(day);
        setIsFlipping(false);
      }, 300);
    }
  };

  const getCardStyle = () => {
    if (!isUnlocked && !isPast) {
      return 'bg-gradient-to-br from-gray-400 to-gray-500 cursor-not-allowed opacity-60';
    }
    if (isToday) {
      return 'bg-gradient-to-br from-christmas-gold to-yellow-400 animate-pulse-slow cursor-pointer hover:scale-105 shadow-lg shadow-christmas-gold/50';
    }
    if (isPast) {
      return 'bg-gradient-to-br from-christmas-green to-christmas-darkgreen cursor-pointer hover:scale-105';
    }
    return 'bg-gradient-to-br from-christmas-red to-christmas-darkred cursor-pointer hover:scale-105';
  };

  return (
    <div
      onClick={handleClick}
      className={`
        ${getCardStyle()}
        relative rounded-xl p-6
        transition-all duration-300 ease-in-out
        ${isFlipping ? 'scale-95 rotate-6' : ''}
        aspect-square flex items-center justify-center
        border-4 border-white/30
        shadow-xl
      `}
    >
      {/* Numéro du jour */}
      <div className="text-white font-bold text-3xl sm:text-4xl md:text-5xl drop-shadow-lg">
        {day}
      </div>

      {/* Icône de cadeau pour les jours non ouverts */}
      {!isPast && isUnlocked && (
        <div className="absolute top-2 right-2 text-white text-xl animate-bounce-slow">
          🎁
        </div>
      )}

      {/* Icône étoile pour les jours déjà ouverts */}
      {isPast && (
        <div className="absolute top-2 right-2 text-yellow-300 text-xl animate-sparkle">
          ⭐
        </div>
      )}

      {/* Effet de neige sur les cases */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-white rounded-full opacity-70 animate-snow-fall"></div>
        <div className="absolute top-0 left-3/4 w-1 h-1 bg-white rounded-full opacity-50 animate-snow-fall" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Verrou pour les jours futurs */}
      {!isUnlocked && !isPast && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-200 text-2xl">
          🔒
        </div>
      )}
    </div>
  );
};

export default CalendarDay;
