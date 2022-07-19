let myLead = []
let oldLead = []
const inputEl = document.getElementById('input-el')
const input = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')

//Get the Leads from LocalStorage
//store in a vairable called leadsFromLocalStorage
//log out the variable
let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLead'))

if (leadsFromLocalStorage) {
  myLead = leadsFromLocalStorage
  render(myLead)
}

function render(lead) {
  let listItems = ""
  for (let i = 0; i < lead.length; i++) {
    listItems += `<li>
    <a target= "_blank" href="${lead[i]}">
    ${lead[i]}
    </a>
    </li>`
  }
  ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLead = []
  render(myLead)
})

input.addEventListener("click", function() {
  //myLead.push(inputEl.value)
  myLead.push(document.getElementById('input-el').value)
  inputEl.value = '';
  //save myLead array into localStorage
  localStorage.setItem('myLead', JSON.stringify())
  render(myLead)
})
