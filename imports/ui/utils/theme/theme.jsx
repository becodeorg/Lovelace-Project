import { createMuiTheme } from '@material-ui/core/styles'
import { defaultFont } from '../../style/constant'

export const theme = createMuiTheme({
    palette: {
        common: {
            black: '#000',
            white: '#fff',
        },
        background: {
            paper: '#fff',
            default: '#fafafa',
        },
        primary: {
            light: 'rgba(54, 198, 212, 0.44)',
            main: 'rgba(54, 198, 212, 1)',
            dark: 'rgba(18, 156, 169, 1)',
            contrastText: '#fff',
        },
        secondary: {
            light: 'rgba(75, 96, 110, 1)',
            main: 'rgba(19, 35, 46, 1)',
            dark: 'rgba(5, 12, 18, 1)',
            contrastText: '#fff',
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
        },
        typography: {
            useNextVariants: true,
            fontFamily: defaultFont.fontFamilyArray.join(','),
        },
    },
    typography: {
        useNextVariants: true,
    },
})
