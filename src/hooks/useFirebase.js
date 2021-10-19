import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebseInitialize from "../Firebase/firebase.init";

firebseInitialize();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        
        return signInWithPopup(auth, googleProvider);

    }


    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must Be 6 character long')
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password Must contain one upper case and one Lower case Letter and One Digit Also');
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setError('Password Must Contain one Lower Case and One Digit also')
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Password Must Contain one Digit')
            return;
        }

        // isLogin ? processLogin(email, password) : createNewUser(email, password)

        // const processLogin = (email, password) => {
        //     signInWithEmailAndPassword(auth, email, password)
        //         .then((result) => {
        //             const user = result.user;
        //             console.log(user);
        //             setError('');
        //         })
        //         .catch(error => {
        //             console.log(error.message);
        //         })
        // }

        // const createNewUser = (email, password) => {

        // }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }



    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        return () => unSubscribe;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    return {
        user,
        error,
        // isLogin,
        // loggedIn,
        handlePasswordChange,
        handleEmailChange,
        handleRegistration,
        email,
        password,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;