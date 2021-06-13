import styles from './Header.module.css'

const Header = ()=>{
    return(
        <div className={styles.Header}>
            <h3>P Bhanu Chandar</h3>
            <div className={styles.menu}>
            <button>Home</button>
            <button>Education</button>
            <button>projects</button>
            <button>contact</button>
            </div>
        </div>
    )
}

export default Header