'use client'; //https://stackoverflow.com/questions/74471642/nextjs-13-button-onclick-event-handlers-cannot-be-passed-to-client-componen
import Link from "next/link"
import React from 'react';
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


const data = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'My First dataset',
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
      data: [
        { x: 65, y: 75 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
      ]
    }
  ]
};

// coordinate
interface Coordinate {
  x: number
  y: number
  }


  // a list of coordinates eg: stores {(x1,y1), (x2,y2) }
  const coords: Coordinate [] =[];

function ButtonClick()
{
  const xInput = document.getElementById('x') as HTMLInputElement;
  const yInput = document.getElementById('y') as HTMLInputElement;

  const x = parseInt(yInput.value);
  const y = parseInt(yInput.value);

  if(x && y)
  {
   const ordinate:Coordinate = {x ,y};

   coords.push(ordinate);
   //renderGraph(coords);
  };

  console.log('hello')
  

 // Reset the input fields
 xInput.value = '';
 yInput.value = '';

}

// function to render the chart

function renderGraph(coordinates: Coordinate[])
{
} 

function linearRegression(coordinates: Coordinate[]){
  
  const N: number = coordinates.length; //N is the sample size / how many points there are on the graph
  const xCoordinates: number[] = []; // list of all the x coordinates
  const yCoordinates: number[] = []; // list of all the y coordinates

  for (const {x, y} of coordinates) { // for loop pushes the x and y coordinates into their respective lists
    xCoordinates.push(x);
    yCoordinates.push(y);
  }

  // declaring yummy variables
  let summationOfXY: number; let summationOfX: number; let summationOfY: number; let summationOfXSquared: number; let gradient: number; let YIntercept: number;

  // I have to assign the variables values before assigning them in the for loop, I'm not sure if there's a better way of doing it there probably is tbh idk typescript :D  
  summationOfXY = 0; summationOfX = 0; summationOfY = 0; summationOfXSquared = 0; gradient = 0; YIntercept = 0;

  for (let i = 1; i <= xCoordinates.length; i++) { // for loop that does the summation of X times Y, the summation of X, the summation of Y, and the summation of X squared
    summationOfXY = summationOfXY + (xCoordinates[i] * yCoordinates[i])
    summationOfX = summationOfX + xCoordinates[i]
    summationOfY = summationOfY + yCoordinates[i]
    summationOfXSquared = summationOfXSquared + (xCoordinates[i] ** 2)
  }

  gradient = ((N * summationOfXY) - (summationOfX * summationOfY)) / ((N * summationOfXSquared) - (summationOfX ** 2)) // calculates the gradient
  YIntercept = (summationOfY) - (gradient * summationOfX) / N

  
}


// using tailgate
export default function Home() {
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
          Click here to be taken to a new page
        </Link>
      </header>

     
      <div className="input-field" style={{ fontSize: '1.5rem' }}>
      <label  className="form-label">Enter your coordinates:  </label>
  <input type="text" placeholder="x value" aria-label="x" id="x" className="w-1/4 text-center rounded text-neutral-950 outline-none"/>
  <input type="text" placeholder="y value" aria-label="y" id = "y" className="w-1/4 text-center rounded text-neutral-950 outline-none"/>
      </div>
     
      <button type="button" style={{ fontSize: '1.5rem' }} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg ..." id="addButton" onClick={ButtonClick}>Success</button>

      
      <div>
      <canvas id="myChart"></canvas>
      </div>
    
      <div>
        <h2>Scatter Example</h2>
        <Scatter
          data={data}
          width={400}
          height={400}
        />
      </div>

    </> 
  );
};










