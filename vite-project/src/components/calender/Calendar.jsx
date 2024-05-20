import "../../index.css";
import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      let daysToHighlight = [];//para marcar dias en el calendario
      
      if (date.$y === 2024 && date.$M === 4) {
         daysToHighlight = [17];
      }

      if (date.$y === 2024 && date.$M === 3) {
        daysToHighlight = [1,2];
     }

      resolve({ daysToHighlight });
    }, 200);

    /**
     * Handles the abort event of the signal.
     *
     * @param {function} onabort - The abort event handler.
     * @return {void} This function does not return anything.
     */
    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}

const initialValue = dayjs('2024-04-21');



/**
 * Renders a server-side day component with optional highlighting and badge.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - highlightedDays: An array of numbers representing the days to highlight.
 *   - day: A dayjs object representing the day.
 *   - outsideCurrentMonth: A boolean indicating if the day is outside the current month.
 *   - ...other: Additional props to pass to the component.
 * @return {JSX.Element} The rendered server-side day component.
 */
function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? <AccessTimeIcon/> : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );

}


/**
 * Renders a calendar component that fetches highlighted days from a server and displays them in a calendar.
 *
 * @return {JSX.Element} The rendered calendar component.
 */
export  function Calendar() {
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  

  
/**
 * Fetches highlighted days from a server and updates the state with the fetched data.
 *
 * @param {Date} date - The date for which to fetch highlighted days.
 * @return {void} This function does not return anything.
 */
  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  
  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  /**
   * Handles the change of the month.
   *
   * @param {Date} date - The date for which to fetch highlighted days.
   * @return {void} This function does not return anything.
   */
  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
    

  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar']}>
      <DemoItem label={'Calendar'}>
      <DateCalendar
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
              </DemoItem>

      </DemoContainer>

    </LocalizationProvider>
  );
}
