import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Quote from './Random_Quote_Generator/Quote';
import Markdown from './Markdown_Previewer/Markdown';
import Calculator from './Calculator/Calculator';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/quote' element={<Quote />}></Route>
        <Route path='/markdown' element={<Markdown />}></Route>
        <Route path='/calculator' element={<Calculator />}></Route>
      </Routes>
    </div>
  );
}

export default App;
