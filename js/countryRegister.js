export const CountryRegister = (function () {
    let register

    function create() {
        register = []
    }

    return {
        instance: function instance() {
            if (!register) {
                create()
            }
            return this
        },

        addToRegister: (name) => {
            if (register) {
                register.push(name)
            }
        },

        remove: (name) => {
            const index = register.indexOf(name)
            if (index !== -1) {
                register.splice(index,1)
            }
        },

        register: () => {
            return register
        },

        reset: () => {
            create()
        },

        hasCountry: (name) => {
            register.includes(name)
        }
    }
})()