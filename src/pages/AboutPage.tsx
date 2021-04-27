import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Header } from "components/Header";

interface AboutLinkProps {
  url: string;
  label: string;
}

const AboutLink: React.FC<AboutLinkProps> = ({ url, label }) => {
  return (
    <div>
      <a target="_blank" rel="noopener noreferrer" href={url}>
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
        subtitle="Version: 1.7.20"
        toPage="settings"
      />
      <div>
        <p>Server: {aboutData.server}</p>
        <p>Telephony agent version: {aboutData.telephonyVersion}</p>
        <p>System identifier: {aboutData.systemIdentifier}</p>
        <p>
          © Copyright Alcatel-Lucent Enterprise, {new Date().getUTCFullYear()}
        </p>
        <div>
          For more information about Rainbow, visit
          <AboutLink
            url="http://www.openrainbow.com"
            label="www.openrainbow.com"
          />
          <AboutLink
            url="https://openrainbow.com/legals/terms-of-service"
            label="Terms of Use"
          />
          <AboutLink
            url="https://www.al-enterprise.com/en/rainbow/data-privacy"
            label="Privacy Policy"
          />
        </div>
        <Button variant="contained" color="primary">
          Save logs...
        </Button>
      </div>
    </div>
  );
};
