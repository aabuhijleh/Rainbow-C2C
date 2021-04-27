import React, { useState } from "react";
import { Button, Box, Link } from "@material-ui/core";
import { Header } from "components/Header";
import { labels } from "labels";

interface AboutLinkProps {
  url: string;
  label: string;
}

const AboutLink: React.FC<AboutLinkProps> = ({ url, label }) => {
  return (
    <Box>
      <Link
        underline="none"
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      >
        {label}
      </Link>
    </Box>
  );
};

export const AboutPage: React.FC = () => {
  const [aboutData] = useState({
    server: "openrainbow.com",
    telephonyVersion: "unknown",
    systemIdentifier: "PBX7467-...",
  });

  return (
    <Box>
      <Header
        title="Rainbow Click2Cal"
        subtitle={`${labels.version}: 1.7.20`}
        toPage="settings"
      />
      <Box>
        <Box>
          {labels.server}: {aboutData.server}
        </Box>
        <Box>
          {labels.telephonyAgentVersion}: {aboutData.telephonyVersion}
        </Box>
        <Box>
          {labels.systemIdentifier}: {aboutData.systemIdentifier}
        </Box>
        <Box>
          © Copyright Alcatel-Lucent Enterprise, {new Date().getUTCFullYear()}
        </Box>
        <Box>
          {labels.forMoreInfo}
          <AboutLink
            url="http://www.openrainbow.com"
            label="www.openrainbow.com"
          />
          <AboutLink
            url="https://openrainbow.com/legals/terms-of-service"
            label={labels.termsOfService}
          />
          <AboutLink
            url="https://www.al-enterprise.com/en/rainbow/data-privacy"
            label={labels.privacyStatement}
          />
        </Box>
        <Button
          style={{ textTransform: "none" }}
          variant="contained"
          color="primary"
        >
          {labels.saveLogs}
        </Button>
      </Box>
    </Box>
  );
};
