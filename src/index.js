import dayjs from 'dayjs';

export default (option, dayjsClass, dayjsFactory) => {
  dayjsFactory.range = (
    start,
    end,
    interval = 1,
    unit = 'day',
    options = {}
  ) => {
    const { excludeStart = false, excludeEnd = false } = options;

    let currentDate = dayjs(start);
    let endDate = dayjs(end);

    if (excludeStart) {
      currentDate = currentDate.add(1, 'day');
    }

    if (excludeEnd) {
      endDate = endDate.subtract(1, 'day');
    }

    const ranges = [];

    while (currentDate.isBefore(endDate) || currentDate.isSame(endDate)) {
      ranges.push(currentDate);

      currentDate = currentDate.add(interval, unit);
    }

    return ranges;
  };
};
