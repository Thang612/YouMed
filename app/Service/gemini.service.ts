import { GoogleGenAI } from "@google/genai";
import { SPECIALTY_MAP } from "./doctor.service";

const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY, // ❗ KHÔNG PUBLIC
});

export const searchDoctor = async (text: string) => {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Triệu chứng: "${text}"

                    Hãy trả về CHÍNH XÁC một trong các khoa sau:
                    Tiêu hóa, Hô hấp, Thần kinh, Tai - Mũi - Họng,
                    Răng - Hàm - Mặt, Da liễu, Tâm lý,
                    Sản phụ khoa, Nhi khoa, Tổng quát

                    Chỉ trả về tên khoa, không giải thích.
                    `,
    });

    // ✅ LẤY TEXT ĐÚNG CÁCH
    const aiText =
        response.candidates?.[0]?.content?.parts?.[0]?.text
            ?.replace(/\n/g, "")
            ?.trim();

    if (!aiText) {
        return { label: "Tổng quát", slug: "tong-quat" };
    }

    const matched = SPECIALTY_MAP.find(
        s => s.label.toLowerCase() === aiText.toLowerCase()
    );

    return matched ?? { label: "Tổng quát", slug: "tong-quat" };
};
