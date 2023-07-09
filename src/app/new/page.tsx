"use client"

import Link from "next/link"
import { Bar } from "react-chartjs-2"
import { BarElement, Chart as ChartJS, registerables} from "chart.js"

ChartJS.register(
    ...registerables
)

const data = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [{
        label: "x",
        data: [10, 20, 30],
        backgroundColor: "white"
    }]
}

const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    maintainAspectRatio: false,
    responsive: true
}

export default function Page() {
    return (
        <>
        <head>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.3.0/chart.min.js"></script>
        </head>
        <div className ="flex items-center justify-center h-screen">
            <Link href="/">
                <button className="bg-neutral-100 hover:bg-neutral-400 text-neutral-950 rounded-full py-2 px-5 absolute top-8 right-8">Back</button>
            </Link>
            <div className="w-2/3 h-2/3 lg:h-3/4 2xl:h-7/8 2xl:w-3/4 mr-5 lg:mr-10 2xl:mr-20">
                <Bar data={data} options={options} className="w-full h-full"></Bar>
            </div>  
            <div className="flex flex-col space-y-20 max-h-160">
                <div className="flex flex-col space-y-10">
                    <div className="flex flex-col space-y-2 w-64 max-h-32 justify-center">
                        <label className="text-slate-300 text-lg text-center mr-6">Enter Label:</label>
                        <input type="text" placeholder="Enter label" className="text-center rounded-full text-neutral-950 outline-none w-48 ml-4 py-1" />
                    </div>
                    <div className="flex flex-col space-y-5 max-h-128">
                        <div className="flex flex-col space-y-1">
                            <label className="text-slate-300 text-lg text-center mr-7 px-7">Enter Data:</label>
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
                            <button className="bg-neutral-100 hover:bg-neutral-400 text-neutral-950 rounded-full py-2 px-5">Input Data</button>
                        </div>
                    </div>
                </div>
                <button className="bg-neutral-100 hover:bg-neutral-400 text-neutral-950 rounded-full h-10 w-48 ml-3">Clear</button>
            </div>
        </div>
        </>
    )
}