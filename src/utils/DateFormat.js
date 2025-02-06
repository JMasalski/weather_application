export const formatDate = (dateString) => {
  const datePart = dateString.split(" ")[0]; 
  const [year, month, day] = datePart.split("-"); 
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const formattedDate = `${day} ${months[parseInt(month) - 1]}, ${year}`; 
  return formattedDate;
};


export const getDayOfWeek = (date) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = new Date(date).getDay();
    return days[dayIndex];
  };