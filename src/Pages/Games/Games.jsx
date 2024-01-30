import Cards from '../../components/Cards/Cards';
import React, { useState } from 'react';
import style from './Games.module.scss';
import data from '../../data.json';

export default function Games() {
  const [currentIndex, setCurrentIndex] = useState(0);
    function goToPreviousCard() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    function goToNextCard() {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }
  return (
    <div className={style.cards}>
            <button onClick={goToPreviousCard} className={style.cards__button}>←</button>
                <Cards
                    key={data[currentIndex].id}
                    english={data[currentIndex].english}
                    transcription={data[currentIndex].transcription}
                    russian={data[currentIndex].russian}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                />
                
            <button onClick={goToNextCard}className={style.cards__button}>→</button>
            </div>
  )
}
