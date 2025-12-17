import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "./firebase";

type UserData = {
    name: string;
    phone: string;
    gender: "male" | "female" | "other";
    born: number;
    city: "hn" | "hcm" | "dn";
}

export const addUserInfor = async (userData: UserData, userID: string) => {
    await setDoc(
        doc(db, "users", userID),
        {
            ...userData,
            role: "PATIENT",
            updatedAt: serverTimestamp(),
        },
        { merge: true }
    )
}