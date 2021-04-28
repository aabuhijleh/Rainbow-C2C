import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
  Grid,
  InputAdornment,
  IconButton,
  Input,
  Button,
} from "@material-ui/core";
import { Backspace, LocalPhone } from "@material-ui/icons";
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
interface SettingKeyPadProps {
  buttonsValues: string[];
  number: string;
  setNumber: (newNum: any) => void;
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
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.value}
            control={<Radio color="primary" />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

const SettingKeyPad: React.FC<SettingKeyPadProps> = ({
  buttonsValues,
  number,
  setNumber,
}) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="delete"
                onClick={() => setNumber(number.slice(0, -1))}
              >
                <Backspace fontSize="small" />
              </IconButton>
            </InputAdornment>
          }
        />
      </Grid>
      {buttonsValues.map((button, index) => (
        <Grid item xs={4} key={index}>
          <Button onClick={() => setNumber(`${number}${button}`)}>
            {button}
          </Button>
        </Grid>
      ))}
      <Grid item xs={12}>
        <IconButton aria-label="call">
          <LocalPhone />
        </IconButton>
      </Grid>
    </Grid>
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
  const [keyPadButtons] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "0",
    "#",
  ]);
  const [number, setNumber] = useState("");

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
      <SettingKeyPad
        buttonsValues={keyPadButtons}
        number={number}
        setNumber={(e) => setNumber(e)}
      />
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
