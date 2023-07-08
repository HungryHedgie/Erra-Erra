export default function Page() {
    return (
        <>
        <div className ="flex items-center justify-center h-screen">
            <button className="bg-neutral-100 hover:bg-neutral-400 text-neutral-950 rounded-full py-2 px-5 absolute top-8 right-8">Back</button>
            <div className="w-2/3 h-2/3 lg:h-3/4 2xl:h-7/8 2xl:w-3/4 bg-white mr-5 lg:mr-10 2xl:mr-20"></div>
            <div className="flex flex-col space-y-0">
                <div className="flex flex-col space-y-2 w-64 h-32 justify-center">
                    <label className="text-slate-300 text-lg text-center mr-7">Enter Coordinates:</label>
                    <div className="flex flex-col space-y-2">
                        <div className="flex flex-row space-x-2">
                            <label className="text-slate-300 text-xl">X:</label>
                            <input type="text" placeholder="Enter X" className="text-center rounded-full text-neutral-950 outline-none" />
                        </div>
                        <div className="flex flex-row space-x-2">
                            <label className="text-slate-300 text-xl">Y:</label>
                            <input type="text" placeholder="Enter Y" className="text-center rounded-full text-neutral-950 outline-none" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row space-x-3 ml-1">
                    <button className="bg-neutral-100 hover:bg-neutral-400 text-neutral-950 rounded-full py-2 px-5">Undo</button>
                    <button className="bg-neutral-100 hover:bg-neutral-400 text-neutral-950 rounded-full py-2 px-5">Input data</button>
                </div>
            </div>
        </div>
        </>
    )
}