import cvIcon from "../assets/tie.png";

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between text-right p-3 bg-blue-950 text-white">
            <div className="flex items-center justify-center">
                <img className="size-8" src={cvIcon} />
                <h1 className="text-2xl font-medium">Curriculum Crafter</h1>
            </div>
        </nav>
    )
}

export default NavBar;