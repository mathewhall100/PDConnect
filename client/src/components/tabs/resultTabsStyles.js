// stylesheet for common styles of result pages tab components

import { PRIMARY_COLOR } from '../../themes.js'

export const resultTabsStylesheet = () => ({

    tabBar: {
        position: "relative",
        top: "-10px",
        fontSize: "16px",
        fontWeight: "bold"
    },
    tabButtonLeft: {
        padding: "12px 34px 12px 20px",
        borderTop: "2px solid lightgrey",
        borderLeft: "2px solid lightgrey",
        borderRight: "1px solid lightgrey",
        borderBottom: "none",
        borderRadius: "5px 5px 0 0",
        backgroundColor: "white",
        position: "relative",
        top: "1px",
        '&:hover': {
            cursor: "pointer",
            color: PRIMARY_COLOR
        }
    },
    tabButtonSelected: {
        padding: "12px 34px 12px 20px",
        borderTop: "2px solid lightgrey",
        borderLeft: "2px solid lightgrey",
        borderRight: "2px solid lightgrey",
        borderBottom: "2px solid #F8F8F8",
        borderRadius: "5px 5px 0 0",
        backgroundColor: "#F8F8F8",
        color: PRIMARY_COLOR,
        position: "relative",
        top: "1px",
        '&:hover': {
            cursor: "pointer"
        }
    },
    badge: {
        position: "relative",
        top: "-10px",
        left: "17px"
    }

})