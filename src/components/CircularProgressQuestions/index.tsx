import React from 'react';

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

interface ICircularProgressQuestions {
  questionsFinished: number;
  questionsTotal: number;
}

const calculatePercentage = (
  partialValue: number,
  totalValue: number,
): number => {
  const calculated = (100 * partialValue) / totalValue;

  const calculatedNumber = Number(calculated.toFixed(0));

  return calculatedNumber;
};

const CircularProgressQuestions: React.FC<ICircularProgressQuestions> = ({
  questionsFinished,
  questionsTotal,
}) => {
  return (
    <div
      style={{
        width: '60px',
        height: '60px',
      }}
    >
      <CircularProgressbarWithChildren
        value={calculatePercentage(questionsFinished, questionsTotal)}
        strokeWidth={5}
        backgroundPadding={5}
        styles={buildStyles({
          textColor: '#009432',
          pathColor: '#009432',
        })}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: '10px', margin: '0', color: '#757575' }}>
            <b style={{ fontSize: '14px', color: '#009432' }}>
              {`${questionsFinished}`}
            </b>
            {`/${questionsTotal}`}
          </p>
        </div>
        <p style={{ margin: '0', fontSize: '10px' }}>
          {`${calculatePercentage(questionsFinished, questionsTotal)}%`}
        </p>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularProgressQuestions;
