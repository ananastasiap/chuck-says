import mainSceenReducer, { initialState, setCurrentJoke } from "../slices"

describe("setCurrentJoke", () => {
  it("check setCurrentJoke", () => {
    const action = setCurrentJoke("New Joke")
    const state = mainSceenReducer(initialState, action)

    expect(state.currentJoke).toBe("New Joke")
  })
})
