// Quiz Data
const quizData = {
    beginner: [
        {
            question: "What should you do if someone you don't know sends you a friend request online?",
            options: [
                "Accept it immediately",
                "Check their profile and ask your parents",
                "Share your personal information first",
                "Send them your phone number"
            ],
            correct: 1,
            explanation: "Always check with a trusted adult before accepting friend requests from strangers."
        },
        {
            question: "What is a strong password?",
            options: [
                "Your birthday",
                "Your pet's name",
                "A mix of letters, numbers, and symbols",
                "The word 'password'"
            ],
            correct: 2,
            explanation: "Strong passwords contain a mix of uppercase, lowercase, numbers, and special characters."
        },
        {
            question: "What should you do if you see something online that makes you uncomfortable?",
            options: [
                "Keep it to yourself",
                "Tell a trusted adult",
                "Share it with friends",
                "Click on it to learn more"
            ],
            correct: 1,
            explanation: "Always tell a trusted adult if you see something that makes you uncomfortable online."
        },
        {
            question: "Is it safe to share your home address on social media?",
            options: [
                "Yes, always",
                "Only with friends",
                "No, never share personal information publicly",
                "Only on weekends"
            ],
            correct: 2,
            explanation: "Personal information like your address should never be shared publicly online."
        },
        {
            question: "What is cyberbullying?",
            options: [
                "Playing games online",
                "Using technology to harass or hurt others",
                "Making new friends online",
                "Learning about computers"
            ],
            correct: 1,
            explanation: "Cyberbullying is using digital technology to deliberately and repeatedly harass, threaten, or hurt others."
        },
        {
            question: "What should you do before clicking on a link in an email?",
            options: [
                "Click it immediately",
                "Check if you know the sender and the link looks safe",
                "Forward it to all your friends",
                "Delete your email account"
            ],
            correct: 1,
            explanation: "Always verify the sender and check if a link looks legitimate before clicking."
        },
        {
            question: "How often should you update your passwords?",
            options: [
                "Never",
                "Every few months",
                "Once every 10 years",
                "Every day"
            ],
            correct: 1,
            explanation: "It's good practice to update your passwords every few months for better security."
        },
        {
            question: "What is two-factor authentication (2FA)?",
            options: [
                "Using two passwords",
                "An extra security step that requires two forms of verification",
                "Having two email accounts",
                "Logging in twice"
            ],
            correct: 1,
            explanation: "2FA adds an extra layer of security by requiring two different forms of verification."
        },
        {
            question: "Should you use the same password for all your accounts?",
            options: [
                "Yes, it's easier to remember",
                "No, use different passwords for different accounts",
                "Only for important accounts",
                "Yes, but change it weekly"
            ],
            correct: 1,
            explanation: "Using different passwords for different accounts prevents hackers from accessing all your accounts if one is compromised."
        },
        {
            question: "What should you do if you think your account has been hacked?",
            options: [
                "Ignore it",
                "Tell an adult and change your password immediately",
                "Create a new account without telling anyone",
                "Send messages to all your contacts"
            ],
            correct: 1,
            explanation: "If you suspect your account has been hacked, inform a trusted adult and change your password right away."
        }
    ],
    intermediate: [
        {
            question: "What is phishing?",
            options: [
                "A type of fishing sport",
                "A scam where criminals try to trick you into giving personal information",
                "A social media platform",
                "A computer game"
            ],
            correct: 1,
            explanation: "Phishing is a fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity."
        },
        {
            question: "How can you identify a fake news article?",
            options: [
                "It has a catchy headline",
                "Check multiple reliable sources and verify the author",
                "It's shared by many people",
                "It has lots of pictures"
            ],
            correct: 1,
            explanation: "Always verify information by checking multiple reliable sources and researching the author's credentials."
        },
        {
            question: "What is a deepfake?",
            options: [
                "A deep swimming pool",
                "Manipulated media that makes people appear to say or do things they didn't",
                "A type of fish",
                "A video game level"
            ],
            correct: 1,
            explanation: "Deepfakes are synthetic media where AI is used to manipulate or generate visual and audio content."
        },
        {
            question: "What does HTTPS in a website URL indicate?",
            options: [
                "The website is free",
                "The website has secure, encrypted connection",
                "The website is faster",
                "The website is popular"
            ],
            correct: 1,
            explanation: "HTTPS indicates that the website uses encryption to protect data transmitted between you and the site."
        },
        {
            question: "What is digital footprint?",
            options: [
                "Your shoe size online",
                "The trail of data you leave behind when using the internet",
                "A type of computer virus",
                "Your profile picture"
            ],
            correct: 1,
            explanation: "Your digital footprint is the information trail you leave online through your activities and interactions."
        },
        {
            question: "What should you check before downloading an app?",
            options: [
                "Only the app name",
                "Reviews, permissions, and developer information",
                "Just the icon",
                "How many downloads it has"
            ],
            correct: 1,
            explanation: "Always review the app's permissions, read reviews, and verify the developer before downloading."
        },
        {
            question: "What is a VPN used for?",
            options: [
                "To make internet faster",
                "To protect your privacy and encrypt your internet connection",
                "To download more apps",
                "To play games"
            ],
            correct: 1,
            explanation: "A VPN (Virtual Private Network) encrypts your internet connection and protects your online privacy."
        },
        {
            question: "How can you tell if an email is a scam?",
            options: [
                "It has your name in it",
                "Look for spelling errors, urgent requests, suspicious links, and verify the sender",
                "It has a subject line",
                "It's in your inbox"
            ],
            correct: 1,
            explanation: "Scam emails often contain spelling errors, create urgency, have suspicious links, or come from unverified senders."
        },
        {
            question: "What is metadata in photos?",
            options: [
                "The colors in the photo",
                "Hidden information like location, date, and camera settings",
                "The size of the photo",
                "The people in the photo"
            ],
            correct: 1,
            explanation: "Metadata is hidden information embedded in photos that can include location, time, date, and device information."
        },
        {
            question: "What should you do if you receive a suspicious text message asking for personal information?",
            options: [
                "Reply immediately",
                "Don't respond and report it as spam",
                "Forward it to all your contacts",
                "Click on any links to verify"
            ],
            correct: 1,
            explanation: "Never respond to suspicious text messages. Report them as spam and don't click on any links."
        }
    ],
    advanced: [
        {
            question: "What is end-to-end encryption?",
            options: [
                "Encrypting only the beginning of a message",
                "Encryption where only sender and recipient can read messages",
                "A type of physical lock",
                "Encrypting your entire computer"
            ],
            correct: 1,
            explanation: "End-to-end encryption ensures that only the sender and intended recipient can read the messages."
        },
        {
            question: "What is social engineering in cybersecurity?",
            options: [
                "Building social media platforms",
                "Manipulating people to divulge confidential information",
                "Engineering social networks",
                "Creating social apps"
            ],
            correct: 1,
            explanation: "Social engineering is psychological manipulation of people to perform actions or divulge confidential information."
        },
        {
            question: "What is the purpose of a password manager?",
            options: [
                "To share passwords with others",
                "To securely store and generate strong unique passwords",
                "To write passwords on paper",
                "To make all passwords the same"
            ],
            correct: 1,
            explanation: "Password managers securely store passwords and can generate strong, unique passwords for each account."
        },
        {
            question: "What is ransomware?",
            options: [
                "Free software",
                "Malware that encrypts files and demands payment",
                "A type of antivirus",
                "A video game"
            ],
            correct: 1,
            explanation: "Ransomware is malicious software that encrypts your files and demands payment for their release."
        },
        {
            question: "What is the difference between HTTP and HTTPS?",
            options: [
                "They are the same",
                "HTTPS is the secure version with SSL/TLS encryption",
                "HTTP is faster",
                "HTTPS is only for shopping sites"
            ],
            correct: 1,
            explanation: "HTTPS uses SSL/TLS to encrypt data transmitted between your browser and the website, making it more secure."
        },
        {
            question: "What is a zero-day vulnerability?",
            options: [
                "A bug that takes zero days to fix",
                "A security flaw unknown to the software maker and exploited before a patch",
                "A vulnerability that doesn't exist",
                "A type of virus"
            ],
            correct: 1,
            explanation: "A zero-day vulnerability is a security flaw that is exploited before the vendor becomes aware and can create a patch."
        },
        {
            question: "What is the dark web?",
            options: [
                "Websites with dark themes",
                "Part of the internet not indexed by standard search engines, requiring special software",
                "Websites that only work at night",
                "Social media with dark mode"
            ],
            correct: 1,
            explanation: "The dark web is part of the internet that requires special software to access and is not indexed by standard search engines."
        },
        {
            question: "What is biometric authentication?",
            options: [
                "Using biology in schools",
                "Using unique physical characteristics like fingerprints for authentication",
                "A type of password",
                "A medical test"
            ],
            correct: 1,
            explanation: "Biometric authentication uses unique physical characteristics like fingerprints, face, or iris for identity verification."
        },
        {
            question: "What is a man-in-the-middle attack?",
            options: [
                "Someone standing between two people",
                "Intercepting communication between two parties without their knowledge",
                "A type of video game",
                "A physical attack"
            ],
            correct: 1,
            explanation: "A man-in-the-middle attack occurs when an attacker secretly intercepts and possibly alters communication between two parties."
        },
        {
            question: "What is the principle of least privilege?",
            options: [
                "Everyone should have admin access",
                "Users should only have minimum access rights needed for their tasks",
                "Privilege is not important",
                "Only managers need privileges"
            ],
            correct: 1,
            explanation: "The principle of least privilege means giving users only the minimum access rights they need to perform their job functions."
        }
    ]
};

