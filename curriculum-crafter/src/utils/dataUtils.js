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

export const concatenateDuration = (startDate, endDate) => {
  return [formatDate(startDate), formatDate(endDate)]
    .filter(Boolean)
    .join(" / ");
}

export const concatenateCategoryData = (...params) => {
  return params.filter(Boolean).join(", ");
}

export const hasValidData = (array) => {
  return array.some((item) =>
    Object.values(item).some((value) => 
      typeof value === "string" && value.trim() !== ""
    )
  );
};

