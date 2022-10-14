import NonFiction from "./components/NonFiction";
import Fiction from "./components/Fiction";
import react from 'react'
import {useState} from 'react'
function App() {
  const [stat,setStat]=useState(false)
 
  
  function toggleStat(){
    setStat(!stat);
  }
  
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn"  onClick={toggleStat}>{stat?'Show Fictional Books':'Show Non-Fiction Books'}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
     {stat?<NonFiction/>:<Fiction/>}
      </div>
    </div>
  );
}

export default App;
