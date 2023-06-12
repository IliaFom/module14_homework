const input1 = document.querySelector('.inp')
const input2 = document.querySelector('.inp2')
const button1 = document.querySelector('.btn')
const resultNode = document.querySelector('.result')


function clickBtn(link){
   if ( isNaN(input1.value) || isNaN (input2.value) || input1.value < 100 
     || input1.value > 300 || input2.value < 100 || input2.value > 300){
     resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300'
   }
   else{
     return fetch(link)
           .then((response)=>{
               console.log(response)
               displayResult(response.url)
               return response
           })
           .catch(() => { console.log('error') })
   }
}


function displayResult(link){
    let cards = ''
    cards = cards + `<img class="image" src="${link}" alt="image">`
    resultNode.innerHTML=cards
}


button1.addEventListener('click', async (e)=>{
    e.preventDefault()
    const url=`https://loremflickr.com/${input1.value}/${input2.value}`
    const requestResult = await clickBtn(url)
    console.log(requestResult)
})