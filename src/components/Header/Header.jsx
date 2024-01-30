import {NavLink, Link} from 'react-router-dom';
import style from './Header.module.scss'


//почему не подгружается скачанное лого и лого формата svg? зато по сылке из "вне" подгружается
//и почему-то не отображается класс header__navigationItem


const Header = () => {
    return (
        <div className={style.header}>
            <nav className={style.header__navigation}>
            {/* <Link className={style.header__navigation_item}to='/'><img src="../../images/logo.png"/></Link> */}
            <Link className={style.header__navigationItem}to='/'><img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=740&t=st=1706613299~exp=1706613899~hmac=d901425bdc3bf2a1a6ad6bb8cb2beba891e23cdc3e001ea8a83639cf468e32ca"/></Link>
                <NavLink className={style.header__navigationItem}to='/'>Home</NavLink>
                <NavLink className={style.header__navigationItem} to='/games'>Game</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;