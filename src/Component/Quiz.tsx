import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

interface PrevBtn {
  isPrevVisible: boolean;
}

interface NextBtn {
  isNextVisible: boolean;
}

interface AnsButton {
  isCorrect: boolean;
  isSelected: boolean;
  isAnswered: boolean;
}

const Quiz = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [questions, setQuestion] = useState([
    {
      isAnswered: false,
      correctOption: 1, // 2nd option
      options: [
        {
          answerText: "Mozart - Turkish March",
          isCorrect: false,
          isSelected: false,
        },
        {
          answerText: "Chopin - Fantaisie-Impromptu",
          isCorrect: true,
          isSelected: false,
        },
        {
          answerText: "Beethoven - Fur Elise",
          isCorrect: false,
          isSelected: false,
        },
        {
          answerText: "Debussy - Clair de Lune",
          isCorrect: false,
          isSelected: false,
        },
      ],
      video:
        "https://youtube.com/embed/XxFS2D9ytag?rel=0&modestbranding=1&fs=0",
    },
    {
      isAnswered: false,
      correctOption: 2, // 3rd option
      options: [
        { answerText: "Yiruma - Maybe", isCorrect: false, isSelected: false },
        {
          answerText: "Yiruma - River Flows In You",
          isCorrect: false,
          isSelected: false,
        },
        {
          answerText: "Yiruma - Kiss The Rain",
          isCorrect: true,
          isSelected: false,
        },
        { answerText: "Yiruma - Love Me", isCorrect: false, isSelected: false },
      ],
      video:
        "https://youtube.com/embed/Gta_9tOdgrU?rel=0&modestbranding=1&fs=0",
    },
    {
      isAnswered: false,
      correctOption: 3, // 4th option
      options: [
        { answerText: "Peaches", isCorrect: false, isSelected: false },
        { answerText: "Baby", isCorrect: false, isSelected: false },
        { answerText: "Stuck with Me", isCorrect: false, isSelected: false },
        {
          answerText: "Stuck with U",
          isCorrect: true,
          isSelected: false,
        },
      ],
      video:
        "https://youtube.com/embed/eFh9RfT-uZw?rel=0&modestbranding=1&fs=0",
    },
  ]);
  const previous = "<< previous";
  const next = "next >>";
  const [currentQuestion, setCurrentQuestion] = useState(0);
  let [isPrevVisible, setIsPrevVisible] = useState(false);
  let [isNextVisible, setIsNextVisible] = useState(true);

  const nextButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    const isPrevVisible = nextQuestion <= 0 ? false : true;
    const isNextVisible = nextQuestion >= questions.length - 1 ? false : true;
    setCurrentQuestion(nextQuestion);
    setIsPrevVisible(isPrevVisible);
    setIsNextVisible(isNextVisible);
  };
  const previousButtonClick = () => {
    const nextQuestion = currentQuestion - 1;
    setCurrentQuestion(nextQuestion);
    const isPrevVisible = nextQuestion <= 0 ? false : true;
    const isNextVisible = nextQuestion >= questions.length - 1 ? false : true;
    setIsPrevVisible(isPrevVisible);
    setIsNextVisible(isNextVisible);
  };
  const handleSelectAnsBtn = (optionSelected: number) => {
    // highlight the selected option
    const selectedOption = questions[currentQuestion].options[optionSelected];
    selectedOption.isSelected = true;
    if (!selectedOption.isCorrect) {
      // highlight the correct ans if selected option is wrong
      const correctOption = questions[currentQuestion].correctOption;
      questions[currentQuestion].options[correctOption].isSelected = true;
    }
    questions[currentQuestion].isAnswered = true;
    setQuestion([...questions]);
    //isAnswered for qns -> set clickability
  };
  return (
    <section id="quiz">
      <h1>Quiz: Guess The Song</h1>
      <div className="quiz-container" data-aos="fade-down">
        <StyledQuizChoices>
          <StyledPreviousText
            onClick={previousButtonClick}
            isPrevVisible={isPrevVisible}
          >
            {previous}
          </StyledPreviousText>
          <StyledAnsButton
            onClick={() => handleSelectAnsBtn(0)}
            isCorrect={questions[currentQuestion].options[0].isCorrect}
            isSelected={questions[currentQuestion].options[0].isSelected}
            isAnswered={questions[currentQuestion].isAnswered}
          >
            {questions[currentQuestion].options[0].answerText}
          </StyledAnsButton>
          <StyledAnsButton
            onClick={() => handleSelectAnsBtn(1)}
            isCorrect={questions[currentQuestion].options[1].isCorrect}
            isSelected={questions[currentQuestion].options[1].isSelected}
            isAnswered={questions[currentQuestion].isAnswered}
          >
            {questions[currentQuestion].options[1].answerText}
          </StyledAnsButton>
          <StyledAnsButton
            onClick={() => handleSelectAnsBtn(2)}
            isCorrect={questions[currentQuestion].options[2].isCorrect}
            isSelected={questions[currentQuestion].options[2].isSelected}
            isAnswered={questions[currentQuestion].isAnswered}
          >
            {questions[currentQuestion].options[2].answerText}
          </StyledAnsButton>
          <StyledAnsButton
            onClick={() => handleSelectAnsBtn(3)}
            isCorrect={questions[currentQuestion].options[3].isCorrect}
            isSelected={questions[currentQuestion].options[3].isSelected}
            isAnswered={questions[currentQuestion].isAnswered}
          >
            {questions[currentQuestion].options[3].answerText}
          </StyledAnsButton>
          <StyledNextText
            onClick={nextButtonClick}
            isNextVisible={isNextVisible}
          >
            {next}
          </StyledNextText>
        </StyledQuizChoices>
        <StyledVideo
          width="500"
          height="280"
          src={questions[currentQuestion].video}
          allowFullScreen={false}
        />
      </div>
    </section>
  );
};

