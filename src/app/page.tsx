'use client'; //https://stackoverflow.com/questions/74471642/nextjs-13-button-onclick-event-handlers-cannot-be-passed-to-client-componen
import Link from "next/link"
import React, { ChangeEvent, useState } from "react"
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);


// coordinate
interface Coordinate {
  x: number
  y: number
  }

  const graphOptions = {
    scales: {
      y: {
          beginAtZero: true
      }
  },
    maintainAspectRatio: true,
    responsive: true
}

  // a list of coordinates eg: stores {(x1,y1), (x2,y2) }
  let coords: Coordinate [] =[];
  let generatedPoints: Coordinate[] = [];
  const startData = {
    label: 'Scatter',
    datasets: [
      {
        type: 'scatter',
        label: 'User Input',
        fill: true,
        backgroundColor: 'rgba(190, 217, 59, 0.13)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 5,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgba(190, 217, 59, 0.13)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: coords
      },
      {
        label: "Regression Line Data",
        data: generatedPoints,
        borderColor: "green",
        type: "line"
      }
    ]
  };

// using tailgate
export default function Home() {
    const [graphData, setGraphData] = useState(startData);
    const [previousGraphData, setPreviousGraphData] = useState([startData])

    const handleDataInputSubmit = () => {
      previousGraphData.push(graphData)
      const _previousGraphData: any[] = previousGraphData
      setPreviousGraphData(_previousGraphData)     
      const xInput = document.getElementById('x') as HTMLInputElement;
      const yInput = document.getElementById('y') as HTMLInputElement;
      const x = parseInt(xInput.value);
      const y = parseInt(yInput.value);

      if(x && y){
        const ordinate:Coordinate = { x, y };
        coords.push(ordinate);
        console.log(coords);
      };
  
 // Reset the input fields
      xInput.value = '';
      yInput.value = '';

      setGraphData({
        label: 'Scatter',
        datasets: [
          {
            type: 'scatter',
            label: 'User Input',
            fill: true,
            backgroundColor: 'rgba(190, 217, 59, 0.13)',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 5,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: 'rgba(190, 217, 59, 0.13)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: coords
          },{
            label: "Regression Line Data",
            data: generatedPoints,
            borderColor: "green",
            type: "line"
          }
        ]
      })  
    }
    const clearGraph = () => { // clear all the points duh
      coords = []; 
      generatedPoints = [];
      setGraphData(startData)  
  }

  const linearRegression = () => {
    const N: number = coords.length; //N is the sample size / how many points there are on the graph
    const xCoordinates: number[] = []; // list of all the x coordinates
    const yCoordinates: number[] = []; // list of all the y coordinates

    for (const {x, y} of coords) { // for loop pushes the x and y coordinates into their respective lists
      xCoordinates.push(x);
      yCoordinates.push(y);
    }

    // declaring yummy variables
    let summationOfXY: number; let summationOfX: number; let summationOfY: number; let summationOfXSquared: number; let gradient: number; let YIntercept: number;

    // I have to assign the variables values before assigning them in the for loop, I'm not sure if there's a better way of doing it there probably is tbh idk typescript :D  
    summationOfXY = 0; summationOfX = 0; summationOfY = 0; summationOfXSquared = 0; gradient = 0; YIntercept = 0;

    for (let i = 0; i < xCoordinates.length; i++) { // for loop that does the summation of X times Y, the summation of X, the summation of Y, and the summation of X squared
      summationOfXY = summationOfXY + (xCoordinates[i] * yCoordinates[i])
      summationOfX = summationOfX + xCoordinates[i]
      summationOfY = summationOfY + yCoordinates[i]
      summationOfXSquared = summationOfXSquared + (xCoordinates[i] ** 2)
    }

    gradient = ((N * summationOfXY) - (summationOfX * summationOfY)) / ((N * summationOfXSquared) - (summationOfX ** 2)) // calculates the gradient
    YIntercept = ((summationOfY) - (gradient * summationOfX)) / N

    const lowestXCoord = 0;
    const highestXCoord = Math.max(...xCoordinates);
    const distance = (highestXCoord - lowestXCoord) / 9; // Divide by 9 to get 10 equal segments

    for (let i = 0; i < 10; i++) {
      const newX = lowestXCoord + distance * i;
      const newY = gradient * newX + YIntercept;
      generatedPoints.push({ x: newX, y: newY });
    }

   }


  return (
    <>
      <script
      src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.js">
      </script>

      <header className="flex justify-between items-center mb-4">
        <h1 className="text-4xl">Data Visualization Project</h1>

        <Link
          href="/new"
          // all this makes the button look fancy and all that
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Discrete Data
        </Link>
      </header>

     
      <div className="input-field" style={{ fontSize: '1.5rem' }}>
          <label  className="form-label">Enter your coordinates:  </label>
      </div>

      <div className = "flex flex-col space-y-5">
      <div className = "flex flex-col space-y-5" >
          <input type="text" placeholder="x value" aria-label="x" id = "x" className="w-1/4 text-center rounded text-neutral-950 outline-none"/>
          <input type="text" placeholder="y value" aria-label="y" id = "y" className="w-1/4 text-center rounded text-neutral-950 outline-none"/>
      </div>
      
      <div className = "flex flex-col space-y-5 w-32" >
      <button type="button" style={{ fontSize: '1.5rem' }} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg ..." id="addButton" onClick={handleDataInputSubmit}>Enter Points</button>   
      <button type="button" style={{ fontSize: '1.5rem' }} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg ..." id="addButton" onClick={clearGraph}>Clear</button>
      <button type="button" style={{ fontSize: '1.5rem' }} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg ..." id="addButton" onClick={linearRegression}>Linear Regression</button>
      </div>
      </div>

    <canvas id = "myChart"></canvas>
    <div>
        <h2>Scatter Graph</h2>
        <Scatter
          data = {graphData}
          options = {graphOptions}
          width={400}
          height={400}
        />
      </div>

    </> 
  );
};








