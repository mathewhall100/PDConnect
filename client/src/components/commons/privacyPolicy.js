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

class PrivacyPolicy extends PureComponent  {

    render () {   

        const { classes } = this.props
        
        return (
            <div className={classes.textStyle}>

                <h1 className={classes.centerText}>
                    PD Connect
                </h1>
                <br />

                <h4 className={classes.boldText} >
                    Privacy Policy
                </h4>
                <br />
                <p>
                    Last updated: 20th November 2018
                </p>
                <p>
                    PDConnect.LLC (“we”) operates HTTPS://www.pdconnect.com (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.
                </p>
                <p>
                    By using the Site, you agree to the collection and use of information in accordance with this policy.
                </p>
    
                <h4>
                     Our Responsibilities
                </h4>
                <ul style={{padding: "20px"}}>
                    <li>
                        We are required by law to maintain the privacy and security of your protected health information.
                    </li>
                    <li>
                        We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.
                    </li>
                    <li>
                        We must follow the duties and privacy practices described in this notice and give you a copy of it.
                    </li>
                    <li>
                        We will not use or share your information other than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing if you change your mind.
                    </li>
                    <li>
                        Federal and state laws may place additional limitations on disclosure of your health information related to drug or alcohol abuse treatment programs, sexually transmitted diseases, genetic information, or mental health treatment programs. When required by law, we will obtain your authorization before releasing this type of information.
                    </li>
                </ul>
               
                <p>
                    For more information see: http://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html.
                </p>

                <h4>
                    Information Collection And Use
                </h4>
                <p>
                    While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information"). 
                </p>
            
                <h4>
                    Log Data
                </h4>
                <p>
                    Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").
                </p>
                <p>
                    This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics. In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this data
                </p>
                    
                <h4>
                    Communications
                </h4>
                <p>
                    We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that are specifically for you and based on the information you give us will be tailored specifically for you. 
                </p>
              
                <h4>
                    Cookies
                </h4>
                <p>
                    Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive
                </p>
                <p>
                    Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
                </p>

                <h4>
                    Security
                </h4>
                <p>
                    The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                </p>

                <h4>
                    Changes To This Privacy Policy
                </h4>
                <p>
                    This Privacy Policy is effective as of 20th November 2018 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                </p>
                <p>
                     We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
                </p>
                <p>
                    If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.
                    </p>
                <h4>
                    Contact Us
                </h4>
                <p>
                    If you have any questions about these PrivacyPolicy, please contact us.
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

PrivacyPolicy = withStyles(styles)(PrivacyPolicy)
export default PrivacyPolicy;