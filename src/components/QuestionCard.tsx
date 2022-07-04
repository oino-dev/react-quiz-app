import React from 'react';
import { v4 as uuid } from 'uuid';

import { AnswerObjectType } from '../App';

import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type PropsType = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObjectType | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<PropsType> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            key={uuid()}
          >
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
