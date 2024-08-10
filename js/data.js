const quizQuestions = [
    {
        id: 1,
        category: "Front-End",
        question: "Which of the following is a front-end JavaScript framework?",
        options: {
            a: "Django",
            b: "React",
            c: "Flask",
            d: "Spring"
        },
        correctAnswer: "b"
    },
    {
        id: 2,
        category: "Web Design",
        question: "In CSS, what does the 'box-shadow' property do?",
        options: {
            a: "Adds shadow to the text",
            b: "Adds shadow to an element's border",
            c: "Adds shadow to an element's background",
            d: "Adds shadow to an element's margin"
        },
        correctAnswer: "b"
    },
    {
        id: 3,
        category: "Back-End",
        question: "Which HTTP method is used to update a resource?",
        options: {
            a: "GET",
            b: "POST",
            c: "PUT",
            d: "DELETE"
        },
        correctAnswer: "c"
    },
    {
        id: 4,
        category: "Cybersecurity",
        question: "What does the term 'SQL Injection' refer to?",
        options: {
            a: "A type of cyberattack that involves inserting malicious SQL code into a query",
            b: "A method of injecting JavaScript into a web page",
            c: "A way to prevent cross-site scripting",
            d: "A technique used to optimize SQL queries"
        },
        correctAnswer: "a"
    },
    {
        id: 5,
        category: "Machine Learning",
        question: "What is a 'neural network'?",
        options: {
            a: "A type of network used to connect neural implants",
            b: "A computational model designed to simulate the way the human brain processes information",
            c: "A machine learning algorithm for classification tasks",
            d: "A method for data encryption"
        },
        correctAnswer: "b"
    },
    {
        id: 6,
        category: "Front-End",
        question: "Which HTML element is used to define a table row?",
        options: {
            a: "<tr>",
            b: "<td>",
            c: "<th>",
            d: "<table>"
        },
        correctAnswer: "a"
    },
    {
        id: 7,
        category: "Web Design",
        question: "What does the 'z-index' property in CSS control?",
        options: {
            a: "The visibility of an element",
            b: "The stacking order of elements",
            c: "The position of an element",
            d: "The size of an element"
        },
        correctAnswer: "b"
    },
    {
        id: 8,
        category: "Back-End",
        question: "Which of the following is a NoSQL database?",
        options: {
            a: "MySQL",
            b: "PostgreSQL",
            c: "MongoDB",
            d: "SQLite"
        },
        correctAnswer: "c"
    },
    {
        id: 9,
        category: "Cybersecurity",
        question: "Which of the following is a common type of phishing attack?",
        options: {
            a: "Sending fake emails to steal personal information",
            b: "Installing malware through a website",
            c: "Man-in-the-middle attack",
            d: "DDoS attack"
        },
        correctAnswer: "a"
    },
    {
        id: 10,
        category: "Machine Learning",
        question: "What is 'overfitting' in machine learning?",
        options: {
            a: "A model that performs well on training data but poorly on unseen data",
            b: "A model that generalizes well across different datasets",
            c: "A model with too few parameters",
            d: "A model that takes too long to train"
        },
        correctAnswer: "a"
    },
    // Additional questions would follow the same format...
    {
        id: 11,
        category: "Front-End",
        question: "Which of the following is used to style HTML elements?",
        options: {
            a: "JavaScript",
            b: "CSS",
            c: "SQL",
            d: "PHP"
        },
        correctAnswer: "b"
    },
    {
        id: 12,
        category: "Web Design",
        question: "Which CSS property is used to change the text color of an element?",
        options: {
            a: "color",
            b: "text-color",
            c: "font-color",
            d: "bg-color"
        },
        correctAnswer: "a"
    },
    {
        id: 13,
        category: "Back-End",
        question: "Which of the following is a back-end framework?",
        options: {
            a: "Angular",
            b: "Vue.js",
            c: "Laravel",
            d: "Bootstrap"
        },
        correctAnswer: "c"
    },
    {
        id: 14,
        category: "Cybersecurity",
        question: "What does the acronym 'DDoS' stand for?",
        options: {
            a: "Distributed Denial of Service",
            b: "Dynamic Data Operation Service",
            c: "Distributed Data Optimization System",
            d: "Denial of Data Service"
        },
        correctAnswer: "a"
    },
    {
        id: 15,
        category: "Machine Learning",
        question: "What is 'gradient descent' used for in machine learning?",
        options: {
            a: "To find the maximum of a function",
            b: "To find the minimum of a function",
            c: "To create decision trees",
            d: "To cluster data points"
        },
        correctAnswer: "b"
    },
    {
        id: 16,
        category: "Front-End",
        question: "Which of the following is used to define a clickable button in HTML?",
        options: {
            a: "<button>",
            b: "<click>",
            c: "<input>",
            d: "<btn>"
        },
        correctAnswer: "a"
    },
    {
        id: 17,
        category: "Web Design",
        question: "In CSS, what is the 'display' property used for?",
        options: {
            a: "To control the visibility of an element",
            b: "To define how an element is displayed on the screen",
            c: "To align text within an element",
            d: "To set the background color"
        },
        correctAnswer: "b"
    },
    {
        id: 18,
        category: "Back-End",
        question: "Which of the following is a server-side language?",
        options: {
            a: "JavaScript",
            b: "HTML",
            c: "PHP",
            d: "CSS"
        },
        correctAnswer: "c"
    },
    {
        id: 19,
        category: "Cybersecurity",
        question: "What is 'encryption' in cybersecurity?",
        options: {
            a: "A method to compress files",
            b: "A process of converting information into code to prevent unauthorized access",
            c: "A way to increase data transfer speed",
            d: "A method to recover lost data"
        },
        correctAnswer: "b"
    },
    {
        id: 20,
        category: "Machine Learning",
        question: "Which of the following is a supervised learning algorithm?",
        options: {
            a: "K-means",
            b: "Linear regression",
            c: "Principal Component Analysis (PCA)",
            d: "DBSCAN"
        },
        correctAnswer: "b"
    },
    {
        id: 21,
        category: "Front-End",
        question: "Which HTML attribute is used to define inline styles?",
        options: {
            a: "class",
            b: "style",
            c: "id",
            d: "inline"
        },
        correctAnswer: "b"
    },
    {
        id: 22,
        category: "Web Design",
        question: "What is the purpose of media queries in CSS?",
        options: {
            a: "To apply different styles based on device characteristics",
            b: "To create animations",
            c: "To optimize images for web",
            d: "To manage browser compatibility issues"
        },
        correctAnswer: "a"
    },
    {
        id: 23,
        category: "Back-End",
        question: "Which of the following is a key feature of RESTful APIs?",
        options: {
            a: "Stateful operations",
            b: "Use of HTTP methods like GET, POST, PUT, DELETE",
            c: "Session-based authentication",
            d: "Use of SOAP protocols"
        },
        correctAnswer: "b"
    },
    {
        id: 24,
        category: "Cybersecurity",
        question: "Which of the following is considered a strong password?",
        options: {
            a: "password123",
            b: "12345678",
            c: "qwerty",
            d: "A1b2C3d4!"
        },
        correctAnswer: "d"
    },
    {
        id: 25,
        category: "Machine Learning",
        question: "Which of the following is a popular library for machine learning in Python?",
        options: {
            a: "React",
            b: "NumPy",
            c: "Scikit-learn",
            d: "Laravel"
        },
        correctAnswer: "c"
    },
    {
        id: 26,
        category: "Front-End",
        question: "Which CSS property is used to change the font of an element?",
        options: {
            a: "font-style",
            b: "font-family",
            c: "font-weight",
            d: "text-decoration"
        },
        correctAnswer: "b"
    },
    {
        id: 27,
        category: "Web Design",
        question: "What is the purpose of the 'alt' attribute in an image tag?",
        options: {
            a: "To provide a title for the image",
            b: "To provide alternate text if the image cannot be displayed",
            c: "To define the image's size",
            d: "To link the image to another page"
        },
        correctAnswer: "b"
    },
    {
        id: 28,
        category: "Back-End",
        question: "Which of the following is a popular back-end framework for Node.js?",
        options: {
            a: "Express.js",
            b: "Vue.js",
            c: "Ruby on Rails",
            d: "Angular"
        },
        correctAnswer: "a"
    },
    {
        id: 29,
        category: "Cybersecurity",
        question: "Which of the following is an example of two-factor authentication?",
        options: {
            a: "Using a password alone",
            b: "Using a security question alone",
            c: "Using a password and an OTP sent to your phone",
            d: "Using a PIN alone"
        },
        correctAnswer: "c"
    },
    {
        id: 30,
        category: "Machine Learning",
        question: "What does the term 'feature engineering' refer to in machine learning?",
        options: {
            a: "Selecting the best algorithm for training",
            b: "Creating new input features from existing data to improve model performance",
            c: "Optimizing hyperparameters of a model",
            d: "Splitting data into training and testing sets"
        },
        correctAnswer: "b"
    },
    {
        id: 31,
        category: "Front-End",
        question: "Which HTML tag is used to define a hyperlink?",
        options: {
            a: "<link>",
            b: "<a>",
            c: "<href>",
            d: "<hyperlink>"
        },
        correctAnswer: "b"
    },
    {
        id: 32,
        category: "Web Design",
        question: "Which of the following CSS properties is used to create space between the content of an element and its border?",
        options: {
            a: "margin",
            b: "padding",
            c: "border-spacing",
            d: "width"
        },
        correctAnswer: "b"
    },
    {
        id: 33,
        category: "Back-End",
        question: "Which of the following is a relational database management system?",
        options: {
            a: "MongoDB",
            b: "Firebase",
            c: "MySQL",
            d: "Redis"
        },
        correctAnswer: "c"
    },
    {
        id: 34,
        category: "Cybersecurity",
        question: "What is a 'firewall' used for in cybersecurity?",
        options: {
            a: "To encrypt data",
            b: "To protect a network from unauthorized access",
            c: "To compress files",
            d: "To manage user passwords"
        },
        correctAnswer: "b"
    },
    {
        id: 35,
        category: "Machine Learning",
        question: "Which of the following algorithms is commonly used for classification tasks?",
        options: {
            a: "K-means clustering",
            b: "Support Vector Machines (SVM)",
            c: "Principal Component Analysis (PCA)",
            d: "Apriori algorithm"
        },
        correctAnswer: "b"
    },
    {
        id: 36,
        category: "Front-End",
        question: "Which of the following is used to make a website responsive?",
        options: {
            a: "HTML",
            b: "CSS Media Queries",
            c: "JavaScript",
            d: "SQL"
        },
        correctAnswer: "b"
    },
    {
        id: 37,
        category: "Web Design",
        question: "Which of the following is a CSS preprocessor?",
        options: {
            a: "SASS",
            b: "Bootstrap",
            c: "React",
            d: "jQuery"
        },
        correctAnswer: "a"
    },
    {
        id: 38,
        category: "Back-End",
        question: "Which of the following is used to interact with a database in PHP?",
        options: {
            a: "SQL",
            b: "MongoDB",
            c: "MySQLi",
            d: "JSON"
        },
        correctAnswer: "c"
    },
    {
        id: 39,
        category: "Cybersecurity",
        question: "What does the 'HTTPS' in a website URL signify?",
        options: {
            a: "The site is powered by HTML",
            b: "The site is encrypted and secure",
            c: "The site is using HTTP 2.0",
            d: "The site is hosted on a secure server"
        },
        correctAnswer: "b"
    },
    {
        id: 40,
        category: "Machine Learning",
        question: "What is 'cross-validation' used for in machine learning?",
        options: {
            a: "To tune the parameters of a model",
            b: "To assess the performance of a model on unseen data",
            c: "To clean and preprocess data",
            d: "To visualize data"
        },
        correctAnswer: "b"
    },
    {
        id: 41,
        category: "Front-End",
        question: "Which CSS property is used to change the background color of an element?",
        options: {
            a: "background-color",
            b: "bgcolor",
            c: "color",
            d: "background"
        },
        correctAnswer: "a"
    },
    {
        id: 42,
        category: "Web Design",
        question: "What is the purpose of 'Flexbox' in CSS?",
        options: {
            a: "To create responsive layouts",
            b: "To add animations",
            c: "To style text",
            d: "To optimize images"
        },
        correctAnswer: "a"
    },
    {
        id: 43,
        category: "Back-End",
        question: "Which SQL keyword is used to retrieve data from a database?",
        options: {
            a: "GET",
            b: "SELECT",
            c: "FETCH",
            d: "RETRIEVE"
        },
        correctAnswer: "b"
    },
    {
        id: 44,
        category: "Cybersecurity",
        question: "What is a 'Trojan horse' in cybersecurity?",
        options: {
            a: "A type of virus that disguises itself as a legitimate program",
            b: "A type of phishing attack",
            c: "A method for encrypting data",
            d: "A network attack that floods the target with requests"
        },
        correctAnswer: "a"
    },
    {
        id: 45,
        category: "Machine Learning",
        question: "What does 'k-fold cross-validation' help to achieve?",
        options: {
            a: "Reduce the bias of the model",
            b: "Optimize model parameters",
            c: "Estimate the performance of a model",
            d: "Select the best machine learning algorithm"
        },
        correctAnswer: "c"
    },
    {
        id: 46,
        category: "Front-End",
        question: "Which HTML element is used to display a list of items?",
        options: {
            a: "<list>",
            b: "<ul>",
            c: "<items>",
            d: "<ol>"
        },
        correctAnswer: "b"
    },
    {
        id: 47,
        category: "Web Design",
        question: "Which CSS property controls the amount of space between lines of text?",
        options: {
            a: "line-height",
            b: "text-spacing",
            c: "letter-spacing",
            d: "word-spacing"
        },
        correctAnswer: "a"
    },
    {
        id: 48,
        category: "Back-End",
        question: "In Node.js, which module is used for handling HTTP requests?",
        options: {
            a: "fs",
            b: "http",
            c: "path",
            d: "os"
        },
        correctAnswer: "b"
    },
    {
        id: 49,
        category: "Cybersecurity",
        question: "What does '2FA' stand for in cybersecurity?",
        options: {
            a: "Two-Factor Authentication",
            b: "Two-Factor Authorization",
            c: "Two-Factor Access",
            d: "Two-Factor Analysis"
        },
        correctAnswer: "a"
    },
    {
        id: 50,
        category: "Machine Learning",
        question: "Which algorithm is commonly used for regression tasks?",
        options: {
            a: "K-means",
            b: "Logistic Regression",
            c: "Linear Regression",
            d: "Naive Bayes"
        },
        correctAnswer: "c"
    },
    {
        id: 51,
        category: "Front-End",
        question: "What is the purpose of the 'src' attribute in an <img> tag?",
        options: {
            a: "To define the image's source file",
            b: "To set the image's style",
            c: "To add alternative text",
            d: "To set the image's size"
        },
        correctAnswer: "a"
    },
    {
        id: 52,
        category: "Web Design",
        question: "What does the 'opacity' property in CSS control?",
        options: {
            a: "The text alignment",
            b: "The transparency of an element",
            c: "The size of an element",
            d: "The position of an element"
        },
        correctAnswer: "b"
    },
    {
        id: 53,
        category: "Back-End",
        question: "Which of the following is an HTTP status code for a successful request?",
        options: {
            a: "200",
            b: "404",
            c: "500",
            d: "301"
        },
        correctAnswer: "a"
    },
    {
        id: 54,
        category: "Cybersecurity",
        question: "What is a 'VPN' used for?",
        options: {
            a: "To mask a user's IP address and secure internet traffic",
            b: "To scan for malware",
            c: "To back up data",
            d: "To optimize internet speed"
        },
        correctAnswer: "a"
    },
    {
        id: 55,
        category: "Machine Learning",
        question: "What does 'unsupervised learning' mean?",
        options: {
            a: "Learning from labeled data with known outcomes",
            b: "Learning from data without labeled outcomes",
            c: "Supervised training with human feedback",
            d: "Training a model with a fixed dataset"
        },
        correctAnswer: "b"
    },
    {
        id: 56,
        category: "Front-End",
        question: "Which HTML tag is used to create a dropdown menu?",
        options: {
            a: "<select>",
            b: "<dropdown>",
            c: "<menu>",
            d: "<list>"
        },
        correctAnswer: "a"
    },
    {
        id: 57,
        category: "Web Design",
        question: "Which CSS property is used to align text within an element?",
        options: {
            a: "text-align",
            b: "text-position",
            c: "align-text",
            d: "font-align"
        },
        correctAnswer: "a"
    },
    {
        id: 58,
        category: "Back-End",
        question: "Which of the following is a common method for securing APIs?",
        options: {
            a: "OAuth",
            b: "JSON",
            c: "XML",
            d: "CSV"
        },
        correctAnswer: "a"
    },
    {
        id: 59,
        category: "Cybersecurity",
        question: "What does 'social engineering' refer to in the context of security?",
        options: {
            a: "Using psychological manipulation to trick individuals into divulging confidential information",
            b: "Engineering secure communication protocols",
            c: "Social media strategies for security awareness",
            d: "Techniques for improving social network security"
        },
        correctAnswer: "a"
    },
    {
        id: 60,
        category: "Machine Learning",
        question: "What is 'feature scaling' in machine learning?",
        options: {
            a: "The process of normalizing data to a standard range",
            b: "The process of selecting important features for the model",
            c: "The process of splitting data into training and test sets",
            d: "The process of transforming features into new dimensions"
        },
        correctAnswer: "a"
    }
];
