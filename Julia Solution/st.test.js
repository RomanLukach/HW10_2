const lookForBestStudent = require("./st.js")
const data = require ("./students-data.json")

describe("test", () => {
  it.each([
    [data[0], "Ivan"],
    [data[1], "Marina"],
    [data[2], "Varvara"],
  ])("Test %#", (data, result) => {
    expect(lookForBestStudent(data)).toEqual(result);
  });
});