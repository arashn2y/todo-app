import { useContext, useEffect } from "react"
import { ThemeContext, ThemeType } from "../../context/ThemeContextProvider";
import { LuSun as SunIcon } from "react-icons/lu";
import { IoMoonOutline as MoonIcon } from "react-icons/io5";

interface ThemeTogglerProps {
    className: string
}

const ThemeToggler = ( { className }: ThemeTogglerProps ) => {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        const body = document.body;
        
        if (theme === ThemeType.LIGHT) {
            body.classList.add(ThemeType.LIGHT);
            body.classList.remove(ThemeType.DARK);
        } else {
            body.classList.add(ThemeType.DARK);
            body.classList.remove(ThemeType.LIGHT);
        }
    }, [theme]);

    return (
        <div className={className} onClick={ () => {
            setTheme(theme === ThemeType.LIGHT ?
                ThemeType.DARK :
                ThemeType.LIGHT
            )
        }}>
            {(theme === ThemeType.LIGHT) ? <MoonIcon /> : <SunIcon />}
        </div>
    )
}

export default ThemeToggler;