import './index.scss'
import { Trans, useTranslation } from 'react-i18next';
function Discover(){
    let [t,i18n]=useTranslation();
    return(
        <div className={`discover-section my-5  ${i18n.language==='ar' ? 'rtl fw-bolder' : 'ltr'}`}>
        <div className="header my-5">

        <p className='line'></p>
        <h4><Trans>Discover RealEstate trends in market</Trans> </h4>
        <p >
        <Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans>  
        </p>

        </div>
        <div className="row">
            <div className="col-12  col-md-3">

                <p className='number'>01.</p>
                <div className="fw-bold mb-3">
                <Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans>
                </div>
                <p><Trans>user</Trans>1</p>

            </div>
            <div className="col-12  col-md-3">
            
            <p className='number'>02.</p>
                <div className="fw-bold mb-3">
                <Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans>
                </div>
                <p><Trans>user</Trans>2</p>

            </div>
            <div className="col-12  col-md-3">
                <p className='number'>03.</p>
                <div className="fw-bold mb-3">
                <Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans>
                </div>
                <p><Trans>user</Trans>3</p>

            </div>
            <div className="col-12  col-md-3">
            <p className='number'>04.</p>
                <div className="fw-bold mb-3">
                <Trans>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Trans>
                </div>
                <p><Trans>user</Trans>4</p>
                
            </div>
        </div>
    
    </div>
    )
}


export default Discover;