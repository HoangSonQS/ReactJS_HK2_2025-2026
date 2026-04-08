import { useRecoilState} from "recoil";
import { AuthAtom } from "../states/AuthAtom";

export default function Header() {
    const [user, setUser] = useRecoilState(AuthAtom)

    return (
        <>
            {user ? (
                <>
                    <span>Wellcom {user.username}</span>
                    <button onClick={() => setUser(null)}>Logout</button>
                </>
            ) : (
                <>
                    <span>Not logged in</span>
                </>
            )}
        </>
    )
}