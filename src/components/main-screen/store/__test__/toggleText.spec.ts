import mainSceenReducer, { initialState, toggleText } from "../slices"

describe("toggleText", () => {
  it("check toggleText", () => {
    const action = toggleText()
    const state = mainSceenReducer(initialState, action)

    expect(state.textButton).toBe("light")
  })
})
