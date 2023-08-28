import React from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;  
export default function Random() {
  //   const [gif, setGif] = useState("");
  //  const [loading, setLoading] = useState(false);

  //  async function fetchData() {
  //    setLoading(true)
  //    const url = `https://api.giphy.com/v1/gifs/random?api_key=6NKoUuIdzUZsdUiPCz2UzOAKr7JozuYW&tag=random&rating=g`;


  //    const { data } = await axios.get(url);
  //    const imageSource = data.data.images.downsized_large.url;
  //    setGif(imageSource);
  //    setLoading(false);
  //  }

  //  useEffect(() => {
  //    fetchData();
  //  }, []);
 const {gif,loading,fetchData} = useGif();
   function clickHandler(){
    fetchData();
   }
  return (
    <div className='w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-xl underline uppercase fontbold mt-[15px]'>A Random GIF</h1>
        {loading ? <Spinner /> : <img src={gif} width="450" alt='' />}
        <button className='w-10/12 bg-green-300 text-lg py-2 rounded-md mb-[20px]' onClick={clickHandler}>Generate</button>
    </div>
  )
}
