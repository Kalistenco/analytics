import Login from './pages/Login';
import Header from './components/Header';


function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <Header />
      <Login />
    </div>
  );
}

export default App;
