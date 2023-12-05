import { useState } from "react";
import Progress from "../../components/progress";
import Button from "../../components/button";
import QuizOption from "../../components/quiz-option";
import { useNavigate } from "react-router-dom";

const options = [
  { id: 1, text: "None of the time" },
  { id: 2, text: "Rarely" },
  { id: 3, text: "Once in a while" },
  { id: 4, text: "Often" },
  { id: 5, text: "Most of the time" },
  { id: 6, text: "All of the time" },
];

const questions = [
  {
    value: "when you <b>cough</b> or <b>sneeze</b>?",
    isFullQuestion: false,
  },
  {
    value: "when you <b>bend down</b> or <b>lift something up</b>?",
    isFullQuestion: false,
  },
  {
    value: "when you <b>walk quickly, jog,</b> or <b>exercise</b>?",
    isFullQuestion: false,
  },
  {
    value: "while you are <b>undressing</b> in order to use the <b>toilet</b>?",
    isFullQuestion: false,
  },
  {
    value:
      "Do you get such a <b>strong and uncomfortable need</b> to urinate that you leak urine (even small drops) or wet yourself before reaching the toilet?",
    isFullQuestion: true,
  },
  {
    value:
      "Do you have to <b>rush to the bathroom</b> because you get a <b>sudden, strong need</b> to urinate?",
    isFullQuestion: true,
  },
];

function QuizPage() {
  const navigate = useNavigate();
  const [totalNoOfQuiz] = useState(6);
  const [currentQuizNo, setCurrentQuizNo] = useState(1);
  const [answers, setAnswers] = useState<number[]>(Array(6).fill(null));

  const handlePrevAction = () => {
    if (currentQuizNo == 1) return;

    setCurrentQuizNo(currentQuizNo - 1);
  };

  const handleNextAction = () => {
    setCurrentQuizNo(currentQuizNo + 1);
  };

  const handleSubmit = () => {
    navigate('/personalized-playlist')
  };

  const handleSelectOption = (value: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuizNo - 1] = value;
    setAnswers(updatedAnswers);
  };

  return (
    <>
      <section className="flex flex-col items-start w-full px-4 lg:px-16 pt-12">
        <div className="text-brand flex items-center gap-4">
          <span>
            {currentQuizNo}/{totalNoOfQuiz} Completed
          </span>
          <Progress value={currentQuizNo} max={totalNoOfQuiz} />
        </div>
        <div className="py-8 lg:py-20">
          {!questions[currentQuizNo - 1].isFullQuestion && (
            <p className="text-[1rem] lg:text-4xl lg:leading-[4rem] text-brand max-w-prose">
              Do you leak urine (even small drops), wet yourself, or wet your
              pads or undergarments...
            </p>
          )}

          <p
            className="text-2xl lg:text-5xl lg:leading-[4rem] mt-8 lg:mt-12 text-brand max-w-prose"
            dangerouslySetInnerHTML={{
              __html: questions[currentQuizNo - 1].value,
            }}
          />
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4 lg:gap-y-12">
          {options.map((option) => (
            <QuizOption
              key={option.id}
              label={option.text}
              value={option.id}
              onSelect={handleSelectOption}
              selected={answers[currentQuizNo - 1] == option.id}
            />
          ))}
        </div>

        <div className="flex justify-between lg:justify-center lg:gap-24 w-full fixed left-0 bottom-0 pb-8 px-4">
          <Button onClick={handlePrevAction} disabled={currentQuizNo <= 1}>
            Previous
          </Button>

          {currentQuizNo == totalNoOfQuiz ? (
            <Button onClick={handleSubmit} variant="solid" colorScheme="green">
              Submit
            </Button>
          ) : (
            <Button
              onClick={handleNextAction}
              disabled={currentQuizNo == totalNoOfQuiz}
              variant="solid"
            >
              Next
            </Button>
          )}
        </div>
      </section>
    </>
  );
}

export default QuizPage;
