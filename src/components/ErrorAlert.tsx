import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Fade from "@mui/material/Fade";

export interface ErrorAlertProps {
  open: boolean;
  onClose: () => void;
}

const ErrorAlert = ({ open, onClose }: ErrorAlertProps) => {
  return (
    <Fade
      in={open}
      timeout={{ enter: 200, exit: 200 }}
    >
      <Alert severity="error" onClose={onClose} sx={{ position: "fixed", bottom: 0, width: "100%" }}>
        <AlertTitle>Error</AlertTitle>
        Sorry - we can't retrieve the nutrition data. Please check the internet
        and try again.
      </Alert>
    </Fade>
  );
};

export default ErrorAlert;
