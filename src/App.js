import "./App.css";
import List from "./List";
import { data } from "./data";

function App() {
  return(

    <main>
      <section className='container'>
        <h3>{data.length} birthdays today</h3>
        <List/>
        <button>clear all</button>
      </section>
    </main>

  )
}

export default App;
