import React from 'react'
import PropTypes from 'prop-types'
import styles from './Service.module.sass'
import { Add, Remove, RemoveCircleOutline, RingVolumeTwoTone } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import cn from 'classnames'
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
const Frame281 = (props) => {

  const { config, handleService, service } = props

  const { distance , step} = service;

  const valor = (id, value_km, value_base, value_helpers, value_hours) => {
    if (id == 3) {
      return distance < 6 ? 9 : distance * value_km;
    } else if (id == 1) {
      return value_base + distance * value_km + 1 * value_helpers;
    } else {
      return value_hours * 3 + 1 * value_helpers + 1 * value_hours;
    }
  };

  console.log(service);

  function updateService(
    id,
    servico,
    image,
    image2,
    preco,
    helpers,
    hours,
    value_helpers,
    value_hours
  ) {

    handleService({
      id,
      servico,
      image,
      image2,
      value: preco,
      preco: preco,
      helpers,
      hours,
      value_helpers,
      value_hours,
    });

  }

const [expanded, setExpanded] = React.useState([1, 2, 3]);
console.log(expanded[0])



  return (
    <>
      <div className={styles["frame281-frame28"]}>
        <div className={styles["frame281-frame27"]}>
          <span className={styles["frame281-text"]}>{props.text}</span>
        </div>
        <div className={styles["frame281-frame23"]}>
          <div className={styles["frame281-frame42"]}>
            <div className={styles["frame281-frame44"]}>
              <img
                src={props.uberscooter1_src}
                alt={props.uberscooter1_alt}
                className={styles["frame281-uberscooter1"]}
              />
              <img
                src={props.TukTuk_src}
                alt={props.TukTuk_alt}
                className={styles["frame281-tuk-tuk"]}
              />
              <img
                src={props.Comfort_src}
                alt={props.Comfort_alt}
                className={styles["frame281-comfort"]}
              />
              <img
                src={props.UberXL_src}
                alt={props.UberXL_alt}
                className={styles["frame281-uber-xl"]}
              />
            </div>
          </div>
        </div>
        <div className={styles["frame281-frame26"]}>
          <div className={styles["frame281-frame25"]}>
            <div className={styles["frame281-frame24"]}>
              <div className={styles["frame281-frame36"]}>
                <div className={styles["frame281-frame35"]}>
                  <span className={styles["frame281-text01"]}>
                    <span>Scooter</span>
                  </span>
                  <span className={styles["frame281-text03"]}>
                    <span>Rickshaw</span>
                  </span>
                  <span className={styles["frame281-text05"]}>
                    <span>Comfort</span>
                  </span>
                  <span className={styles["frame281-text07"]}>
                    <span>Uber XL</span>
                  </span>
                </div>
              </div>
              <div className={styles["frame281-frame40"]}>
                <div className={styles["frame281-frame38"]}>
                  <div className={styles["frame281-frame29"]}>
                    <div className={styles["frame281-icon-fillperson"]}>
                    <PersonAddSharpIcon/>

                  
                    </div>
             
                  </div>
                </div>
                <div className={styles["frame281-frame39"]}>
                  <div className={styles["frame281-frame30"]}>
                    <span className={styles["frame281-text09"]}>{props.text7}</span>
                    <span className={styles["frame281-text10"]}>{props.text8}</span>
                    <span className={styles["frame281-text11"]}>{props.text9}</span>
                    <span className={styles["frame281-text12"]}>{props.text10}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["frame281-frame37"]}>
              <div className={styles["frame281-frame32"]}>
                <span className={styles["frame281-text13"]}>{props.text2}</span>
                <span className={styles["frame281-text14"]}>
                  <span>$10,05</span>
                </span>
                <span className={styles["frame281-text16"]}>
                  <span>$24,14</span>
                </span>
                <span className={styles["frame281-text18"]}>
                  <span>$5O,38</span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles["frame281-frame1"]}>
          <button className={cn(styles["frame281-button1"], 'button-small')}>
              <Remove/>
         
            </button>
            <div className={styles["frame281-frame41"]}>
              <div className={styles["frame281-frame33"]}>
                <span className={styles["frame281-text20"]}>{props.text3}</span>
                <span className={styles["frame281-text21"]}>{props.text4}</span>
                <span className={styles["frame281-text22"]}>{props.text5}</span>
                <span className={styles["frame281-text23"]}>{props.text6}</span>
              </div>
            </div>
            <button className={cn(styles["frame281-button1"], 'button-small')}>
            <Add />
            </button>
          </div>
        </div>
        <div className={styles["frame281-frame22"]}>
          <div className={styles["frame281-frame21"]}>
            <div className={styles["frame281-frame20"]}>
              <img
                src={props.Capa1_src}
                alt={props.Capa1_alt}
                className={styles["frame281-capa1"]}
              />
              <span className={styles["frame281-text24"]}>{props.text1}</span>
            </div>
            <div className={styles["frame281-icon-outlinearrowiosright"]}>
            <ArrowForwardIosSharpIcon />
            </div>
          </div>
          <div className={styles["frame281-frame18"]}>
            <span className={styles["frame281-text25"]}>
              <span>
                Choose
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Scooter</span>
            </span>
          </div>
        </div>
      </div>
  
    </>
  )
}

