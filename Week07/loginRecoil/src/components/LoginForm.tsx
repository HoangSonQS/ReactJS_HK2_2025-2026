import { useRecoilState } from "recoil";
import { AuthAtom } from "../states/AuthAtom";
import { useState } from "react";
import { accounts } from "../service/account";

export default function LoginForm() {
    const [user, setUser] = useRecoilState(AuthAtom)

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [error, setError] = useState<string>('')

    const handleLogin = () => {
        const loggedInUser = accounts.find(a => 
            a.username === username && a.password === password
        )

        if (loggedInUser) {
            setUser({username: loggedInUser.username})
            setError("")
            setUsername("")
            setPassword("")
        } else {
            setError("Tài khoản không tồn tại")
        }
    }
    return (
        <div>
            <h2>LOGIN</h2>
            <label htmlFor="">Username</label>
            <input type="text" name="" id="" value={username} onChange={e => setUsername(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="text" name="" id="" value={password} onChange={e => setPassword(e.target.value)}/>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={handleLogin}>Login</button>
        </div>
    )
} 