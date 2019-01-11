// Styles for user page

import { MAXWIDTH, MINHEIGHT } from '../../themes'

export const userStyles = () => ({
    root: {
        maxWidth: MAXWIDTH,
        minHeight : MINHEIGHT,
        margin: 'auto',
        padding: "0 20px 40px 40px"
    },
    componentBox : {
        marginTop: "60px",
        borderLeft: "1px solid rgb(191, 144, 0, 0.5)",
        paddingLeft: "30px",
        fontFamily : 'Muli'
    },
})