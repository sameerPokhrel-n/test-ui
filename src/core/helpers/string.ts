export const capitalizedString = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const slugToTitle = (str: string) => {
  return str.replace(/-/g, " ").replace(/\b[a-z]/g, function () {
    return arguments[0].toUpperCase();
  });
};
