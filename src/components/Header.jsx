const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-christmas-red via-red-600 to-christmas-darkred py-8 px-4 overflow-hidden shadow-2xl">
      {/* Effet de neige animée en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-snow-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 7}s`
            }}
          ></div>
        ))}
      </div>

      {/* Contenu */}
      <div className="container mx-auto text-center relative z-10">
        {/* Icônes décoratives */}
        <div className="flex justify-center gap-4 mb-4 text-4xl">
          <span className="animate-bounce-slow">🎄</span>
          <span className="animate-wiggle">⭐</span>
          <span className="animate-bounce-slow" style={{ animationDelay: '0.5s' }}>🎅</span>
          <span className="animate-wiggle" style={{ animationDelay: '0.3s' }}>🎁</span>
        </div>

        {/* Titre principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-2">
          Calendrier de l'Avent 2025
        </h1>

        {/* Sous-titre */}
        <p className="text-white/90 text-lg sm:text-xl font-medium drop-shadow-lg">
          Découvre une surprise chaque jour jusqu'à Noël !
        </p>

        {/* Décoration de gui */}
        <div className="mt-6 text-3xl">
          <span className="inline-block animate-wiggle">🌟</span>
        </div>
      </div>

      {/* Bordure décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-christmas-gold via-yellow-300 to-christmas-gold"></div>
    </header>
  );
};

export default Header;
