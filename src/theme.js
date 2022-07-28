import { createTheme } from '@mui/material'

const theme = createTheme({
    palette:{
        primary: {
            main: '#F77E23'
        },
        secondary: {
            main: '#2F327D'
        },
        success: {
            main: '#2EBB5E'
        },
        white: {
            light: '#ffffff',
            main: '#ffffff',
            dark: '#ffffff',
            contrastText: '#ffffff',
        }
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(',')
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: {
                  borderRadius: 9999,
                  textTransform: 'capitalize',
                  paddingLeft: 20,
                  paddingRight: 20,
                  fontWeight: 'normal'
                },
                text: {
                    color: '#252641'
                },
                contained: {
                    color: 'white'
                }
              },
        },
      },
})

export default theme