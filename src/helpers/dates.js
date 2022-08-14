import moment from "moment";
/**
 * 
 * @param {It's a date in format YYYY-MM-DDTHH:mm:ss.sssZ } dateLastUpdated 
 * @returns a literal relative time from dateUpdated until now
 */
export function litelTimeNumberDays(dateLastUpdated) {
    const date = new Date(dateLastUpdated);
    const day = date.getDate().toString().length > 1 ? date.getDate() : '0' + date.getDate();
    const month = date.getMonth().toString().length > 1 ? date.getMonth() : '0' + date.getMonth();
    const year = date.getFullYear();
    const literalDate = moment(`${year}${month}${day}`, "YYYYMMDD").fromNow();
    return literalDate;
}

