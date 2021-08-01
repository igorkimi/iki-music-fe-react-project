import VideoHorizontalCard from "../../components/VideoHorizontalCard";

import "./styles.css";

const Acoustic = () => {
  return (
    <div className="container-horizontal-cards">
      <VideoHorizontalCard 
        title="Xenogears - Small Two of Pieces" 
        url="https://www.youtube.com/embed/MRdpAk1FcJs"
        description="Small Two of Pieces é uma música de Xenogears. É faixa da trilha sonora original de Xenogears , tendo sido originalmente composta por Yasunori Mitsuda e cantada por Joanne Hogg." 
      />
      <VideoHorizontalCard 
        title="The Civil Wars - To Whom It May Concern" 
        url="https://www.youtube.com/embed/UBRe2dvhV1o"
        description="The Civil Wars é um duo musical americano composto pelos cantores e compositores Joy Williams e John Paul White. Depois de lançar um álbum ao vivo e um EP com quatro músicas, o seu álbum Barton Hollow foi lançado em 2011." 
      />
      <VideoHorizontalCard 
        title="A-ha - Take On Me" 
        url="https://www.youtube.com/embed/FU6wV3NXSPM"
        description="Take on Me é um single da banda norueguesa A-ha lançado no ano de 1985. Escrita pelos próprios membros da banda, a canção foi produzida por Alan Tarney." 
      />
      <VideoHorizontalCard 
        title="Told Slant - Tsunami" 
        url="https://www.youtube.com/embed/mt6nJBL8Cwo"
        description="Told Slant é uma banda indie do Brooklyn . É liderado por Felix Walworth. Walworth também está envolvido em outros projetos, incluindo Gabby's World , Florist e Bellows." 
      />
    </div>
  );
};

export default Acoustic;
