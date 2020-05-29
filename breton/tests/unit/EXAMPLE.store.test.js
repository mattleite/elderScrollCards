import mutations from '@/store.js'

describe('addCard', () => {
  it('adds a card to the state.cards', () => {
    const card = { id: 1, name: 'Post' }
    const state = {
      cards: []
    }

    mutations.addCard(state, { card })

    expect(state).toEqual({
      cards: [{ 1: card }]
    })
  })
})

describe('dumpCards', () => {
  it('dumpCards should empty out the state.cards', () => {
    const post = { id: 1, title: 'Post' }
    const state = {
      cards: []
    }

    mutations.addCard(state, { card })

    expect(state).toEqual({
      cards: [{ 1: card }]
    })
  })
})
