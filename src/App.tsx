import React from "react";
import { AboutPage } from "pages/AboutPage";
import { SettingsPage } from "pages/SettingsPage";
import { useStore } from "store";

export const App: React.FC = () => {
  const currentPage = useStore((state) => state.currentPage);

  switch (currentPage) {
    case "about":
      return <AboutPage />;
    default:
      return <SettingsPage />;
  }
};
