import { createMuiTheme } from '@material-ui/core/styles/'
import { grayScale, defaultColor, darkColor} from './colors'

const theme = createMuiTheme ({
    palette: {
        primary: {
            main: defaultColor,
            contrastText: grayScale
        },
        text: {
            primary: darkColor
        }
    }
})

export default theme