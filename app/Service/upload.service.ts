import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { app } from './firebase'

const storage = getStorage(app)

export const uploadDoctorAvatar = async (file: File,doctorId: string) => {
    const avatarRef = ref(storage, `doctors/${doctorId}/avatar.jpg`)

    await uploadBytes(avatarRef, file)

    return await getDownloadURL(avatarRef)
}
