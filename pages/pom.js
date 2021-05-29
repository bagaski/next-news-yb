import styles from '../styles/POM.module.css'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'

export const POM = ({ persons }) => {
    return(
        
        <div className={styles.main}>
            <NavBar />
            <p className={styles.introtext}>Person of the Month</p>
            <div className={styles.items}>{
               persons.map((person) =>
               (<div className={styles.card}>
                <h3>{person.name}</h3>
                <img src={person.image}/>
                <p>{person.description}</p>
                </div>
               ))}
            </div>
            <Footer />
        </div>
        

    )
};

export async function getStaticProps() {
    const res = await fetch(
      'https://my-json-server.typicode.com/bagaski/next-news-pom/pom'

    );

    const persons = await res.json();

    return {
        props: {
            persons
        }
    }
};

export default POM;
