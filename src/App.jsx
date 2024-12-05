import { Box, Button, CircularProgress, LinearProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import SuperStructFuc from "./Joi_and_Superstruct/Superstruct";
import JoiFuc from "./Joi_and_Superstruct/joi";

function App() {
  const [progress, setprogress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setprogress((oldprogress) => {
        if (oldprogress === 100) {
          return 0;
        }
        const Rand = Math.random() * 50;
        return Math.min(oldprogress + Rand, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-[90%] mt-5 p-6">
      <div className="flex justify-between items-center">
        <Button>Text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button disabled>Disabled</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success" variant="contained">
          success
        </Button>
        <Button color="error" variant="outlined">
          Error
        </Button>
      </div>
      <div className="flex mt-4 gap-2 items-center">
        <Button variant="outlined" size="large">
          large
        </Button>
        <Button variant="outlined" size="medium">
          medium
        </Button>
        <Button variant="outlined" size="small">
          small
        </Button>
        <div>
          <Button variant="outlined" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button variant="outlined" color="error" endIcon={<DeleteIcon />}>
            Delete
          </Button>
        </div>
        <div className="mt-5">
          <Box className="flex gap-3 items-center">
            {/* <CircularProgress /> */}
            <CircularProgress color="success" />
            <CircularProgress color="error" />
            <CircularProgress color="primary" />
            <CircularProgress color="secondary" />
            <CircularProgress color="warning" />
            <CircularProgress variant="determinate" value={25} />
            <CircularProgress variant="determinate" value={50} />
            <CircularProgress variant="determinate" value={progress} />
          </Box>
        </div>
      </div>
      <Box className="flex flex-col gap-4">
        <LinearProgress style={{ width: "100%" }} />
        <LinearProgress color="secondary" style={{ width: "100%" }} />
        <LinearProgress color="success" style={{ width: "100%" }} />
        <LinearProgress color="warning" style={{ width: "100%" }} />
        <LinearProgress color="info" style={{ width: "100%" }} />
        <LinearProgress color="inherit" style={{ width: "100%" }} />
        <LinearProgress color="error" style={{ width: "100%" }} />
        <LinearProgress
          color="error"
          value={progress}
          style={{ width: "100%" }}
        />
      </Box>
      <div>
        <div className="flex ">
          <div className="w-full">
            <SuperStructFuc />
          </div>
          <div className="w-full">
            <JoiFuc />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
