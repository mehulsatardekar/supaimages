/**
 * @description Helper function to generate a formatted date based on raw date.
 * @param {string} sourceDate
 * @returns {string}
 */
export const getFormattedDate = (sourceDate: string) => {
  const date = new Date(sourceDate);
  const options = {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Asia/Kolkata",
  } as const;

  const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(date);
  return formattedDate;
};
