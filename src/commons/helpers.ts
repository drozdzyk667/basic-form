const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
export const MAX_DONATION_LENGTH = 9;

export const getFutureMonthsThisYear = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const futureMonths = [];

  for (let i = currentMonth + 1; i < 12; i++) {
    futureMonths.push(`${months[i]}`);
  }

  return futureMonths;
}

const allowOnlyOneDot = (value: string) => {
    if (value.length === MAX_DONATION_LENGTH) {
        return value.replace(/[.]/g, '')
    }

    return value.replace(/\./g, (match, offset, original) => {
      if (original.indexOf('.') !== offset) {
        return '';
      }
      return match; 
    });
  }

export const addZeroIfNeeded = (value: string) => {
    if (value.match(/\.\d$/)) {
      return `${value}0`
    } else if (value.match(/\.$/)) {
      return `${value}00`
    }
    return value;
}

export const formatNumber = (value: string) => {
    const removeChars = allowOnlyOneDot(value.replace(/[,]/g, ''));
    const regex = /(\d)(?=(\d{3})+(?!\d))/g;
    const parts = removeChars.split('.');

    parts[0] = parts[0].replace(regex, '$1,');

    if (parts[1] && parts[1].length > 2) {
        parts[1] = parts[1].slice(0, 2);
    }

    return parts.join('.');
}

