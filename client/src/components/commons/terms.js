import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
    textStyle: {
        color: "black", 
                fontFamily: "times",
                padding: "10px",
                fontSize: "17px"
    },
    centerText: {
        textAlign: "center"
    },
    boldText: {
        fontweight: "bold"
    }
})

class Terms extends PureComponent  {

    render () {   

        const { classes } = this.props
        
        return (
            <div  className={classes.textStyle} >

                <h1 className={classes.centerText}>
                    PD Connect
                </h1>
                <br />
                <h4 className={classes.boldText}>
            
                    Terms and Conditions ("Terms")
                </h4>   
                <br />
                <p>
                    Last updated: 27th November 2018 
                </p>
                <p>
                    Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using httppdconnect website and the pdconnect mobile application (the "Service") operated by PDConnect.LLC.
                </p>
                <p>
                    Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
                </p>
                <p>
                    By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                </p>
                <h4>
                    Content
                </h4>
                <p>
                    Our service provides healthcare information and resources for patients with Parkinson disease, their families and carers. We make every effort to provide information that is true and accurate at the time it is provided and that is impartial and without bias as far as possible. 
                </p>
                <h4>
                    Disclaimer
                </h4>
                <p>
                    Our service makes available information intended for personal use only. Some of the information is personalized to your specific circumstances using information you have provided to us and may not be applicable to other individuals. 
                </p>
                <p>
                    The information provided in no way acts as a recommendation for any medicine or medical service and in no way replaces medical advice from a qualified healthcare professional. 
                </p>
                <h4>
                    Links To Other Web Sites
                </h4>
                <p>
                    Our Service may contain links to third-party web sites or services that are not owned or controlled by PDConnect.LLC.
                </p>
                <p>
                    PDConnect.LLC. has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that PDConnect.LLC. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                </p>
                <h4>
                    Changes
                </h4>

                <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                <h4>
                 Contact Us
                </h4>
                <p>
                    If you have any questions about these Terms, please contact us.
                </p>
                <p>
                    PDConnect.<br />
                    Address< br />
                    Phone.<br />
                    Email.<br />
                </p>

            </div>
        )
    }
}

Terms = withStyles(styles)(Terms)
export default Terms;
