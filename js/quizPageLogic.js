const nextBtn = document.getElementById('next-btn')
const prevBtn = document.getElementById('prev-btn')
const submitQuizBtn = document.getElementById('submit-quiz-btn')
const questionForm = document.getElementById('questions-form')
const mainElement = document.querySelector('main')
let completeBtn = undefined

let categories = localStorage.getItem('categories').split(',')

let questions = undefined

const fetchData = async (url) => {
    try {
        const resp = await fetch(url)
        if (!resp.ok) {
            throw new Error('Something went wrong with response')
        }
        const data = await resp.json()
        if (!categories[0]){
            throw new Error('No data Available!')
        }
        questions = getRandomElemets(data.filter((question) => {
            return categories.find(category => category === question.category)
        }), 5)
        console.log(questions)
        generateQuestions()
        const currentQuestionElement = document.getElementById(`q${questions[pointer].id}`)
        currentQuestionElement.classList.add('show')
    } catch (error) {
        let content = `<section id="score-card-container">
            <article style='background-color:white; text-align:center; padding: 2vh 5%;' id="error">
                <div style='margin-bottom: 3vh'>
                    <h2 style='margin-bottom: 1vh; font-family: var(--secondary-font)'>404 NOT FOUND</h2>
                    <p>${error}</p>
                </div>
                <button id='complete-btn' class="btn btn-secondary" onclick="backToHome()">Return to Home</button>
            </article>
        </section>`
        generateReturnElement(content)
    }
}

let pointer = 0

const getRandomElemets = (arr, count) => {
    for (let i = arr.length - 1 ; i > 0 ; i-- ){
        const j = Math.floor(Math.random() * (i + 1))
        
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        
    }

    return arr.slice(0 , count)
}

const createFieldset = (question) => {
    return `<fieldset id="q${question.id}">
                    <legend>${question.question}</legend>
                    <label for="q${question.id}-option1">
                        <input id="q${question.id}-option1" name="q${question.id}" type="radio" value="a">
                        ${question.options.a}
                    </label>
                    <label for="q${question.id}-option2">
                        <input id="q${question.id}-option2" name="q${question.id}" type="radio" value="b">
                        ${question.options.b}
                    </label>
                    <label for="q${question.id}-option3">
                        <input id="q${question.id}-option3" name="q${question.id}" type="radio" value="c">
                        ${question.options.c}
                    </label>
                    <label for="q${question.id}-option4">
                        <input id="q${question.id}-option4" name="q${question.id}" type="radio" value="d">
                        ${question.options.d}
                    </label>
                </fieldset>`
}

const generateQuestions = () => {
    questions.forEach((question) => {
        questionForm.innerHTML  += createFieldset(question)
    })
}

const generateReturnElement = (content) => {
    mainElement.innerHTML += content
}

const onPageLoad = () => {
    fetchData('../data/data.json')
}

const nextSubmitBtnsToggle = () => {
    submitQuizBtn.classList.toggle('hidden')
    nextBtn.classList.toggle('hidden')
}

document.addEventListener('DOMContentLoaded' , onPageLoad())

nextBtn.addEventListener('click', () => {
    if (pointer < questions.length - 1) {
        let currentQuestionElement = document.getElementById(`q${questions[pointer].id}`)
        currentQuestionElement.classList.remove('show')
        pointer += 1
        currentQuestionElement = document.getElementById(`q${questions[pointer].id}`)
        currentQuestionElement.classList.add('show')
    }
    if (pointer === questions.length - 1) {
        nextSubmitBtnsToggle()
    }
})

prevBtn.addEventListener('click', () => {
    if (pointer === questions.length - 1) {
        nextSubmitBtnsToggle()
    }
    if (pointer > 0) {
        let currentQuestionElement = document.getElementById(`q${questions[pointer].id}`)
        currentQuestionElement.classList.remove('show')
        pointer -= 1
        currentQuestionElement = document.getElementById(`q${questions[pointer].id}`)
        currentQuestionElement.classList.add('show')
    }
})

submitQuizBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let score = 0
    questions.forEach((question) => {
        const answerElement = document.querySelector(`input[name="q${question.id}"]:checked`)

        if (answerElement && answerElement.value === question.correctAnswer) {
            score += 1
        }
    })

    const scoreContent = `<section id="score-card-container">
            <article id="score-card">
                <div>
                    <h2>Your score</h2>
                    <p>${score}</p>
                </div>
                <button id='complete-btn' class="btn btn-primary" onclick="backToHome()">Return to Home</button>
            </article>
        </section>`
    generateReturnElement(scoreContent)
    completeBtn = document.getElementById('complete-btn')
})

const backToHome = () => {
    localStorage.setItem('categories', '')
    window.location.href = '/'
}