export const getCodes = () => {
  return fetch('/api/codes', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getEvents = () => {
  return fetch('/api/events', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};