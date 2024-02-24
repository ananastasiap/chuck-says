import mainSceenReducer, { initialState } from "../slices"

describe("initial state", () => {
  it("check initial state", () => {
    const state = mainSceenReducer(undefined, { type: "unknown" })

    expect(state).toEqual(initialState)
  })
})
