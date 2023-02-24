
export const helperFunctions = {
    fadeInOnScroll() {
      const elements = document.querySelectorAll('.fadeIn');
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
          element.classList.add('fade-in');
        }
      });
    },
  };