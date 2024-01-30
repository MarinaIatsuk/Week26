// Cards.jsx
import React, { useState } from 'react';
import style from './Cards.module.scss'
//в пропсы передали currentIndex, setCurrentIndex, чтбы можно было использовать в main
const Cards = ({ id, english, transcription, russian, currentIndex, setCurrentIndex }) => {
    const [translation, setTranslation] = useState(false);

    function showTranslation() {
        setTranslation(!translation);
    }

    return (
        <div className={style.card} onClick={showTranslation}>
            <div className={style.card__word}>{english}</div>
            <div className={style.card__transcription}>{transcription}</div>
            {translation ? <div className={style.card__translation}>{russian}</div> :
                <div className={style.card__button} onClick={showTranslation}>Нажмите, чтобы проверить себя</div>}
        </div>
    );
};

export default Cards;
