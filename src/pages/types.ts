export interface IUserRepo {
  id: number
  name: string
  full_name: string
  html_url: string
}

export interface IData {
  data: IUserRepo
}