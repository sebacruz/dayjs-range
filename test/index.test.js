import dayjs from 'dayjs';
import range from '../src';

dayjs.extend(range);

const datesDiff = 7;
const startDate = dayjs('2021-01-01');
const endDate = startDate.add(7, 'day');

it('Should return an array with dates from `start` to `end` with an interval of 1 day', () => {
  const datesRange = dayjs.range(startDate, endDate);

  const sampleRange = [];
  const sampleStart = dayjs('2021-01-01');

  for (let i = 0; i <= datesDiff; i++) {
    sampleRange.push(sampleStart.add(i, 'day'));
  }

  expect(sampleRange).toEqual(datesRange);
});

it('Should return an array with dates between `start` and `end`', () => {
  const datesRange = dayjs.range(startDate, endDate, 1, 'day', {
    excludeStart: true,
    excludeEnd: true
  });

  const sampleRange = [];
  const sampleStart = dayjs('2021-01-02');
  const datesDiff = 5;

  for (let i = 0; i <= datesDiff; i++) {
    sampleRange.push(sampleStart.add(i, 'day'));
  }

  expect(sampleRange).toEqual(datesRange);
});