const StyledVideo = styled.iframe`
  border-radius: 1.5rem;
  @media (max-width: 800px) {
    height: 175px;
    width: 250px;
  }
`;

const StyledQuizChoices = styled.div`
  display: flex;
  flex-direction: column;
  border: #000;
  width: 40%;
  margin-right: 5%;
  align-items: center;
  @media (max-width: 800px) {
    width: 250px;
  }
`;

const StyledPreviousText = styled.div<PrevBtn>`
  color: var(--gold-color-3);
  visibility: ${(props) => (props.isPrevVisible ? "visible" : "hidden")};
  align-self: flex-start;
  padding: 5px;
  font-weight: 600;
  &:hover {
    color: var(--gold-color-11);
    transition: var(--transition);
    opacity: 0.5;
    cursor: pointer;
`;

const StyledAnsButton = styled.button<AnsButton>`
  border-radius: 0.5rem;
  height: 50px;
  width: 100%;
  background-color: white;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
  border-color: var(--gold-color-11);
  transition: all 1s linear 0.2s;
  color: var(--tertiary-color-2);
  pointer-events: ${(props) => (props.isAnswered ? "none" : "auto")};
  cursor: ${(props) => (props.isAnswered ? "none" : "pointer")};
  background-color: ${(props) =>
    props.isCorrect && props.isSelected
      ? "var(--correct-answer)"
      : props.isSelected
      ? "var(--wrong-answer)"
      : ""};
`;

const StyledNextText = styled.div<NextBtn>`
  color: var(--gold-color-3);
  visibility: ${(props) => (props.isNextVisible ? "visible" : "hidden")};
  align-self: flex-end;
  font-weight: 600;
  padding: 5px;
  &:hover {
    transition: var(--transition);
    color: var(--gold-color-11);
    opacity: 0.5;
    cursor: pointer;
  }
`;

export default Quiz;
