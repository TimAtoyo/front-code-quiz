var highScores = document.querySelector('#highscores');
var clear = document.querySelector('#clear');
var users = JSON.parse( localStorage.getItem('users'))
users.sort()
users.reverse();

console.log(users);
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    for (let j = 0; j < users[i].length; j++) {
        console.log(users[i][j]);
        var li = document.createElement('li');
        li.textContent = `${users[i][0]} from ${users[i][1]}`
    }
    highScores.append(li)
}

clear.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.clear();
})



// var li = document.createElement('li');
//         li.textContent = `${element[i+1]} from ${element[i]}`
//         highScores.append(li)


// for (let i = 0; i < users.length; i++) {
//     var li = document.createElement('li');
//     users = users[i];
//     console.log(Object.values(users));
//     Object.values(users).forEach(([key, value]) =>{
//         li.textContent = `${key} ${value}`
//         highScores.append(li)
//     })
    
// }





