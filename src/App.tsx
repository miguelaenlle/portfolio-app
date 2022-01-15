import "./App.css"
import About from './pages/About';
import ContactMe from './pages/ContactMe';
import Skills from './pages/Skills';
import Work from './pages/Work';
import "./App.css"

function App() {
  return (
    <div className = {"wrapper"}>
      <About/>
      <Skills/>
      <Work/>
      <ContactMe/>
    
    </div>
  );
}

export default App;
