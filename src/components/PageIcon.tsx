import React from "react";
import { Page } from "pages/types";
import { SettingsOutlined, InfoOutlined } from "@material-ui/icons";
import { useStore } from "store";

interface PageIconProps {
  page: Page;
}

export const PageIcon: React.FC<PageIconProps> = ({ page }) => {
  const changeCurrentPage = useStore((state) => state.changeCurrentPage);

  let Icon;
  switch (page) {
    case "about":
      Icon = InfoOutlined;
      break;
    default:
      Icon = SettingsOutlined;
  }

  return (
    <Icon
      style={{ cursor: "pointer" }}
      onClick={() => changeCurrentPage(page)}
    />
  );
};
