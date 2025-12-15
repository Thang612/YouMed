import Spinner from "./Component/Spinner";

export default function Loading() {
    return (
        <div className="w-screen h-screen justify-between items-center">
            <Spinner />
        </div>
    )
}