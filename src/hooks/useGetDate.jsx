export const useGetDate = () => {
    const date = new Date()
    const months = [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ]

    const questionDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

    return { questionDate }
}
