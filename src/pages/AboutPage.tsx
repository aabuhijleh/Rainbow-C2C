import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Header } from "components/Header";
import { labels } from "labels";

interface AboutLinkProps {
  url: string;
  label: string;
}

const AboutLink: React.FC<AboutLinkProps> = ({ url, label }) => {
  return (
    <div>
      <a
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      >
        {label}
      </a>
    </div>
  );
};

export const AboutPage: React.FC = () => {
  const [aboutData] = useState({
    server: "openrainbow.com",
    telephonyVersion: "unknown",
    systemIdentifier: "PBX7467-...",
  });

  return (
    <div>
      <Header
        title="Rainbow Click2Cal"
        subtitle={`${labels.version}: 1.7.20`}
        toPage="settings"
      />
      <div>
        <p>
          {labels.server}: {aboutData.server}
        </p>
        <p>
          {labels.telephonyAgentVersion}: {aboutData.telephonyVersion}
        </p>
        <p>
          {labels.systemIdentifier}: {aboutData.systemIdentifier}
        </p>
        <p>
          © Copyright Alcatel-Lucent Enterprise, {new Date().getUTCFullYear()}
        </p>
        <div>
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
        </div>
        <Button
          style={{ textTransform: "none" }}
          variant="contained"
          color="primary"
        >
          Save logs...
        </Button>
      </div>
    </div>
  );
};
