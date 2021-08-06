import dayjs from 'dayjs';

const sortByDate = (a, b) => {
  return dayjs(b.data.date) - dayjs(a.data.date);
};

export default sortByDate;
