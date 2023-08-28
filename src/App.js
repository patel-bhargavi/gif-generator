
import './App.css';
import Random from './Components/Random';
import Tag from './Components/Tag';

function App() {
  return (
    <div className='w-full h-full flex flex-col background relative overflow-hidden items-center'>
     <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px] mx-auto px-10 py-2 text-2xl font-bold'>Generate GIFS</h1>
     <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
      <Random />
      <Tag />
     </div>
    </div>
  );
}

export default App;
