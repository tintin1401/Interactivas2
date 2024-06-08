import dayjs from 'dayjs';

export const useMonth = (data,month) => {

    const days = [];
    data.forEach(prueba => {
        const day = dayjs(prueba.date);
        if (day.$M === month) { 
          days.push(day.$D);
        }
      });
      return days;
  
};

export default useMonth;