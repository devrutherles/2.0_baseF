import React, { useState } from "react";

import DatePicker from "react-datepicker";
import Icon from "../Icon";
import Item from "./Item";
import cn from "classnames";
import { format } from "date-fns";
import styles from "./Schedule.module.sass";

const Schedule = ({
  className,
  startDate,
  setStartDate,
  startTime,
  setStartTime,
  PostAgendar,
  PostServicos
}) => {
  const [visibleDate, setVisibleDate] = useState(false);
  const [visibleTime, setVisibleTime] = useState(false);
  const [agendar,setAgendar] = useState(false)
  const handleClick = () => {
    setStartDate(null);
    setTimeout(() => setStartDate(new Date()), 10);
    setVisibleDate(false);
  };

  return (
    <div className={cn(styles.schedule, className)}>
      <div className={cn("title-red", styles.title)}>Agendar serviço</div>
      <div className={styles.note}>
       Escolha a data e hora do serviço.
      </div>
      <div className={styles.list}>
        <Item
          className={styles.item}
          category="Data"
          icon="calendar"
          value={startDate && format(startDate, "dd / MM / yy")}
          visible={visibleDate}
          setVisible={setVisibleDate}
        >
          <div className={styles.date}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormatCalendar={"dd / mm / yy"}
              inline
            />
            <div className={styles.foot}>
              <button
                className={cn("button-stroke button-small", styles.button)}
                onClick={() => handleClick()}
              >
                Cancelar
              </button>
              <button
                className={cn("button-small", styles.button)}
                onClick={() => {setVisibleDate(false);
           PostServicos()
                
                }
                  
                
                
                }
              >
                Confirmar
              </button>
            </div>
          </div>
        </Item>
        <Item
          className={styles.item}
          category="Hora"
          icon="clock"
          value={startTime && format(startTime, "h:mm ")}
          visible={visibleTime}
          setVisible={setVisibleTime}
        >
          <div className={styles.time}>
            <div className={styles.top}>
              <div className={styles.subtitle}>
                {startTime && format(startTime, "h:mm ")}
              </div>
              <button
                className={styles.close}
                onClick={() => setVisibleTime(false)}
              >
                <Icon name="close" size="20" />
              </button>
            </div>
            <DatePicker
              selected={startTime}
              onChange={(date) => setStartTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption={false}
              dateFormat="h:mm aa"
              inline
            />
          </div>
        </Item>
      </div>
      <div className={styles.btns}>
        <button onClick={()=>{PostAgendar({data:startDate,hora:startTime,agendar:agendar})
      
  
        PostServicos()
             
             
      }} className={cn("button", styles.button)}>Finalizar</button>
      </div>
    </div>
  );
};

export default Schedule;