// Quiz State
let currentQuiz = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizLevel = '';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeChallenges();
});

// Tab Functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

// Mobile Menu
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Smooth Scrolling
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Quiz Functions
function startQuiz(level) {
    quizLevel = level;
    currentQuiz = [...quizData[level]];
    currentQuestionIndex = 0;
    userAnswers = [];
    
    document.getElementById('quiz-start').classList.remove('active');
    document.getElementById('quiz-questions').classList.add('active');
    
    displayQuestion();
}

function displayQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    const totalQuestions = currentQuiz.length;
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = totalQuestions;
    
    // Display question
    document.getElementById('question-text').textContent = question.question;
    
    // Display options
    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'answer-option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectAnswer(index);
        
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update navigation buttons
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = userAnswers[currentQuestionIndex] === undefined;
}

function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Update UI
    const options = document.querySelectorAll('.answer-option');
    options.forEach((option, index) => {
        option.classList.remove('selected');
        if (index === answerIndex) {
            option.classList.add('selected');
        }
    });
    
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function showResults() {
    document.getElementById('quiz-questions').classList.remove('active');
    document.getElementById('quiz-results').classList.add('active');
    
    // Calculate score
    let correctCount = 0;
    currentQuiz.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        }
    });
    
    const percentage = Math.round((correctCount / currentQuiz.length) * 100);
    
    // Display results
    document.getElementById('score-percentage').textContent = percentage + '%';
    document.getElementById('correct-answers').textContent = correctCount;
    document.getElementById('total-quiz-questions').textContent = currentQuiz.length;
    
    // Display message based on score
    let message = '';
    if (percentage >= 90) {
        message = '🎉 Excellent! You have a strong understanding of digital safety!';
    } else if (percentage >= 70) {
        message = '👍 Great job! You have good knowledge of digital safety practices.';
    } else if (percentage >= 50) {
        message = '📚 Good effort! Review the toolkit to strengthen your knowledge.';
    } else {
        message = '💡 Keep learning! Explore our resources to improve your digital safety skills.';
    }
    
    document.getElementById('results-message').textContent = message;
}

