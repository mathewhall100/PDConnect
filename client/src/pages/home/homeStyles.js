
export const homeStyles = (theme) => ({
    homepageContainer : {
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "40px 0 60px 0",
        [theme.breakpoints.down('sm')]: {
            paddingTop: '50px',
            paddingBottom : '50px',
        },
    },
})
