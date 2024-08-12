const topicSelectorFormContainer = document.getElementById('form-container')
const categoriesElement = document.getElementById('categories')
const startQuiz = document.getElementById('start-quiz')

let questions = undefined

let quizQuestions = undefined

const fetchData = async (url) => {
    try {
        const resp = await fetch(url)
        if (!resp.ok) {
            throw new Error('404 not Found')
        }
        console.log('data fetched successfully')
        return resp.json()
    } catch (error) {
        console.log('something went wrong')
    }
}

const toggleQuizForm = () => {
    topicSelectorFormContainer.classList.remove('hidden')
    fetchData('../data/data.json')
        .then((data) => {
            if (!data) {
                throw new Error('404! data not Found')
            }
            questions = data
            let content = '<legend>Select one or more topics to start quiz</legend>'
            const categories = Array.from(new Set(data.map(({ category, ...rest }) => category)))
            categories.forEach((category, index) => {
                content += `<label for="checkboxes-${index}">
                            ${category}
                        <input type="checkbox" name="checkboxes-${index}" id="checkboxes-${index}" class="checkboxes" value="${index}" onchange="topicSelectorEventHandler(this)">
                        <div class="checked"></div>
                    </label>`
            })
            categoriesElement.innerHTML = content
        })
        .catch((error) => {
            console.log(error)
            let content = '<h3>404! (Not Found)</h3>'
            categoriesElement.innerHTML = content
        })
}

const closeQuizForm = () => {
    topicSelectorFormContainer.classList.add('hidden')
}

const topicSelectorEventHandler = (targetElement) => {
    const parentElement = targetElement.parentElement
    if (targetElement.checked) {
        parentElement.style.backgroundColor = '#fcc822'
        parentElement.style.paddingRight = '35px'
    }
    else {
        parentElement.style.backgroundColor = '#D1D1D1'
        parentElement.style.paddingRight = '2%'
    }
}


startQuiz.addEventListener('click', (e) => {
    e.preventDefault()

    let checkboxes = document.getElementsByClassName('checkboxes')
    
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    
    if (!isChecked) {
        alert('Please select at least one option.');
        return 0
    }

    let chosenCategories = []

    for (let index = 0; index < checkboxes.length ; index++) {
        const element = checkboxes[index];
        if(element.checked){
            chosenCategories.push(element.parentElement.innerText)
        }
    }
    console.log(chosenCategories)
    localStorage.setItem('categories', chosenCategories)

    window.location.href = 'pages/quiz.html'
})
