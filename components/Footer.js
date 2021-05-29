import Link from 'next/Link';

function Footer () {
    return (
        <footer>
            <p>Website design and developed by  {` `}
            <Link href='/'><a>Yiorgos Bagakis</a></Link></p>
            <p>© 2021</p>
        </footer>
    )
};

export default Footer;