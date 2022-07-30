export const FETCH_ALL_NEWS = 'FETCH_ALL_NEWS'
export const SAVE_ALL_NEWS = 'SAVE_ALL_NEWS'

console.log('action')

export const fetchAllNews = () => ({
  type: FETCH_ALL_NEWS,
})

export const saveAllNews = (listNews: any) => ({
  type: SAVE_ALL_NEWS,
  listNews,
})
