import Cloudy from '../images/Cloudy.png';
import fog from '../images/fog.png'
import Partly_cloudy from '../images/Partly_cloudy.png'
import rainy from '../images/rainy.png'
import sonny from '../images/sonny.png'
import Thunderstorm from '../images/Thunderstorm.png'
import Snowfall from '../images/Snowfall.png'
import '../App.css';

export default function Icon(props){
    var Condicao = props.Condicao;
    if(Condicao >= 200 && Condicao <= 232){
        return <> <img src={Thunderstorm} alt="" className="imagem_icon"/> </>;
    }else if(Condicao >= 300 && Condicao <= 321){
        return <> <img src={rainy} alt="" className="imagem_icon"/> </>;;
    }else if(Condicao == 500 || Condicao == 501){
        return <> <img src={rainy} alt="" className="imagem_icon"/> </>;
    }else if(Condicao == 502){
        return <> <img src={rainy} alt="" className="imagem_icon"/> </>;
    }else if(Condicao >= 503 && Condicao <= 531){
        return <> <img src={rainy} alt=""className="imagem_icon"/> </>;
    }else if(Condicao >= 600 && Condicao <= 601){
        return <> <img src={Snowfall} alt=""className="imagem_icon"/> </>;
    }else if(Condicao >= 602 && Condicao <= 622){
        return <> <img src={Snowfall} alt=""className="imagem_icon"/> </>;
    }else if(Condicao >= 701 && Condicao <= 771){
        return <> <img src={fog} className="imagem_icon" /> </>;
    }else if(Condicao == 781){
        return <> <img src={fog} className="imagem_icon" /> </>;
    }else if(Condicao == 800){
        return <> <img src={sonny} className="imagem_icon" /> </>;
    }else if(Condicao == 801 || Condicao == 802){
        return <> <img src={Partly_cloudy} className="imagem_icon" /> </>;
    }else if(Condicao == 803 || Condicao == 804){
        return <> <img src={Cloudy} className="imagem_icon" /> </>;
    }
}