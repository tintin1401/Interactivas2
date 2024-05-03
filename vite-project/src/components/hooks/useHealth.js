export const useHealth = (addEvent) => {
    const hours = [
        { id: "choose", name: "Choose a option" },
        { id: "4hours", name: "Less than 4 hours" },
        { id: "6hours", name: "4 to 6 hours" },
        { id: "8hours", name: "6 to 8 hours" },
        { id: "9hours", name: "More than 8 hours" },
      ];
    
      const gender = [
        { id: "choose", name: "Choose a option" },
        { id: "f", name: "Woman" },
        { id: "m", name: "Men" },
        { id: "n", name: "No specified" },
      ];
    
      const physical = [
        { id: "choose", name: "Choose a option" },
        { id: "y", name: "Yes" },
        { id: "n", name: "No" },
      ];
    
      const disease = [
        { id: "choose", name: "Choose a option" },
        { id: "y", name: "Yes" },
        { id: "n", name: "No" },
      ];
      const onCreateEvent = () => {
        const hours = document.getElementById('hours').value;
        const gender = document.getElementById('gender').value;
        const disease = document.getElementById('physical').value;
        if(hours === 'choose' || gender === 'choose' || disease === 'choose'){
        alert('Please select all options')
       }else{
        addEvent() ; 
       }
    };

    return {hours,gender,physical,disease,onCreateEvent};
}