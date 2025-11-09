import styles from './Hero.module.css';

function Hero({ title, subtitle, variant, image  }) {
    return (
        <section
            className={`${styles.container} ${variant === 'page' ? styles.pageHero : ''}`}
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className={styles.headingWrap}>
                <h2 className={styles.subHeading}>{subtitle}</h2>

            <h1
            className={`${styles.heading} ${variant === 'page' ? styles.pageHeading : ''}`}
            >
            {title}
            </h1>
            </div>
        </section>
    );  
}

export default Hero;