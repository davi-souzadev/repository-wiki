interface IRepoType {
  id: number
  name: string
  full_name: string
  html_url: string
}

export interface IRepoItem {
  handleRemoveRepo: Function
  repo: IRepoType
}