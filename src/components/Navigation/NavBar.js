import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.navBar}>
                <div className={s.logo}>
                    <div className={s.logoItem}>
                        <i className="fas fa-user-friends"></i>
                    </div>
                    <div className={s.logoText}>Social</div>
                </div>
                <div className={s.ava}>
                    <div className={s.avaPhoto}>
                        <img
                            src='https://sun9-11.userapi.com/impf/c848520/v848520368/3d957/IDOulhdA8fg.jpg?size=1080x810&quality=96&sign=1d0d3aaacd4d0807ae5fb5e25535cd86&type=album'
                            alt="avatar"/>
                    </div>
                    <div className={s.avaName}>Hello, Artur!</div>
                </div>
                <div className={s.navItems}>
                    <NavLink className={s.navLink} to='/profile'>
                        <div className={s.navItem}>
                            <div className={s.navImg}>
                                <i className="fas fa-home"></i>
                            </div>
                            <div className={s.navTitle}>
                                Home
                            </div>
                        </div>
                    </NavLink>

                    <NavLink className={s.navLink} to='/users'>
                        <div className={s.navItem}>
                            <div className={s.navImg}>
                                <i className="fas fa-bookmark"></i>
                            </div>
                            <div className={s.navTitle}>
                                Users
                            </div>
                        </div>
                    </NavLink>

                    <NavLink className={s.navLink} to='/messages'>
                        <div className={s.navItem}>
                            <div className={s.navImg}>
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className={s.navTitle}>
                                Messages
                            </div>
                        </div>
                    </NavLink>

                    <NavLink className={s.navLink} to='/notifications'>
                        <div className={s.navItem}>
                            <div className={s.navImg}>
                                <i className="fas fa-bell"></i>
                            </div>
                            <div className={s.navTitle}>
                                Notifications
                            </div>
                        </div>
                    </NavLink>


                </div>
            </div>
        </nav>
    )
}

export default NavBar