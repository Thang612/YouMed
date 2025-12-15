import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth'
import { auth } from './firebase'
import { FirebaseError } from 'firebase/app'

type LoginPayload = {
  email: string
  password: string
}

const firebaseAuthErrorMap: Record<string, string> = {
  'auth/email-already-in-use': 'Email đã được sử dụng',
  'auth/weak-password': 'Mật khẩu phải có ít nhất 6 ký tự',
  'auth/invalid-email': 'Email không hợp lệ',
  'auth/user-not-found': 'Tài khoản không tồn tại',
  'auth/wrong-password': 'Mật khẩu không chính xác',
}

const parseFirebaseError = (error: FirebaseError) =>
  firebaseAuthErrorMap[error.code] ||
  'Đã xảy ra lỗi, vui lòng thử lại'

/* REGISTER */
export const createUser = async (
  login: LoginPayload
): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      login.email,
      login.password
    )

    return userCredential.user
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(parseFirebaseError(error))
    }
    throw new Error('Lỗi không xác định')
  }
}

/* LOGIN */
export const loginUser = async (
  login: LoginPayload
): Promise<User> => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      login.email,
      login.password
    )

    return res.user
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(parseFirebaseError(error))
    }
    throw new Error('Lỗi không xác định')
  }
}
