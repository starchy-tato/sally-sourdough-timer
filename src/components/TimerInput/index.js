import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const TimerInput = ({ value, handleSelectedTime }) => {
    const selectedTime = (time) => {
        handleSelectedTime(time)
    }

return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker label="Start Time" value={value} onChange={selectedTime}/>
    </LocalizationProvider>
  
)
}

export default TimerInput;