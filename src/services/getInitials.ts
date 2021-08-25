const getInitials = (name: string): string => {
  const [firstName, secondName] = name.split(' ');
  const initials = secondName
    ? firstName[0] + secondName[0]
    : firstName[0] + firstName[1];

  return initials.toUpperCase();
};

export default getInitials;
