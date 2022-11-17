export default function useFormate() {
  function formatMoney(payload: number) {
    const priceFormatter = new Intl.NumberFormat('USD', {
      style: 'currency',
      currency: 'USD',
    })
    return priceFormatter.format(payload)
  }
  function formatDate(payload: string, type?: string) {
    if (payload) {
      const date = new Date(payload)
      if (type === 'birthDate') {
        const dateFormatter = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        const dateMMDDYYYY = dateFormatter.format(date)
        const dateYYYYMMDD = dateMMDDYYYY.split('/')
        return `${dateYYYYMMDD[2]}-${dateYYYYMMDD[1]}-${dateYYYYMMDD[0]}`
      }
      const data = payload.split('T')[0].split('-')
      return `${data[1]}/${data[2]}/${data[0]}`
      // const dateFormatter = new Intl.DateTimeFormat("en-US");

      // return dateFormatter.format(date);
    }
  }
  function formatPhone(payload: string) {
    if (payload) {
      return payload
        .replace(/[^0-9]/g, '')
        .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
    }
    return ''
  }
  function formatSsnOrItin(payload: string) {
    return payload
      .replace(/[^0-9]/g, '')
      .replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3')
  }
  function formatEIN(payload: string) {
    return payload.replace(/[^0-9]/g, '').replace(/(\d{2})(\d{7})/, '$1-$2')
  }
  function formatZipCode(payload: string) {
    return payload.replace(/(\d{5})(\d{4})/, '$1-$2')
  }
  function removeEmptyValuesFromObj(obj: any) {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object') {
        removeEmptyValuesFromObj(obj[key])
      }
      const isEmpty = Object.keys(obj[key]).length === 0
      if (obj[key] === '' || (typeof obj[key] === 'object' && isEmpty)) {
        delete obj[key]
      }
    })
  }
  return {
    formatMoney,
    formatPhone,
    formatSsnOrItin,
    formatEIN,
    formatZipCode,
    removeEmptyValuesFromObj,
    formatDate,
  }
}
