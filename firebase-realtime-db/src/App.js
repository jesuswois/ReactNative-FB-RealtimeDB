function App() {
  let random = process.env.REACT_APP_TEST 
  return (
    <div>
      <p>React App Variable: {random} / App Variable: {process.env.TESTING}</p>
    </div>
  );
}

export default App;
