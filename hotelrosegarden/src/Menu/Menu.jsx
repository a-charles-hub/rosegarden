import Hero from "../Hero/Hero";
import MenuItems from "./MenuItems";
import styles from './Menu.module.css';


function Menu() {
    return (
        <>
            <Hero
                title="Our Menu"
                variant="page"
            />

            <div>
                <MenuItems />
            </div>
        </>
    );
}

export default Menu;