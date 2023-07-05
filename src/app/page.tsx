'use client'; //https://stackoverflow.com/questions/74471642/nextjs-13-button-onclick-event-handlers-cannot-be-passed-to-client-componen
import Link from "next/link"


// coordinate
interface Coordinate {
  x: number
  y: number
  
  }


  // a list of coordinates eg: stores {(x1,y1), (x2,y2) }
  const data: Coordinate [] =[];

function ButtonClick()
{
  const xInput = document.getElementById('x') as HTMLInputElement;
  const yInput = document.getElementById('y') as HTMLInputElement;

  const x = parseInt(yInput.value);
  const y = parseInt(yInput.value);

  if(x && y)
  {
   const ordinate:Coordinate = {x ,y};

   data.push(ordinate);
   renderGraph();
  };



 // Reset the input fields
 xInput.value = '';
 yInput.value = '';

}

// function to render the chart

function renderGraph()
{
console.log("Hello world")
}



// using tailgate
export default function Home() {
  return (
    <>
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
    </>
  );
};










