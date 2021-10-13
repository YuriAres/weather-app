export default function Tradutor(props){
    var Condicao = props.Condicao;
    if(Condicao >= 200 && Condicao <= 232){
        return"Chuva com trovoadas";
    }else if(Condicao >= 300 && Condicao <= 321){
        return"Garoa";
    }else if((Condicao == 500 || Condicao == 501)){
        return"Chuva leve";
    }else if(Condicao == 502){
        return"Chuva moderada";
    }else if(Condicao >= 503 && Condicao <= 531){
        return"Chuva forte";
    }else if(Condicao >= 600 && Condicao <= 601){
        return"Neve";
    }else if(Condicao >= 602 && Condicao <= 622){
        return"Nevasca";
    }else if(Condicao >= 701 && Condicao <= 771){
        return"Névoa";
    }else if(Condicao == 781){
        return"Tornado";
    }else if(Condicao == 800){
        return"Limpo";
    }else if(Condicao == 801 || Condicao == 802){
        return"Parcialmente Nublado";
    }else if(Condicao == 803 || Condicao == 804){
        return"Nublado";
    }
}