'use client';

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Service/firebase";
import { addUserInfor } from "../Service/user.service";

type Gender = "male" | "female" | "other";
type City = "hn" | "hcm" | "dn";

type ProfileForm = {
  name: string;
  phone: string;
  gender: Gender | "";
  born: number | "";
  city: City | "";
};

const CITIES: { label: string; value: City }[] = [
  { label: "Hà Nội", value: "hn" },
  { label: "TP. Hồ Chí Minh", value: "hcm" },
  { label: "Đà Nẵng", value: "dn" },
];


const ProfilePage = () => {
  const { user, loading } = useAuth();

  const [form, setForm] = useState<ProfileForm>({
    name: "",
    phone: "",
    gender: "",
    born: "",
    city: "",
  });

  const [profileLoading, setProfileLoading] = useState(true);
  const [hasProfile, setHasProfile] = useState(false);

  /* =======================
     LOAD PROFILE
  ======================= */
  useEffect(() => {
    if (!user) return;

    const fetchProfile = async () => {
      try {
        const snap = await getDoc(doc(db, "users", user.uid));

        if (snap.exists()) {
          const data = snap.data();
          setForm({
            name: data.name ?? "",
            phone: data.phone ?? "",
            gender: data.gender ?? "",
            born: data.born ?? "",
            city: data.city ?? "",
          });
          setHasProfile(true);
        }
      } catch (err) {
        console.error("Load profile error:", err);
      } finally {
        setProfileLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  /* =======================
     SUBMIT
  ======================= */
  const handleSubmit = async () => {
    if (!user) return;

    const { name, phone, gender, born, city } = form;

    if (!name || !phone || !gender || !born || !city) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }

    try {
      await addUserInfor(
        { name, phone, gender, born, city },
        user.uid
      );
      setHasProfile(true);
      alert("Lưu hồ sơ thành công ✅");
    } catch (err) {
      console.error(err);
      alert("Lỗi khi lưu hồ sơ ❌");
    }
  };

  /* =======================
     STATES
  ======================= */
  if (loading || profileLoading) {
    return <div className="h-screen flex items-center justify-center">Đang tải...</div>;
  }

  if (!user) {
    return <div className="h-screen flex items-center justify-center">Vui lòng đăng nhập</div>;
  }

  return (
    <div className="flex items-center justify-center bg-gray-100 ">
      <div className="w-full bg-white rounded-2xl shadow-lg py-6 px-8">

        <h1 className="text-2xl font-semibold text-center mb-1">
          {hasProfile ? "Cập nhật hồ sơ" : "Hoàn tất hồ sơ"}
        </h1>
        <p className="text-gray-500 text-sm text-center mb-6">
          Thông tin dùng để cá nhân hoá tư vấn
        </p>

        <div className="space-y-4">
          <input
            placeholder="Họ và tên"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-xl"
          />

          <input
            placeholder="Số điện thoại"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-2 border rounded-xl"
          />

          <div className="grid grid-cols-2 gap-3">
            <select
              value={form.gender}
              onChange={(e) =>
                setForm({ ...form, gender: e.target.value as Gender | "" })
              }
              className="px-4 py-2 border rounded-xl"
            >
              <option value="">Giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>

            <input
              type="number"
              placeholder="Năm sinh"
              value={form.born}
              onChange={(e) =>
                setForm({
                  ...form,
                  born: e.target.value ? Number(e.target.value) : "",
                })
              }
              className="px-4 py-2 border rounded-xl"
            />
          </div>

          <select
            value={form.city}
            onChange={(e) =>
              setForm({ ...form, city: e.target.value as City | "" })
            }
            className="w-full px-4 py-2 border rounded-xl"
          >
            <option value="">Tỉnh / Thành phố</option>
            {CITIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600"
        >
          {hasProfile ? "Cập nhật hồ sơ" : "Hoàn tất & bắt đầu tư vấn"}
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
