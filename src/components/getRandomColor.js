export const getRandomColor = () => {
    const hexCode = '123456789ABCDEF'
    let color = ''
    
    for (let i = 0; i < 6; i++) {
      color += hexCode[Math.floor(Math.random() * hexCode.length)]
    }
    return '#' + color
  }