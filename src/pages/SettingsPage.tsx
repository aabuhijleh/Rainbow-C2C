import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
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
  // setValue(text: string): string;
}

const SettingsRadioGroup: React.FC<SettingsRadioGroupProps> = ({
  name,
  formLabel,
  options,
  value,
  // setValue
}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{formLabel}</FormLabel>
      <RadioGroup
        // aria-label="gender"
        name={name}
        value={value}
        // onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option, index) => (
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
      label: "computer",
    },
    {
      value: "officePhone",
      label: "Office phone",
    },
    {
      value: "otherPhone",
      label: "Other phone",
    },
  ]);
  const [forwardYourCalls, setForwardYourCalls] = useState(
    "cancelCallForwarding"
  );
  const [forwardYourCallsOptions] = useState([
    {
      value: "cancelCallForwarding",
      label: "Cancel call forwarding",
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

  return (
    <div>
      <Header title={labels.telephonySettings} toPage="about" />
      <div>
        <p>SELECT YOUR CURRENT PHONE</p>
        <SettingsRadioGroup
          name="currentPhone"
          formLabel="select the device for making and receiving phone calls."
          options={currentPhoneOptions}
          value={currentPhone}
          // setValue={(e) => setCurrentPhone(e)}
        />
      </div>
      <div>
        <p>FORWARD YOUR CALLS</p>
        <SettingsRadioGroup
          name="forwardYourCalls"
          formLabel="Redirect phone calls to your voicemail or a phone number when you
          are out of office or unavailable"
          options={forwardYourCallsOptions}
          value={forwardYourCalls}
          // setValue={setForwardYourCalls}
        />
      </div>
    </div>
  );
};
