export const darkTheme = {
  // Fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },

  // Colors for dark mode
  colors: {
    primary: "#854CE6",
    backgroundPrimary: "#222A35",
    backgroundSecondary: "#19212C",
    button: "#854CE6",
    footerBackground: "#00012B",

    // Text colors
    textPrimary: "#C8CFD8",
    textSecondary: "#F2F5F7",
    textMuted: "#626970",
    textDark: "#575C66",
  },

  // Breakpoints for responsive design
  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)"
  }
};

export const lightTheme = {
  fonts: darkTheme.fonts,

  colors: {
    primary: "#854CE6",
    backgroundPrimary: "#F5F5F5",
    backgroundSecondary: "#FFFFFF",
    button: "#854CE6",
    footerBackground: "#E0E0E0",

    textPrimary: "#222A35",
    textSecondary: "#19212C",
    textMuted: "#626970",
    textDark: "#333",
  },

  breakpoints: darkTheme.breakpoints
};
