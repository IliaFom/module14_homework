const input1 = document.querySelector('.inp')
const input2 = document.querySelector('.inp2')
const button1 = document.querySelector('.btn')
const resultNode = document.querySelector('.result')

document.addEventListener('DOMContentLoaded', async ()=>{
  let one = localStorage.getItem('one')
  let two = localStorage.getItem('two')
  input1.value = one
  input2.value = two
  const url = `https://jsonplaceholder.typicode.com/photos?_page=${one}&_limit=${two}`
  const refreshRequest = await clickBtn(url)
  console.log(refreshRequest)
})

function clickBtn(link){
  
  if ((isNaN(input1.value) || input1.value < 1 || input1.value > 10) && 
  (input2.value >=1 && input2.value <=10)){
    resultNode.innerHTML='Номер страницы вне диапазона от 1 до 10'
  }
  else if ((isNaN(input2.value) || input2.value < 1 || input2.value > 10) && 
  (input1.value >=1 && input1.value <=10) ){
    resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10'
  }
  else if ((isNaN(input1.value) || input1.value < 1 || input1.value > 10) && 
  (isNaN(input2.value) || input2.value < 1 || input2.value > 10)){
    resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'
  } 
  else{
    return fetch(link)
      .then((response)=>{
          console.log(response)
          return response.json()
        })
      .then((json)=> {
          displayResult(json)
          return json
        })
  }
}

button1.addEventListener('click', async ()=>{
  const url = `https://jsonplaceholder.typicode.com/photos?_page=${input1.value}&_limit=${input2.value}`
  localStorage.setItem('one',input1.value)
  localStorage.setItem('two', input2.value)
  const requestResult = await clickBtn(url)
  console.log(requestResult)
  }                       
)

function displayResult(apiData){
  let cards = ''
  apiData.forEach(item=>{
    cards = cards + `<img class="image" src="${item.url}" alt="image">`
  })
  resultNode.innerHTML=cards
}
