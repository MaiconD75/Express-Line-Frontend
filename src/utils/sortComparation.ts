const sortComparation = <T extends unknown>(a: T, b: T): number => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

export default sortComparation;
