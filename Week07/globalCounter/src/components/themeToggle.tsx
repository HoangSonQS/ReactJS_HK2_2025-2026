import { useRecoilState } from "recoil";
import { ThemeAtom } from "../states/themeAtom";

export default function ThemeToggle() {
    const [theme, setTheme] = useRecoilState(ThemeAtom)

    return (
        <>
            <button onClick={() => 
                setTheme(theme === "light" ? "dark" : "light")}>
                    Theme: {theme}
            </button>
        </>
    )
}