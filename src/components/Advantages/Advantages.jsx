
import s from './Advantages.module.scss'
import advantagesBG1 from '../../assets/images/advantagesBG1.svg'
import advantagesBG2 from '../../assets/images/advantagesBG2.svg'
import bellIcon from '../../assets/icons/bellIcon.svg'
import diamondIcon from '../../assets/icons/diamondIcon.svg'
import { Icon } from '../Icon'





const Advantages = () => {

    return (<div >

        <div className={s.container}>
            <div>


                <div className={s.titleContainer}>
                    <span className={s.redText}>ADVANTAGES</span>

                    <span className={s.heading}> why choose Uifry?</span>
                </div>


                <div className={s.advantageRow}>
                    <Icon src={bellIcon} size={'24px'} />
                    <p style={{ fontSize: '28px' }}>clever notifications</p>
                </div>



                <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>


            </div>


            <div>
                <img src={advantagesBG1} />
            </div>
        </div>

        <div className={s.container}>


            <div>
                <img src={advantagesBG2} />
            </div>
            <div>



                <div className={s.advantageRow}>
                    <Icon src={diamondIcon} size={'24px'} />
                    <p style={{ fontSize: '28px' }} >fully customizable</p>
                </div>




                <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>


            </div>

        </div>


    </div >)
}

export default Advantages