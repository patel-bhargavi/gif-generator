import { useEffect,useState } from 'react';
import axios from 'axios';

export default function useGif(tag) {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=6NKoUuIdzUZsdUiPCz2UzOAKr7JozuYW&tag=${tag}`;
  //  const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=6NKoUuIdzUZsdUiPCz2UzOAKr7JozuYW`;

    async function fetchData(tag) {
      setLoading(true)
      const { data } = await axios.get(tag ? `${randomUrl}&tag=${tag}` : randomUrl);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }
  
    useEffect(() => {
      fetchData('car');
    },[] );
  
        return{gif,loading,fetchData}
   
}
