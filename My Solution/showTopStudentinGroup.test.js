const data = require('./students-data.json')
const topStudents = require('./showTopStudentinGroup.js')

const [firstStudent, secondStudent, thirdStudent] = topStudents(data)
describe("test", () => {
  it('Include Ivan in best students', () =>{
    expect(topStudents(data).find(topStudent => topStudent.name === 'Ivan'))
    .toEqual(firstStudent)})
//  it('Include Marina in best students', () => {
//    expect(topStudents(data).find(topStudent => topStudent.name === 'Marina'))
//    .toEqual(secondStudent)})

//  it('Include Varvara in best students', () => {
//    expect(topStudents(data).find(topStudent => topStudent.name === 'Varvara'))
//    .toEqual(thirdStudent)})
  })
