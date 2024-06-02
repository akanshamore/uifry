
import s from './Features.module.scss'
import featuresBG from '../../assets/images/featuresBG.svg'
import diamondIcon from '../../assets/icons/diamondIcon.svg'
import cuboidIcon from '../../assets/icons/cuboidIcon.svg'
import hexaIcon from '../../assets/icons/hexaIcon.svg'
import { Icon } from '../Icon'

const Features = () => {

    return (<div className={s.container}>
        <div>
            <img src={featuresBG} />
        </div>

        <div>


            <div className={s.titleContainer}>
                <span className={s.redText}>FEATURES</span>

                <span className={s.heading}>uifry premium</span>
            </div>

            <div className={s.featuresRow}>
                <Icon src={diamondIcon} size={'24px'} />
                <span >budgeting intervals</span>
            </div>

            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>

            <div className={s.featuresRow}>
                <Icon src={hexaIcon} size={'24px'} />
                <span >budgeting intervals</span>
            </div>
            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <div className={s.featuresRow}>
                <Icon src={cuboidIcon} size={'24px'} />
                <span >budgeting intervals</span>
            </div>
            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>


        </div>




    </div>)
}

export default Features