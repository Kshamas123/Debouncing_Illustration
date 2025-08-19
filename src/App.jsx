import { useState ,useEffect} from "react"

function App() {
   const [word,setword]=useState('')
   const [result,setresult]=useState([])
   function handlechange(e)
   {
    setword(e.target.value)
   }

   useEffect(() => {
       let timeout;
    const fetchData = async () => {
  

    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      try {
        const response = await fetch(`https://api.datamuse.com/sug?s=${word}`);
        const dataobject = await response.json();
        let arr=[]
        dataobject.forEach(obj => {
      arr.push(obj.word)
});
setresult(arr)
console.log(result)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      },2000)
    
    };
    fetchData()
   }, [word])
   
  return (
    <>
      <input type="text" placeholder="Search" value={word} onChange={handlechange}/>
      <ul>
        {result.map((r, index) => (
          <li key={index}>{r}</li>
        ))}
      </ul>
    </>
  )
}

export default App   