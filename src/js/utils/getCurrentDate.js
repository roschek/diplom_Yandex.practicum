export const getCurrentDate = () => {
    const data = new Date();
    return `${data.getFullYear()}-${data.getMonth()+1}-${ data.getDate()}`
}