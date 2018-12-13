import { CountryRegister } from './countryRegister'

export const RegisterUtil = ( function() {
        return {
            add: (name) => {
                const register = CountryRegister.instance()
                const countryExists = register.hasCountry(name)
            
                if (!countryExists && name && name.length > 0) {
                    register.addToRegister(name)
                }
            }
        }
    }
)()