import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { Header } from "components/Header";
import { DialPad } from "components/DialPad";
import { SettingsRadioGroup } from "components/SettingsRadioGroup";
import { labels } from "labels";

export const SettingsPage: React.FC = () => {
  const [currentPhone, setCurrentPhone] = useState("computer");
  const [currentPhoneOptions] = useState([
    {
      value: "computer",
      label: `${labels.computerVoIP}`,
    },
    {
      value: "officePhone",
      label: `${labels.officePhone}`,
    },
    {
      value: "otherPhone",
      label: `${labels.otherPhone}`,
    },
  ]);
  const [forwardYourCalls, setForwardYourCalls] = useState(
    "cancelCallForwarding"
  );
  const [forwardYourCallsOptions] = useState([
    {
      value: "cancelCallForwarding",
      label: `${labels.dontForward}`,
    },
    {
      value: "forwardingToVoicemail",
      label: `${labels.forwardTo} ${labels.voicemail}`,
    },
    {
      value: "forwardingToOtherPhone",
      label: `${labels.forwardTo} ${labels.otherPhone}`,
    },
  ]);
  const [number, setNumber] = useState("");
  const [otherPhoneNumber, setOtherPhoneNumber] = useState("");

  return (
    <Box>
      <Header title={labels.telephonySettings} toPage="about" />
      <SettingsRadioGroup
        name="currentPhone"
        title={labels.selectCurrentPhone}
        subtitle={labels.selectNomadicModeLabel}
        options={currentPhoneOptions}
        value={currentPhone}
        setValue={(to) => setCurrentPhone(to)}
      />
      <SettingsRadioGroup
        name="forwardYourCalls"
        title={labels.forwardCallsTitle}
        subtitle={labels.forwardCallsSubTitle}
        options={forwardYourCallsOptions}
        value={forwardYourCalls}
        setValue={(to) => setForwardYourCalls(to)}
        otherPhoneNumber={otherPhoneNumber}
        setOtherPhoneNumber={(to) => setOtherPhoneNumber(to)}
      />
      <DialPad number={number} setNumber={(to) => setNumber(to)} />
      <Box>
        <Button variant="contained" color="primary" onClick={() => {}}>
          {labels.cancel}
        </Button>
        <Button variant="contained" color="primary" onClick={() => {}}>
          {labels.apply}
        </Button>
      </Box>
    </Box>
  );
};
