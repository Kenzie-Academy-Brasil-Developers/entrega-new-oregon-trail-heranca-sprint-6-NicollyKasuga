#language: pt

    Funcionalidade: Doctor
        Como Doctor 
        Devo curar as pessoas
        Para seguir a viagem saudáveis

    Contexto:
        Dado um  Doctor de nome "João"
        E sempre começa a viagem com 1 refeição
        E sempre começa a viagem saudável.

    Cenario: Curou um viajante
        Quando um viajante doente chegar
        Então ele irá cura-lo

    Cenario: Não curou um viajante
        Quando um viajante saudável chegar
        Então ele não precisará cura-lo