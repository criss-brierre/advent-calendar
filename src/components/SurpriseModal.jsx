import { useEffect } from 'react';

const SurpriseModal = ({ surprise, onClose, isChristmasDay }) => {
  // Empêcher le scroll du body quand la modal est ouverte
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Fermer avec la touche Échap
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!surprise) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Overlay avec effet de flou */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Modal - Drawer sur mobile, modal centrée sur desktop */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative w-full sm:w-auto sm:min-w-[500px] sm:max-w-2xl
          bg-gradient-to-br from-christmas-snow via-white to-blue-50
          rounded-t-3xl sm:rounded-3xl
          shadow-2xl
          transform transition-all duration-300 ease-out
          max-h-[85vh] sm:max-h-[80vh]
          overflow-hidden
          ${isChristmasDay ? 'border-8 border-christmas-gold animate-pulse-slow' : 'border-4 border-christmas-red'}
        `}
      >
        {/* Header */}
        <div className={`
          ${isChristmasDay
            ? 'bg-gradient-to-r from-christmas-gold via-yellow-400 to-christmas-gold'
            : 'bg-gradient-to-r from-christmas-red via-red-500 to-christmas-darkred'
          }
          p-6 relative overflow-hidden
        `}>
          {/* Effet de neige animée dans le header */}
          {isChristmasDay && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-snow-fall"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 5}s`
                  }}
                ></div>
              ))}
            </div>
          )}

          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
            aria-label="Fermer"
          >
            <span className="text-white text-2xl font-bold">×</span>
          </button>

          {/* Numéro du jour */}
          <div className="flex items-center gap-3 mb-2 relative z-10">
            <div className="text-4xl">
              {isChristmasDay ? '🎅' : '🎁'}
            </div>
            <div className="text-white font-bold text-xl">
              Jour {surprise.day}
            </div>
          </div>

          {/* Titre */}
          <h2 className="text-white text-2xl sm:text-3xl font-bold drop-shadow-lg relative z-10">
            {surprise.title}
          </h2>
        </div>

        {/* Contenu scrollable */}
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-140px)] sm:max-h-[calc(80vh-140px)]">
          {isChristmasDay && (
            <div className="mb-6 text-center">
              <div className="text-6xl mb-4 animate-bounce-slow">
                🎄
              </div>
              <div className="text-2xl font-bold text-christmas-red mb-2">
                Joyeux Noël ! 🎅
              </div>
            </div>
          )}

          <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
            {surprise.content}
          </div>

          {/* Décoration */}
          <div className="mt-6 flex justify-center gap-4 text-3xl">
            <span className="animate-wiggle">🎄</span>
            <span className="animate-bounce-slow" style={{ animationDelay: '0.2s' }}>⭐</span>
            <span className="animate-wiggle" style={{ animationDelay: '0.4s' }}>🎅</span>
          </div>
        </div>

        {/* Footer avec bouton */}
        <div className="p-4 border-t-2 border-gray-200 bg-white/50">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-christmas-red to-christmas-darkred hover:from-christmas-darkred hover:to-christmas-red text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurpriseModal;
