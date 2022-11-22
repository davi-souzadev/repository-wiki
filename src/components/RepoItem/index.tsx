import { ItemContainer, LinksContainer } from "./styles"
import { IRepoItem } from "./types"

export function RepoItem({ repo, handleRemoveRepo }: IRepoItem) {

  function handleRemove() {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <LinksContainer>
        <a href={repo.html_url} target="_blank">Link Repositório</a>
        <a href="#" className="remove" onClick={handleRemove}>Remover</a>
      </LinksContainer>
      <hr />
    </ItemContainer>
  )
}
