import React, { useState } from 'react';


const questions = {
    "Mathematics": [
        {
            question: "What is the result of 3² × 4²?",
            options: ["144", "36", "81", "64"],
            correct: 0,
            explanation: "3² × 4² = 9 × 16 = 144"
        },
        {
            question: "Solve for x: 2x + 5 = 13",
            options: ["4", "6", "8", "3"],
            correct: 0,
            explanation: "2x + 5 = 13, 2x = 8, x = 4"
        },
        {
            question: "What is 25% of 80?",
            options: ["20", "25", "15", "30"],
            correct: 0,
            explanation: "25% of 80 = (25/100) × 80 = 20"
        },
        {
            question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
            options: ["40 cm²", "26 cm²", "13 cm²", "35 cm²"],
            correct: 0,
            explanation: "Area = length × width = 8 × 5 = 40 cm²"
        },
        {
            question: "What is the greatest common factor (GCF) of 24 and 36?",
            options: ["12", "6", "18", "24"],
            correct: 0,
            explanation: "The factors that 24 and 36 share are 1, 2, 3, 4, 6, 12. The greatest is 12."
        },
        {
            question: "Convert 3/5 to a decimal.",
            options: ["0.6", "0.5", "0.7", "0.8"],
            correct: 0,
            explanation: "3 ÷ 5 = 0.6"
        },
        {
            question: "What is the perimeter of a square with side length 7 cm?",
            options: ["28 cm", "14 cm", "49 cm", "21 cm"],
            correct: 0,
            explanation: "Perimeter = 4 × side length = 4 × 7 = 28 cm"
        },
        {
            question: "Simplify: -3 + 8 - 2",
            options: ["3", "5", "-3", "1"],
            correct: 0,
            explanation: "-3 + 8 - 2 = 5 - 2 = 3"
        },
        {
            question: "What is the next number in the sequence: 2, 4, 8, 16, __?",
            options: ["32", "24", "28", "20"],
            correct: 0,
            explanation: "Each number is multiplied by 2 to get the next number. 16 × 2 = 32"
        },
        {
            question: "What is the value of π (pi) rounded to two decimal places?",
            options: ["3.14", "3.12", "3.16", "3.18"],
            correct: 0,
            explanation: "π rounded to two decimal places is 3.14"
        },
        {
            question: "What is the least common multiple (LCM) of 6 and 8?",
            options: ["24", "12", "48", "36"],
            correct: 0,
            explanation: "The least common multiple of 6 and 8 is 24"
        },
        {
            question: "What is the sum of angles in a triangle?",
            options: ["180°", "360°", "90°", "270°"],
            correct: 0,
            explanation: "The sum of angles in a triangle is always 180 degrees"
        },
        {
            question: "What is 2/3 of 90?",
            options: ["60", "45", "30", "75"],
            correct: 0,
            explanation: "(2/3) × 90 = 60"
        },
        {
            question: "If a = 5 and b = 3, what is a² - b²?",
            options: ["16", "25", "9", "14"],
            correct: 0,
            explanation: "a² - b² = 5² - 3² = 25 - 9 = 16"
        },
        {
            question: "What is the volume of a cube with edge length 4 cm?",
            options: ["64 cm³", "16 cm³", "32 cm³", "48 cm³"],
            correct: 0,
            explanation: "Volume = length × width × height = 4 × 4 × 4 = 64 cm³"
        }
    ],
    "Physics": [
        {
            question: "What is the SI unit of force?",
            options: ["Newton", "Joule", "Watt", "Pascal"],
            correct: 0,
            explanation: "The SI unit of force is the Newton (N)"
        },
        {
            question: "What is the formula for speed?",
            options: ["Time/Distance", "Distance/Time", "Mass × Velocity", "Force × Distance"],
            correct: 1,
            explanation: "Speed is calculated by dividing distance by time"
        },
        {
            question: "Which force always pulls objects toward Earth's center?",
            options: ["Magnetic force", "Friction", "Gravity", "Electric force"],
            correct: 2,
            explanation: "Gravity is the force that pulls objects toward Earth's center"
        },
        {
            question: "What is the unit of electrical resistance?",
            options: ["Ampere", "Ohm", "Volt", "Watt"],
            correct: 1,
            explanation: "The unit of electrical resistance is the Ohm (Ω)"
        },
        {
            question: "What type of energy does a moving object have?",
            options: ["Thermal", "Kinetic", "Potential", "Chemical"],
            correct: 1,
            explanation: "A moving object has kinetic energy"
        },
        {
            question: "What is the speed of light in vacuum?",
            options: ["200,000 km/s", "400,000 km/s", "300,000 km/s", "100,000 km/s"],
            correct: 2,
            explanation: "Light travels at approximately 300,000 kilometers per second in vacuum"
        },
        {
            question: "What happens to water's volume when it freezes?",
            options: ["Stays the same", "Increases", "Decreases", "Disappears"],
            correct: 1,
            explanation: "Water's volume increases when it freezes, unlike most substances"
        },
        {
            question: "Which color of light has the highest frequency?",
            options: ["Red", "Green", "Violet", "Yellow"],
            correct: 2,
            explanation: "Violet light has the highest frequency in the visible spectrum"
        },
        {
            question: "What is the basic unit of electric current?",
            options: ["Volt", "Watt", "Ampere", "Joule"],
            correct: 2,
            explanation: "The basic unit of electric current is the Ampere (A)"
        },
        {
            question: "What type of simple machine is a seesaw?",
            options: ["Pulley", "Wheel and axle", "Lever", "Inclined plane"],
            correct: 2,
            explanation: "A seesaw is an example of a lever"
        },
        {
            question: "What is the process of changing from a liquid to a gas called?",
            options: ["Condensation", "Freezing", "Evaporation", "Melting"],
            correct: 2,
            explanation: "Evaporation is the process of changing from a liquid to a gas"
        },
        {
            question: "Which force opposes motion between two surfaces?",
            options: ["Gravity", "Friction", "Tension", "Magnetic force"],
            correct: 1,
            explanation: "Friction is the force that opposes motion between two surfaces"
        },
        {
            question: "What is the unit of power?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            correct: 2,
            explanation: "The unit of power is the Watt (W)"
        },
        {
            question: "What type of energy is stored in a stretched rubber band?",
            options: ["Kinetic", "Potential", "Thermal", "Sound"],
            correct: 1,
            explanation: "A stretched rubber band stores potential energy"
        },
        {
            question: "What is the process of heat transfer through direct contact called?",
            options: ["Convection", "Conduction", "Radiation", "Reflection"],
            correct: 1,
            explanation: "Conduction is heat transfer through direct contact between objects"
        }
    ],    "Chemistry": [
        {
            question: "What is the atomic number of Carbon?",
            options: ["6", "12", "8", "14"],
            correct: 0,
            explanation: "Carbon has 6 protons, making its atomic number 6"
        },
        {
            question: "What is the atomic number of Oxygen?",
            options: ["8", "6", "10", "12"],
            correct: 0,
            explanation: "Oxygen has 8 protons, making its atomic number 8"
        },
        {
            question: "Which element has the chemical symbol Na?",
            options: ["Sodium", "Nitrogen", "Neon", "Nickel"],
            correct: 0,
            explanation: "Na is the chemical symbol for Sodium"
        },
        {
            question: "What is the most abundant element in Earth's atmosphere?",
            options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
            correct: 0,
            explanation: "Nitrogen makes up about 78% of Earth's atmosphere"
        },
        {
            question: "What is the chemical formula for water?",
            options: ["H2O", "CO2", "O2", "H2"],
            correct: 0,
            explanation: "Water is composed of two hydrogen atoms and one oxygen atom (H2O)"
        },
        {
            question: "What type of bond is formed when electrons are shared between atoms?",
            options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
            correct: 0,
            explanation: "A covalent bond is formed when atoms share electrons"
        },
        {
            question: "What is the atomic number of Hydrogen?",
            options: ["1", "2", "3", "4"],
            correct: 0,
            explanation: "Hydrogen has 1 proton, making its atomic number 1"
        },
        {
            question: "Which of these is a noble gas?",
            options: ["Helium", "Chlorine", "Sodium", "Iron"],
            correct: 0,
            explanation: "Helium is a noble gas, characterized by its stable electron configuration"
        },
        {
            question: "What is the charge of a proton?",
            options: ["Positive", "Negative", "Neutral", "Variable"],
            correct: 0,
            explanation: "Protons have a positive electrical charge"
        },
        {
            question: "Which particle has no electrical charge?",
            options: ["Neutron", "Proton", "Electron", "Ion"],
            correct: 0,
            explanation: "Neutrons have no electrical charge"
        },
        {
            question: "What is the main component of natural gas?",
            options: ["Methane", "Ethane", "Propane", "Butane"],
            correct: 0,
            explanation: "Methane (CH4) is the primary component of natural gas"
        },
        {
            question: "What is the pH of pure water?",
            options: ["7", "0", "14", "1"],
            correct: 0,
            explanation: "Pure water has a neutral pH of 7"
        },
        {
            question: "Which element is essential for all living organisms?",
            options: ["Carbon", "Gold", "Silver", "Lead"],
            correct: 0,
            explanation: "Carbon is essential for all known life forms"
        },
        {
            question: "What type of mixture is air?",
            options: ["Homogeneous", "Heterogeneous", "Compound", "Element"],
            correct: 0,
            explanation: "Air is a homogeneous mixture of different gases"
        },
        {
            question: "What is the most abundant metal in Earth's crust?",
            options: ["Aluminum", "Iron", "Copper", "Gold"],
            correct: 0,
            explanation: "Aluminum is the most abundant metal in Earth's crust"
        },
        {
            question: "Which state of matter has a definite volume but no definite shape?",
            options: ["Liquid", "Solid", "Gas", "Plasma"],
            correct: 0,
            explanation: "Liquids have a definite volume but take the shape of their container"
        },




        // ... rest of Chemistry questions
    ],
    "History": [
        {
            question: "When did World War II end?",
            options: ["1945", "1944", "1946", "1943"],
            correct: 0,
            explanation: "World War II ended in 1945 with the surrender of Japan"
        },
        {
            question: "Who was the first President of the United States?",
            options: ["George Washington", "John Adams", "Thomas Jefferson", "Benjamin Franklin"],
            correct: 0,
            explanation: "George Washington served as the first President from 1789 to 1797"
        },
        {
            question: "In which year did Christopher Columbus first reach the Americas?",
            options: ["1492", "1498", "1485", "1500"],
            correct: 0,
            explanation: "Columbus first reached the Americas in 1492"
        },
        {
            question: "Which ancient civilization built the pyramids?",
            options: ["Ancient Egyptians", "Romans", "Greeks", "Mayans"],
            correct: 0,
            explanation: "The Ancient Egyptians built the pyramids as tombs for their pharaohs"
        },
        {
            question: "Who was the first Emperor of China?",
            options: ["Qin Shi Huang", "Han Wudi", "Sun Yat-sen", "Kublai Khan"],
            correct: 0,
            explanation: "Qin Shi Huang unified China and became its first emperor in 221 BCE"
        },
        {
            question: "When did the Roman Empire fall?",
            options: ["476 CE", "410 CE", "500 CE", "525 CE"],
            correct: 0,
            explanation: "The Western Roman Empire fell in 476 CE"
        },
        {
            question: "Who wrote the Declaration of Independence?",
            options: ["Thomas Jefferson", "Benjamin Franklin", "John Adams", "George Washington"],
            correct: 0,
            explanation: "Thomas Jefferson was the primary author of the Declaration of Independence"
        },
        {
            question: "What year did the American Civil War begin?",
            options: ["1861", "1865", "1859", "1863"],
            correct: 0,
            explanation: "The American Civil War began in 1861"
        },
        {
            question: "Who was the leader of the Soviet Union during most of World War II?",
            options: ["Joseph Stalin", "Vladimir Lenin", "Leon Trotsky", "Nikita Khrushchev"],
            correct: 0,
            explanation: "Joseph Stalin led the Soviet Union during most of World War II"
        },
        {
            question: "When was the Magna Carta signed?",
            options: ["1215", "1225", "1205", "1235"],
            correct: 0,
            explanation: "The Magna Carta was signed in 1215"
        },
        {
            question: "Which empire was known as 'the empire on which the sun never sets'?",
            options: ["British Empire", "Roman Empire", "Ottoman Empire", "Mongol Empire"],
            correct: 0,
            explanation: "The British Empire was so vast that the sun was always shining on some part of it"
        },
        {
            question: "Who was the first female pharaoh of Egypt?",
            options: ["Hatshepsut", "Cleopatra", "Nefertiti", "Isis"],
            correct: 0,
            explanation: "Hatshepsut was the first female pharaoh of Ancient Egypt"
        },
        {
            question: "When did the Industrial Revolution begin?",
            options: ["1760", "1800", "1850", "1700"],
            correct: 0,
            explanation: "The Industrial Revolution began around 1760 in Great Britain"
        },
        {
            question: "Who was the first Emperor of Rome?",
            options: ["Augustus", "Julius Caesar", "Nero", "Constantine"],
            correct: 0,
            explanation: "Augustus became the first Roman Emperor in 27 BCE"
        },
        {
            question: "When did the French Revolution begin?",
            options: ["1789", "1799", "1779", "1769"],
            correct: 0,
            explanation: "The French Revolution began in 1789"
        },
        {
            question: "Which civilization built Machu Picchu?",
            options: ["Inca", "Maya", "Aztec", "Olmec"],
            correct: 0,
            explanation: "Machu Picchu was built by the Inca civilization"
        },
        // ... rest of History questions
    ],
    "Computer Science": [
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Utility", "Computer Program Unit"],
            correct: 0,
            explanation: "CPU stands for Central Processing Unit, the brain of a computer"
        },
        {
            question: "What is RAM?",
            options: ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
            correct: 0,
            explanation: "RAM stands for Random Access Memory, which is temporary memory used by the computer"
        },
        {
            question: "Which of these is a programming language?",
            options: ["Python", "Cobra", "Viper", "Anaconda"],
            correct: 0,
            explanation: "Python is a popular programming language"
        },
        {
            question: "What does HTML stand for?",
            options: ["HyperText Markup Language", "HighText Markup Language", "HyperText Marking Language", "HighText Marking Language"],
            correct: 0,
            explanation: "HTML stands for HyperText Markup Language, used for creating web pages"
        },
        {
            question: "What is an algorithm?",
            options: ["A set of instructions", "A computer part", "A type of software", "A programming language"],
            correct: 0,
            explanation: "An algorithm is a set of step-by-step instructions to solve a problem"
        },
        {
            question: "Which symbol represents multiplication in most programming languages?",
            options: ["*", "x", "×", "#"],
            correct: 0,
            explanation: "The asterisk (*) is used for multiplication in programming"
        },
        {
            question: "What is the binary number system?",
            options: ["Base-2", "Base-10", "Base-8", "Base-16"],
            correct: 0,
            explanation: "Binary is a base-2 number system using only 0s and 1s"
        },
        {
            question: "What does URL stand for?",
            options: ["Uniform Resource Locator", "Universal Resource Link", "Unified Resource Locator", "Universal Resource Locator"],
            correct: 0,
            explanation: "URL stands for Uniform Resource Locator, used to locate web resources"
        },
        {
            question: "What is a bug in programming?",
            options: ["An error in code", "A computer virus", "A software feature", "A hardware problem"],
            correct: 0,
            explanation: "A bug is an error or flaw in software that causes it to behave unexpectedly"
        },
        {
            question: "What is the main function of an operating system?",
            options: ["Manage computer resources", "Play games", "Create documents", "Browse internet"],
            correct: 0,
            explanation: "An operating system manages computer hardware and software resources"
        },
        {
            question: "What is a loop in programming?",
            options: ["Repeated code execution", "Computer cable", "Memory type", "Programming error"],
            correct: 0,
            explanation: "A loop is a sequence of instructions that repeats until a certain condition is met"
        },
        {
            question: "What does GUI stand for?",
            options: ["Graphical User Interface", "General User Input", "Graphical User Input", "General User Interface"],
            correct: 0,
            explanation: "GUI stands for Graphical User Interface, which allows users to interact with devices through graphics"
        },
        {
            question: "What is a variable in programming?",
            options: ["Storage location", "Computer game", "Web browser", "Keyboard type"],
            correct: 0,
            explanation: "A variable is a storage location paired with an associated symbolic name"
        },
        {
            question: "What is the internet?",
            options: ["Global computer network", "Computer program", "Operating system", "Storage device"],
            correct: 0,
            explanation: "The internet is a global network of connected computers"
        },
        {
            question: "What is coding?",
            options: ["Writing computer instructions", "Reading emails", "Playing games", "Using websites"],
            correct: 0,
            explanation: "Coding is the process of writing instructions for computers to follow"
        },
        {
            question: "What is a database?",
            options: ["Organized data collection", "Computer game", "Web browser", "Programming language"],
            correct: 0,
            explanation: "A database is an organized collection of data stored electronically"
        }
    ]
};
  const subjects = [
      { name: "Mathematics", description: "Explore numbers, equations, and algorithms." },
      { name: "Physics", description: "Understand the basics of forces and energy." },
      { name: "Chemistry", description: "Discover atoms, elements, and simple reactions." },
      { name: "History", description: "Dive into ancient civilizations and their cultures." },
      { name: "Computer Science", description: "Introduction to programming and logic." },
  ];


  const SixthGradeSubjectList = () => {
      const [selectedSubject, setSelectedSubject] = useState(null);
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [showExplanation, setShowExplanation] = useState(false);
      const [wrongAnswers, setWrongAnswers] = useState([]);
      const [isAnswered, setIsAnswered] = useState(false);
      const [selectedOption, setSelectedOption] = useState(null);

      const handleSubjectClick = (subject) => {
          setSelectedSubject(subject);
          setCurrentQuestion(0);
          setScore(0);
          setShowScore(false);
          setShowExplanation(false);
          setWrongAnswers([]);
          setIsAnswered(false);
          setSelectedOption(null);
      };

      const handleAnswerClick = (option) => {
          if (!isAnswered) {
              setSelectedOption(option);
              if (option === questions[selectedSubject][currentQuestion].correct) {
                  setScore(score + 1);
              } else {
                  setWrongAnswers([...wrongAnswers, {
                      question: questions[selectedSubject][currentQuestion].question,
                      explanation: questions[selectedSubject][currentQuestion].explanation
                  }]);
              }
              setIsAnswered(true);
              setShowExplanation(true);
          }
      };

      const handleNextQuestion = () => {
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < questions[selectedSubject].length) {
              setCurrentQuestion(nextQuestion);
              setShowExplanation(false);
              setIsAnswered(false);
              setSelectedOption(null);
          } else {
              setShowScore(true);
          }
      };

      const handleAbortTest = () => {
          setSelectedSubject(null);
          setCurrentQuestion(0);
          setScore(0);
          setShowScore(false);
          setShowExplanation(false);
          setWrongAnswers([]);
          setIsAnswered(false);
          setSelectedOption(null);
      };

      return (
          <div style={styles.container}>
            <h3 style={styles.heading}>Select a Subject</h3>
              {!selectedSubject ? (
                  <div style={styles.subjectList}>
                      {subjects.map((subject) => (
                          <div
                              key={subject.name}
                              style={styles.subjectCard}
                              onClick={() => handleSubjectClick(subject.name)}
                          >
                              <h3 style={styles.subjectName}>{subject.name}</h3>
                              <p style={styles.description}>{subject.description}</p>
                          </div>
                      ))}
                  </div>
              ) : (
                  <div style={styles.quizContainer}>
                      <h2 style={styles.heading}>{selectedSubject}</h2>
                      {!showScore ? (
                          <>
                              <div style={styles.questionCard}>
                                  <button
                                      style={styles.abortButton}
                                      onClick={handleAbortTest}
                                  >
                                      Abort Test
                                  </button>
                                  <h3 style={styles.questionText}>
                                      {questions[selectedSubject][currentQuestion].question}
                                  </h3>
                                  <div style={styles.optionsContainer}>
                                      {questions[selectedSubject][currentQuestion].options.map((option, index) => (
                                          <button
                                              key={index}
                                              style={{
                                                  ...styles.optionButton,
                                                  backgroundColor: isAnswered ? 
                                                      (index === questions[selectedSubject][currentQuestion].correct ? '#4CAF50' : 
                                                       index === selectedOption ? '#ff4444' : '#3a3a3a')
                                                      : '#3a3a3a'
                                              }}
                                              onClick={() => handleAnswerClick(index)}
                                              disabled={isAnswered}
                                          >
                                              {option}
                                          </button>
                                      ))}
                                  </div>
                                  {isAnswered && showExplanation && (
                                      <div style={styles.explanation}>
                                          {/* <p>{questions[selectedSubject][currentQuestion].explanation}</p> */}
                                          <button style={styles.nextButton} onClick={handleNextQuestion}>
                                              Next Question
                                          </button>
                                      </div>
                                  )}
                              </div>
                          </>
                      ) : (
                          <div style={styles.scoreCard}>
                              <h3 style={styles.scoreText}>
                                  Your score: {score} out of {questions[selectedSubject].length}
                              </h3>
                              {wrongAnswers.length > 0 && (
                                  <div style={styles.wrongAnswersContainer}>
                                      <h4 style={styles.wrongAnswersHeading}>Review your mistakes:</h4>
                                      {wrongAnswers.map((wrong, index) => (
                                          <div key={index} style={styles.wrongAnswer}>
                                              <p style={styles.wrongQuestion}>{wrong.question}</p>
                                              <p style={styles.wrongExplanation}>{wrong.explanation}</p>
                                          </div>
                                      ))}
                                  </div>
                              )}
                              <button
                                  style={styles.restartButton}
                                  onClick={() => setSelectedSubject(null)}
                              >
                                  Try Another Subject
                              </button>
                          </div>
                      )}
                  </div>
              )}
          </div>
      );
  };

  const styles = {
      container: {
          padding: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#1a1a1a',
          minHeight: '100vh',
          color: '#ffffff'
      },
      subjectList: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '20px'
      },
      heading: {
          textAlign: 'left',
          color: '#ffffff',
          marginBottom: '30px',
          fontSize: '1.6rem'
      },
      subjectCard: {
          backgroundColor: '#2c2c2c',
          padding: '20px',
          borderRadius: '10px',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          '&:hover': {
              transform: 'translateY(-5px)'
          }
      },
      subjectName: {
          color: '#ffffff',
          marginBottom: '10px',
          fontSize: '1.5rem'
      },
      description: {
          color: '#cccccc',
          fontSize: '1rem'
      },
      quizContainer: {
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px'
      },
      questionCard: {
          backgroundColor: '#2c2c2c',
          padding: '30px',
          borderRadius: '15px',
          marginBottom: '20px',
          position: 'relative'
      },
      abortButton: {
          position: 'absolute',
          top: '15px',
          right: '15px',
          padding: '8px 16px',
          backgroundColor: '#ff4444',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          '&:hover': {
              backgroundColor: '#ff0000'
          }
      },
      questionText: {
          color: '#ffffff',
          fontSize: '1.3rem',
          marginBottom: '20px'
      },
      optionsContainer: {
          display: 'grid',
          gap: '15px'
      },
      optionButton: {
          padding: '15px',
          backgroundColor: '#3a3a3a',
          border: 'none',
          borderRadius: '8px',
          color: '#ffffff',
          cursor: 'pointer',
          fontSize: '1rem',
          transition: 'background-color 0.3s ease',
          '&:hover': {
              backgroundColor: '#4a4a4a'
          }
      },
      explanation: {
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#3a3a3a',
          borderRadius: '8px',
          color: '#ffffff'
      },
      nextButton: {
          marginTop: '15px',
          padding: '12px 24px',
          backgroundColor: '#4CAF50',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1rem',
          '&:hover': {
              backgroundColor: '#45a049'
          }
      },
      scoreCard: {
          backgroundColor: '#2c2c2c',
          padding: '30px',
          borderRadius: '15px',
          textAlign: 'center'
      },
      scoreText: {
          color: '#ffffff',
          fontSize: '1.5rem',
          marginBottom: '20px'
      },
      wrongAnswersContainer: {
          marginTop: '20px',
          marginBottom: '20px',
          textAlign: 'left',
          padding: '20px',
          backgroundColor: '#3a3a3a',
          borderRadius: '8px'
      },
      wrongAnswersHeading: {
          color: '#ffffff',
          fontSize: '1.2rem',
          marginBottom: '15px'
      },
      wrongAnswer: {
          marginBottom: '15px',
          padding: '10px',
          borderLeft: '3px solid #ff4444'
      },
      wrongQuestion: {
          color: '#ffffff',
          fontSize: '1.1rem',
          marginBottom: '5px'
      },
      wrongExplanation: {
          color: '#cccccc',
          fontSize: '1rem'
      },
      restartButton: {
          padding: '15px 30px',
          backgroundColor: '#4CAF50',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1.1rem',
          '&:hover': {
              backgroundColor: '#45a049'
          }
      }
  };

  export default SixthGradeSubjectList;