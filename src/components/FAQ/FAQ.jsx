
import s from './FAQ.module.scss'


const FAQ = () => {

    return (<div className={s.container}>

        <div className={s.titleContainer}>
            <span className={s.redText}>FAQ</span>
            <span className={s.heading}>Frequently asked questions</span>
        </div>


        <div className={s.content}>
            <div>

                <div className={s.redFaq}>
                    <h5>
                        the best financial accounting app ever!
                    </h5>

                    <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>

                </div>
                <div className={s.faq}>
                    <h5>
                        the best financial accounting app ever!
                    </h5>

                    <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>

                </div>
                <div className={s.redFaq}>
                    <h5>
                        the best financial accounting app ever!
                    </h5>

                    <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>

                </div>




            </div>
            <div style={{ padding: '10px' }} />
            <div>

                <div className={s.faq}>
                    <h5>
                        the best financial accounting app ever!
                    </h5>

                    <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>

                </div>
                <div className={s.redFaq}>
                    <h5>
                        the best financial accounting app ever!
                    </h5>

                    <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>

                </div>
                <div className={s.faq}>
                    <h5>
                        the best financial accounting app ever!
                    </h5>

                    <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>

                </div>



            </div>
        </div>




    </div>)
}

export default FAQ