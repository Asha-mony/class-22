// const student = {
//     name : 'Asha',
//     age : 22
// }
// console.log(student);
// const dataStringify = JSON.stringify(student)
// console.log(dataStringify);
// console.log(JSON.parse(dataStringify));

// // console.log(2, '2'); 


fetch('https://jsonplaceholder.typicode.com//users')
  .then((response) => response.json())
  // .then((json) => console.log(json));


  // .then(datas => {
  //   console.log(datas)
  //   for (const data of datas) {
  //     console.log('Person Name:',data.name);
  //     console.log('Company Name:',data.company.name);
  //   }
  
  // })



  .then(datas => {
    console.log(datas)
    const contaimerDiv = document.getElementById('container')

    for (const data of datas) {
      const h1 = document.createElement('h1')

      // console.log('Person Name:',data.name);
      h1.innerText = `User Name : ${data.name}
      Company Name : ${data.company.name}
      `
      contaimerDiv.appendChild(h1);
    }
  
  })
