import { TimeField } from '@mui/x-date-pickers/TimeField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const TimerInput = () => {
return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimeField />
    </LocalizationProvider>
)
}

export default TimerInput;