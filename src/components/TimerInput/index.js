import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const TimerInput = () => {
return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker label="Start time"/>
    </LocalizationProvider>
)
}

export default TimerInput;