export default function useFormate() {
  function formatMoney(payload: string) {
    return Number(payload)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }
  function formatPhone(payload: string) {
    return payload.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
  }
  function formatSsnOrItin(payload: string) {
    return payload.replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3')
  }
  function formatEIN(payload: string) {
    return payload.replace(/(\d{2})(\d{7})/, '$1-$2')
  }
  function formatZipCode(payload: string) {
    return payload.replace(/(\d{5})(\d{4})/, '$1-$2')
  }

  return {
    formatMoney,
    formatPhone,
    formatSsnOrItin,
    formatEIN,
    formatZipCode,
  }
}
