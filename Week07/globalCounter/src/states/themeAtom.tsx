import { atom } from "recoil"

export type Theme = "light" | "dark"

export const ThemeAtom = atom<Theme>({
    key: "ThemeAtom",
    default: "light"
})