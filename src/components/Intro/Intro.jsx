
import s from './Intro.module.scss'
import introPhoneLogo from '../../assets/images/introPhoneLogo.svg'
import zigZag from '../../assets/images/zigZag.svg'

import arrowIcon from '../../assets/icons/arrowIcon.svg'
import playIcon from '../../assets/icons/playIcon.svg'
import { Icon } from '../Icon'

const Intro = () => {

    return (<div className={s.container}>

        <div className={s.content}>

            <div className={s.titleContainer}>


                <span className={s.heading}> make the best financial decisions</span>
            </div>


            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>


            <div className={s.buttonsContainer}>
                <div className={s.button}>
                    <span>Get Started</span>
                    <Icon src={arrowIcon} size={'14px'} />
                </div>
                <div className={s.watchButton}>
                    <Icon src={playIcon} size={'24px'} />
                    <span>Watch Video </span>
                </div></div>


            <img src={zigZag} />

        </div>



        <div>
            <img src={introPhoneLogo} />
        </div>

    </div>)
}

export default Intro