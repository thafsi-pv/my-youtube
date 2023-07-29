function formatDateAgo(uploadDate) {
  const now = new Date();
  const date = new Date(uploadDate);
  const timeDiff = now.getTime() - date.getTime();
  const secondsAgo = Math.floor(timeDiff / 1000);

  if (secondsAgo < 60) {
    return secondsAgo === 1 ? "1 second ago" : `${secondsAgo} seconds ago`;
  }

  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) {
    return minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`;
  }

  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) {
    return hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`;
  }

  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 7) {
    return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
  }

  const weeksAgo = Math.floor(daysAgo / 7);
  if (weeksAgo < 4) {
    return weeksAgo === 1 ? "1 week ago" : `${weeksAgo} weeks ago`;
  }

  const monthsAgo = Math.floor(daysAgo / 30);
  return monthsAgo === 1 ? "1 month ago" : `${monthsAgo} months ago`;
}

export default formatDateAgo;
