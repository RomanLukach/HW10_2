const data = require('./students-data.json')
const topStudents = require('./showTopStudentinGroup.js')

describe("test", () => {
  it.each([
    [data[0].name, 'Ivan'],
    [data[1].name, 'Marina'],
    [data[2].name, 'Varvara'],
  ])("Test %#", (data, result) => {
    expect(topStudents(data)).toEqual(result);
  });
});