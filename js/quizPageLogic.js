const nextBtn = document.getElementById('next-btn')
const prevBtn = document.getElementById('prev-btn')
const submitQuizBtn = document.getElementById('submit-quiz-btn')
const questionForm = document.getElementById('questions-form')


let categories = localStorage.getItem('categories').split(',')

let questions = undefined

const fetchData = async (url) => {
    try {
        const resp = await fetch(url)
        if (!resp.ok) {
            throw new Error('404 not Found')
        }
        const data = await resp.json()
        questions = data.filter((question) => {
            return categories.find(category => category === question.category)
        })
        generateQuestions()
        const currentQuestionElement = document.getElementById(`q${questions[pointer].id}`)
        currentQuestionElement.classList.add('show')
    } catch (error) {
        console.log(error)
    }
}

let pointer = 0

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

    console.log(score)
})