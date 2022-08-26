export const formatDate = (date) =>{
    const time = new Date(date);
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        };
        const formattedDate = time.toLocaleDateString("ru", options).split('г.,').join('в');
        return formattedDate

}