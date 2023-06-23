import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)} />
            <input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} />
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}