import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [search, setSearch] = useState()
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault()
    }

    const getData = async () => {
      setIsLoading(true)
      fetch(`https://api.github.com/search/users?q=${search}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setData(data.items);
        setIsLoading(false)
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
        {!isLoading ?
          <div className='user-wrapper'>
            {data.map((item, i) => 
          <div key={i} className='more'>
              <img src={item?.avatar_url} alt="" />
              <h1>{item?.login}</h1>
              <button><Link to={search === undefined ? '/' : `/user/${item?.login}`}>More</Link></button>
          </div>
            )}
          </div> : <div className='loader'>
              <img style={{width: '100px'}} src="https://forge.codesys.com/forge/support/_discuss/thread/6f37666443/dbe4/attachment/ajax-loader.gif" alt="" />
              <h1>LOADING...</h1>
            </div>
        }
    </div>
  )
}

export default Home
