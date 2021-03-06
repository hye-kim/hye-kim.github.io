module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('./images/tobias-marks-KR5H9c7dDdA-unsplash.jpg')",
        "profile-pic": "url('./images/profile-pic.jpg')",
        "project-pic-1": "url('./images/venividivoravi.png')",
        "project-pic-2": "url('./images/muse.png')",
        "project-pic-3": "url('./images/harmony.png')",
      }),
    },
  },
  purge: {
    enabled: false,
  }
};
