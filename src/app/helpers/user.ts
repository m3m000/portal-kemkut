// lib/firebase.ts içerisinde, Firestore erişiminiz zaten mevcut.
// app/helpers/user.ts örneği
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { firestore } from '../../lib/firebase';

interface UserData {
  name: string;
  email: string;
  [key: string]: unknown; // Optional: Add this if userData can have additional properties
}

export async function createOrGetUser(uid: string, userData: UserData) {
  const userRef = doc(firestore, 'users', uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    // Default role ataması örneğin "volunteer"
    await setDoc(userRef, { ...userData, role: 'volunteer', createdAt: new Date() });
  }
  return userRef;
}