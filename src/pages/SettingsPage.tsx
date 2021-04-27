import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
} from "@material-ui/core";
import { Header } from "components/Header";
import { labels } from "labels";

interface Options {
  value: string;
  label: string;
}
interface SettingsRadioGroupProps {
  formLabel: string;
  name: string;
  options: Options[];
  value: string;
  setValue: (to: string) => void;
}

const SettingsRadioGroup: React.FC<SettingsRadioGroupProps> = ({
  name,
  formLabel,
  options,
  value,
  setValue,
}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{formLabel}</FormLabel>
      <RadioGroup
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option) => (
          <FormControlLabel
            value={option.value}
            control={<Radio color="primary" />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

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
      label: "Forwarding to voicemail",
    },
    {
      value: "forwardingToOtherPhone",
      label: "Forwarding to other phone",
    },
  ]);
  // console.log("currentPhone:", currentPhone);
  // console.log("forwardYourCalls:", forwardYourCalls);
  return (
    <Box>
      <Header title={labels.telephonySettings} toPage="about" />
      <Box>
        <Box>{labels.selectCurrentPhone}</Box>
        <SettingsRadioGroup
          name="currentPhone"
          formLabel={labels.selectNomadicModeLabel}
          options={currentPhoneOptions}
          value={currentPhone}
          setValue={(e) => setCurrentPhone(e)}
        />
      </Box>
      <Box>
        <Box>{labels.forwardCallsTitle}</Box>
        <SettingsRadioGroup
          name="forwardYourCalls"
          formLabel={labels.forwardCallsSubTitle}
          options={forwardYourCallsOptions}
          value={forwardYourCalls}
          setValue={(e) => setForwardYourCalls(e)}
        />
      </Box>
    </Box>
  );
};
