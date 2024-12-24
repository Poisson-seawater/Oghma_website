import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { useAuthContext } from '../contexts/AuthContext';

export type UserType = 'artist' | 'consumer';

export function useAuth() {
  const { user, userProfile, loading } = useAuthContext();

  const login = async (email: string, password: string, userType: UserType) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: (error as Error).message.includes('auth/invalid-credential')
          ? 'Invalid email or password'
          : 'Failed to login. Please try again.' 
      };
    }
  };

  const signup = async (email: string, password: string, userType: UserType) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      const displayName = email.split('@')[0];
      
      // Create user profile in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email,
        userType,
        displayName,
        createdAt: new Date().toISOString(),
      });

      // Update auth profile
      await updateProfile(user, { displayName });

      return { success: true };
    } catch (error) {
      console.error('Signup error:', error);
      return { 
        success: false, 
        error: (error as Error).message.includes('auth/email-already-in-use')
          ? 'Email already in use'
          : 'Failed to create account. Please try again.'
      };
    }
  };

  const logout = () => signOut(auth);

  return {
    user,
    userProfile,
    loading,
    login,
    signup,
    logout
  };
}