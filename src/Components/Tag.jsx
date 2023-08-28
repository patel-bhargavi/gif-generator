import { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Tag() {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);
  const [tag,setTag] = useState('');

  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=6NKoUuIdzUZsdUiPCz2UzOAKr7JozuYW&tag=${tag}`;


  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // },[] );

  const {gif,loading,fetchData} = useGif(tag);
  function clickHandler(){
   fetchData(tag);
  }

  function changeHandler(event){
    setTag(event.target.value)
  }

  return (
    <div className='w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[30px]'>
        <h1 className='text-xl underline uppercase fontbold mt-[15px]'>{tag} GIF</h1>
        {loading ? <Spinner /> : <img src={gif} width="450" alt=''/>}
       
       <input type="text" name="" id=""  className='w-10/12 text-lg py-2 rounded-md mb-[3px] text-center ' onChange={changeHandler} />
        <button className='w-10/12 bg-green-300 text-lg py-2 rounded-md mb-[20px]' onClick={clickHandler}>Generate</button>
    </div>
  )
}
