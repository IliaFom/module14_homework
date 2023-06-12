const input1 = document.querySelector('.inp')
const button1 = document.querySelector('.btn')
const resultNode = document.querySelector('.result')

function clickBtn(event){
  // input.value = Math.floor(input.value)
  if (input1.value > 0 && input1.value <= 10){
    initRequest(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=${input1.value}`)
  }
  else {
    resultNode.innerHTML = 'число вне диапазона от 1 до 10'
  }
  event.preventDefault()
}

button1.addEventListener('click', clickBtn)

function initRequest(url){
  let xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.onload = function(){
    if (xhr.status !== 200){
      console.log('Статус ответа:', xhr.status)
    }
    else{
      const result = JSON.parse(xhr.response)
      console.log(result)
      displayResult(result)
    } 
  } 
  xhr.onerror = function(){
    console.log('Ошибка ! Статус ответа:', xhr.status)
  }
  xhr.send()
}

function displayResult(apiData){
  let cards = ''
  apiData.forEach(item=>{
    cards = cards + `<img class="image" src="${item.url}" alt="image">`
  })
  resultNode.innerHTML=cards
}