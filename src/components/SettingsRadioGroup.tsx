import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
  InputAdornment,
  Input,
  IconButton,
} from "@material-ui/core";
import { Backspace } from "@material-ui/icons";

interface Options {
  value: string;
  label: string;
}
interface SettingsRadioGroupProps {
  title: string;
  subtitle: string;
  name: string;
  options: Options[];
  value: string;
  setValue: (to: string) => void;
  otherPhoneNumber: string;
  setOtherPhoneNumber: (to: string) => void;
}

export const SettingsRadioGroup: React.FC<SettingsRadioGroupProps> = ({
  name,
  title,
  subtitle,
  options,
  value,
  setValue,
  otherPhoneNumber,
  setOtherPhoneNumber,
}) => {
  return (
    <Box>
      <Box>{title}</Box>
      <FormControl component="fieldset">
        <FormLabel component="legend">{subtitle}</FormLabel>
        <RadioGroup
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {options.map((option, index) => (
            <Box key={index}>
              <FormControlLabel
                value={option.value}
                control={<Radio color="primary" />}
                label={option.label}
              />
              {value === "forwardingToOtherPhone" &&
              option.value === "forwardingToOtherPhone" ? (
                <Input
                  value={otherPhoneNumber}
                  onChange={(e) => setOtherPhoneNumber(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="delete"
                        onClick={() =>
                          setOtherPhoneNumber(otherPhoneNumber.slice(0, -1))
                        }
                      >
                        <Backspace fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              ) : null}
            </Box>
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
