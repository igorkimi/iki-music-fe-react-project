import VideoHorizontalCard from "../../components/VideoHorizontalCard";
import "./styles.css";

const Production = () => {
  return (
    <div className="container-horizontal-cards">
    <VideoHorizontalCard 
      title="Kings of Convenience - Boat Behind" 
      url="https://www.youtube.com/embed/qwt3FW3m0ug"
      description="Kings Of Convenience é um duo folk-pop indie da Noruega. Composto por Erlend Øye e Eirik Glambek Bøe. O grupo musical é famoso por suas melodias de violão e sua influência da bossa nova brasileira." 
    />
    <VideoHorizontalCard 
      title="David Bowie - Space Oddity" 
      url="https://www.youtube.com/embed/aJJP6c7QMRY"
      description="Space Oddity é uma canção escrita e tocada por David Bowie e lançada como um single em 1969. Fala sobre o lançamento de Major Tom, um astronauta fictício que se torna deprimido durante a missão no espaço sideral." 
    />
    </div>
  );
};

export default Production;
