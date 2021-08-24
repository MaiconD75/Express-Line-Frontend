const getInitials = (name: string): string => {
  const [firstName, secondName] = name.split(' ');
  const initials = firstName[0] + secondName[0];

  return initials.toUpperCase();
};

export default getInitials;
