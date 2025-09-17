import styles from './Hero.module.css';

function Hero({ title, subtitle, variant, image  }) {
    return (
        <section className={`${styles.container} ${variant === 'page' ? styles.pageHero : ''}`}>
            <div className={styles.headingWrap}>
                <h2 className={styles.subHeading}>{subtitle}</h2>
                <h1 className={styles.heading}>{title}</h1>
            </div>
        </section>
    );  
}

export default Hero