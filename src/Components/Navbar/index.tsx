import {Navbar} from "flowbite-react";
import Logo from "../../Assets/Images/unfc-low-resolution-logo-transparent-background.png";


export default function CustomNavbar() {
    function setActiveLink(path: string) {
        if (path === window.location.pathname) {
            return "rgb(252 211 77)";
        } else {
            return "";
        }
    }

    return (
        <Navbar
            fluid={true}
            rounded={false}
        >
            <Navbar.Brand href="/">
                <img
                    src={Logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="unFair casino logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    style={{color: setActiveLink("/")}}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link
                    href="/about"
                    style={{color: setActiveLink("/about")}}
                >
                    About
                </Navbar.Link>
                <Navbar.Link
                    href="/contact"
                    style={{color: setActiveLink("/contact")}}
                >
                    Contact
                </Navbar.Link>

                <div className={"md:hidden"}>
                    <Navbar.Link
                        href="/slots"
                        style={{color: setActiveLink("/slots")}}
                    >
                        Slots
                    </Navbar.Link>
                </div>
                <div className={"md:hidden"}>
                    <Navbar.Link
                        href="/fire"
                        style={{color: setActiveLink("/fire")}}
                    >
                        Fire
                    </Navbar.Link>
                </div>
                <div className={"md:hidden"}>
                    <Navbar.Link
                        href="/blackjack"
                        style={{color: setActiveLink("/blackjack")}}
                    >
                        Blackjack
                    </Navbar.Link>
                </div>
            </Navbar.Collapse>

        </Navbar>
    )
}

