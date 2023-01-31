export const getNumberWithComma = (number) => {
    return `₹${number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}