import { useEffect, useState } from "react";
import Progress from "@/components/progress";
import Button from "@/components/button";
import QuizOption from "@/components/quiz-option";
import {
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSearchParams,
  useSubmit,
} from "react-router-dom";
import toast from "react-hot-toast";
import QuizAction from "./action";
import Loader from "./loading";
import QuizLoader from "./loader";
import { InvitationData } from "@/types";
import routes from "@/utils/routes";

const options = [
  { id: 0, text: "None of the time" },
  { id: 1, text: "Rarely" },
  { id: 2, text: "Once in a while" },
  { id: 3, text: "Often" },
  { id: 4, text: "Most of the time" },
  { id: 5, text: "All of the time" },
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
  const submit = useSubmit();
  const [totalNoOfQuiz] = useState(6);
  const [currentQuizNo, setCurrentQuizNo] = useState(1);
  const [answers, setAnswers] = useState<number[]>(Array(6).fill(null));

  const actionData = useActionData();
  const invitation = useLoaderData() as InvitationData;
  const [generating, setGenerating] = useState<boolean>(false);
  const navigate = useNavigate();

  const { state } = useNavigation();
  const [searchParam] = useSearchParams();
  const invitationCode = searchParam.get("invitation_code") ?? invitation.token;

  const handlePrevAction = () => {
    if (currentQuizNo == 1) return;

    setCurrentQuizNo(currentQuizNo - 1);
    scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextAction = () => {
    toast.dismiss();

    if (typeof answers[currentQuizNo - 1] != "number") {
      return toast.error("You must select an option");
    }

    scrollTo({ top: -100, behavior: "smooth" });
    setCurrentQuizNo(currentQuizNo + 1);
  };

  const generatePlaylist = () => {
    setGenerating(true);

    const data = {
      invitation_code: invitationCode,
      action: "generate-playlist",
    };

    submit(data, {
      method: "POST",
      action: `/quiz?${searchParam.toString()}`,
      encType: "application/json",
    });
  };

  const handleSubmit = () => {
    toast.dismiss();
    const data = {
      responses: answers,
      invitation_code: invitationCode,
      action: "submit-quiz",
    };

    const quizNotCompleted = data.responses.some(
      (response) => typeof response != "number"
    );

    if (quizNotCompleted) {
      return toast.error("You must select an option for all questions");
    }

    submit(data, {
      method: "POST",
      action: `/quiz?${searchParam.toString()}`,
      encType: "application/json",
    });
  };

  const handleSelectOption = (value: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuizNo - 1] = value;
    setAnswers(updatedAnswers);
  };

  useEffect(() => {
    if (actionData && !generating) {
      generatePlaylist();
    }
  }, [actionData, generating]);

  // once, when the page is loaded, check if the questionnaire has been answered
  // if yes, redirect to playlist page
  useEffect(() => {
    // scroll to the top of the page
    scrollTo({ top: -100, behavior: "smooth" });

    if (invitation.questionnaire) {
      navigate(
        `${routes.PERSONALIZED_PLAYLIST}?invitation_code=${invitationCode}`
      );
    }
  }, []);

  if (state !== "idle") return <Loader />;

  return (
    <>
      <section className="flex flex-col items-start w-full px-4 lg:px-16 pt-12">
        <div className="text-brand flex items-center gap-4">
          <span>
            {currentQuizNo}/{totalNoOfQuiz} Completed
          </span>
          <Progress value={currentQuizNo} max={totalNoOfQuiz} />
        </div>

        <div className="flex flex-col py-8 lg:py-20 gap-8 lg:gap-12">
          {!questions[currentQuizNo - 1].isFullQuestion && (
            <p className="text-[1rem] lg:text-4xl lg:leading-[4rem] text-brand max-w-prose">
              Do you leak urine (even small drops), wet yourself, or wet your
              pads or undergarments...
            </p>
          )}

          <p
            className="text-2xl lg:text-5xl lg:leading-[4rem] text-brand max-w-prose"
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

        <div className="flex justify-between lg:justify-center lg:gap-24 w-full mt-12 pb-8 px-4">
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
QuizPage.action = QuizAction;
QuizPage.loader = QuizLoader;
