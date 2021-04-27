import React from "react";
import { Header } from "components/Header";
import { labels } from "labels";

export const SettingsPage: React.FC = () => {
  return <Header title={labels.telephonySettings} toPage="about" />;
};
