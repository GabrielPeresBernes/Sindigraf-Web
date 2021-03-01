const isMobile = (): boolean => {
  /* if (window.matchMedia('(max-width: 840px)').matches) return true;
  return false; */

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  ) {
    return true;
  }
  return false;
};

export default isMobile;
