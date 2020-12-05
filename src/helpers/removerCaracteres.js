const removerAcento = (frase) => {
    const tratamentoFrase = frase.replace(/[^a-zA-Zs]/g,"" )
    return tratamentoFrase
}
