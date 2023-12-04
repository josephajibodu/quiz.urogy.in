import { useState } from "react";
import Progress from "../../components/progress";
import Button from "../../components/button";
import QuizOption from "../../components/quiz-option";

const options = [
  { id: 1, text: "None of the time" },
  { id: 2, text: "Rarely" },
  { id: 3, text: "Once in a while" },
  { id: 4, text: "Often" },
  { id: 5, text: "Most of the time" },
  { id: 6, text: "All of the time" },
];

function QuizPage() {
  const [totalNoOfQuiz] = useState(6);
  const [currentQuizNo, setCurrentQuizNo] = useState(1);

  const handlePrevAction = () => {
    if (currentQuizNo == 1) return;

    setCurrentQuizNo(currentQuizNo - 1)
  }

  const handleNextAction = () => {
    setCurrentQuizNo(currentQuizNo + 1)
  }

  return (
    <>
     <section className="flex flex-col items-start w-full px-4 lg:px-16 pt-12">
      <div className="text-brand flex items-center gap-4">
        <span>{currentQuizNo}/{totalNoOfQuiz} Completed</span>
        <Progress value={currentQuizNo} max={totalNoOfQuiz} />
      </div>
      <div className="py-8 lg:py-20">
        <p className="text-xl lg:text-4xl lg:leading-[4rem] text-brand max-w-prose">Do you leak urine (even small drops), wet yourself, or wet your pads or undergarments...</p>

        <p className="text-2xl lg:text-5xl lg:leading-[4rem] mt-8 lg:mt-12 text-brand font-bold max-w-prose">when you cough or sneeze?</p>
      </div>

      <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4 lg:gap-y-12">
        {options.map((option) => <QuizOption key={option.id} label={option.text} value={String(option.id)} />)}
      </div>

      <div className="flex justify-between lg:justify-center lg:gap-24 w-full fixed left-0 bottom-0 pb-8 px-4">
        <Button onClick={handlePrevAction} disabled={currentQuizNo <= 1}>Previous</Button>
        <Button onClick={handleNextAction} disabled={currentQuizNo == totalNoOfQuiz} variant="solid">Next</Button>
      </div>
     </section>
    </>
  );
}

export default QuizPage;
