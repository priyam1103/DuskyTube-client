export const registerObserver = (ref, setShowVideo) => {
    const observer = new IntersectionObserver(
      (enteries, observer) => {
        enteries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          setShowVideo(true);
          observer.disconnect();
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(ref);
  };