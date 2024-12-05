export const formatDate = (date) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  try {
    return new Intl.DateTimeFormat("en-EN", options).format(new Date(date));
  } catch {
    return "";
  }
};

export const isDateString = (value) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Formato "YYYY-MM-DD"
  return dateRegex.test(value) && !isNaN(new Date(value).getTime());
};
