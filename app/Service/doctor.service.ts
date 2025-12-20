import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUser } from "./auth.service";
import { db } from "./firebase";

export const SPECIALTY_MAP = [
  { label: "Tiêu hóa", slug: "tieu-hoa" },
  { label: "Hô hấp", slug: "ho-hap" },
  { label: "Thần kinh", slug: "than-kinh" },
  { label: "Tai - Mũi - Họng", slug: "tai-mui-hong" },
  { label: "Răng - Hàm - Mặt", slug: "rang-ham-mat" },
  { label: "Da liễu", slug: "da-lieu" },
  { label: "Tâm lý", slug: "tam-ly" },
  { label: "Sản phụ khoa", slug: "san-phu-khoa" },
  { label: "Nhi khoa", slug: "nhi-khoa" },
  { label: "Tổng quát", slug: "tong-quat" },
];

// types/doctor.ts
export type DoctorData = {
  name: string,
  email: string,
  phone: string,
  gender: 'male' | 'female' | 'other',
  city: 'hn' | 'hcm' | 'dn',
  specialty: string,         // Hô hấp, Tiêu hóa...
  hospital: string,
  experienceYears: number,
  bio?: string,
  avatarUrl?: string,
}

const generatePassword = (length: number): string => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

export const createDoctor = async (doctorData: DoctorData) => {
  const password = generatePassword(16);

  // 1. Tạo user auth
  const res = await createUser({
    email: doctorData.email,
    password,
  });

  if (!res?.uid) {
    throw new Error("Create user failed");
  }

  // 2. Lưu profile doctor
  try {
    await setDoc(
      doc(db, "doctors", res.uid),
      {
        ...doctorData,
        role: "DOCTOR",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  }catch{
      throw new Error("Create user failed");
  }


  return {
    uid: res.uid,
    email: doctorData.email,
  };
};


