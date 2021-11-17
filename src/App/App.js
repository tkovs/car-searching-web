import Card from "../Card";
import Paragraph from "../Paragraph";
import "../styles.css";

const App = () => (
  <div className="App">
    <div className="container">
      <Paragraph texto={"Olá"} />
      <Paragraph texto={"Tudo bem?"} />
      <Paragraph texto={"Tchau"} />
    </div>
    <div className="container">
      <div className="row">
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
      </div>
      <div className="row">
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
      </div>
      <div className="row">
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
      </div>
      <div className="row">
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
        <Card src={"https://artprojectsforkids.org/wp-content/uploads/2021/01/Rubber-Ducky.jpeg"} />
      </div>
    </div>
  </div>
);

export default App;
