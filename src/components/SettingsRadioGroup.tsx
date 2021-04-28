import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
} from "@material-ui/core";

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
}

export const SettingsRadioGroup: React.FC<SettingsRadioGroupProps> = ({
  name,
  title,
  subtitle,
  options,
  value,
  setValue,
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
            <FormControlLabel
              key={index}
              value={option.value}
              control={<Radio color="primary" />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
