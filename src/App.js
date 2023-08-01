import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// function App() {
//   return <ul>
//     <li className='ruby'>sumit</li>
//     <li className='luby'>saurabh</li>
//     <li className='ruby'>ravi</li>
//     <li className='ruby'>subham</li>
//   </ul>
// }

// function App() {
//   const names = ["sumit","saurabh","annu","anamika"]
//   return <ul>
//     {names.map(name=>{
//       return <li className='ruby'>{name}</li>
//     })}
//   </ul>
// }


function App() {
  const days = [{css:'ruby',data:'maonday'},{css:'luby',data:'sunday'}]
  return <ul>
    {days.map(name=>{
      return <li className={name.css}>{name.data}</li>
    })}
  </ul>
}

export default App;
