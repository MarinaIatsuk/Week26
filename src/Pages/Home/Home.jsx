
import style from './Home.module.scss';
import data from '../../data.json';
import Line from '../../components/Line/Line';
import { useState } from 'react';

const Home = () => {

    const [items, setItems] = useState(data); //добавляем хук для отрисовки нового списка после удаления и при отрисовке указываем массивом не data, a items

    const deleteItem = (id) => {
  const updatedList = items.filter((item) => item.id !== id); //фильтр, в котором отрисовываем список без выбранного id
  setItems(updatedList);
  //console.log(id); //Проверка работоспособности функции
};
    return (
        <>
            <div className={style.table}>
                <div className={style.table__head}>
                <div className={style.table__number}>1
                </div>
                <div className={style.table__english}>
                    Слово на английском
                </div>
                <div className={style.table__transcription}>
                    Транскрипция
                </div>
                <div className={style.table__russian}>
                    Слово на русском
                </div>
                <div className={style.table__buttons}>
                </div>
            </div>
                {items.map(item => (
                    <Line
                        key={item.id}
                        english={item.english}
                        transcription={item.transcription}
                        russian={item.russian}
                        deleteItem={() => deleteItem(item.id)}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;