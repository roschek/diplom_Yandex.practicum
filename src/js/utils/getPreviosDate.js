export const getPreviousDate = (dayAgo, isStandart) => {
    const data = new Date();
    const from = data.setDate(data.getDate() - dayAgo);
    if (isStandart) {
        return data
    } else {
        return `${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()}`;
    }
}