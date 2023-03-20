import PropTypes from 'prop-types';
import { Button, Options } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Options>
      <Button onClick={onLeaveFeedback}>{options[0]}</Button>
      <Button onClick={onLeaveFeedback}>{options[1]}</Button>
      <Button onClick={onLeaveFeedback}>{options[2]}</Button>
    </Options>
  );
};

FeedbackOptions.prototypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
