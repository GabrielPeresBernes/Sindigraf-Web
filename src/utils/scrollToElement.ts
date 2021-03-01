const scrollToElement = (
  ref: React.MutableRefObject<null | HTMLElement>,
): void => {
  ref.current?.scrollIntoView();
};

export default scrollToElement;
