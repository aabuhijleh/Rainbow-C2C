import React from "react";
import logo from "assets/images/logo.png";
import { Box, Typography } from "@material-ui/core";
import { Page } from "pages/types";
import { PageIcon } from "components/PageIcon";

type HeaderProps = TitleProps & { toPage: Page };

interface TitleProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ toPage, ...titleProps }) => {
  return (
    <Box display="flex">
      <Logo />
      <Title {...titleProps} />
      <PageIcon page={toPage} />
    </Box>
  );
};

const Logo: React.FC = () => {
  return <img alt="" src={logo} height="35px" />;
};

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <Typography variant="h6">
      {title}
      <Typography variant="subtitle2">{subtitle}</Typography>
    </Typography>
  );
};
