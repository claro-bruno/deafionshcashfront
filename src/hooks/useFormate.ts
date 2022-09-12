export default function useFormate() {
  function formatMoney(payload: number) {
    return payload.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }
  function formatPhone(payload: string) {
    return payload
      .replace(/[^0-9]/g, '')
      .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
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
  }
}
