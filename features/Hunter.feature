#language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo cacar 
    E dar comida para outros viajantes
    Para sobreviver

    Contexto:
        Dado um Hunter de nome "João"
        E ele sempre comecara viagem com 2 refeicao
        E ele sempre começara a viagem saudável.

    Cenario: Saiu para cacar
        Quando ele sai para cacar 1 vezes
        Entao a quantidade de refeicao e igual a 7

    Cenario: Comeu e ficou saudavel
        Quando um Hunter parar pra comer 2 vezes
        Entao o Hunter nao ficara doente
    
    Cenario: Comeu e ficou doente
        Quando um Hunter parar pra comer 1 vez
        Entao o Hunter ficara doente

    Cenario: Deu comida para outros viajantes
        Quando o Hunter quiser doar 2 para o "Traveler"
        E ele tiver 4 de refeição
        Entao ele fica com 2 de refeição

    Cenario: Nao deu comida para outros viajantes
        Quando o Hunter quiser doar 2 para o "Samuel"
        E ele tiver 1 de refeição
        Entao ele fica com 1 de refeição

