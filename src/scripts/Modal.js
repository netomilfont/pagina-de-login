class Modal {
    static modalTemplate (form) {
        const body = document.querySelector("body")
        const modal = document.createElement("div")
        const divModalBackground = document.createElement("div")

        modal.classList.add("modal")
        divModalBackground.classList.add("modal__background")

        modal.append(divModalBackground, form)
        body.append(modal)
    }

    static recoverPassword () {
        const form = document.createElement("form")
        const divModalHeader = document.createElement("div")
        const modalTitle = document.createElement("h3")
        const iptCloseModal = document.createElement("input")
        const divModalContent = document.createElement("div")
        const pRecPassword = document.createElement("p")
        const inputEmail = document.createElement("input")
        const btnLogin = document.createElement("button")

        iptCloseModal.type = "button"
        modalTitle.innerText = "Recuperar Senha"
        iptCloseModal.value = "x"
        pRecPassword.innerText = "Digite o seu email abaixo para receber uma mensagem de verificação:"
        inputEmail.placeholder = "Escreva seu email aqui..."
        btnLogin.type = "submit"
        btnLogin.innerText = "Enviar"
        divModalHeader.classList.add("modal__header")
        form.classList.add("modal__content")
        iptCloseModal.classList.add("hide")

        form.append(divModalHeader, divModalContent)
        divModalHeader.append(modalTitle, iptCloseModal)
        divModalContent.append(pRecPassword, inputEmail, btnLogin)

        return form

    }

    static showModal () {
        const spanShowModal = document.querySelector(".show")

        spanShowModal.addEventListener("click", () => {

            const formRecoverPassword = Modal.recoverPassword()
            Modal.modalTemplate(formRecoverPassword)
        })
    }

    static hiddenModal () {
        const body = document.querySelector("body")

        body.addEventListener("click", (event) => {
            const modal = document.querySelector(".modal")

            if(event.target.tagName == "INPUT" && event.target.type == "button") {
                
                modal.classList.toggle("hidden")
                
                body.removeChild(modal)
            }
        })
    }
}
Modal.showModal()
Modal.hiddenModal()