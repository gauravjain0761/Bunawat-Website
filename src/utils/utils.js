export const getNumberWithComma = (number) => {
    return `₹ ${number?.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) ?? number}`
}