function convertWorkingTime(date: string) {
  if (!date) {
    return 'Current'
  }

  const parseDate = Date.parse(date)
  return new Date(parseDate).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long'
  })
}

function splitStringTagItem(items: string[]) {
  return `${items.join(", ")}.`
}

export { convertWorkingTime, splitStringTagItem }