
export const formatDate = (timestamp) => {
  const date = new Date(timestamp)
      let options = { day: 'numeric', month: 'long', year: 'numeric' }
      const newDate = date.toLocaleDateString('pt-PT', options);
      const formatDate = newDate.split("de ")
      return formatDate
}


// Instalar lib no NodeJS -> npm install dayjs conforme site:
// https://day.js.org/docs/en/installation/node-js
