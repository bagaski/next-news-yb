//import Link from 'next/Link';
import LinkElement from '../components/LinkElement.js'


function NavBar() {


    return (
        <nav>
            <span>፨</span>
            {`  | `}
            <LinkElement activeClassName="active" href='/'>
            <a>Home</a>
        </LinkElement>
        {`  | `}
            <LinkElement activeClassName="active" href='/pom'>
                <a>Person of the Month</a>
            </LinkElement>
        {`  | `}
            <LinkElement activeClassName="active" href='/cats'>
                <a>Cats</a>
            </LinkElement>
        </nav>
    )
};

export default NavBar;