function restartQuiz() {
    document.getElementById('quiz-results').classList.remove('active');
    document.getElementById('quiz-start').classList.add('active');
}

// Scenario Functions
function openScenario(type) {
    const scenarios = {
        gaming: {
            title: 'Gaming Safety Scenario',
            description: 'You receive a friend request from someone claiming to give you free game items.',
            choices: [
                {text: 'Accept and ask for items', feedback: '❌ This could be a scam. Never accept items from strangers.'},
                {text: 'Ignore and report', feedback: '✅ Correct! Always be cautious with unsolicited offers.'},
                {text: 'Share your login info', feedback: '❌ Never share your login credentials with anyone.'}
            ]
        },
        social: {
            title: 'Social Media Verification',
            description: 'You see shocking news about a celebrity on social media.',
            choices: [
                {text: 'Share immediately', feedback: '❌ Always verify before sharing information.'},
                {text: 'Check multiple reliable sources', feedback: '✅ Correct! Always verify information from multiple credible sources.'},
                {text: 'Believe it if many shared it', feedback: '❌ Popularity doesn\'t equal truth. Always verify.'}
            ]
        },
        email: {
            title: 'Email Security',
            description: 'You receive an urgent email asking to verify your account by clicking a link.',
            choices: [
                {text: 'Click the link immediately', feedback: '❌ This is likely phishing. Never click suspicious links.'},
                {text: 'Delete and verify directly with company', feedback: '✅ Correct! Contact the company directly using official channels.'},
                {text: 'Reply with personal info', feedback: '❌ Legitimate companies never ask for passwords via email.'}
            ]
        },
        shopping: {
            title: 'Online Shopping Safety',
            description: 'You find an amazing deal on a website you\'ve never heard of.',
            choices: [
                {text: 'Buy immediately before it ends', feedback: '❌ Scammers create urgency. Always research first.'},
                {text: 'Research the website and check reviews', feedback: '✅ Correct! Always verify the legitimacy of unfamiliar websites.'},
                {text: 'Enter credit card to see if it works', feedback: '❌ Never test with real payment information on suspicious sites.'}
            ]
        }
    };
    
    const scenario = scenarios[type];
    let message = `${scenario.title}\n\n${scenario.description}\n\nWhat would you do?\n\n`;
    
    scenario.choices.forEach((choice, index) => {
        message += `${index + 1}. ${choice.text}\n`;
    });
    
    const userChoice = prompt(message + '\nEnter your choice (1-3):');
    
    if (userChoice && userChoice >= 1 && userChoice <= 3) {
        alert(scenario.choices[userChoice - 1].feedback);
    }
}

// Challenge Functions
function initializeChallenges() {
    const challengeButtons = document.querySelectorAll('.challenge-btn');
    
    challengeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const challengeItem = this.closest('.challenge-item');
            
            if (challengeItem.classList.contains('completed')) {
                challengeItem.classList.remove('completed');
                this.textContent = 'Complete';
            } else {
                challengeItem.classList.add('completed');
                this.textContent = 'Completed ✓';
                
                // Show congratulations
                showNotification('🎉 Challenge completed! Keep up the great work!');
            }
        });
    });
}

// Newsletter Subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification('✅ Thank you for subscribing! Check your email for confirmation.');
        event.target.reset();
    }
    
    return false;
}

// Notification System
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add scroll reveal animations
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.toolkit-card, .resource-card, .scenario-card');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        if (position.top < window.innerHeight - 100) {
            element.classList.add('fade-in');
        }
    });
});
