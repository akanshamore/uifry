
import { Icon } from '../Icon'
import s from './Footer.module.scss'
import uiFryLogo from '../../assets/icons/uiFryLogo.svg'
import emailIcon from '../../assets/icons/emailIcon.svg'
import phoneIcon from '../../assets/icons/phoneIcon.svg'
const Footer = () => {

    return (
        <div className={s.container}>

            <div>
                <div className={s.row}>
                    <Icon src={uiFryLogo} size={'34px'} />
                    <span style={{ fontWeight: 'bold', fontSize: '30px' }}>uifry</span>
                </div>
                <div className={s.row}>
                    <Icon src={emailIcon} size={'24px'} />
                    <span >help@frybix.com</span>
                </div>
                <div className={s.row}>
                    <Icon src={phoneIcon} size={'24px'} />
                    <span >+1 234 456 678 89</span>
                </div>
            </div>

            <div className={s.column}>

                <span className={s.footerHeading}>Links</span>
                <span>Home</span>
                <span>About Us</span>
                <span>Bookings</span>
                <span>Blog</span>
            </div>
            <div className={s.column}>

                <span className={s.footerHeading}>Legal</span>
                <span>Terms of Use</span>
                <span>Privacy Policy</span>
                <span>Cookie Policy</span>

            </div>
            <div className={s.column}>

                <span className={s.footerHeading}>Product</span>
                <span>Take Tour</span>
                <span>Live Chat</span>
                <span>Reviews</span>

            </div>

            <div className={s.column}>

                <span className={s.footerHeading}>Newsletter</span>
                <span>Stay up to date</span>
                <div style={{ display: 'flex', maxHeight: '80px', padding: '10px', backgroundColor: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', }}>
                    < input placeholder='Your email' className={s.inputContainer} />
                    <div className={s.subscribeButton} ><p>Subscribe</p></div>
                </div>

            </div>

        </div >)
}


export default Footer