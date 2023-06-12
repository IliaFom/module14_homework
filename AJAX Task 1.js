const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const parser = new DOMParser()
const xmlDOM = parser.parseFromString(xmlString, "text/xml")
console.log(xmlDOM)

const listNode = xmlDOM.querySelector("list")
console.log(listNode)
let studentsNode = xmlDOM.querySelectorAll("list > student")
console.log(studentsNode)
let studentsNodeArr = Array.from(studentsNode)

const studentsNodeNewArr = studentsNodeArr.map(item => {
    return {name: item.querySelector('first').textContent + ' ' + item.querySelector('second').textContent, 
            age: Number(item.querySelector('age').textContent),
            prof: item.querySelector('prof').textContent, 
            lang: item.querySelector('name').getAttribute('lang')}
    })

console.log(studentsNodeArr)
console.log(studentsNodeNewArr)

const result = {
  list: studentsNodeNewArr
}

console.log(result)