import "./styles.css";

const Contact = () => {
  return (
    <div className="container-concact">
      <a target="_blank" href="https://www.facebook.com/igorkimieciki">
        <img alt="Facebook" src="https://image.flaticon.com/icons/png/512/124/124010.png" ></img>
      </a>
      <a target="_blank" href="https://www.instagram.com/igorkimi/">
        <img alt="Instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" ></img>
      </a>
      <a target="_blank" href="https://br.linkedin.com/in/igor-k">
        <img alt="LinkedIn" src="https://image.flaticon.com/icons/png/512/174/174857.png" ></img>
      </a>
      <a target="_blank" href="https://www.youtube.com/igorkimieciki">
        <img alt="YouTube" src="data:image/png;base64,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" ></img>
      </a>
    </div>
  );
};

export default Contact;
