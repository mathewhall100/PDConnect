// Styles for user page

import { MAXWIDTH, MINHEIGHT, APP_MARGIN, APP_PADDING} from '../../themes'

export const userStyles = () => ({
    root: {
        maxWidth: MAXWIDTH,
        minHeight : MINHEIGHT,
        margin: APP_MARGIN,
        padding: APP_PADDING
    },
    componentBox : {
        marginTop: "60px",
        borderLeft: "1px solid rgb(191, 144, 0, 0.5)",
        paddingLeft: "30px",
        fontFamily : 'Muli'
    },
})