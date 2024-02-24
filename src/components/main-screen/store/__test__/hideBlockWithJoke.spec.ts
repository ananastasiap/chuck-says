import mainSceenReducer, { initialState, hideBlockWithJoke } from "../slices"

describe("hideBlockWithJoke", () => {
  it("should set displayJoke to false", () => {
    const action = hideBlockWithJoke()
    const state = mainSceenReducer(initialState, action)

    expect(state.displayJoke).toBe(false)
  })
})
