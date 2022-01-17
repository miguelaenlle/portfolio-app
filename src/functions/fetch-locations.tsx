export const fetchLocation = (ref: React.RefObject<HTMLDivElement>): number => {
  if (ref.current) {
    const location = ref.current.offsetTop;
    return location;
  } else {
    return 0;
  }
};
