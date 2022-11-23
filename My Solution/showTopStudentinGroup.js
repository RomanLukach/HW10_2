function groups (array) {
    let topStudents = [];
    for (let g = 0; g < array.length; ++g) {
    // Students sorting by score (descending) and date (assending) within a group
    array[g].sort(function(x1, x2) {
        if (x1.score < x2.score) return 1;
        if (x1.score > x2.score) return -1;
        if (x1.date < x2.date) return -1;
        if (x1.date > x2.date) return 1;
        return array[g][0]}
        )      
        console.log(`Congratulate student ${array[g][0].name}`)        
        topStudents.push(array[g][0]);
    }
//    console.log(topStudents)
    return topStudents;
}
module.exports = groups;