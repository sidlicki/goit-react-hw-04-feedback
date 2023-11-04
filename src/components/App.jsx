import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = feedback => {
    // this.setState(prevState => {
    //   return { [feedback]: prevState[feedback] + 1 };
    // });

    if (feedback === 'good') {
      setGood(good + 1);
    } else if (feedback === 'neutral') {
      setNeutral(neutral + 1);
    } else if (feedback === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    // return this.state.good + this.state.neutral + this.state.bad;
    return good + neutral + bad;
  };

  const positiveFeedbackPercentage = () => {
    // return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section
        title="Please enter your feedback"
        children={
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            addFeedback={addFeedback}
          />
        }
      />
      <Section
        title="Statistics"
        children={
          countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={positiveFeedbackPercentage()}
            />
          ) : (
            <Notification notification="There is no feedback" />
          )
        }
      />
    </>
  );
};
