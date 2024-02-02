import { extendTheme, } from '@chakra-ui/react'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,

}

export const theme = extendTheme({
    config, shadows: {
        purple: '0 10px 25px -3px #285E61'
    }
})

//OK