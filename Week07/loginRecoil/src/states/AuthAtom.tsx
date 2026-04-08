import { atom } from "recoil";
import type { User } from "../service/user";

export const AuthAtom = atom<User | null>({
    key: "AuthAtom",
    default: null
})