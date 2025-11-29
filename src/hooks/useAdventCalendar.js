import { useState, useEffect } from 'react';

const STORAGE_KEY = 'advent-calendar-opened-days';

export const useAdventCalendar = (surprises) => {
  const [openedDays, setOpenedDays] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Charger les jours déjà ouverts depuis localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setOpenedDays(JSON.parse(stored));
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
        setOpenedDays([]);
      }
    }
  }, []);

  // Sauvegarder les jours ouverts dans localStorage
  useEffect(() => {
    if (openedDays.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(openedDays));
    }
  }, [openedDays]);

  // Ouvrir un jour
  const openDay = (day) => {
    if (!openedDays.includes(day)) {
      setOpenedDays([...openedDays, day]);
    }
  };

  // Vérifier si un jour est déjà ouvert
  const isDayOpened = (day) => {
    return openedDays.includes(day);
  };

  // Vérifier si un jour peut être ouvert (jour actuel ou passé en décembre)
  const canOpenDay = (day) => {
    const month = currentDate.getMonth(); // 0-11
    const currentDay = currentDate.getDate();

    // Pour les tests, on peut décommenter cette ligne pour tout déverrouiller
    // return true;

    // On vérifie qu'on est en décembre (mois 11) ou après
    // Si on est avant décembre, aucun jour n'est ouvert
    if (month < 11) {
      return false;
    }

    // Si on est en décembre, on peut ouvrir jusqu'au jour actuel
    if (month === 11) {
      return day <= currentDay && day <= 25;
    }

    // Si on est après décembre, tous les jours sont ouverts
    return day <= 25;
  };

  // Vérifier si c'est le jour actuel
  const isToday = (day) => {
    const month = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    return month === 11 && day === currentDay;
  };

  // Vérifier si c'est un jour passé
  const isPastDay = (day) => {
    const month = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    // Si on est après décembre, tous les jours sont passés
    if (month > 11) {
      return true;
    }

    // Si on est en décembre, vérifier si le jour est passé
    if (month === 11) {
      return day < currentDay && day <= 25;
    }

    return false;
  };

  // Vérifier si c'est le 25 décembre
  const isChristmasDay = () => {
    const month = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    return month === 11 && currentDay === 25;
  };

  // Réinitialiser le calendrier (pour tests)
  const resetCalendar = () => {
    setOpenedDays([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    openedDays,
    openDay,
    isDayOpened,
    canOpenDay,
    isToday,
    isPastDay,
    isChristmasDay: isChristmasDay(),
    resetCalendar,
    currentDate
  };
};
