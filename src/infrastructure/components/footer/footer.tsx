import styles from './footer.module.css';

export function Footer() {
    const title = 'Nirvana';
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__div}>
                <div className={styles.div__logo}>
                    <img
                        className={styles.footer__img}
                        src="./assets/logo2.svg"
                        alt="Nirvana Brand Logo"
                        height="24"
                    />
                    <h3 className={styles.h3}>{title}</h3>
                </div>
                <address className={styles.div__address}>
                    Copyright © Nirvana 2022 All rights reserved
                </address>
            </div>
        </footer>
    );
}
