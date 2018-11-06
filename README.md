# SPA utilizando a API da Unicef.
###### Realizado em nov/2018
###### Projeto final requisitado na [Laboratória](https://www.laboratoria.la/br) - Bootcamp de programação para mulheres <3

## Objetivo
Criar uma Single Page Application fazendo uso de APIs diferentes ou adicionais vistas durante o bootcamp. 
  * **API utilizada:** Unicef
  * **Proposta:** informar quantidade de casos de Zika vírus ocorridos em 2017 em determinado país país.
  * **MVP:** em construção
  * **Estrutura da API:**
    Atualmente os dados disponíveis para o público incluem: população, prevalência de mosquitos, Dados do caso Paho Zika e Localização escolar e conectividade. Nesta SPA foram utilizados os dados do caso Paho Zika.
    
    A API traz os dados por semanas, sendo a primeira referente a segunda quinzena de novembro de 2016 e a última referente a primeira semana de janeiro de 2018.
    Exemplo:
``` 
    "cases":{
      "2016-11-17":{
        "bra":{};
        "eua":{};
        "mex":{};
        "cub":{};
        "can":{
            "country": "Canada",
            "autochthonous_cases_suspected": 0,
            "autochthonous_cases_confirmed": 0,
            "imported_cases": 374,
            "incidence_rate": 0,
            "deaths": 0,
            "confirmed_congenital": 0,
            "population_x_1k": 36286,
            "congenital_suspected": 0,
            "congenital_probable": 0,
            "gbs_total": 0,
            "gbs_confirmed": 0
        };  
      };
      "2017-01-05":{...};
      "2017-12-21":{...};
      "2018-01-04":{...};
    }
    

