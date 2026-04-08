import { useRecoilValue } from "recoil";
import { AuthAtom } from "../states/AuthAtom";

export default function Profile() {
    const user = useRecoilValue(AuthAtom)

    return (
        <div>User : {user ? user.username : "GUEST"}</div>
    )
}