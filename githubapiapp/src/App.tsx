import { useState } from 'react'
import axios from 'axios'
import './App.css'

type Repository ={
  id: number;
  full_name: string;
  html_url: string;
};

function App() {
  const [ keyword, setKeyword ] = useState('');
  const [ repodata, setRepodata ] = useState<Repository[]>([]);

  const handleClick = () => {
    axios.get<{items: Repository[]}>(`https://api.github.com/search/repositories?q=${keyword}`)
    // axios.get을 통해서 자료를 가지고 옵니다. item은 배열으로 정의되어있기 때문에 Repository를 [], typescript를 이용해 고정시키겠다!
    .then( response => setRepodata(response.data.items) )
    .catch(err => console.log(err))
  }

  return (
    <>
      <input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder='python_study_hard'
      />
      <br /><br />
      <button onClick={handleClick}>Fetch</button>
      {repodata.length === 0 ? (
        <p>접근 가능한 데이터가 없습니다</p>
      ):(
        <table>
          <tbody>
            {repodata.map(repo => (
              <tr key={repo.id}>
                <td>{repo.full_name}</td>
                <td>
                  <a href={repo.html_url}>{repo.html_url}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default App
