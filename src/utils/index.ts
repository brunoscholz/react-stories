

export const timeSince = (date: Date): string => {
  var seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000)

  var interval = seconds / 31536000
  var timeAgo = Math.floor(seconds) + " seconds ago"

  if (interval > 1) {
    timeAgo = Math.floor(interval) + ' years ago'
  }
  interval = seconds / 2592000
  if (interval > 1) {
    timeAgo = Math.floor(interval) + " months ago"
  }
  interval = seconds / 86400
  if (interval > 1) {
    timeAgo = Math.floor(interval) + " days ago"
  }
  interval = seconds / 3600
  if (interval > 1) {
    timeAgo = Math.floor(interval) + " hours ago"
  }
  interval = seconds / 60
  if (interval > 1) {
    timeAgo = Math.floor(interval) + " minutes ago"
  }

  return timeAgo
}

var aDay = 60 * 1000;
console.log(timeSince(new Date(Date.now() - aDay)));
// console.log(timeSince(new Date(Date.now() - aDay * 2)));