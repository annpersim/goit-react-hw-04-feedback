import PropTypes from 'prop-types';
import { ValueList, Value } from './Statistic.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ValueList>
      <Value>Good:{good}</Value>
      <Value>Neutral:{neutral}</Value>
      <Value>Bad:{bad}</Value>
      <Value>Total:{total}</Value>
      <Value>Positive feedback: {positivePercentage}%</Value>
    </ValueList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
