import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Header } from "components/Header";

export const AboutPage: React.FC = () => {
  const [aboutData, setAboutData] = useState({
    server: "openrainbow.com",
    telephonyVersion: "unknown",
    systemIdentifier: "PBX7467-...",
    CopyrightYear: "2021",
  });
  return (
    <div>
      <Header
        title="Rainbow Click2Cal"
        subtitle="Version: 1.7.20"
        toPage="settings"
      />
      <div style={{ padding: "15px" }}>
        <p>Server: {aboutData.server}</p>
        <p>Telephony agent version: {aboutData.telephonyVersion}</p>
        <p>System identifier: {aboutData.systemIdentifier}</p>

        <p style={{ padding: "15px 0" }}>
          © Copyright Alcatel-Lucent Enterprise, {aboutData.CopyrightYear}
        </p>

        <div style={{ marginBottom: "15px" }}>
          For more information about Rainbow, visit
          <a
            style={{ textDecoration: "none", display: "block" }}
            href="http://www.openrainbow.com"
            target="_blank"
          >
            www.openrainbow.com
          </a>
          <a
            style={{ textDecoration: "none", display: "block" }}
            target="_blank"
            href="https://openrainbow.com/legals/terms-of-service"
          >
            Terms of Use
          </a>
          <a
            style={{ textDecoration: "none", display: "block" }}
            href="https://www.al-enterprise.com/en/rainbow/data-privacy"
            target="_blank"
          >
            Privacy Policy
          </a>
        </div>

        <Button variant="contained" color="primary">
          Save logs...
        </Button>
      </div>
    </div>
  );
};
