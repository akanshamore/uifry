import { Icon } from '../Icon'
import s from './Header.module.scss'
import uiFryLogo from '../../assets/icons/uiFryLogo.svg'

import navBar from '../../assets/images/navBar.svg'
export const Header = () => {

    return (<nav className={s.container}>


        <div className={s.linksHeadingContainer}>
            <div className={s.heading}>
                <Icon src={uiFryLogo} size={'48px'} />
                <span style={{ fontWeight: 'bold', fontSize: '44px' }}>uifry</span>
            </div>

            <div className={s.links}>
                <span>Home</span>
                <span>About Us</span>
                <span>Pricing</span>
                <span>Features</span>
            </div>
        </div>





        <div className={s.downloadButton}>
            <span>DOWNLOAD</span>
        </div>



    </nav>)
}