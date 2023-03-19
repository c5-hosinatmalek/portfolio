import './App.css';
import NAVBAR from './components/navbar';
import MAINPAGE from './components/main_page';
import SKILLS from './components/skills_section';
import CONCAT from './components/concat_me';
import {Route ,Routes} from 'react-router-dom'
import ABOUTME from './components/about_me';
import MYPROGECT from './components/my_project';
import COMPUTERSHOP from './components/computershope';
function App() {
  return (
    <div className="App">
    
     
     
      
      
     
    
      <Routes>
      <Route path='/' element={ <MAINPAGE/> }/>
      <Route path='/' element={<ABOUTME/>} />
      <Route path='/' element={<SKILLS/>} />
      <Route path='/' element={ <MYPROGECT/>} />
      <Route path='/' element={ <CONCAT/>} />
        <Route path='/computer-shope' element={<COMPUTERSHOP/>} />
      </Routes>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3925169946631408"
     crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
