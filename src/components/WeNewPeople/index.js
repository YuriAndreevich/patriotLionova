import React from "react";
import BackArrow from "components/backarrow";

import { motion } from "framer-motion"

import "./WeNewPeople.scss";
import "../../App.scss"

function WeNewPeople() {
  return (
    <div

      className="WeNewPeople">
      <div className="content">
        <BackArrow />

        <div className="WeNewPeople-agl">
          <p>«…И уже через мгновение уходящий год –</p>
          <p>Год исторической памяти –</p>
          <p>тоже станет частью прошлого, </p>
          <p> а его события заполнят очередную главу</p>
          <p>летописи жизни белорусского народа….</p>
          <p>Он стал звеном и фундаментом</p>
          <p> для логического продолжения ….</p>
          <p>
            <strong> Мы за мир именно потому, что потеряли </strong>
          </p>
          <p>
            <strong>каждого третьего только в последней войне. </strong>
          </p>
          <p>А.Г.Лукашенко</p>
        </div>
        <motion.div className="WeNewPeople-stix"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          duration='10'
          transition={{ duration: 2 }}
        >
          <p className="WeNewPeople-stix-left">   <strong>Мы – новое поколение!          </strong>     </p>
          <p className="WeNewPeople-stix-left">   <strong>Мы никогда не забудем          </strong>   </p>
          <p className="WeNewPeople-stix-left">   <strong>ваших отважных лиц!            </strong> </p>
          <p className="WeNewPeople-stix-center"> <strong>Мы - новое поколение,          </strong>   </p>
          <p className="WeNewPeople-stix-center"> <strong>Мы выдвигаем свои решения!     </strong>   </p>
          <p className="WeNewPeople-stix-right">  <strong>Мы - новое поколение,          </strong>  </p>
          <p className="WeNewPeople-stix-right">  <strong>Мы прорубаем свое течение!     </strong>     </p>
          <p className="WeNewPeople-stix-left">   <strong>Мы – новое поколение!          </strong> </p>
          <p className="WeNewPeople-stix-left">   <strong>Мы будущего звено!             </strong>     </p>
          <p className="WeNewPeople-stix-center"> <strong>Мы открыватели новых судеб,    </strong>         </p>
          <p className="WeNewPeople-stix-center"> <strong>Новых побед и больших границ!  </strong>           </p>
          <p className="WeNewPeople-stix-right">  <strong>Мы верны своей отчизне,        </strong>                     </p>
          <p className="WeNewPeople-stix-right">  <strong>мы-времени новых рук!          </strong>     </p>
          <p className="WeNewPeople-stix-left">   <strong>Ведь мы иное поколенье,        </strong>                 </p>
          <p className="WeNewPeople-stix-left">   <strong>Мы будущего флаг!              </strong>           </p>
        </motion.div>
      </div>
    </div>
  );
}

export default WeNewPeople;
