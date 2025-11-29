import { useState } from 'react';
import CalendarDay from './CalendarDay';
import SurpriseModal from './SurpriseModal';
import ChristmasAnimation from './ChristmasAnimation';
import { useAdventCalendar } from '../hooks/useAdventCalendar';
import surprisesData from '../data/surprises.json';

const AdventCalendar = () => {
  const {
    openDay,
    isDayOpened,
    canOpenDay,
    isToday,
    isPastDay,
    isChristmasDay,
    resetCalendar
  } = useAdventCalendar(surprisesData);

  const [selectedSurprise, setSelectedSurprise] = useState(null);

  const handleOpenDay = (day) => {
    const surprise = surprisesData.find(s => s.day === day);
    if (surprise) {
      openDay(day);
      setSelectedSurprise(surprise);
    }
  };

  const handleCloseModal = () => {
    setSelectedSurprise(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-white relative overflow-hidden">
      {/* Effet de neige en arrière-plan */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-snow-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* Animation spéciale du 25 décembre */}
      {isChristmasDay && <ChristmasAnimation />}

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Info du jour actuel */}
        <div className="mb-8 text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border-2 border-christmas-red">
            <p className="text-gray-700 text-sm sm:text-base">
              <span className="font-bold text-christmas-red">
                {new Date().toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </p>
          </div>
        </div>

        {/* Grille du calendrier */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {surprisesData.map((surprise) => (
            <CalendarDay
              key={surprise.day}
              day={surprise.day}
              isUnlocked={canOpenDay(surprise.day)}
              isPast={isPastDay(surprise.day) || isDayOpened(surprise.day)}
              isToday={isToday(surprise.day)}
              onOpen={handleOpenDay}
            />
          ))}
        </div>

        {/* Bouton de réinitialisation (pour tests) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 text-center">
            <button
              onClick={resetCalendar}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
            >
              Réinitialiser le calendrier (dev only)
            </button>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-christmas-green">
            <h3 className="text-xl font-bold text-christmas-green mb-3 flex items-center gap-2">
              <span>📖</span>
              Comment ça marche ?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-christmas-gold font-bold">•</span>
                <span>Chaque jour de décembre, une nouvelle case se déverrouille</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-christmas-gold font-bold">•</span>
                <span>Clique sur la case du jour pour découvrir ta surprise</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-christmas-gold font-bold">•</span>
                <span>Les cases vertes ont déjà été ouvertes (tu peux les rouvrir)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-christmas-gold font-bold">•</span>
                <span>Les cases grises sont verrouillées jusqu'à leur date</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-christmas-gold font-bold">•</span>
                <span>Une surprise spéciale t'attend le 25 décembre ! 🎅</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal de surprise */}
      {selectedSurprise && (
        <SurpriseModal
          surprise={selectedSurprise}
          onClose={handleCloseModal}
          isChristmasDay={selectedSurprise.day === 25}
        />
      )}
    </div>
  );
};

export default AdventCalendar;
