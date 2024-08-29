const formulario = document.querySelector('#formulario')
const tarefa = document.querySelector('#tarefa')
const resultado = document.querySelector('#resultado')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const card = document.createElement('div')
    const tarefa_nova = document.createElement('h2')
    tarefa_nova.textContent = tarefa.value

    const remover = document.createElement('button')
    remover.textContent = 'Remover'
    remover.addEventListener('click', () => {
        card.remove()
    })

    const editar = document.createElement('button')
    editar.textContent = 'Editar'
    editar.addEventListener('click', () => {
        const tarefa_editada = document.createElement('input')
        tarefa_editada.type = 'text'
        tarefa_editada.value = tarefa_nova.textContent

        const salvar = document.createElement('button')
        salvar.textContent = 'Salvar'

        salvar.addEventListener('click', () => {
            tarefa_nova.textContent = tarefa_editada.value
            card.replaceChild(tarefa_nova, tarefa_editada)
            salvar.remove()
        })

        card.replaceChild(tarefa_editada, tarefa_nova)
        card.appendChild(salvar)
    })

    card.append(tarefa_nova, remover, editar)
    resultado.append(card)

    tarefa.value = ''
    tarefa.focus()
})