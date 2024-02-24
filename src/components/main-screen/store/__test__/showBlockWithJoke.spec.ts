import mainSceenReducer, { initialState, showBlockWithJoke } from "../slices"

describe("showBlockWithJoke", () => {
  it("check showBlockWithJoke", () => {
    const action = showBlockWithJoke()
    const state = mainSceenReducer(initialState, action)

    expect(state.displayJoke).toBe(true)
  })
})
