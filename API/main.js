const express = require(' express ');
const app = express();
const port = 3000;
app.use(express.json());

let list = [

{
    content: [
      {
        description: "Mariana Crioula foi líder de uma das maiores revoltas de escravos no Rio de Janeiro, na região do Vale do Café, Mariana Crioula foi aclamada como rainha do seu povo ao lado de Manoel Congo, chamado de rei.",
        id: "5af8b1f64b197941cd524e35",
        metadata: {
          birthdate: "Não informado",
          country: "Brasil",
          credits: "Wikipedia",
          deathdate: "Não informado"
        },
        order: 0,
        slug: "mariana-crioula",
        title: "Mariana Crioula"
      },
      {
        description: "A princesa angolana Zacimba Gaba foi vendida como escrava e acabou no estado do Espírito Santo, onde sofreu extrema violência do senhor da escravos que a comprou e sentia inveja do seu título de realeza. Apesar disso tudo, foi uma guerreira que resistiu, vingou-se e provocou uma revolta das pessoas escravizadas contra a Casa Grande, liderando seu povo at&eacute; um quilombo onde foi rainha.",
        id: "5af8b1a14b197941cd524e22",
        metadata: {
          birthdate: "Não informado",
          country: "Angola",
          credits: "Heroínas Negras Brasileiras de Jarid Arraes",
          deathdate: "Não informado"
        },
        order: 1,
        slug: "zacimba-gaba",
        title: "Zacimba Gaba"
      },
      {
        description: "Hil&aacute;ria Batista de Almeida, conhecida como Tia Ciata foi uma cozinheira e m&atilde;e de santo brasileira, considerada por muitos como uma das figuras influentes para o surgimento do samba carioca. Foi iniciada no candombl&eacute; em Salvador por Bangbosh&ecirc; Obitik&ocirc; e era filha de Oxum. No Rio de Janeiro, era Iyakeker&ecirc; na casa de Jo&atilde;o Alab&aacute;. Tamb&eacute;m ficou marcada como uma das principais animadoras da cultura negra nas nascentes favelas cariocas. Em sua casa na Pra&ccedil;a Onze era onde os sambistas se reuniam, foi criado o primeiro samba gravado em disco - &quot;Pelo Telefone&quot;- , uma composi&ccedil;&atilde;o de Donga e Mauro de Almeida, na voz do cantor Baiano, tamb&eacute;m nascido em Santo Amaro da Purifica&ccedil;&atilde;o.",
        id: "5af8a330275ae72452d8460e",
        metadata: {
          birthdate: "1854",
          country: "Brasil",
          credits: "Wikipedia",
          deathdate: "1924",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/9d601dc0-56ed-11e8-a098-e1c5d0edce44-download%20(3).jpg?alt=media&token=48d81a18-52c8-4230-aaca-752bde1dc7e9"
          }
        },
        order: 2,
        slug: "tia-ciata",
        title: "Tia Ciata"
      },
      {
        description: "Teresa de Benguela foi uma l&iacute;der quilombola que viveu no atual estado de Mato Grosso, no Brasil, durante o s&eacute;culo XVIII. Foi esposa de Jos&eacute; Piolho, que chefiava o Quilombo do Piolho (ou do Quariter&ecirc;re, entre o rio Guapor&eacute; (a atual fronteira entre Mato Grosso e Bol&iacute;via) e a atual cidade de Cuiab&aacute;. Com a morte de Jos&eacute; Piolho, Teresa se tornou a rainha do quilombo, e, sob sua lideran&ccedil;a, a comunidade negra e ind&iacute;gena resistiu &agrave; escravid&atilde;o por duas d&eacute;cadas, sobrevivendo at&eacute; 1770, quando o quilombo foi destru&iacute;do pelas for&ccedil;as de Lu&iacute;s Pinto de Sousa Coutinho e a popula&ccedil;&atilde;o (79 negros e 30 &iacute;ndios), morta ou aprisionada.",
        id: "5af88737df4525364fa5187e",
        metadata: {
          birthdate: "Não informado",
          country: "Brasil",
          credits: "Wikipedia",
          deathdate: "Não informado",
         image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/6cff4530-56dd-11e8-89f3-035ad9474095-download%20(2).jpg?alt=media&token=4e6cc12b-6279-459f-b70e-28e281b0dda2"
          }
        },
        order: 3,
        slug: "teresa-de-benguela",
        title: "Teresa de Benguela"
      },
      {
        description: "Maria Firmina dos Reis nasceu em S&atilde;o Lu&iacute;s, no Maranh&atilde;o, no dia 11 de outubro de 1825. Filha bastarda de Jo&atilde;o Pedro Esteves e Leonor Felipe dos Reis. Foi uma escritora brasileira, considerada a primeira romancista brasileira.O romance &ldquo;&Uacute;rsula&rdquo; consagrou Maria Firmina como escritora e tamb&eacute;m foi o primeiro romance da literatura afro-brasileira, entendida esta como produ&ccedil;&atilde;o de autoria afrodescendente. Em 1887, no auge da campanha abolicionista, a escritora publica o livro &ldquo;A Escrava&rdquo;, refor&ccedil;ando sua postura antiescravista. Ao aposentar-se, em 1880, fundou uma escola mista e gratuita. Maria morre aos 92 anos, na cidade de Guimar&atilde;es, no dia 11 de novembro de 1917.",
        id: "5af88505275ae72452d845fc",
        metadata: {
          birthdate: "11-10-1825",
          country: "Brasil",
          credits: "Fundação Cultural Palmares",
          deathdate: "11-11-1917",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/1a9ab320-56dc-11e8-a098-e1c5d0edce44-200px-Maria_Firmina_dos_Reis-_Maranha%CC%83o.jpg?alt=media&token=4a843e13-588c-4c96-b1ad-8acab33ad1b0"
          }
        },
        order: 4,
        slug: "maria-firmina-dos-reis",
        title: "Maria Firmina dos Reis"
      },
      {
        description: "Maria Felipa de Oliveira foi uma mulher marisqueira, pescadora e trabalhadora bra&ccedil;al. Junto a Maria Quit&eacute;ria e Joana Ang&eacute;lica, participou da luta da Independ&ecirc;ncia da Bahia.<br>",
        id: "5af88453275ae72452d845fb",
        metadata: {
          birthdate: "Não informado",
          country: "Brasil",
          credits: "Wikipedia",
          deathdate: "04-07-1873",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/1a9ab320-56dc-11e8-a098-e1c5d0edce44-200px-Maria_Firmina_dos_Reis-_Maranha%CC%83o.jpg?alt=media&token=4a843e13-588c-4c96-b1ad-8acab33ad1b0"
          }
        },
        order: 5,
        slug: "maria-filipa-de-oliveira",
        title: "Maria Filipa de Oliveira"
      },
      {
        description: "Lu&iacute;sa Mahin, tamb&eacute;m grafada como Lu&iacute;za Mahin, nascida no in&iacute;cio do s&eacute;culo XIX, foi uma personagem parcialmente mitol&oacute;gica da hist&oacute;ria do Brasil, que, segundo a Funda&ccedil;&atilde;o Palmares, teria sido uma ex-escrava de origem africana, radicada no Brasil, que teria tomado parte na articula&ccedil;&atilde;o de todas as revoltas e levantes de escravos que sacudiram a Prov&iacute;ncia da Bahia nas primeiras d&eacute;cadas do s&eacute;culo XIX.[1]",
        id: "5af87c4e4b197941cd524dd9",
        metadata: {
          birthdate: "Não informado",
          country: "Brasil",
          credits: "Wikipedia",
          deathdate: "Não informado",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/d4f77f60-56d6-11e8-a4a6-c53cc7cf8385-Luiza_mahin.png?alt=media&token=e2dd95dc-cb05-403f-9eb3-a18952a7f67d"
          }
        },
        order: 6,
        slug: "luisa-mahin",
        title: "Luísa Mahin"
      },
      {
        description: "Laudelina de Campos Melo (Po&ccedil;os de Caldas, 12 de outubro de 1904 - Campinas, 12 de maio de 1991), foi uma brasileira, defensora dos direitos das mulheres e das empregadas dom&eacute;sticas, fundadora do primeiro sindicato de trabalhadoras dom&eacute;sticas do Brasil[1][2][3].",
        id: "5af87bc18925dc4692f74d95",
        metadata: {
          birthdate: "12-10-1904",
          country: "Brasil",
          credits: "Wikipedia",
          deathdate: "12-05-1991",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/9f700970-56d6-11e8-8de7-49ed489d4a57-download%20(1).jpg?alt=media&token=1ab93ea5-c046-46be-b321-5edf4eab613b"
          }
        },
        order: 7,
        slug: "laudelina-de-campos-melo",
        title: "Laudelina de Campos Melo"
      },
      {
        description: "Em 1811, a negra alforriada armou seu tabuleiro de couves e bananas na cal&ccedil;ada, no Bonsucesso, no Rio de Janeiro. De repente, uma cabra tangida por um escravo pegou um ma&ccedil;o de couve e uma penca de bananas. Eva correu atr&aacute;s da cabra com uma vara, tentando recuperar suas mercadorias. Chegou o senhor branco, Jos&eacute; In&aacute;cio de Sousa, dono do escravo e da cabra que ficou indignado com a cena e esbofeteou Eva, que n&atilde;o teve d&uacute;vidas em revidar a agress&atilde;o. O caso foi parar na justi&ccedil;a e abriu um precedente, uma vez que quem foi condenado a alguns meses de cadeia foi o branco, pois os que assistiram a cena depuseram a favor de Eva do Bonsucesso.",
        id: "5af87b118925dc4692f74d93",
        metadata: {
          birthdate: "Não informado",
          country: "Brasil",
          credits: "Capoeira Wiki",
          deathdate: "Não informado"
        },
        order: 8,
        slug: "eva-maria-do-bonsucesso",
        title: "Eva Maria do Bonsucesso "
      },
      {
        description: "Esperan&ccedil;a Garcia foi uma escrava brasileira, considerada a primeira mulher advogada do Piau&iacute;.Nasceu numa fazenda de propriedade dos jesu&iacute;tas, onde hoje fica o munic&iacute;pio de Nazar&eacute; do Piau&iacute;. Aos 9 anos de idade, quando a ordem foi expulsa do Piau&iacute;, foi levada como escrava para a casa do capit&atilde;o Ant&ocirc;nio Vieira de Couto. Em 6 de setembro de 1770, escreveu uma carta ao governador da Capitania do Maranh&atilde;o, Gon&ccedil;alo Louren&ccedil;o Botelho de Castro, denunciando os maus-tratos que sofria. Pedia ainda para retornar &agrave; Fazenda de Algod&otilde;es e para ter sua filha batizada. Fugiu pouco depois, reaparecendo numa rela&ccedil;&atilde;o de trabalhadores da fazenda datado de 1778, casada com o angolano Ign&aacute;cio e com sete filhos.A carta de Esperan&ccedil;a Garcia &eacute; considerada a primeira peti&ccedil;&atilde;o escrita por uma mulher na hist&oacute;ria do Piau&iacute;, o que a torna uma precursora da advocacia no estado. Tamb&eacute;m &eacute; um documento importante nas origens da literatura afro-brasileira. Na data de envio, 6 de setembro, &eacute; comemorado o Dia Estadual da Consci&ecirc;ncia Negra.",
        id: "5af8526bdf4525364fa51862",
        metadata: {
          birthdate: "Não informado",
          country: "Brasil",
          deathdae: "Não informado"
        },
        order: 9,
        slug: "esperana-garcia",
        title: "Esperança Garcia"
      },
      {
        description: "Aqualtune &eacute;, segundo a tradi&ccedil;&atilde;o, a m&atilde;e de Ganga Zumba e av&oacute; materna de Zumbi dos Palmares. Ela seria uma princesa africana, filha de um rei do Congo ainda n&atilde;o identificado. Ela tamb&eacute;m poderia ser av&oacute; de Ganga Zumba.&nbsp;Aqualtune liderou, em 1665, uma for&ccedil;a de dez mil homens na Batalha de Mbwila (cidade localizada na atual Angola), entre o Reino do Congo e Portugal, e foi capturada com a derrota congolesa. Sabe-se que o rei do Congo nesta &eacute;poca era Ant&ocirc;nio I, cujo o nome nativo era Nvita a Nkanga e era membro da Dinastia de Nlanza. N&atilde;o se sabe o grau de parentesco que Aqualtune supostanente tinha com este rei mas especula-se que poderiam ter sido irm&atilde;os, j&aacute; que Nvita teve um reinado curto de 4 anos, tendo falecido justamente na Batalha de Mbwila. Se isso for correto o pai de Aqualtune teria sido o rei Garcia II, cujo nome nativo era Nkanga a Lukeni a Nzenze a Ntumba, que governou o Congo entre 1641 e 1661, falecendo de idade avan&ccedil;ada.",
        id: "5af84f018925dc4692f74d72",
        metadata: {
          birthdate: "Não informado",
          country: "Congo",
          credits: "Wikipedia",
          deathdate: "Não informado",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/c0170f90-56bb-11e8-9142-c36d01e1a422-aqualtune.jpg?alt=media&token=6f3d5bb6-c269-4ed1-ad9c-847840e86be9"
          }
        },
        order: 10,
        slug: "aqualtune",
        title: "Aqualtune"
      },
      {
        description: "Henrietta Lacks foi a doadora involunt&aacute;ria de c&eacute;lulas cancerosas, mantidas em cultura pelo cientista George Otto Gey para criar a primeira linhagem celular imortal da hist&oacute;ria. Esta linhagem de c&eacute;lulas, utilizada em pesquisas m&eacute;dicas, atualmente &eacute; conhecida como HeLa, e torna Henrietta Lacks famosa no meio cient&iacute;fico.",
        id: "5ae9308ede3a1a6f3e9d0cb7",
        metadata: {
          birthdate: "01-08-1920",
          country: "Estados Unidos",
          credits: "Wikipedia",
          deathdate: "04-10-1951",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/fdffa170-4db8-11e8-8be9-ffc26a012948-download.jpg?alt=media&token=c70ce111-c3b9-4011-b555-0dad72077b13"
          }
        },
        order: 11,
        slug: "henrietta-lacks",
        title: "Henrietta Lacks"
      },
      {
        description: "Dona Ivone\r\nLara nasceu em 13 de abril de 1921, em Botafogo, no Rio. Perdeu os pais cedo, de quem recebeu as primeiras influ&ecirc;ncias musicais. Foi criada pelos tios, per&iacute;odo em que aprendeu a tocar cavaquinho e desenvolveu seu amor pelo samba. Formou-se em Enfermagem e atuou como assistente social at&eacute; 1977, quando passou a dedicar-se somente &agrave; m&uacute;sica. Casou-se com Oscar Costa, presidente da escola de samba Prazer da Serrinha, com quem teve dois filhos, Alfredo e Odir, este &uacute;ltimo morto em 2008.<br><br>Considerada a Dama do Samba, Dona Ivone Lara foi a primeira mulher a fazer um samba-enredo numa escola, o Cinco Bailes da Hist&oacute;ria do Rio, em 1965. Suas composi&ccedil;&otilde;es foram gravadas por int&eacute;rpretes como Clara Nunes, Roberto Ribeiro, Maria Beth&acirc;nia, Caetano Veloso, Gilberto Gil, Paula Toller, Paulinho da Viola, Beth Carvalho, Mariene de Castro e Roberta S&aacute; e Dorina. Entres suas composi&ccedil;&otilde;es de sucesso est&atilde;o Sonho Meu, Sorriso Negro e Algu&eacute;m me avisou.",
        id: "5ae91f27de3a1a6f3e9d0c90",
        metadata: {
          birthdate: "13-04-1921",
          country: "Brasil",
          credits: "El País",
          deathdate: "16-04-2018",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/9cc9cfc0-4dae-11e8-a743-1fe133019f0d-Quinteto_em_Branco_e_Preto_e_D._Ivone_Lara_(2449338907)-min.jpg?alt=media&token=47611e59-58dc-4307-b910-ab8c297067aa"
          }
        },
        order: 12,
        slug: "dona-ivone-lara",
        title: "Dona Ivone Lara"
      },
      {
        description: "Djamila Ta&iacute;s Ribeiro dos Santos &eacute; uma feminista e acad&ecirc;mica brasileira. &Eacute; pesquisadora e mestre em Filosofia Pol&iacute;tica pela Universidade Federal de S&atilde;o Paulo (Unifesp). Tornou-se conhecida no pa&iacute;s por seu ativismo na internet.Em maio de 2016, foi nomeada secret&aacute;ria-adjunta de Direitos Humanos e Cidadania da cidade de S&atilde;o Paulo durante a gest&atilde;o do prefeito Fernando Haddad.",
        id: "5ae64bffe11e31276e4cdf3a",
        metadata: {
          birthdate: "01-08-1980",
          country: "Brasil",
          credits: "Wikipedia",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/909a86f0-4bff-11e8-9a1e-25847895d6ce-Djamila_Ribeiro.jpg?alt=media&token=e415c937-6372-4c0d-824d-62dde5f3af2d"
          }
        },
        order: 13,
        slug: "djamila-ribeiro",
        title: "Djamila Ribeiro"
      },
      {
        description: "Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma soci&oacute;loga, feminista, militante dos direitos humanos e pol&iacute;tica brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a elei&ccedil;&atilde;o municipal de 2016, com a quinta maior vota&ccedil;&atilde;o. Cr&iacute;tica da interven&ccedil;&atilde;o federal no Rio de Janeiro e da Pol&iacute;cia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de mar&ccedil;o de 2018, foi assassinada a tiros.",
        id: "5ae64b766ee04127fe1a564d",
        metadata: {
          birthdate: "27-07-1979",
          country: "Brasil",
          credits: "Wikipedia",
          deathdate: "14-03-2018",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/2f3fbc90-4bff-11e8-9a00-792cd50cc28c-200px-Marielle_Franco.jpg?alt=media&token=a156f7a2-9c9c-4e62-860d-5ec8055e1d04"
          }
        },
        order: 14,
        slug: "marielle-franco",
        title: "Marielle Franco"
      },
      {
        description: "Oprah Gail Winfrey &eacute; uma apresentadora de televis&atilde;o, atriz e empres&aacute;ria\r\nnorte-americana, vencedora de m&uacute;ltiplos pr&ecirc;mios Emmy por seu programa The Oprah Winfrey Show, o talk show com maior audi&ecirc;ncia da hist&oacute;ria da televis&atilde;o norte-americana.O The Oprah Winfrey Show foi transmitido durante vinte e cinco anos. Seu &uacute;ltimo programa foi ao ar em 25 de maio de 2011. Winfrey passou a dedicar-se &agrave; sua pr&oacute;pria rede, Oprah Winfrey Network (OWN) e outros projetos pessoais.Oprah tamb&eacute;m &eacute; psic&oacute;loga e foi a apresentadora mais bem paga da hist&oacute;ria da televis&atilde;o estadunidense, ganhando cerca de 50 milh&otilde;es de d&oacute;lares por m&ecirc;s com todas as suas incumb&ecirc;ncias profissionais.",
        id: "5ae64ae7e11e31276e4cdf37",
        metadata: {
          birthdate: "29-01-1954",
          country: "Estados Unidos",
          credits: "Wikipedia",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/fc209410-4bfe-11e8-9a00-792cd50cc28c-OprahCropped.jpg?alt=media&token=9365a628-dce5-4d0d-937d-dfe98c3d1f4d"
          }
        },
        order: 15,
        slug: "oprah-winfrey",
        title: "Oprah Winfrey"
      },
      {
        description: "Hattie McDaniel foi uma atriz e cantora\r\nnorte-americana.Em 1940 se tornou a primeira artista afro-descendente a receber o Oscar de melhor atriz coadjuvante pelo filme Gone with the Wind. Tamb&eacute;m foi a primeira negra a ir &agrave; premia&ccedil;&atilde;o como convidada e n&atilde;o como servente - os organizadores do Oscar tiveram que pedir uma autoriza&ccedil;&atilde;o especial para que McDaniel pudesse comparecer ao evento, pois o edif&iacute;cio onde a cerim&ocirc;nia ocorreu n&atilde;o permitia a entrada de pessoas negras.",
        id: "5ae64a616ee04127fe1a5649",
        metadata: {
          birthdate: "10-06-1895",
          country: "Estados Unidos",
          credits: "Wikipedia",
          deathdate: "26-10-1952",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/9c300b40-4c02-11e8-97e9-cd4313173b55-Hattie-Mcdaniels-min.jpg?alt=media&token=15cd66cb-f946-4c23-9048-b607b3713e68"
          }
        },
        order: 16,
        slug: "hattie-mcdaniel",
        title: "Hattie McDaniel"
      },
      {
        description: "Jacqueline &quot;Jackie&quot; Joyner-Kersee &eacute; uma antiga atleta\r\namericana. Jackie &eacute; considerada uma das melhores atletas de todos os tempos no heptatlo e no salto em dist&acirc;ncia. Ela ganhou tr&ecirc;s medalhas de ouro, uma de prata e duas de bronze nas Olimp&iacute;adas de 1984, 1988, 1992 e 1996.A revista Sports Illustrated a elegeu como a maior Atleta Feminina do S&eacute;culo XX.Em 2012, foi imortalizada no Hall da Fama do atletismo, criado no mesmo ano como parte das celebra&ccedil;&otilde;es pelo centen&aacute;rio da IAAF.&nbsp;&Eacute; recordista mundial do heptatlo desde 1986, e foi recordista mundial do salto em dist&acirc;ncia entre 1987 e 1988.",
        id: "5ae649dce11e31276e4cdf26",
        metadata: {
          birthdate: "03-03-1962",
          country: "Estados Unidos",
          credits: "Wikipedia",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/4db4efc0-4bfe-11e8-9a00-792cd50cc28c-Jackie_Joyner-Kersee_Eugene_2014.jpg?alt=media&token=53438dbf-edd9-46ab-ba07-4975430a292f"
          }
        },
        order: 17,
        slug: "jackie-joyner-kersee",
        title: "Jackie Joyner-Kersee"
      },
      {
        description: "Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira\r\nnegra\r\nnorte-americana, s&iacute;mbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1&ordm; de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no &ocirc;nibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos &ocirc;nibus de Montgomery e posteriormente viria a marcar o in&iacute;cio da luta antissegregacionista.",
        id: "5ae649666ee04127fe1a5644",
        metadata: {
          birthdate: "04-02-1913",
          country: "Estados Unidos",
          credits: "Wikipedia",
          deathdate: "24-10-2005",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/f8267880-4bfd-11e8-97e9-cd4313173b55-Rosaparks.jpg?alt=media&token=f06c9066-a362-4586-b5d6-0cd29ab04bc4"
          }
        },
        order: 18,
        slug: "rosa-parks",
        title: "Rosa Parks"
      },
      {
        description: "Maya Angelou foi poeta e ativista pela igualdade racial e direitos civis, tendo at&eacute; mesmo sido condecorada por Obama em 2010. Conviveu com Martin Luther King e Malcom X, leu um poema no funeral de Michael Jackson e foi considerada mentora por Oprah. Nascida em St. Louis, Missouri, ela foi a primeira motorista de &ocirc;nibus negra de S&atilde;o Francisco, com apenas 17 anos. Morreu em 2014, aos 86 anos, sendo considerada um &iacute;cone da literatura norte-americana.",
        id: "5ae648ec626f0a2799c230f7",
        metadata: {
          birthdate: "04-04-1928",
          country: "Estados Unidos",
          credits: "Magá Moura",
          deathdate: "28-05-2014",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/be4608b0-4bfd-11e8-9459-f1950b8a9e87-800px-Angelou_at_Clinton_inauguration_(cropped_2).jpg?alt=media&token=229dce23-50e9-4ec2-b022-f20e7a256249"
          }
        },
        order: 19,
        slug: "maya-angelou",
        title: "Maya Angelou"
      },
      {
        description: "Wangari Muta Maathai foi uma professora e ativista pol&iacute;tica do meio-ambiente do Qu&ecirc;nia. Foi a primeira mulher africana a receber o Pr&ecirc;mio Nobel da Paz.Maathai fundou o Green Belt Movement, uma organiza&ccedil;&atilde;o n&atilde;o governamental ambiental concentrado em planta&ccedil;&atilde;o das &aacute;rvores, conserva&ccedil;&atilde;o ambiental, e direitos das mulheres. Em 1986, ela foi premiada o Right Livelihood Award, e em 2004, se tornou a primeira mulher africana a receber o Pr&ecirc;mio Nobel por sua contribui&ccedil;&atilde;o para o desenvolvimento sustent&aacute;vel, a democracia e a paz. Maathai foi eleita membro do Parlamento queniano e era ministra dos recursos ambientais e naturais no governo do Presidente Mwai Kibaki de 2003 &ndash; 2005. Al&eacute;m disso, era conselheira honor&aacute;ria do World Future Council. Em 2011, Maathai morreu de c&acirc;ncer de ov&aacute;rio.",
        id: "5ae6483aee644825d6a92627",
        metadata: {
          birthdate: "01-04-1940",
          country: "Kenya",
          credits: "Wikipedia",
          deathdate: "25-09-2011",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/50f03a10-4bfd-11e8-97e9-cd4313173b55-Wangari-Maathai-Muta.jpg?alt=media&token=054441be-d205-4fbe-954f-3b4c7a54d511"
          }
        },
        order: 20,
        slug: "wangari-muta-maathai",
        title: "Wangari Muta Maathai"
      },
      {
        description: "Dandara foi uma guerreira\r\nnegra do per&iacute;odo colonial do Brasil. Ap&oacute;s ser presa, suicidou-se se jogando de uma pedreira ao abismo em 6 de fevereiro de 1694, para n&atilde;o retornar &agrave; condi&ccedil;&atilde;o de escrava. Foi esposa de Zumbi dos Palmares e com ele teve tr&ecirc;s filhos. Sua figura &eacute; envolta em grande mist&eacute;rio, pois quase n&atilde;o existem dados sobre sua vida e/ou atos. Praticamente todos os relatos que se referem a ela s&atilde;o esparsos e desconexos, com caracter&iacute;sticas de lendas.",
        id: "5ae63686aa87ed26e021381e",
        metadata: {
          birthdate: "Não informado",
          country: "Brasil",
          credits: "Wikipedia",
          deathdate: "06-02-1694",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/a02c0b50-4bf2-11e8-9a1e-25847895d6ce-dandara-zumbi.jpg?alt=media&token=ab02c0f4-3062-4981-b1f0-4b33f765586a"
          }
        },
        order: 21,
        slug: "dandara",
        title: "Dandara"
      },
      {
        description: "Ellen Johnson-Sirleaf &eacute; uma pol&iacute;tica liberiana. Foi a vencedora das elei&ccedil;&otilde;es presidenciais de 8 de novembro de 2005, em que derrotou o ex-futebolista\r\nGeorge Weah. Foi reeleita em 2011 para um novo mandato, tendo recebido o Pr&ecirc;mio Nobel da paz de 2011, juntamente com a compatriota Leymah Gbowee e a iemenita Tawakel Karman.",
        id: "5ae635e66ee04127fe1a5639",
        metadata: {
          birthdate: "29-10-1938",
          country: "Liberia",
          credits: "Wikipedia",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/652480a0-4bf2-11e8-9a00-792cd50cc28c-Ellen_Johnson_Sirleaf-State_Department_2012-.jpg?alt=media&token=32756d88-198e-4665-9e68-93d9cf9c9c35"
          }
        },
        order: 22,
        slug: "ellen-johnson-sirleaf",
        title: "Ellen Johnson-Sirleaf "
      },
      {
        description: "Harriet Tubman foi uma americana\r\nabolicionista, humanit&aacute;ria, olheira armada e espi&atilde; do Ex&eacute;rcito dos Estados Unidos durante a Guerra Civil Americana. Nascida durante a escravid&atilde;o, Tubman escapou e, posteriormente, fez cerca de treze miss&otilde;es para resgatar cerca de setenta fam&iacute;lias e amigos escravizados, usando a rede de ativistas abolicionistas e casas seguras conhecida como Underground railroad. Mais tarde, ela ajudou o abolicionista John Brown a recrutar homens para a sua invas&atilde;o em Harpers Ferry, e na era do p&oacute;s-guerra foi uma participante ativa na luta pelo voto feminino.",
        id: "5ae634f9aa87ed26e021381c",
        metadata: {
          birthdate: "Não informado",
          country: "Estados Unidos",
          credits: "Wikipedia",
          deathdate: "10-03-1913",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/984d52d0-4c02-11e8-bff9-3ba5a6c6586d-harriet-tubman-min.jpg?alt=media&token=a33f15d6-9f86-4b4b-803e-bc5c0c6617a8"
          }
        },
        order: 23,
        slug: "harriet-tubman",
        title: "Harriet Tubman"
      },
      {
        description: "Angela Yvonne Davis &eacute; uma professora e fil&oacute;sofa socialista estado-unidense que alcan&ccedil;ou notoriedade mundial na d&eacute;cada de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua milit&acirc;ncia pelos direitos das mulheres e contra a discrimina&ccedil;&atilde;o social e racial nos Estados Unidos e por ser personagem de um dos mais pol&ecirc;micos e famosos julgamentos criminais da recente hist&oacute;ria dos Estados Unidos.",
        id: "5ae63307aa87ed26e021381b",
        metadata: {
          birthdate: "26-01-1944",
          country: "Estados Unidos",
          credits: "Wikipedia",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/98df37c0-4bf0-11e8-bff9-3ba5a6c6586d-Angela-Davis-.jpg?alt=media&token=ca09e1d7-4c0d-4538-93e2-8bffac1d7f4a"
          }
        },
        order: 24,
        slug: "angela-davis",
        title: "Angela Davis"
      },
      {
        description: "L&eacute;lia Gonzalez foi uma intelectual, pol&iacute;tica, professora e antrop&oacute;loga brasileira.Ajudou a fundar institui&ccedil;&otilde;es como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N&#39;Zinga e o Olodum. Sua milit&acirc;ncia em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas elei&ccedil;&otilde;es seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.",
        id: "5ae6267fde1f95238cd79682",
        metadata: {
          birthdate: "01-02-1935",
          country: "Brasil",
          credits: "Wikipedia",
          deathdate: "10-07-1994",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/fed5f210-4be8-11e8-a3d6-a3deae37c896-Lelia_Gonzalez.jpg?alt=media&token=ae2c7b34-b8d5-40c3-a786-05ec9a0df29c"
          }
        },
        order: 25,
        slug: "lelia-gonzalez",
        title: "Lélia Gonzalez"
      },
      {
        description: "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Di&aacute;rio de uma Favelada publicado em 1960.<br><br>Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canind&eacute;, na zona norte de S&atilde;o Paulo, sustentando a si mesma e seus tr&ecirc;s filhos como catadora de pap&eacute;is. Em 1958 tem seu di&aacute;rio publicado sob o nome Quarto de Despejo, com aux&iacute;lio do jornalista Aud&aacute;lio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze l&iacute;nguas.",
        id: "5ae6250a3147ab229c26f7a2",
        metadata: {
          birthdate: "14-03-1914",
          country: "Brasil",
          credits: "Wikipedia",
          deathdate: "13-02-1977",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/4c5cdbd0-4be8-11e8-a3d6-a3deae37c896-Carolina_Maria_de_Jesus.jpg?alt=media&token=5bb37975-e10c-406e-ae76-85e49d57b9ac"
          }
        },
        order: 26,
        slug: "carolina-maria-de-jesus",
        title: "Carolina Maria de Jesus"
      },
      {
        description: "Antonieta de Barros foi uma jornalista, professora e pol&iacute;tica brasileira. Inspira&ccedil;&atilde;o para o movimento negro, foi apagada dos livros de hist&oacute;ria, tendo sido uma ativa defensora da emancipa&ccedil;&atilde;o feminina, de uma educa&ccedil;&atilde;o de qualidade para todos e pelo reconhecimento da cultura negra, em especial no sul do pa&iacute;s &Eacute; a primeira negra brasileira a assumir um mandato popular.",
        id: "5ae6244473438b21e2b57588",
        metadata: {
          birthdate: "11-07-1901",
          country: "Brasil",
          credits: "Wikipedia",
          deathdate: "28-03-1952",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/35f7a1f0-4be7-11e8-976e-95cd70502d22-Antonieta_de_Barros.jpg?alt=media&token=86a11e27-ef27-4bc0-a8fd-9ab9dbe05002"
          }
        },
        order: 27,
        slug: "antonieta-de-barros",
        title: "Antonieta de Barros"
      },
      {
        description: "Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.",
        id: "53d65f506e5e",
        metadata: {
          birthdate: "29-11-1946",
          country: "Brasil",
          credits: "UFMG",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/conceicao02.jpg?alt=media&token=210c11b4-39ef-4eb4-a93e-53d65f506e5e"
          }
        },
        order: 28,
        slug: "conceicao-evaristo",
        title: "Conceição Evaristo"
      },
      {
        description: "Aída dos Santos é uma ex-atleta brasileira, especialista no salto em altura. Foi a primeira mulher brasileira a disputar uma final olímpica e mesmo sem técnico ela garantiu o quarto lugar em uma final de salto com vara. Além disso foi a brasileira com maior desempenho na história dos Jogos Olímpicos por 32 anos.",
        id: "53d65f506e5ed",
        metadata: {
          birthdate: "01-03-1937",
          country: "Brasil",
          credits: "Wikipedia/G1",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/lossy-page1-800px-Ai%CC%81da_dos_Santos_nos_Jogos_Panamericanos_de_1971.tif.jpg?alt=media&token=3a35ee45-b7eb-410f-aca8-baa413a5b111"
          }
        },
        order: 29,
        slug: "aida-dos-santos",
        title: "Aída dos Santos"
      },
      {
        description: "Serena Williams é tenista e foi considerada uma das maiores atletas de todos os tempos. Atualmente é classificada pela Associação Feminina de Tênis como a tenista número 9 do mundo em simples. Considerada uma das melhores e mais vitoriosas tenistas da história do esporte por especialistas e público em geral, Serena continua marcando ainda mais seu nome dentro das quadras. Já é a maior campeã de Grand Slam na era aberta, com 23 titulos.",
        id: "53d65f506e5edhe",
        metadata: {
          birthdate: "26-09-1981",
          country: "Estados Unidos",
          credits: "Wikipedia",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/Serena_Williams_US_Open_2013.jpeg?alt=media&token=ae7587a5-11f7-44d3-9c25-52fe7811bee0"
          }
        },
        order: 30,
        slug: "serena-williams",
        title: "Serena Williams"
      },
      {
        description: "Rafaela Silva é uma judoca campeã olímpica e mundial brasileira. Em 2013 tornou-se a primeira brasileira a se sagrar campeã mundial de Judô. Três anos depois, em 2016, conquistou a medalha de ouro da categoria até 57 kg nas Olimpíadas Rio 2016. Com isso, se tornou a primeira atleta da história do judô brasileiro, entre homens e mulheres, a ser campeã olímpica e mundial.",
        id: "53d65f506e5ed",
        metadata: {
          birthdate: "26-04-1992",
          country: "Brasil",
          credits: "Wikipedia",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/Rafaela_Silva_2016.png?alt=media&token=fec7cd2d-ad56-428e-8be9-b3f2bb69fb3e"
          }
        },
        order: 31,
        slug: "rafaela-silva",
        title: "Rafaela Silva"
      },
      {
        description: "Simone Biles é uma ginasta profissional dos Estados Unidos, especialista na ginástica artística, vencedora de vinte e cinco medalhas em campeonatos mundiais, sendo dezenove delas de ouro. É a ginasta mais condecorada na história do seu país em mundiais.",
        id: "53d65f5063df5ed",
        metadata: {
          birthdate: "14-03-1997",
          country: "Estados Unidos",
          credits: "Wikipedia",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/800px-Simone_Biles_at_the_2016_Olympics_all-around_gold_medal_podium_(28262782114)_cropped.jpeg?alt=media&token=60d4a4aa-29d0-4bf9-88d6-5a0fb697fe5f"
          }
        },
        order: 32,
        slug: "simone-biles",
        title: "Simone Biles"
      },
      {
        description: "Rebeca Andrade se tornou a primeira mulher brasileira a vencer duas provas na mesma edição. A ginasta garantiu um ouro inédito no salto da ginástica artística e também ganhou medalha de prata no individual geral.",
        id: "5342d65f506e5ed",
        metadata: {
          birthdate: "14-03-1997",
          country: "Brasil",
          credits: "G1",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/Rebeca_Andrade_in_Tokyo_2020_(crop).jpeg?alt=media&token=a1aad4ce-c650-4f2d-aea3-757bef0101e5"
          }
        },
        order: 33,
        slug: "rebeca-andrade",
        title: "Rebeca Andrade"
      },
      {
        description: "Naomi Osaka é uma tenista japonesa e tornou-se a primeira japonesa a ganhar um torneio Grand Slam de simples. Foi também a primeira mulher negra a acender a pira olímpica em uma cerimônia de abertura das Olimpíadas.",
        id: "5342d65f506e5rdd",
        metadata: {
          birthdate: "16-10-1997",
          country: "Japão",
          credits: "Wikipedia",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/800px-NaomiOsaka-smile-2020_(cropped).png?alt=media&token=4e7250ca-157a-41e6-9d24-e88b41bed81c"
          }
        },
        order: 34,
        slug: "naomi-osaka",
        title: "Naomi Osaka"
      },
      {
        description: "Daiane dos Santos é uma ex-ginasta brasileira que competiu em provas de ginástica artística. Conquistou nove medalhas de ouro em campeonatos mundiais e foi a primeira ginasta brasileira, entre homens e mulheres, a conquistar uma medalha de ouro em uma edição do Campeonato Mundial.",
        id: "5342d65f506e5ytea",
        metadata: {
          birthdate: "10-02-1983",
          country: "Brasil",
          credits: "Wikipedia",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/320px-Daiane_dos_Santos_13072007.jpeg?alt=media&token=1e84c2f6-8b4d-45c1-a71e-ddef9fc05be5"
          }
        },
        order: 35,
        slug: "daiane-dos-santos",
        title: "Daiane dos Santos"
      },
      {
        description: "Ludmilla Oliveira da Silva mais conhecida como Ludmilla e, anteriormente, como MC Beyoncé, é uma cantora, compositora, multi-instrumentista, atriz e empresária brasileira. Foi a primeira mulher negra e latina a alcançar a marca de um bilhão de streams no Spotify.",
        id: "8772d65f506e5ytea",
        metadata: {
          birthdate: "24-04-1995",
          country: "Brasil",
          credits: "Wikipedia",
          image: {
            url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/Ludmilla_no_Lady_Night.jpeg?alt=media&token=cf4ee018-a331-4e63-b76a-4bd247ae35ed"
          }
        },
        order: 36,
        slug: "ludmilla",
        title: "Ludmilla"
      }
    ]
  }
]