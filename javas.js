
let users = [
    {
        name:"Mg Mg",
        age: 30,
        gen :"Male"

    },
    {
        name:"Aung Aung",
        age: 300,
        gen :"Male"

    },
    {
        name:"Zar Ni Thway",
        age: 32,
        gen :"Male"

    },
    {
        name:"Myat Minaga",
        age: 34,
        gen :"Male"

    }
   

]

// users.map((user) =>{
//     console.log(user.name)
// })




let ind = users.findIndex(user => user.age==34);
console.log(users[ind].name)


let person = {
    name : "PPW",
    age : 27,
    sist : "MTK",
    parent: ["U W Naing","D Nan Saw"]
}

let dt = ` 
<h3>${person.name}</h3>
<ul>
    <li>Aeg     : ${person.age}</li>
    <li>Name    :${person.name}</li>
    <li>${person.sist}</li>
    <li>${person.parent[0]}</li>
    <li>${person.parent[1]}</li>
</ul>

`;
document.querySelector('.details').innerHTML = dt;