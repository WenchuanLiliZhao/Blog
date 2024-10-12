export const toggleClass = (className: string) => {
  return (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const element = event.currentTarget;

    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  };
};
