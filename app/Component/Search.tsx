import { useState } from "react";
import { searchDoctor } from "../Service/gemini.service";
import Spinner from "./Spinner";
import { useRouter } from "next/navigation";

const Search = () => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const route = useRouter();

    const handleSearch = async () => {
        try{
            setLoading(true)
            const res = await searchDoctor(search); 
            if(res){
                route.push(`doctor/${res.slug}`)
            }
        }catch {
            setLoading(false)
            console.log(">>>>>Lỗi rồi ")
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <>
            <div className="w-full py-5 bg-linear-to-r from-blue-300 to-blue-600">
                <div className="container mx-auto text-center py-8">
                    <h3 className="text-2xl mb-4 text-white font-bold" >Bạn đang đang có vấn đề gì?</h3>
                    <div className="mx-auto w-full md:w-2/4 bg-blue-200 rounded border-2 border-white flex justify-between items-center">
                        <i className="fa-solid fa-magnifying-glass px-4"></i>
                        <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className="w-full py-2 focus:outline-0" placeholder="Tôi đang bị ho khang" type="text" />
                        <button disabled={loading} onClick={handleSearch} className="text-nowrap px-6 bg-blue-400 py-2 cursor-pointer text-white flex justify-between gap-4">{loading ? <Spinner/>  :"Tìm kiếm"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;