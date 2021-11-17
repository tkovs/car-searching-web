const Paragraph = (props) => {
  return (
    <p className="paragrafo" block>
      <span>Isto é um parágrafo</span>
      {props.texto}
    </p>
  );
};

export default Paragraph;