Frame281.defaultProps = {
  text: 'Number of Passengers',
  uberscooter1_src: '/external/uberscooter12236-l24p-200h.png',
  uberscooter1_alt: 'uberscooter12236',
  TukTuk_src: '/external/tuktuk2239-nwwo-300w.png',
  TukTuk_alt: 'TukTuk2239',
  Comfort_src: '/external/comfort4356-80dq-300w.png',
  Comfort_alt: 'Comfort4356',
  UberXL_src: '/external/uberxl2242-e986-300w.png',
  UberXL_alt: 'UberXL2242',
  Capa1_src: '/external/capa14397-3pek.svg',
  Capa1_alt: 'Capa14397',
  text1: 'Cash',
  Mask_src: '/external/maski439-q8or.svg',
  Mask_alt: 'MaskI439',
  text2: '$5,22',
  Mask_src1: '/external/maski462-fttc.svg',
  Mask_alt1: 'MaskI462',
  text3: '1',
  text4: '2',
  text5: '3',
  text6: '4',
  Mask_src2: '/external/maski461-e6dg.svg',
  Mask_alt2: 'MaskI461',
  Base_src: '/external/basei439-e7u-200w.png',
  Base_alt: 'BaseI439',
  Base_src1: '/external/basei462-xiz4-200h.png',
  Base_alt1: 'BaseI462',
  Base_src2: '/external/basei461-syqp-200h.png',
  Base_alt2: 'BaseI461',
  text7: '1',
  text8: '2',
  text9: '3',
  text10: '4',
  Mask_src3: '/external/maski810-pynb.svg',
  Mask_alt3: 'MaskI810',
  Base_src3: '/external/basei810-t1sd-200w.png',
  Base_alt3: 'BaseI810',
  Base_src4: '/external/basei810-2ac-200h.png',
  Base_alt4: 'BaseI810',
}

Frame281.propTypes = {
  text: PropTypes.string,
  uberscooter1_src: PropTypes.string,
  uberscooter1_alt: PropTypes.string,
  TukTuk_src: PropTypes.string,
  TukTuk_alt: PropTypes.string,
  Comfort_src: PropTypes.string,
  Comfort_alt: PropTypes.string,
  UberXL_src: PropTypes.string,
  UberXL_alt: PropTypes.string,
  Capa1_src: PropTypes.string,
  Capa1_alt: PropTypes.string,
  text1: PropTypes.string,
  Mask_src: PropTypes.string,
  Mask_alt: PropTypes.string,
  text2: PropTypes.string,
  Mask_src1: PropTypes.string,
  Mask_alt1: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  Mask_src2: PropTypes.string,
  Mask_alt2: PropTypes.string,
  Base_src: PropTypes.string,
  Base_alt: PropTypes.string,
  Base_src1: PropTypes.string,
  Base_alt1: PropTypes.string,
  Base_src2: PropTypes.string,
  Base_alt2: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  Mask_src3: PropTypes.string,
  Mask_alt3: PropTypes.string,
  Base_src3: PropTypes.string,
  Base_alt3: PropTypes.string,
  Base_src4: PropTypes.string,
  Base_alt4: PropTypes.string,
}

export default Frame281
