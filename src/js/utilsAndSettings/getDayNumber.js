export function getDayNumber(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    let days = 0;
    for (let i = 1; i <= month; i++) {
        days = days + new Date(year, i, 0).getDate();
    }
    days = days + date.getDate();
    return days;
}