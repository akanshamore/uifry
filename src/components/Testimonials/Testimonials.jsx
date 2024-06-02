
import s from './Testimonials.module.scss'
import testimonialBG from '../../assets/images/testimonialBG.svg'
import testimonialBG2 from '../../assets/images/testimonialBG2.svg'

const Testimonials = () => {

    return (<div className={s.container}>


        <div className={s.titleContainer}>
            <span>TESTIMONIAL</span>
            <span className={s.heading}>
                what our users say about us?
            </span>
        </div>

        <div className={s.content}>


            <div>
                <img src={testimonialBG} />
            </div>
            <div>
                <span style={{ fontSize: '28px' }}>the best financial accounting app ever!</span>
                <div style={{ marginTop: '52px' }}>
                    <p>C“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
                </div>

                <div style={{ marginTop: '80px' }}>
                    <img src={testimonialBG2} />
                </div>

                <div style={{ marginTop: '24px' }}>
                    <span>Nick Jonas</span>
                </div>
            </div>



        </div>




    </div >)
}

export default Testimonials