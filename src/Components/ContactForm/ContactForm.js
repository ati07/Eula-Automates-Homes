import React, { useState } from "react";
import "./ContactForm.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { MenuItem } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 500,
    },
  },
}));

const projects = [
  {
    value: "1",
    label: "What kind of project it is?",
  },
  {
    value: "USD",
    label: "Kitchen",
  },
  {
    value: "EUR",
    label: "Closet",
  },
  {
    value: "BTC",
    label: "Bath",
  },
  {
    value: "JPY",
    label: "Whole House",
  },
  {
    value: "",
    label: "Other",
  },
];
const StartTimeOFProject=[
    {
        value:'1',
        label:'When you start your project?'
    },
    {
        value:'2',
        label:'Immediatly',
    },
    {
        value:'3',
        label:'3-6 Months',
    },
    {
        value:'4',
        label:'6+ months'
    }
]
const HomeMeasuremant=[
    {
        value:'1',
        label:'Do you want to do Home Measurment'
    },
    {
        value:'2',
        label:'Yes',
    },
    {
        value:'3',
        label:'No',
    },
    {
        value:'4',
        label:'Not Sure'
    }
]
function ContactForm() {
  const classes = useStyles();
  const [project, setProject] = React.useState("1");
  const [time,setTime] =useState('1')
  const [measurment,setMeasurment] =useState("1")

  const handleChange = (event) => {
    setProject(event.target.value);
  };
  const handleChangeTime=(event)=>{
      setTime(event.target.value)
  }
  return (
    <div className="ContactForm">
      <div className="ContactForm_section1">
        <div className="ContactHorizontalLine"></div>
        <div className="ContactForm_h1">
          <h1>
            YOU ARE A FEW CLICKS AWAY FROM A <br /> QUOTE FOR YOUR DREAM <br />
            KITCHEN
          </h1>
        </div>
      </div>
      <div className='ptag'>
          <p>Please fill in the area marked with *

</p>
          <p>If you can fill in more information, it is the best! And then leave the rest to our kitchen experts.</p>
      </div>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              type="text"
              id="standard-error"
              label="First name"
              //   defaultValue="Hello World"
            />
            <TextField
              type="text"
              id="standard-error-helper-text"
              label="Last Name"
              //   defaultValue="Hello World"
            //   helperText="Incorrect entry."
            />
          </div>
          <div>
            <TextField
              type="number"
              id="filled-error"
              label="Phone Number"
              defaultValue="Hello World"
              //   variant="filled"
            />
            <TextField
              type="email"
              id="filled-error-helper-text"
              label="Email"
              //   defaultValue="Hello World"
            //   helperText="Incorrect entry."
              //   variant="filled"
            />
          </div>
          <div>
            <TextField
              type="text"
              id="outlined-error"
              label="Company Name"
              //   defaultValue="Hello World"
              //   variant="outlined"
            />
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              value={project}
              onChange={handleChange}
              helperText="Please select your currency"
            >
              {projects.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
          <TextField
              id="standard-select-time"
              select
              label="Select"
              value={time}
              onChange={handleChangeTime}
              helperText="Please select your Project Time"
            >
              {StartTimeOFProject.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              value={measurment}
              onChange={handleChange}
              helperText="Please select your currency"
            >
              {HomeMeasuremant.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
          <TextareaAutosize aria-label="minimum height" rowsMin={20} placeholder="Is there anything else you need to tell us?" style={{height: 153,
    margin: 0,
    width: 1018}} />
          </div>
          <div>
              <Button>
                    Send
              </Button>
              </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
