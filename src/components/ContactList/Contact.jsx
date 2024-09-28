import { HiUser } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import s from "./Contact.module.css";

const Contact = ({ name, number, id, handleDeletContact }) => {
  return (
    <div className={s.item}>
      <div className={s.wrapper}>
        <div className={s.text}>
          <HiUser className={s.icon} />
          <p>{name}</p>
        </div>

        <div className={s.text}>
          <HiPhone className={s.icon} />
          <p>{number}</p>
        </div>
      </div>

      <button onClick={() => handleDeletContact(id)}>Delete</button>
    </div>
  );
};

export default Contact;
