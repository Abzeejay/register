function createPerson (name, email, campus, track, course, classcode  ) {
    let x = new Date()
    return {
        Name: name,
        Email: email,
        campus: campus,
        track: track,
        course: course,
        classcode: classcode,
        time: `${x.getHours()}:${x.getMinutes()}`
    }
}

const myForm = document.querySelector('#attend')
const tableBody = document.querySelector('tbody')
const people = []

const generatePeopleData = () => {
    people.forEach(person => {
        let tr = document.createElement('tr')
        for (let key in person) {
            let td = document.createElement('td')
            td.innerHTML = person[key]
            tr.appendChild(td)
        }

        tableBody.append(tr)
    })
}

myForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let name = evt.target[0].value;
    let email = evt.target[1].value;
    let campus = evt.target[2].value;
    let track = evt.target[3].value;
    let course = evt.target[4].value;
    let classcode = evt.target[5].value;
    let person = createPerson(name, email, campus, track, course, classcode )
    people.push(person);
    generatePeopleData()
    evt.target[0].value = ''
    evt.target[1].value = ''
    evt.target[2].value = ''
    evt.target[3].value = ''
    evt.target[4].value = ''
})
