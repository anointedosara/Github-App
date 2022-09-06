import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Details() {
    const params = useParams()
    const [data, setData] = useState([])
    const [repo, setRepo] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () => {
      setIsLoading(true)
        fetch(`https://api.github.com/users/${params.user}`)
        .then((data) => data.json())
        .then((data) => {
          // console.log(data);
          setData([data]);
          setIsLoading(false)
        });
      }

      const getRepo = async () => {
        setIsLoading(true)
        fetch(`https://api.github.com/users/${params.user}/repos`)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          setRepo([data]);
          setIsLoading(false)
        });
      }

    useEffect(() => {
      getData()
      getRepo()
        console.log(params);
    }, [])

  return (
    <div className='details'>
      <button className='back-btn'><Link to='/'><i className="fa-solid fa-arrow-left"></i> Back To Search</Link></button>
      {!isLoading ?
        data.map((item, i) => 
        <div key={i} className="profile-container">
          <div className='avatar-section'>
            <img src={item.avatar_url} alt="" />
            <h1>{item.name}</h1>
            <h2>Location: {item.location === null || item.location === 'undefined' ? 'null' : item.location}</h2>
            <div><i className="fa-solid fa-xmark"></i> {item.hireable === null ? 'Not Hireable' : 'Hireable'}</div>
          </div>
          <div className='bio-section'>
            <h1>Bio</h1>
            <p>{item.bio}</p>
            <button><a href={item.html_url}>Visit Github Profile</a></button>
            <p>Username: {item.login}</p>
            <p>Company: {item.company}</p>
            <p>Website: {item.blog}</p>
          </div>
        </div>
      ) : <div className='loader'>
      <img style={{width: '50px'}} src="https://forge.codesys.com/forge/support/_discuss/thread/6f37666443/dbe4/attachment/ajax-loader.gif" alt="" />
      <h1>LOADING...</h1>
    </div>
    }

      {!isLoading ?
        data.map((item, i) => 
        <div key={i} className='connections'>
          <div style={{background: '#DB2828', margin: '3px 2px 3px 0'}}><i className="fa-solid fa-users-line"></i> Followers: {item.followers}</div>
          <div style={{background: '#21BA45', margin: '3px 2px'}}><i className="fa-solid fa-user-plus"></i> Following: {item.following}</div>
          <div style={{background: '#767676', margin: '3px 2px'}}><i className="fa-brands fa-github"></i> Public Repos: {item.public_repos}</div>
          <div style={{background: '#1B1C1D', margin: '3px 0 3px 2px'}}><i className="fa-brands fa-github-alt"></i> Public Gists: {item.public_gists}</div>
        </div>
        ) : <div className='loader'>
        <img style={{width: '50px'}} src="https://forge.codesys.com/forge/support/_discuss/thread/6f37666443/dbe4/attachment/ajax-loader.gif" alt="" />
        <h1>LOADING...</h1>
      </div>
      }

        <div className='repos'>
          {!isLoading ?
            repo.map((item) => item.map((ite, i) => <div key={i}><a href={ite.html_url}>{ite.name}</a></div>)
          ) : <div className='loader'>
          <img style={{width: '50px'}} src="https://forge.codesys.com/forge/support/_discuss/thread/6f37666443/dbe4/attachment/ajax-loader.gif" alt="" />
          <h1>LOADING...</h1>
        </div>
        }
        </div>
    </div>
  )
}

export default Details
