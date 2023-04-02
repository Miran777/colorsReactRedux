function updateColorsHash(colors = []) {
    document.location.hash = colors.map(col => col.color.substring(1)).join('-')
}

export default updateColorsHash