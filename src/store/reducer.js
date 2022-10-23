/*global chrome*/
import { createStore, createHook } from 'react-sweet-state'

let selectedText = chrome.extension.getBackgroundPage().word;

const initialState = {
  title: '',
  desc: '',
  id: '',
}
const Store = createStore({
  initialState,
  actions: {
    fetchArticle:
      () =>
      async ({ setState, getState }) => {
        // Loading
        setState(initialState)

        // Using Wikipedia API
        const url =
          'https://en.wikipedia.org/w/api.php?format=json&action=query&titles='+selectedText+'&grnnamespace=0&prop=extracts&grnlimit=1&explaintext='
        let resp = await fetch(url)
        resp = await resp.json()

        // Set id, title, and description
		const response = { ...resp }
        const id = Object.keys(response.query.pages)[0]
        const title = response.query.pages[id].title
        let desc = response.query.pages[id].extract.split('.')[0]

        setState({
          id,
          title,
          desc,
        })
      },
  },
})

export const useCounter = createHook(Store)