import Adicionais from "./Adicionais";

import Modal from "../Modal";
import Informacoes from "./Informacoes";
import Panel from "./Panel";
import Schedule from "../Schedule";
import styles from "./NewProduct.module.sass";
import { useContext, useState } from "react";
import useHandleConfig from "@/hooks/useConfig";
import { useSelector } from "react-redux";
import { createServico } from "@/service/servicos";
import { AuthContext } from "@/context/auth";

const NewProduct = () => {
  const service = useSelector((state) => state.service.service);
  const { user } = useContext(AuthContext);
  const { config } = useHandleConfig();

  if (!service || !config) return;

  const [visibleModal, setVisibleModal] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [agendar, setAgendar] = useState({ agendar: false, data: 0, hora: 0 });
  const [telefone, setTelefone] = useState("");

  const handlerOrder = async () => {
    if (!detalhes.norigin || !detalhes.ndestino) {
      let errorMsg = ", Preencha todos os campos para continuar: ";
      if (!detalhes.norigin) errorMsg += ", número de origem";
      if (!detalhes.ndestino) errorMsg += ", número de destino";

      console.warn("Atenção, ", errorMsg);
      setLoad(false);

      return;
    }
    const data = {
      endereco_origem: service.origin,
      endereco_destino: service.destination,
      servico: service.servico,
      frete_valor: parseFloat(service.preco),
      numero_origem: 9,
      numero_destino: 9,
      detalhes_servico: "kiik",
      status: "pendente",
      hours: service.hours,
      helpers: parseFloat(service.helpers),
      user_id: user?.$id,
      distancia: parseFloat(service.distance),
      mounters: 0,
      role: user?.id,
      book: false,
      rota: "",
      reference: "",
      user: [
        JSON.stringify({
          avatar: user?.prefs?.avatar,
          name: user?.name,
          phone: user?.phone,
          email: user?.email,
          $id: user?.$id,
        }),
      ],
      complemento: "Casa",

      foto_servico: service.image,
    };
    try {
      const response = await createServico(data, user.$id);
      if (response) {
        console.warn("Sucesso", "Pedido realizado com sucesso!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>
          <Informacoes PostDetalhes={setAgendar} className={styles.card} />

          {service.id != 3 && (
            <Adicionais
              className={styles.card}
              config={config}
              service={service}
            />
          )}
        </div>
      </div>

      <Panel setVisibleSchedule={setVisibleModal} PostServicos={handlerOrder} />

      <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
        <Schedule
          startDate={startDate}
          setStartDate={setStartDate}
          startTime={startTime}
          setStartTime={setStartTime}
          PostServicos={handlerOrder}
        />
      </Modal>
    </>
  );
};

export default NewProduct;
