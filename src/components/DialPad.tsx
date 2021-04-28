import React from "react";
import {
  Grid,
  InputAdornment,
  IconButton,
  Input,
  Button,
  Box,
} from "@material-ui/core";
import { Backspace, LocalPhone } from "@material-ui/icons";

interface DialPadProps {
  number: string;
  setNumber: (to: any) => void;
}
const SearchBar: React.FC<DialPadProps> = ({ number, setNumber }) => {
  return (
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
  );
};
const Keys: React.FC<DialPadProps> = ({ number, setNumber }) => {
  const keyPadButtons = [
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
  ];
  return (
    <Grid container spacing={0}>
      {keyPadButtons.map((button, index) => (
        <Grid item xs={4} key={index}>
          <Button onClick={() => setNumber(`${number}${button}`)}>
            {button}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
const CallButton: React.FC = () => {
  return (
    <Grid item xs={12}>
      <IconButton aria-label="call">
        <LocalPhone />
      </IconButton>
    </Grid>
  );
};
export const DialPad: React.FC<DialPadProps> = (props) => {
  return (
    <Box>
      <SearchBar {...props} />
      <Keys {...props} />
      <CallButton />
    </Box>
  );
};
