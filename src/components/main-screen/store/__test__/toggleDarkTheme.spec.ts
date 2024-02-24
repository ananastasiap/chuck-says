import mainSceenReducer, { initialState, toggleDarkTheme } from "../slices"

describe("toggleDarkTheme", () => {
  it("check toggleDarkTheme", () => {
    const action = toggleDarkTheme()
    const state = mainSceenReducer(initialState, action)

    expect(state.darkTheme).toBe(!initialState.darkTheme)
  })
})
