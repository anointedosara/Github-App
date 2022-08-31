import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [search, setSearch] = useState('anointedosara')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault()
    }

    const getData = async () => {
      setLoading(true);
      fetch(`https://api.github.com/users/${search}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setData([data]);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
    }
  
      useEffect(() => {
        getData()
      }, [])

  return (
    <div className='home'>
      <form onSubmit={handleSubmit}>
        <div>
            <input type="text" placeholder='Search User...' onChange={e => setSearch(e.target.value)} value={search} />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <button type="submit" onClick={getData}>Search</button>
      </form>
      {data.length && !loading ? (
        <>
        {
          data.map((item, i) => 
          <div key={i} className='more'>
              <img src={item?.avatar_url} alt="" />
              <h1>{item?.login}</h1>
              <button><Link to={`/user/${item?.login}`}>More</Link></button>
          </div>
            )
        }
        </>
      ) : (
        !loading && !data.length && (<p>Page{data.message}</p>)
      )}
    </div>
  )
}

export default Home
