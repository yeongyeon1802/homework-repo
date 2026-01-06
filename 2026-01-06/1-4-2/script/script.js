"use strict";

const defaultSettings = {
  theme: "blue",
  showSidebar: true,
};

const updateSettings = (userSettings) => {
  const final = { ...defaultSettings, ...userSettings };

  const { theme, showSidebar } = final;
  const showTheme = `테마: ${theme}`;
  console.log(showTheme);
};

updateSettings({ theme: "dark" });
