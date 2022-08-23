//1.задание

// const mass1 = [1,2,3,4,5]
// const mass2 = [6,7,8,9,10]
// const mass3 = [11,12,13,14,15]
// const mass4 = [16,17,18,19,20]
// const mass5 = [21,22,23,24,25]
// const mass6 = [...mass1,mass2,mass3,mass4,mass5]

// console.log(mass6);

//2.задание

// const obj = {
//     name1:'Jhon',
//     age1:30,
//     name2:'Jack',
//     age2: 25,
//     name3:'Anna',
// }

// const obj2 = {
//     ...obj,
//     key1:'value',
//     key2:'value',
//     kay3:'value'
 
// }
// console.log(obj2)




//3.задание

// const list = [
//     // {
//     //     id: 1,
//     //     text: "Learn JS!"
//     // }
// ]

// const addButton = document.getElementById('button');
// const input = document.getElementById('input')


// function render () {
//     const mainDiv = document.createElement('div')
//     mainDiv.setAttribute('class', 'list')
    
//     for (let i = 0; i < list.length;i++){
//         const div = document.createElement ('div')
//         div.setAttribute('class', 'todoBlock');
//         const p =document.createElement('p')
//         p.innerText = 'Hello,'
//         const span = document.createElement('span')
//         span.innerText = list[i].text
//         div.append(p)
//         div.append(span)
        




//         const actions = document.createElement('div')
//         actions.setAttribute('class', 'actions');
//         const changeButton = document.createElement('button');
//         changeButton.setAttribute('class', 'change')
//         changeButton.innerText = 'change'
//         const deleteButton = document.createElement('button')
//         deleteButton.setAttribute('class', 'delete')
//         deleteButton.innerText = 'delete'
//         actions.append(changeButton,deleteButton)
//         div.append(actions),
//         mainDiv.append(div)
//         deleteButton.onclick = () => {
//             span.remove ()
//         }
//         changeButton.onclick = () => {
//             const text = prompt ()
//             span.innerText = text
//         }
//     }
//     const form = document.querySelector('.form')
//     document.querySelector('.list').remove()
//     form.append(mainDiv)
// }

// addButton.onclick = () => {
//     const obj  = {
//         id: list.length+1,
//         text: input.value,
//     }
//     list.push(obj);
//     render()

// }


