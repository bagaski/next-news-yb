import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import styles from '../styles/Cats.module.css'

export const Cats = ({ cats }) => {
    
    return (
        <div>   
            <NavBar />
            <p className={styles.introtext}>Lets show some cats here</p>
            <div className={styles.container}>{
                cats.hits.map((cat) => 
                (<div className={styles.card}>
                    <img src={cat.webformatURL} />
                <p>{cat.user}</p>
                </div>
                ))}
            </div>
            <Footer />
        </div>
    )
};

export async function getStaticProps() {
    const res = await fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=cats&image_type=photo&pretty=true`

    );

    const cats = await res.json();

    return {
        props: {
            cats
        }
    }
};

export default Cats;