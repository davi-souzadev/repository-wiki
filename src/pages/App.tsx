import { useState } from 'react'
import Github from '../assets/github.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { RepoItem } from '../components/RepoItem'
import { api } from '../services/api'
import { Container } from './styles'
import { IUserRepo, IData } from './types'

function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState<IUserRepo[]>([])

  function handleUserInput(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentRepo(event.target.value)
  }

  async function handleSearchRepo() {
    try {
      const { data }: IData = await api.get(`repos/${currentRepo}`) 
      console.log('dados:', data)
      if(data.id) {
        const alreadyExists = repos.some(repo => repo.id === data.id)

        if(!alreadyExists) {
          setRepos(prev => [...prev, data])
          setCurrentRepo('')
          return
        }
        alert('Repositório já registrado')
      }
    } catch(error) {
      console.error(error)
    }
  }

  function handleRemoveRepo(id: number) {
    console.log('Removendo repositorio com id: ', id)
    setRepos(repos.filter(repo => id !== repo.id))
    console.log(repos)
  }

  return (
    <Container>
      <img 
        src={Github} 
        alt="Github Logo"
        className="githublogo"
      />
      <Input onChange={() => handleUserInput(event)} value={currentRepo}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo =>{
        return (
          <RepoItem
            handleRemoveRepo={handleRemoveRepo}
            key={repo.id}
            repo={repo}
          />
        )
      })}
    </Container>
  )
}

export default App
