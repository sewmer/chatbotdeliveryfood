const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');

// initialise DB connection
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'ws://your-projeto.firebaseio.com/',
});

process.env.DEBUG = 'dialogflow:debug';

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
     
  //começa o código aqui   
  
  function vercardapio(agent) {
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
    
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
    
       return admin.database().ref(id4).once("value").then((snapshot) => {
        var resumuREP = snapshot.child('resumoREP').val(); 
    
    return admin.database().ref(id4+'cadastro').once("value").then((snapshot) => {
        var nom = snapshot.child("nome").val();
      
    return admin.database().ref('autoDelivery').once("value").then((snapshot) => {
      var status = snapshot.child("zzzempresa").val();
      var telefone = snapshot.child("telefone").val();
      var taxas = snapshot.child("taxa").val();
      var promoc = snapshot.child("promo").val();
      var cate1 = snapshot.child("cat1").val();
      var cate2 = snapshot.child("cat2").val();
      var cate3 = snapshot.child("cat3").val();
      var cate4 = snapshot.child("cat4").val();
      var cate5 = snapshot.child("cat5").val();
      var cate6 = snapshot.child("cat6").val();
      var cate7 = snapshot.child("cat7").val();
      var cate8 = snapshot.child("cat8").val();
      var cate9 = snapshot.child("cat9").val();
      var cate100 = snapshot.child("cat10").val();
      var cate01 = ``;
      var cate02= ``;
      var cate03= ``;
      var cate04= ``;
      var cate05= ``;
      var cate06= ``;
      var cate07= ``;
      var cate08= ``;
      var cate09= ``;
      var cate10= ``;
      if(cate1 !== null) {
      cate01 = cate1.replace(/"/g, ``);
      }
      if(cate2 !== null) {
      cate02 = cate2.replace(/"/g, ``);
      }
      if(cate3 !== null) {
      cate03 = cate3.replace(/"/g, ``);
      }
      if(cate4 !== null) {
      cate04 = cate4.replace(/"/g, ``);
      }
      if(cate5 !== null) {
      cate05 = cate5.replace(/"/g, ``);
      }
      if(cate6 !== null) {
      cate06 = cate6.replace(/"/g, ``);
      }
            if(cate7 !== null) {
      cate07 = cate7.replace(/"/g, ``);
      }
            if(cate8 !== null) {
      cate08 = cate8.replace(/"/g, ``);
      }
            if(cate9 !== null) {
      cate09 = cate9.replace(/"/g, ``);
      }
            if(cate100 !== null) {
      cate10 = cate100.replace(/"/g, ``);
      }
      
      var cat = cate01+` \n`+cate02+` \n`+cate03+` \n`+cate04+` \n`+cate05;
   
      if(resumuREP !== null) {
          if(status !== `off`) {   
       if(cate1 > ``) {  
         if(promoc !== null) {
            if(nom !== null) {
agent.add(`*`+nom + `*  
Escolha uma categoria a seguir
------------------------------------------------
*(REP)* Repetir *último pedido* \n`+
cat+` 
\n *PROMO*- Ver promoções 🤩 `);
agent.add(`*(COD)* Tenho um código 😉`); 
            }else{
       agent.add(`🔢 *Digite o número da categoria* 
------------------------------------------------
*(REP)* Repetir último pedido \n`+
cat+` 
\n *PROMO*- Ver promoções 🤩`);  
agent.add(`*(COD)* Tenho um código 😉`);              
            }
    }else {
      if(nom !== null) {
            agent.add(` *`+nom + `*  
Escolha uma categoria a seguir
------------------------------------------------
*(REP)* Repetir último pedido \n`+
cat); 
      }else {
        agent.add(`🔢 *Digite o número da categoria* 
------------------------------------------------
*(REP)* Repetir último pedido \n`+
cat);
      }
          }
}  else {
agent.add(`❌Nenhuma categoria cadastrada`);
                
            } 
       return admin.database().ref(id4).once("value").then((snapshot) => {
           var tot = snapshot.child(`total`).val();
           var resum = snapshot.child(`resumo`).val();
           var resumREP = snapshot.child(`resumoREP`).val();
           var totalREP = snapshot.child(`totalREP`).val();
         admin.database().ref(id4).set({ 
                  categorias:0,
                  total: tot,
                  resumo: resum,
                  resumoREP: resumREP,
                  totalREP: totalREP,
 });

    });
       } else {
         agent.add(`*Nosso atendimento automático encontra se indisponível* 
----------------------------------------------------------
Por favor digite *ATENDIMENTO*  nosso atendente já vem, 
você também pode ligar no nosso telefone `+ telefone);

       }
     //fimpetapa
   } else {
          if(status !== `off`) {   
       if(cate1 > ``) {  
         if(promoc !== null) {
            if(nom !== null) {
agent.add(`*`+nom + `*  
Escolha uma categoria a seguir
----------------------------------\n`+
cat+` 
\n *PROMO*- Ver promoções 🤩 `);
agent.add(`*(COD)* Tenho um código 😉`); 
            }else{
       agent.add(`🔢 *Digite o número da categoria* 
----------------------------------\n`+
cat+` 
\n *PROMO*- Ver promoções 🤩`);  
agent.add(`*(COD)* Tenho um código 😉`);               
            }
    }else {
      if(nom !== null) {
            agent.add(` *`+nom + `*  
Escolha uma categoria a seguir
----------------------------------\n`+
cat); 
      }else {
        agent.add(`🔢 *Digite o número da categoria* 
----------------------------------\n`+
cat);
      }
          }
}  else {
agent.add(`❌Nenhuma categoria cadastrada`);
                
            } 
       return admin.database().ref(id4).once("value").then((snapshot) => {
           var tot = snapshot.child(`total`).val();
           var resum = snapshot.child(`resumo`).val();
           var resumREP = snapshot.child(`resumoREP`).val();
           var totalREP = snapshot.child(`totalREP`).val();
         admin.database().ref(id4).set({ 
                  categorias:0,
                  total: tot,
                  resumo: resum,
                  resumoREP: resumREP,
                  totalREP: totalREP,
 });

    });
       } else {
         agent.add(`*Nosso atendimento automático encontra se indisponível* 
----------------------------------------------------------
Por favor digite *ATENDIMENTO*  nosso atendente já vem, 
você também pode ligar no nosso telefone `+ telefone);

       }
   }
      });
     });
      });
    
   
  }
  
    function mostralista(agent) {
     
       const digitou = agent.parameters.catnumero;  
       let sessionId = agent.session;
      return admin.database().ref('autoDelivery').once("value").then((snapshot) => {          
        var produto = snapshot.child(`listacat`+digitou).val();
        var status = snapshot.child("zzzempresa").val();
        var telefone = snapshot.child("telefone").val();

  if(status !== `"off"`) {      
   if(produto !== null) {
        var mostr = produto.replace(/"/g, ``);
        var mostra = mostr.replace(/&/g, `\n`);     
        agent.add(`🔢 *Escolha um número da lista*  
*Escolha um item de cada vez*  
-------------------------------------------- \n`+ mostra+` 

Para ver detalhes o item
(D,Nº)`); 
   } else {
             agent.add(`🔢 Para esse número não há itens
-------------------------------------------- 
*(V)* Para voltar`
); 
   }
     
        var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4); 
        
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);

        return admin.database().ref(id4).once("value").then((snapshot) => {
           var produt = snapshot.child(`produtos`).val();
           var qtde = snapshot.child(`quantidades`).val();
           var tot = snapshot.child(`total`).val();
           var resum = snapshot.child(`resumo`).val();
  
                admin.database().ref(id4).set({                
                  categorias:agent.parameters.catnumero,
                  total: tot,
                  resumo: resum,
                 }); 
                                                                
    }); 
  }else{
             agent.add(`*Nosso atendimento automático encontra se indisponível* 
----------------------------------------------------------
Por favor digite *ATENDIMENTO*  nosso atendente já vem, 
você também pode ligar no nosso telefone `+ telefone);
  }
    });
      

    }
         
  function gravaproduto(agent) {
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
    
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
    
      return admin.database().ref(id4).once("value").then((snapshot) => { 
           var categ = snapshot.child(`categorias`).val();
           var tot = snapshot.child(`total`).val();
           var resum = snapshot.child(`resumo`).val();
           
   return admin.database().ref('autoDelivery').once("value").then((snapshot) => {
     var valordoprodu = snapshot.child(`valor-c`+categ+`p`+agent.parameters.produtnumero).val();
     var nomedoproduto= snapshot.child(`nome-c`+categ+`p`+agent.parameters.produtnumero).val();
      var adic = snapshot.child(`adicionais`).val();
      var nomedp;
     if(valordoprodu !== null) {      
      var valordopr = valordoprodu.replace(/"/g, ``);
      let valordoproduto = Number(valordopr);
       
       if(nomedoproduto !== null) {
         nomedp = nomedoproduto;
       } else {
         nomedp = `Sem nome`;
       }
                     admin.database().ref(id4).set({                
                  categorias: 0,
                  total: valordoproduto*agent.parameters.qtde+tot,
                  resumo:resum+ agent.parameters.qtde+`-`+nomedp+` - $`+parseFloat(valordoproduto).toFixed(2)+` - $`+parseFloat(valordoproduto*agent.parameters.qtde).toFixed(2)+  `@\n`,
});
     }
  if(adic !== null) {
       if(valordoprodu !== null) {
           agent.add(`✅ *Produto salvo com sucesso*  
Digite uma opção a seguir
------------------------------------------------
*(P)* Para pedir outro item 
*(F)* Para fechar pedido 
*(A)* Acrecentar adicional
*(S)* Sair `);
       }else {
agent.add(`❓ Produto não encontrado 
------------------------------------------------
*(V)* Voltar`);
       }
          } else {
            if(valordoprodu !== null) {
           agent.add(`✅ *Produto salvo com sucesso*  
Digite uma opção a seguir
------------------------------------------------
*(P)* Para pedir outro item 
*(F)* Para fechar pedido  
*(S)* Sair `);  
            }else {
          agent.add(`❓ Produto não encontrado 
------------------------------------------------
*(V)* Voltar`);
            }
          }
    });
    });
  }     

  function sair(agent) {   
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
        
                  admin.database().ref(id4).set({                
                  categorias:0,
   });     
            agent.add(`*Tudo bem você saiu* 
------------------------------------------------
Quando quiser realizar um pedido é só digitar *(P)* `);
      
   
  } 
  
   function fecharesumo(agent) {   
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
     
var repete;
     var repetee = agent.parameters.rep;     
    if(repetee > ``) {
     repete = (repetee.toLowerCase()); 
    }else{
     repete = 0; 
    }
     var novocod = agent.parameters.cod;
     
     if(novocod == null) {
       novocod = 0;
     }
     
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
      return admin.database().ref(id4+'cadastro').once("value").then((snapshot) => { 
          var nome = snapshot.child(`nome`).val();
     
      return admin.database().ref(id4).once("value").then((snapshot) => { 
           var resumo = snapshot.child(`resumo`).val();
           var resumofinal = snapshot.child(`resumofinal`).val();
           var resumoREP = snapshot.child(`resumoREP`).val();
           var cobratx = snapshot.child(`cobratx`).val();
           var totalfid = snapshot.child(`totalfid`).val();
        
           if(resumo !== null) {
                var resu = resumo.replace(/@/g,``);
           }  
           if(resumoREP !== null) {
                var resuREP = resumoREP.replace(/@/g,``);
           } 
        var rf = ``;
        if(resumofinal !== null) {
          rf = resumofinal;
        }
           var total = snapshot.child(`total`).val();
           var totalREP = snapshot.child(`totalREP`).val();
        
        return admin.database().ref(id4+'pontos').once("value").then((snapshot) => { 
             var pontos = snapshot.child(`pontos`).val();
          
        return admin.database().ref('autoDelivery').once("value").then((snapshot) => { 
          var codigos = snapshot.child(`codigos`).val();
          var taxas = snapshot.child(`taxa`).val();
          var ptslmt = snapshot.child(`ptslmt`).val();
          var desconto = snapshot.child(`ptsdesconto`).val();  
          var produto1 = snapshot.child('nome-promo'+repete).val();
          var produto2 = snapshot.child('nome-promo'+novocod).val();
          var tempo = snapshot.child('tempo').val();
      var t = 40;
            if(tempo !== null) { 
                t = tempo.replace(/"/g,``);
            }
if(resumofinal == null) {               
 if(repete.length == 4 || novocod.length == 4 ){         
   if (codigos.includes(repetee) && repetee !== 0) {
           return admin.database().ref(id4).once("value").then((snapshot) => { 
           var categorias = snapshot.child(`categorias`).val();
           var resumo = snapshot.child(`resumo`).val();
           var total = snapshot.child(`total`).val();
           
             
    agent.add(`*Promoção adicionada ao carrinho* 
Você adicionou: `+produto1+`  
------------------------------------------------ 

*(C)* Para continuar

*(SAIR)* Cancelar`);
                  admin.database().ref(id4).set({                
                  total: total,
                  resumo: resumo,
                  categorias: categorias,
                  cod: repetee,
   }); 
             });
   }else{
     if (codigos.includes(novocod) && novocod !== 0) {
       return admin.database().ref(id4).once("value").then((snapshot) => { 
           var categorias = snapshot.child(`categorias`).val();
           var resumo = snapshot.child(`resumo`).val();
           var total = snapshot.child(`total`).val();
           
             
    agent.add(`*Promoção adicionada ao carrinho* 
Você adicionou: `+produto2+`  
------------------------------------------------ 

*(C)* Para continuar

*(SAIR)* Cancelar`);
                  admin.database().ref(id4).set({                
                  total: total,
                  resumo: resumo,
                  categorias: categorias,
                  cod: novocod,
   }); 
             });
     }else{
       if(!isNaN(repete) && !isNaN(novocod))  {
       agent.add(` *Código inválido 
Insira o código novamente ou* 
-----------------------------------------
*(V)* Para voltar
*(SAIR)* Cancelar`);
       }
     }
   }
}else{
  if(nome !== null) { 
     if(ptslmt !== null) {
               var npont = ptslmt.replace(/"/g,``);
               var npont2 = Number(npont);
              
           
        if(pontos >= npont2) {
               var descont = desconto.replace(/"/g,``);
               var descontar = Number(descont);
               var pts = ptslmt.replace(/"/g,``);
               var p = Number(pts);
           if(repete == `rep`) {           
              if(taxas !== null) {
                var txx = taxas.replace(/"/g,``);
                let n = Number(txx);
                                                                                                
                   var totalfimm = total;                
                   if(cobratx == null) {
                     totalfimm = totalREP+n; 
                   }
                var ttfid = total;
                if(totalfid == null) {
                   ttfid = parseFloat(totalfimm-totalfimm*descontar/100).toFixed(2); 
                       }
                    if(resumoREP !== null) {                      
                 agent.add(`⭐ *Programa Fidelidade* 
Parabéns você atingiu *`+p+` pontos* 
------------------------------------------------ \n`+ resuREP +
`\n               Taxa de entrega $`+parseFloat(txx).toFixed(2)+`                                 
                              *Total R$`+parseFloat(totalfimm).toFixed(2)+`* 
                  ⭐ - `+descontar+`% seus pontos⭐ 
                          Você paga *R$`+ttfid+`* 
------------------------------------------------
Se estiver correto digite *(OK)* 👍
*(SAIR)* para cancelar`);
                  if(totalfid !== null) {
                  admin.database().ref(id4).set({                
                  total: ttfid,
                  resumo: resumoREP,
                  totalfid: totalfid,
                  cobratx: 1,  
                  });  
                  }else{
                  admin.database().ref(id4).set({                
                  total: ttfid,
                  resumo: resumoREP,
                  totalfid: totalfimm,
                  cobratx: 1,  
                  });  
                  }
                    } else {
               //agent.add(`❓ Nenhum pedido foi encontrado 
//------------------------------------------------
//Digite *(P)* para fazer um pedido`);
                      
                    }
  
                  } else {
                 var ttfid2 = total;
                if(totalfid == null) {
                   ttfid2 = parseFloat(totalREP-totalREP*descontar/100).toFixed(2); 
                       }
                    if(resumoREP !== null) {
                agent.add(`⭐ *Programa Fidelidade* 
Parabéns você atingiu *`+p+` pontos* 
------------------------------------------------ \n`+ resuREP +`  
                              *Total R$`+parseFloat(totalREP).toFixed(2)+`* 
                  ⭐ - `+descontar+`% seus pontos⭐ 
                            Você paga *R$`+ttfid2+`* 
------------------------------------------------
Se estiver correto digite *(OK)* 👍
*(SAIR)* para cancelar`);
                  if(totalfid !== null) {   
                  admin.database().ref(id4).set({                
                  total: ttfid2,
                  resumo: resumoREP,  
                  totalfid: totalfid,
                  }); 
                  }else{
                  admin.database().ref(id4).set({                
                  total: ttfid2,
                  resumo: resumoREP,
                  totalfid: totalREP,
                  });  
                  }
                    } else {
                //agent.add(`❓ Nenhum pedido foi encontrado 
//------------------------------------------------
//Digite *(V)* para fazer um pedido`);
                    }
                  }

          //FIM REPETE
           } else {
              if(taxas !== null) {
                var tx = taxas.replace(/"/g,``);
                let n = Number(tx);
                
                   var totalfim = total;                
                   if(cobratx == null) {
                     totalfim = total+n; 
                   }
                
                var ttfid3 = total;
                if(totalfid == null) {
                   ttfid3 = parseFloat(totalfim-totalfim*descontar/100).toFixed(2); 
                       }
                
                    if(resumo !== null) {
                 agent.add(`⭐ *Programa Fidelidade* 
Parabéns você atingiu *`+p+` pontos* 
------------------------------------------------ \n`+ resu +
`\n               Taxa de entrega $`+parseFloat(tx).toFixed(2)+`                                 
                               *Total R$`+parseFloat(totalfim).toFixed(2)+`* 
                 ⭐ - `+descontar+`% seus pontos⭐ 
                      Você paga *R$`+ttfid3+`* 
------------------------------------------------
Se estiver correto digite *(OK)* 👍
*(SAIR)* para cancelar`);
                  if(totalfid !== null) {   
                  admin.database().ref(id4).set({                
                  total: ttfid3,
                  resumo: resumo, 
                  totalfid: totalfid,
                  cobratx: 1,
                 }); 
                  }else{
                  admin.database().ref(id4).set({                
                  total: ttfid3,
                  resumo: resumo,
                  totalfid: totalfim,
                  cobratx: 1,
                 });   
                  }
                    } else {
               //agent.add(`❓ Nenhum pedido foi encontrado 
//------------------------------------------------
//Digite *(P)* para fazer um pedido`);
                    }

                  } else {
                var ttfid4 = total;
                if(totalfid == null) {
                   ttfid4 = parseFloat(total-total*descontar/100).toFixed(2); 
                       }
                    if(resumo !== null) {
                agent.add(`⭐ *Programa Fidelidade* 
Parabéns você atingiu *`+p+` pontos* 
------------------------------------------------ \n`+ resu +`  
                          *Total R$`+parseFloat(total).toFixed(2)+`*
                 ⭐ - `+descontar+`% seus pontos⭐ 
                     Você paga *R$`+ttfid4+`* 
------------------------------------------------
Se estiver correto digite *(OK)* 👍
*(SAIR)* para cancelar`);
                  if(totalfid !== null) {    
                  admin.database().ref(id4).set({                
                  total: ttfid4,
                  resumo: resumo,  
                  totalfid: totalfid,  
                  });
                  }else{
                  admin.database().ref(id4).set({                
                  total: ttfid4,
                  resumo: resumo,  
                  totalfid: total,  
                  });
                  }
                    } else {
                //agent.add(`❓ Nenhum pedido foi encontrado 
//------------------------------------------------
//Digite *(P)* para fazer um pedido`);
                    }
                  }
          
                     
           }
                  admin.database().ref(id4+'pontos').set({                
                  fid: `on`,
                  pontos: pontos,
   }); 
          //fim fidelidade
        }else {
          if(repete == `rep`) {           
              if(taxas !== null) {
                var txx2 = taxas.replace(/"/g,``);
                let n = Number(txx2);
                                                                                                
                   var totalfimm2 = total;                
                   if(cobratx == null) {
                     totalfimm2 = totalREP+n; 
                   }
                
                    if(resumoREP !== null) {                      
                 agent.add(`📋 *Seu pedido ficou assim* 
------------------------------------------------ \n`+ resuREP +
`\n               Taxa de entrega $`+parseFloat(txx2).toFixed(2)+`                                 
                              *Total R$`+parseFloat(totalfimm2).toFixed(2)+`* 
------------------------------------------------
Se estiver correto digite *(OK)* 👍
*(SAIR)* para cancelar
*(R)* Retirar _sem taxa_ `);
                  admin.database().ref(id4).set({                
                  total: totalfimm2,
                  resumo: resumoREP,  
                  cobratx: 1,  
   });    
                    } else {
               //agent.add(`❓ Nenhum pedido foi encontrado 
//------------------------------------------------
//Digite *(P)* para fazer um pedido`);
                    }

                  } else {
                    if(resumoREP !== null) {
                agent.add(`📋 *Seu pedido ficou assim* 
------------------------------------------------ \n`+ resuREP +`  
                              *Total R$`+parseFloat(totalREP).toFixed(2)+`* 
------------------------------------------------
Se estiver correto digite *(OK)* 👍
*(SAIR)* para cancelar`);
                  admin.database().ref(id4).set({                
                  total: totalREP, 
                  resumo: resumoREP,
   }); 
                    } else {
                //agent.add(`❓ Nenhum pedido foi encontrado 
//------------------------------------------------
//Digite *(V)* para fazer um pedido`);
                    }
                  }
            
          //FIM REPETE
            
           } else {
               if(taxas !== null) {
                var tx2 = taxas.replace(/"/g,``);
                let n = Number(tx2);

                   var totalfim2 = total;                
                   if(cobratx == null) {
                     totalfim2= total+n; 
                   }
                 
                    if(resumo !== null) {
                 agent.add(`📋 *Seu pedido ficou assim* 
------------------------------------------------ \n`+ resu +
`\n               Taxa de entrega $`+parseFloat(tx2).toFixed(2)+`                                 
                              *Total R$`+parseFloat(totalfim2).toFixed(2)+`* 
------------------------------------------------
Se estiver correto digite *(OK)* 👍
*(SAIR)* para cancelar
*(R)* Retirar _sem taxa_ `);
                  admin.database().ref(id4).set({                
                  total: totalfim2,
                  resumo: resumo, 
                  cobratx: 1,  
   });   
                    } else {
               //agent.add(`❓ Nenhum pedido foi encontrado 
//------------------------------------------------
//Digite *(P)* para fazer um pedido`);
                    }
 
                  } else {
                    if(resumo !== null) {
                agent.add(`📋 *Seu pedido ficou assim* 
------------------------------------------------ \n`+ resu +`  
                              *Total R$`+parseFloat(total).toFixed(2)+`* 
------------------------------------------------
Se estiver correto digite *(OK)* 👍
*(SAIR)* para cancelar`);
                  admin.database().ref(id4).set({                
                  total: total,
                  resumo: resumo, 
   }); 
                    } else {
                //agent.add(`❓ Nenhum pedido foi encontrado 
//------------------------------------------------
//Digite *(P)* para fazer um pedido`);
                    }
                  }
           }
        }
     } else {
       if(repete == `rep`) {           
              if(taxas !== null) {
                var txx3 = taxas.replace(/"/g,``);
                let n = Number(txx3); 
                
                   var totalfimm3 = total;                
                   if(cobratx == null) {
                     totalfimm3 = totalREP+n; 
                   }
                
                    if(resumoREP !== null) {                      
                 agent.add(`📋 *Seu pedido ficou assim* 
------------------------------------------------ \n`+ resuREP +
`\n               Taxa de entrega $`+parseFloat(txx3).toFixed(2)+`                                 
                              *Total R$`+parseFloat(totalfimm3).toFixed(2)+`* 
------------------------------------------------
Se estiver correto digite *(OK)* 👍
*(SAIR)* para cancelar
*(R)* Retirar _sem taxa_ `);
                  admin.database().ref(id4).set({                
                  total: totalfimm3,
                  resumo: resumoREP, 
                  cobratx: 1,  
   });    
                    } else {
               //agent.add(`❓ Nenhum pedido foi encontrado 
//------------------------------------------------
//Digite *(P)* para fazer um pedido`);
                    }

                  } else {
                    if(resumoREP !== null) {
                agent.add(`📋 *Seu pedido ficou assim* 
------------------------------------------------ \n`+ resuREP +`  
                              *Total R$`+parseFloat(totalREP).toFixed(2)+`* 
------------------------------------------------
Se estiver correto digite *(OK)* 👍
*(SAIR)* para cancelar`);
                  admin.database().ref(id4).set({                
                  total: totalREP,
                  resumo: resumoREP,  
   }); 
                    } else {
                //agent.add(`❓ Nenhum pedido foi encontrado 
//------------------------------------------------
//Digite *(V)* para fazer um pedido`);
                    }
                  }
          //FIM REPETE
           } else {
               if(taxas !== null) {
                var tx3 = taxas.replace(/"/g,``);
                let n = Number(tx3);
 
                   var totalfim3 = total;                
                   if(cobratx == null) {
                     totalfim3 = total+n; 
                   }
                 
                    if(resumo !== null) {
                 agent.add(`📋 *Seu pedido ficou assim* 
------------------------------------------------ \n`+ resu +
`\n               Taxa de entrega $`+parseFloat(tx3).toFixed(2)+`                                 
                              *Total R$`+parseFloat(totalfim3).toFixed(2)+`* 
------------------------------------------------
Se estiver correto digite *(OK)* 👍
*(SAIR)* para cancelar
*(R)* Retirar _sem taxa_ `);
                  admin.database().ref(id4).set({                
                  total: totalfim3,
                  resumo: resumo,  
                  cobratx: 1,  
   });    
                    } else {
               //agent.add(`❓ Nenhum pedido foi encontrado 
//------------------------------------------------
//Digite *(P)* para fazer um pedido`);
                    }

                  } else {
                    if(resumo !== null) {
                agent.add(`📋 *Seu pedido ficou assim* 
------------------------------------------------ \n`+ resu +`  
                              *Total R$`+parseFloat(total).toFixed(2)+`* 
------------------------------------------------
Se estiver correto digite *(OK)* 👍
*(SAIR)* para cancelar`);
                  admin.database().ref(id4).set({                
                  total: total,
                  resumo: resumo,  
   }); 
                    } else {
                //agent.add(`❓ Nenhum pedido foi encontrado 
//------------------------------------------------
//Digite *(P)* para fazer um pedido`);
                    }
                  }
           }                       
		   
     }
}else {
  if(resumo !== null) {
  agent.add(`Você prefere receber o pedido no seu endereço ou retirar em nosso estabelecimento?
-------------------------------------- 
*(R)* Vou retirar no balcão
*(E)* Entregar no meu endereço tempo estimado *`+tempo+` minutos* `);
                  admin.database().ref(id4).set({                
                  total: total,
                  resumo: resumo,  
                  cad: 1,  
   }); 
  }
}
}
}else{
    agent.add(`Escolha uma opção válida
-------------------------------------- 
*(FIM)* Finalizar pedido
*(SAIR)* Cancelar pedido`);
}
      });            
   });
        });  
               }); 
      
  } 
  
     function mostracadastro(agent) {   
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
    return admin.database().ref('autoDelivery').once("value").then((snapshot) => { 
     var tempo = snapshot.child('tempo').val();
      var t = 40;
            if(tempo !== null) { 
                t = tempo.replace(/"/g,``);
            }
              
      
   return admin.database().ref(id4).once("value").then((snapshot) => { 
     var resu = snapshot.child('resumo').val();
         
      return admin.database().ref(id4+'cadastro').once("value").then((snapshot) => { 
           var endereco = snapshot.child('endereco').val();
        
if(resu !== null) {
          if(endereco !== null) {
                 agent.add(`🏠 Confirmação de endereço  
*`+ endereco+`* 
------------------------------------------------

*(SIM)* Entregar nesse endereço tempo estimado *`+t+` minutos*  
-----------------------------------------------
*(NOVO)* Novo endereço

*(R)* Vou *retirar* no balcão
*(L)* Vou comer no *local*`);
                 } else {
                     if(id4.includes("+")) {
          agent.add(`Você prefere receber o pedido no seu endereço ou retirar em nosso estabelecimento?
-------------------------------------- 
*(R)* Vou retirar no balcão
*(E)* Receber no meu endereço tempo estimado `+t+` minutos`);
                     }else { 
          agent.add(`Seu nome agora esta em nossa *agenda de contatos* 
Por isso precisamos do seu cadastro *final* 
-------------------------------------- 
Digite *(CAD)* 
Vamos fazer seu cadastro ✍`);   
                 }
                 }
             }
        });   
   });
      });
  } 
  
 function fazcadastro(agent) {   
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
     const ender = agent.parameters.endereco;
     const bairro = agent.parameters.bairro;
         
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
         
         var end = ender.replace(/:/g, ``);
         var endd = end.replace(/;/g, ``);
         var ender4 = endd.replace(/,/g, ``);
         var ender5 = ender4.replace(/#/g, ``);
         var ender6 = ender5.replace(/%/g, ``);
         var ender7 = ender6.replace(/\(/g, ``);
         var enderee = ender7.replace(/\)/g, ``);
         var enderekk = enderee.replace(/\./g, ``);
         var endered = enderekk.replace(/\//g, ``);
         var enderev = endered.replace(/\\/g, ``);
         var endereff = enderev.replace(/\[/g, ``);
         var endere54 = endereff.replace(/\]/g, ``);
         var endere = endere54.replace(/\$/g, ``);
         
         var b = bairro.replace(/:/g, ``);
         var b2 = b.replace(/;/g, ``);
         var b3 = b2.replace(/,/g, ``);
         var b4 = b3.replace(/#/g, ``);
         var b5 = b4.replace(/%/g, ``);
         var b6 = b5.replace(/\(/g, ``);
         var b7 = b6.replace(/\)/g, ``);
         var b8 = b7.replace(/\./g, ``);
         var b9 = b8.replace(/\//g, ``);
         var b10 = b9.replace(/\\/g, ``);
         var b11 = b10.replace(/\[/g, ``);
         var b12y = b11.replace(/\]/g, ``);
         var b12 = b12y.replace(/\$/g, ``);
         
           var celular = id4.slice(1, 14);     
         
     var espaco = ` `;

       
               admin.database().ref(id4+'cadastro').set({                
                  nome:agent.parameters.nome,
                  endereco: `${endere}${espaco} ${b12}`,
                  celular: agent.parameters.cel,  
                 });
         return admin.database().ref('autoDelivery').once("value").then((snapshot) => {
           var taxa = snapshot.child('taxa').val();
              
         return admin.database().ref(id4).once("value").then((snapshot) => {
           var total = snapshot.child('total').val();
           var resumo = snapshot.child('resumo').val();
           var cad = snapshot.child('cad').val();
           var incluso = ``;
           var semtx = ``;
           if(cad !== null && taxa !== null) {
                var tax = taxa.replace(/"/g,``);
                let tx = Number(tax);
                total = total+tx;
                incluso = `\n Incluso taxa de entrega R$`+parseFloat(tx).toFixed(2);
                semtx = `_sem taxa_`;
           }
           
                 agent.add(`💾 *Cadastro realizado com sucesso* 
------------------------------------------------------
O pedido esta com total de *R$`+parseFloat(total).toFixed(2)+`* `+incluso+`   
------------------------------------------------------
Escolha a forma de pagamento 
*(D)* Dinheiro 💵
*(C)* Cartão 💳
-----------------------
*(R)* Vou *retirar* no balcão `+semtx+` 
*(L)* Vou comer no *local* `+semtx);
                  admin.database().ref(id4).set({                
                  total: total,
                  resumo: resumo,
                  cad: 1,  
   }); 
           });
           });
       }  
  
  
  function formadepagamento(agent) {   
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
         
      return admin.database().ref(id4).once("value").then((snapshot) => { 
           var total = snapshot.child('total').val();
                  if(total !== null) {
agent.add(`O pedido esta com total de *R$`+parseFloat(total).toFixed(2)+`* 
Escolha a forma de pagamento 
------------------------------------ 
*(D)* Dinheiro 💵
*(C)* Cartão 💳`);
                  }else {
//agent.add(`❌ Nenhum pedido encontrado   
//------------------------------------ 
//Digite *(P)* para fazer um pedido`);  
                  }
   });    
  } 
  
  function pagadinheiro(agent) {   
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
   
         var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
   return admin.database().ref(id4+'pontos').once("value").then((snapshot) => { 
        var fid = snapshot.child('fid').val();
     var avfid = `                      `;
     if(fid !== null) {
       avfid = `⭐-Desconto `;
     }
                           
      return admin.database().ref(id4).once("value").then((snapshot) => {
        var total = snapshot.child('total').val();
        var resum = snapshot.child('resumo').val();
        var totalfid = snapshot.child('totalfid').val();
        var resp = agent.parameters.trocos;
        var resu = resum.replace(/@/g,``);
        
              if(isNaN(resp) === false) {
        return admin.database().ref(id4+'cadastro').once("value").then((snapshot) => { 
          var cel = snapshot.child('celular').val();
          var ender = snapshot.child('endereco').val();
          var name = snapshot.child('nome').val();          
          
        return admin.database().ref('autoDelivery').once("value").then((snapshot) => { 
          var taxas = snapshot.child('taxa').val();
              if(taxas !== null) { 
                var tx = taxas.replace(/"/g,``);
                let n = Number(tx);
                 agent.add(`Digite *Fim* se estiver correto 
--------------------------------------------- 
`+resu+
                           
` \n                                Taxas $`+parseFloat(n).toFixed(2)+`   
`+avfid+`  *Total R$`+parseFloat(total).toFixed(2)+`* \n `+ 
`--------------------------------------------- 
Pagamento *dinheiro* \n`+
`Troco p/ *` + resp +`.00* \n`+    
`Endereço para entrega \n *`+ender+`* 
nome: *`+name+`* 
Telefone: *`+cel+`* 
----------------------------------------------
Digite *(FIM)* para confirmar \n 
Digite *(OBS)* P/ escrever observação
*(SAIR)* Para cancelar`);
                if(fid !== null) {
                  admin.database().ref(id4).set({                
                  resumofinal: resum+` \n Gerado desconto P. Fidelidade \n %`+total+`%dinheiro%`+resp+` env. `+parseFloat(resp-total).toFixed(2)+`%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  total: total,
                  cobratx: 1,
                  totalfid: totalfid,  
                });   
                }else{
                 admin.database().ref(id4).set({                
                  resumofinal: resum+`%`+total+`%dinheiro%`+resp+` env. `+parseFloat(resp-total).toFixed(2)+`%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,
                  total: total,
                });  
                }
                
              }else {
                 agent.add(`Digite *Fim* se estiver correto 
--------------------------------------------- 
`+resu+
                           
` \n `+avfid+`  *Total R$`+parseFloat(total).toFixed(2)+`* \n `+ 
`--------------------------------------------- 
Pagamento *dinheiro* \n`+
`Troco p/ *` + resp +`.00* \n`+    
`Endereço para entrega \n *`+ender+`* 
nome: *`+name+`* 
Telefone: *`+cel+`* 
----------------------------------------------
Digite *(FIM)* para confirmar \n 
Digite *(OBS)* P/ escrever observação
*(SAIR)* Para cancelar`);
                if(fid !== null) {
                  admin.database().ref(id4).set({                
                  resumofinal: resum+` \n Gerado desconto P. Fidelidade \n %`+total+`%dinheiro%`+resp+` env. `+parseFloat(resp-total).toFixed(2)+`%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,
                  total: total,
                  totalfid: totalfid,  
                  });
                }else {
                  admin.database().ref(id4).set({                
                  resumofinal: resum+`%`+total+`%dinheiro%`+resp+` env. `+parseFloat(resp-total).toFixed(2)+`%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,
                  total: total,
                  });
                }
              }
          }); 
            }); 
              } else {
        return admin.database().ref(id4+'cadastro').once("value").then((snapshot) => { 
          var cel = snapshot.child('celular').val();
          var ender = snapshot.child('endereco').val();
          var name = snapshot.child('nome').val();           
          
        return admin.database().ref('autoDelivery').once("value").then((snapshot) => { 
          var taxas = snapshot.child('taxa').val();

              if(taxas !== null) {  
                var tx = taxas.replace(/"/g,``);
                let n = Number(tx);
                 agent.add(`Digite *Fim* se estiver correto 
--------------------------------------------- 
`+resu+
                           
` \n                               Taxas $`+parseFloat(n).toFixed(2)+`  
`+avfid+`  *Total R$`+parseFloat(total).toFixed(2)+`* \n `+ 
`--------------------------------------------- 
Pagamento *dinheiro* \n`+  
`Endereço para entrega \n *`+ender+`* 
nome: *`+name+`* 
Telefone: *`+cel+`* 
----------------------------------------------
Digite *(FIM)* para confirmar \n 
Digite *(OBS)* P/ escrever observação
*(SAIR)* Para cancelar`);
                if(fid !== null) {
                  admin.database().ref(id4).set({                
                  resumofinal: resum+` \n Gerado desconto P. Fidelidade \n %`+total+`%dinheiro%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,
                  total: total,
                  totalfid: totalfid,  
                  });
                }else{
                  admin.database().ref(id4).set({                
                  resumofinal: resum+`%`+total+`%dinheiro%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,
                  total: total,
                  });
                }
              }else {
                 agent.add(`Digite *Fim* se estiver correto 
--------------------------------------------- 
`+resu+
                           
` \n `+avfid+`  *Total R$`+parseFloat(total).toFixed(2)+`* \n `+ 
`--------------------------------------------- 
Pagamento *dinheiro* \n`+  
`Endereço para entrega \n *`+ender+`* 
nome: *`+name+`* 
Telefone: *`+cel+`* 
----------------------------------------------
Digite *(FIM)* para confirmar \n 
Digite *(OBS)* P/ escrever observação
*(SAIR)* Para cancelar`);
                if(fid !== null) {
                  admin.database().ref(id4).set({                
                  resumofinal: resum+` \n Gerado desconto P. Fidelidade \n %`+total+`%dinheiro%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,  
                  total: total,
                  totalfid: totalfid,  
                  });
                }else {
                  admin.database().ref(id4).set({                
                  resumofinal: resum+`%`+total+`%dinheiro%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,  
                  total: total,
                  }); 
                }
              }
          }); 
                  }); 
              }
      });  
     });
    
  }
  
    function pgdinheiro(agent) {   
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
      
     return admin.database().ref(id4+'pontos').once("value").then((snapshot) => { 
        var fid = snapshot.child('fid').val();
     var avfid = `                     `;
     if(fid !== null) {
       avfid = `⭐-Desconto `;
     }
      return admin.database().ref(id4).once("value").then((snapshot) => { 
        var total = snapshot.child('total').val();
        var resum = snapshot.child('resumo').val();
        var totalfid = snapshot.child('totalfid').val();
        var resp = agent.parameters.troco;
         var resu = resum.replace(/@/g,``);
        
              if(isNaN(resp) === false) {
        return admin.database().ref(id4+'cadastro').once("value").then((snapshot) => { 
          var cel = snapshot.child('celular').val();
          var ender = snapshot.child('endereco').val();
          var name = snapshot.child('nome').val();          
          
        return admin.database().ref('autoDelivery').once("value").then((snapshot) => { 
          var taxas = snapshot.child('taxa').val();
              if(taxas !== null) {    
                var tx = taxas.replace(/"/g,``);
                let n = Number(tx);
                 agent.add(`Digite *Fim* se estiver correto 
--------------------------------------------- 
`+resu+
                           
` \n                                Taxas $`+parseFloat(n).toFixed(2)+` 
`+avfid+`   *Total R$`+parseFloat(total).toFixed(2)+`* \n `+ 
`--------------------------------------------- 
Pagamento *dinheiro* \n`+
`Troco p/ *` + resp+`.00* \n`+     
`Endereço para entrega \n *`+ender+`* 
nome: *`+name+`* 
Telefone: *`+cel+`* 
----------------------------------------------
Digite *(FIM)* para confirmar \n 
Digite *(OBS)* P/ escrever observação
*(SAIR)* Para cancelar`);
                if(fid !== null) {
                  admin.database().ref(id4).set({                
                  resumofinal: resum+` \n Gerado desconto P. Fidelidade \n %`+total+`%dinheiro%`+resp+` env. `+parseFloat(resp-total).toFixed(2)+`%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1, 
                  total: total,
                  totalfid: totalfid,  
                  });
                }else{
                  admin.database().ref(id4).set({                
                  resumofinal: resum+`%`+total+`%dinheiro%`+resp+` env. `+parseFloat(resp-total).toFixed(2)+`%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,  
                  total: total,
                  });
                }
              }else {
                 agent.add(`Digite *Fim* se estiver correto 
--------------------------------------------- 
`+resu+
                           
` \n  `+avfid+`   *Total R$`+parseFloat(total).toFixed(2)+`* \n `+ 
`--------------------------------------------- 
Pagamento *dinheiro* \n`+
`Troco p/ *` + resp+`.00* \n`+     
`Endereço para entrega \n *`+ender+`* 
nome: *`+name+`* 
Telefone: *`+cel+`* 
----------------------------------------------
Digite *(FIM)* para confirmar \n 
Digite *(OBS)* P/ escrever observação    
*(SAIR)* Para cancelar`); 
                if(fid !== null) {
                  admin.database().ref(id4).set({                
                  resumofinal: resum+` \n Gerado desconto P. Fidelidade \n %`+total+`%dinheiro%`+resp+` env. `+parseFloat(resp-total).toFixed(2)+`%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1, 
                  total: total,
                  totalfid: totalfid,  
                  });
                }else{
                  admin.database().ref(id4).set({                
                  resumofinal: resum+`%`+total+`%dinheiro%`+resp+` env. `+parseFloat(resp-total).toFixed(2)+`%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1, 
                  total: total,
                  }); 
                }
              }
          }); 
            }); 
              } else {
        return admin.database().ref(id4+'cadastro').once("value").then((snapshot) => { 
          var cel = snapshot.child('celular').val();
          var ender = snapshot.child('endereco').val();
          var name = snapshot.child('nome').val();           
          
        return admin.database().ref('autoDelivery').once("value").then((snapshot) => { 
          var taxas = snapshot.child('taxa').val();
              if(taxas !== null) {   
                var tx = taxas.replace(/"/g,``);
                let n = Number(tx);
                 agent.add(`Digite *Fim* se estiver correto 
--------------------------------------------- 
`+resu+
                           
` \n                                Taxas $`+parseFloat(n).toFixed(2)+`  
`+avfid+`  *Total R$`+parseFloat(total).toFixed(2)+`* \n `+ 
`--------------------------------------------- 
Pagamento *dinheiro* \n`+   
`Endereço para entrega \n *`+ender+`* 
nome: *`+name+`* 
Telefone: *`+cel+`* 
----------------------------------------------
Digite *(FIM)* para confirmar \n 
Digite *(OBS)* P/ escrever observação
*(SAIR)* Para cancelar`);
                 if(fid !== null) {
                  admin.database().ref(id4).set({                
                  resumofinal: resum+` \n Gerado desconto P. Fidelidade \n %`+total+`%dinheiro%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,  
                  total: total,
                  totalfid: totalfid,  
                  });
                 }else{
                  admin.database().ref(id4).set({                
                  resumofinal: resum+`%`+total+`%dinheiro%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,  
                  total: total,
                  });  
                 }
              }else {
            agent.add(`Digite *Fim* se estiver correto
--------------------------------------------- 
`+resu+
                           
` \n  `+avfid+`   *Total R$`+parseFloat(total).toFixed(2)+`* \n `+ 
`--------------------------------------------- 
Pagamento *dinheiro* \n`+   
`Endereço para entrega \n *`+ender+`* 
nome: *`+name+`* 
Telefone: *`+cel+`* 
----------------------------------------------
Digite *(FIM)* para confirmar \n 
Digite *(OBS)* P/ escrever observação
*(SAIR)* Para cancelar`); 
                if(fid !== null) {
                  admin.database().ref(id4).set({                
                  resumofinal: resum+` \n Gerado desconto P. Fidelidade \n %`+total+`%dinheiro%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,  
                  total: total,
                  totalfid: totalfid,  
                  });
                }else{
                  admin.database().ref(id4).set({                
                  resumofinal: resum+`%`+total+`%dinheiro%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1, 
                  total: total,
                  });
                }
              }
          }); 
                  }); 
              }
      }); 
       });     
  } 
  
    function pagacartao(agent) {   
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
      return admin.database().ref(id4+'pontos').once("value").then((snapshot) => { 
        var fid = snapshot.child('fid').val();
          var avfid = `                    `;
     if(fid !== null) {
       avfid = `⭐-Desconto `;
     }
      return admin.database().ref(id4).once("value").then((snapshot) => { 
        var total = snapshot.child('total').val();
        var resum = snapshot.child('resumo').val();
        var totalfid = snapshot.child('totalfid').val();
         var resu = resum.replace(/@/g,``);
        
        return admin.database().ref(id4+'cadastro').once("value").then((snapshot) => { 
          var cel = snapshot.child('celular').val();
          var ender = snapshot.child('endereco').val();
          var name = snapshot.child('nome').val();          
          
        return admin.database().ref('autoDelivery').once("value").then((snapshot) => { 
          var taxas = snapshot.child('taxa').val();

              if(taxas !== null) { 
                var tx = taxas.replace(/"/g,``);
                let n = Number(tx);
                 agent.add(`Digite *Fim* se estiver correto 
--------------------------------------------- 
`+resu+
                           
` \n                              Taxas $`+parseFloat(n).toFixed(2)+`   
`+avfid+`   *Total R$`+parseFloat(total).toFixed(2)+`* \n `+ 
`--------------------------------------------- 
Pagamento *cartão* \n`+   
`Endereço para entrega \n *`+ender+`* 
nome: *`+name+`* 
Telefone: *`+cel+`* 
----------------------------------------------
Digite *(FIM)* para confirmar \n 
Digite *(OBS)* P/ escrever observação
*(SAIR)* Para cancelar`);
                if(fid !== null) {
                  admin.database().ref(id4).set({                
                  resumofinal: resum+` \n Gerado desconto P. Fidelidade \n %`+total+`%cartão%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,  
                  total: total,
                  totalfid: totalfid,  
                  });
                }else{
                  admin.database().ref(id4).set({                
                  resumofinal: resum+`%`+total+`%cartão%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,  
                  total: total,
                  });
                }
              }else {
               agent.add(`Digite *Fim* se estiver correto 
--------------------------------------------- 
`+resu+
                           
` \n  `+avfid+`   *Total R$`+parseFloat(total).toFixed(2)+`* \n `+ 
`--------------------------------------------- 
Pagamento *cartão* \n`+   
`Endereço para entrega \n *`+ender+`* 
nome: *`+name+`* 
Telefone: *`+cel+`* 
----------------------------------------------
Digite *(FIM)* para confirmar \n 
Digite *(OBS)* P/ escrever observação
*(SAIR)* Para cancelar`);
                if(fid !== null) {
                  admin.database().ref(id4).set({                
                  resumofinal: resum+` \n Gerado desconto P. Fidelidade \n %`+total+`%cartão%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1, 
                  total: total,
                  totalfid: totalfid,  
                 });
                }else{
                  admin.database().ref(id4).set({                
                  resumofinal: resum+`%`+total+`%cartão%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,  
                  total: total,
                 });
                }
              }
          }); 
 });         
  }); 
        }); 
 }
  
      function pgcartao(agent) {   
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
     
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
        
        return admin.database().ref(id4+'pontos').once("value").then((snapshot) => { 
        var fid = snapshot.child('fid').val();
                  var avfid = `                     `;
     if(fid !== null) {
       avfid = `⭐-Desconto `;
     }
      return admin.database().ref(id4).once("value").then((snapshot) => { 
        var total = snapshot.child('total').val();
        var resum = snapshot.child('resumo').val();
        var totalfid = snapshot.child('totalfid').val();
         var resu = resum.replace(/@/g,``);
        
        return admin.database().ref(id4+'cadastro').once("value").then((snapshot) => { 
          var cel = snapshot.child('celular').val();
          var ender = snapshot.child('endereco').val();
          var name = snapshot.child('nome').val();  
       
        return admin.database().ref('autoDelivery').once("value").then((snapshot) => { 
          var taxas = snapshot.child('taxa').val();
              if(taxas !== null) {  
                var tx = taxas.replace(/"/g,``);
                let n = Number(tx);
                 agent.add(`Digite *Fim* se estiver correto 
--------------------------------------------- 
`+resu+
                           
` \n                               Taxas $`+parseFloat(n).toFixed(2)+`   
`+avfid+`   *Total R$`+parseFloat(total).toFixed(2)+`* \n `+ 
`--------------------------------------------- 
Pagamento *cartão* \n`+   
`Endereço para entrega \n *`+ender+`* 
nome: *`+name+`* 
Telefone: *`+cel+`* 
----------------------------------------------
Digite *(FIM)* para confirmar \n 
Digite *(OBS)* P/ escrever observação
*(SAIR)* Para cancelar`);
                if(fid !== null) {
                  admin.database().ref(id4).set({                
                  resumofinal: resum+` \n Gerado desconto P. Fidelidade \n %`+total+`%cartão%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,  
                  total: total,
                  totalfid: totalfid,  
                  });
                }else{
                  admin.database().ref(id4).set({                
                  resumofinal: resum+`%`+total+`%cartão%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,  
                  total: total,
                  });  
                }
              }else {
                 agent.add(`Digite *Fim* se estiver correto 
--------------------------------------------- 
`+resu+
                           
` \n  `+avfid+`   *Total R$`+parseFloat(total).toFixed(2)+`* \n `+ 
`--------------------------------------------- 
Pagamento *cartão* \n`+   
`Endereço para entrega \n *`+ender+`* 
nome: *`+name+`* 
Telefone: *`+cel+`* 
----------------------------------------------
Digite *(FIM)* para confirmar \n 
Digite *(OBS)* P/ escrever observação
*(SAIR)* Para cancelar`);
                if(fid !== null) {
                  admin.database().ref(id4).set({  
                  resumofinal: resum+` \n Gerado desconto P. Fidelidade \n %`+total+`%cartão%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,  
                  total: total,
                  totalfid: totalfid,  
                  });
                }else{
                  admin.database().ref(id4).set({  
                  resumofinal: resum+`%`+total+`%cartão%`+ender+`%`+cel+`%`+name,
                  resumo:  resum,
                  cobratx: 1,
                  total: total,
                  });
                }
              }
          }); 
 });         
  }); 
          }); 
 }   
  
        function atendimento(agent) { 
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);

        return admin.database().ref('autoDelivery').once("value").then((snapshot) => {
          var fixo = snapshot.child('telefone').val();
        //agent.add(`☎ Por favor entre em contato com nosso telefone fixo `+fixo+
//` Ou aguarde um momento`);
          admin.database().ref('ate').set({                
                  atende: `on`,  
                  cel: id4,
  
                       });   
                 admin.database().ref(id4).set({ 
                 categorias: 0,  

 });

      }); 
 }  
  
        function inicio(agent) {   
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
          
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
      return admin.database().ref('autoDelivery').once("value").then((snapshot) => { 
        let promo = snapshot.child('promo').val();
        let pontos = snapshot.child('ptsdesconto').val();

        var avisopts = ``;
        if(pontos !== null) {
          avisopts = `⭐ _Peça com o sistema automático acumule pontos e ganhe descontos exclusivos aproveite_ ⭐`;
        }
      return admin.database().ref(id4+'cadastro').once("value").then((snapshot) => { 
        var name = snapshot.child('nome').val();
            if(name !== null) {
              agent.add(`*`+name+ `* bem vindo(a) 👋 
---------------------------------------------------------
`+avisopts+ `
Digite *PEDIR* (Muito mais rápido) 
---------------------------------------------------------
Digite *ATENDIMENTO* para esperar atendente`);
                           if(promo !== null) {
               agent.add(`Ou insira um *código promocional* 😉`);
             }
            } else{
             agent.add(`*Bem vindo(a)* 👋 
---------------------------------------------------------
`+avisopts+ `
Digite *PEDIR* (Muito mais rápido) 
---------------------------------------------------------
Digite *ATENDIMENTO* para esperar atendente`);
             if(promo !== null) {
               agent.add(`Ou insira um *código promocional* 😉`);
             }
              }
        return admin.database().ref(id4).once("value").then((snapshot) => { 
          var resumoREP = snapshot.child('resumoREP').val();
          var totalREP = snapshot.child('totalREP').val();
          
                 if(resumoREP !== null) {
                 admin.database().ref(id4).set({ 
                 resumoREP: resumoREP,
                 totalREP: totalREP,
                   });
                 }else {
                 admin.database().ref(id4).set({ 
                 categorias: 0,
                   });
                 }
          
             });
        });
        });
 }
  
   function adiciona(agent) {   

           return admin.database().ref('autoDelivery').once("value").then((snapshot) => { 
        var adic = snapshot.child('adicionais').val();
        var tot = snapshot.child('total').val();

             if(adic !== null) {
        var most = adic.replace(/&/g, `\n`);
        var mostra = most.replace(/"/g, ``);
               
               agent.add(`*Lista de adicionais*
 🔢 *Por favor esolha um item de cada vez*
----------------------------------------------\n`+mostra+` 
*(V)* Para voltar ⤴`);

             } else {
              agent.add(`❌ *No momento estamos com a lista de adicionais vazia*`); 

             }
    });
 }
  
     function escolhaadiciona(agent) {   
  const digitou = agent.parameters.adicional;
  const qtde = agent.parameters.qtdeadic;
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);   
     
     return admin.database().ref(id4).once("value").then((snapshot) => { 
        var resum = snapshot.child('resumo').val();
         var total = snapshot.child('total').val();
       
          return admin.database().ref('autoDelivery').once("value").then((snapshot) => { 
           var valordoad = snapshot.child(`valor-adic`+digitou).val();
             var nomedoadic = snapshot.child(`nome-adic`+digitou).val();            

            if(valordoad !== null) {
               var valordo = valordoad.replace(/"/g, ``);
               let valordoadic = Number(valordo);
              
              if(isNaN(digitou) === false) {
                admin.database().ref(id4).set({                
                  total: valordoadic+total,
                  resumo: resum+`+ Adic.`+nomedoadic+`---$`+parseFloat(valordoadic).toFixed(2)+`@\n`,
  
                       });   
                                             agent.add(`✅ *Produto salvo com sucesso*  
Digite uma opção a seguir
------------------------------------------------
*(P)* Para pedir outro item 
*(F)* Para fechar pedido 
*(A)* Acrecentar adicional
*(S)* Sair `);  
             } else {
                 agent.add(`✅ *Produto salvo com sucesso*  
Digite uma opção a seguir
------------------------------------------------
*(P)* Para pedir outro item 
*(F)* Para fechar pedido 
*(A)* Acrecentar adicional 
*(S)* Sair `);
             }
            }else {
                               agent.add(`❌ *Escolha uma opção*   
------------------------------------------------
*(P)* Para pedir outro item 
*(F)* Para fechar pedido 
*(A)* Acrecentar adicional
*(S)* Sair `);
            }
    });
   });
 }
  
     function observacoes(agent) {   
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
       
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
       
       const digitou = agent.parameters.obs;
       
           return admin.database().ref(id4).once("value").then((snapshot) => { 
              var resufinal = snapshot.child('resumofinal').val();
             var resum = snapshot.child('resumo').val();
             var tot = snapshot.child('total').val();
             var totfid = snapshot.child('totalfid').val();
             if(resufinal !== null) {
               agent.add(`Anotei digite *(FIM)* para finalizar`);
                 admin.database().ref(id4).set({
                 resumo: resum,  
                 resumofinal: resufinal,
                 OBS: digitou,  
                 total: tot, 
                 totalfid: totfid, 

 });
               
             } else {
               agent.add(`❌ *Ops você não fez o pedido* \n
 Digite *(P)* para pedir`);
             }
   });
 }
  
      function promocoes(agent) {
       //let sessionId = agent.session;
        //var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4); 
          //   var id = idcliente.replace(`.`, ``);
     //var id2 = id.replace(`#`, ``);
    // var id3 = id2.replace(`$`, ``);
     //var id4 = id3.replace(`,`, ``);
        
      return admin.database().ref('autoDelivery').once("value").then((snapshot) => {  
      var cate1 = snapshot.child("cat1").val();
      var cate2 = snapshot.child("cat2").val();
      var cate3 = snapshot.child("cat3").val();
      var cate4 = snapshot.child("cat4").val();
      var cate5 = snapshot.child("cat5").val();
      var promo = snapshot.child('promo').val();

        if(promo !== null) {
        var mostra2 = promo.replace(/"/g, ``);
          var mostra5 = mostra2.replace(/,/g, ``);
          var mostra8 = mostra5.replace(/:/g, ``);
          var mostra9 = mostra8.replace(/;/g, ``);
          var mostra1 = mostra9.replace(/&/g, `\n`);
        agent.add(`🤩 Digite o número do produto da lista 
*Escolha um item de cada vez*  
-------------------------------------------- \n`+ mostra1+` 
*(V)* Para voltar ⤴`);      
        } else {
        agent.add(`❌ No momento estamos sem promoções ativas 
--------------------------------------------
Digite *(V)* para voltar ⤴`);    
        }
    });
    }
  
  function gravapromo(agent) {
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
    
      var digitou = agent.parameters.promonumero;
      var qtdecode = agent.parameters.qtdecode;
      
      return admin.database().ref(id4).once("value").then((snapshot) => { 
           var categ = snapshot.child(`categorias`).val();
           var tot = snapshot.child(`total`).val();
           var resum = snapshot.child(`resumo`).val();
           var codigo = snapshot.child(`cod`).val();
        if(tot == null) {
        tot = 0;
        }
        if(resum == null) {
        resum = ``;
        }
        
        var nomedoproduto0;
        var valor;
    return admin.database().ref('autoDelivery').once("value").then((snapshot) => {
     if(qtdecode == null) {      
       valor = snapshot.child(`valor-promo`+digitou).val(); 
     }else{
       valor = snapshot.child(`valor-promo`+codigo).val(); 
     }
     if(qtdecode == null) {
       nomedoproduto0 = snapshot.child(`nome-promo`+digitou).val();
     }else{
       nomedoproduto0 = snapshot.child(`nome-promo`+codigo).val();
     }
       var adic = snapshot.child('adicionais').val();
     
if(valor !== null) { 
       var valor2 = valor.replace(/"/g, ``); 
       let valordoproduto = Number(valor2);
     var nomedoproduto1 = nomedoproduto0.replace(/;/g, ``);
     var nomedoproduto2 = nomedoproduto1.replace(/:/g, ``);
     var nomedoproduto3 = nomedoproduto2.replace(/,/g, ``); 
     var nomedoproduto4 = nomedoproduto3.replace(`$`, ``);
     var nomedoproduto5 = nomedoproduto4.replace(/#/g, ``);
     var nomedoproduto6 = nomedoproduto5.replace(/%/g, ``);
     var nomedoproduto7 = nomedoproduto6.replace(`.`, ``);
     var nomedoproduto8 = nomedoproduto7.replace(/\//g, ``);
     var nomedoproduto = nomedoproduto8.replace(/\\/g, ``);      
       
if(adic !== null) {
           agent.add(`✅ *Produto salvo com sucesso*  
Digite uma opção a seguir
------------------------------------------------
*(P)* Para pedir outro item 
*(F)* Para fechar pedido 
*(A)* Acrecentar adicional
---------------
*(S)* Sair `);
          } else {
           agent.add(`✅ *Produto salvo com sucesso*  
Digite uma opção a seguir
------------------------------------------------
*(P)* Para pedir outro item 
*(F)* Para fechar pedido  
---------------
*(S)* Sair `); 
   
          }
  if(qtdecode == null) {
                  admin.database().ref(id4).set({                
                  categorias: 0,
                  total: valordoproduto*agent.parameters.qtdepromo+tot,
                  resumo:resum+ agent.parameters.qtdepromo+`-`+nomedoproduto+` - $`+parseFloat(valordoproduto).toFixed(2)+` - $`+parseFloat(valordoproduto*agent.parameters.qtdepromo).toFixed(2)+  `@\n`,
});
  }else{
                  admin.database().ref(id4).set({                
                  categorias: 0,
                  total: valordoproduto*agent.parameters.qtdecode+tot,
                  resumo:resum+ agent.parameters.qtdecode+`-`+nomedoproduto+` - $`+parseFloat(valordoproduto).toFixed(2)+` - $`+parseFloat(valordoproduto*agent.parameters.qtdecode).toFixed(2)+  `@\n`,
});
  }
        }else {
   agent.add(`❌ Produto não encontrado 
---------------------
*(V)* Para voltar `); 
        }
    });
    });
      
  } 
                                                                
  
       function verdesc(agent) {
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
         
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
         
       const digitou = agent.parameters.desc;
       return admin.database().ref(id4).once("value").then((snapshot) => { 
         var cate = snapshot.child('categorias').val();
         
           return admin.database().ref('autoDelivery').once("value").then((snapshot) => { 
              var desc = snapshot.child(`desc_c`+cate+`p`+digitou).val();
             if(desc !== null) {
               agent.add(`*`+desc+`* 
-----------------------------------------
Digite o número do item para pedir 🔢
*(D,Nº)* Ver detalhes de outro item 
*(V)* Para voltar⤴`);
             } else {
               if(cate !== 0) {
               agent.add(`❌ Produto sem descrição 
-----------------------------------------
*(D,Nº)* Ver descrição de outro item 🔢
*(V)* Para voltar⤴`);
               }

             }
      });     
   });
 }
 
function retirar(agent) {
  const nome = agent.parameters.nome;
  const tel = agent.parameters.tel;
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
  
        return admin.database().ref('autoDelivery').once("value").then((snapshot) => {
        var taxa = snapshot.child('taxa').val();
  
    return admin.database().ref(id4).once("value").then((snapshot) => {
        var total = snapshot.child('total').val();
        var resum = snapshot.child('resumo').val();
        var resu = resum.replace(/@/g, ``);


            return admin.database().ref(id4 + 'cadastro').once("value").then((snapshot) => {
                var cel = snapshot.child('celular').val();
                var name = snapshot.child('nome').val();
              
             if(name !== null && taxa !== null) {
                 var txa = taxa.replace(/"/g,``);
                let tx = Number(txa);
                total = total-tx;
              }
  agent.add(`Digite *FIM* se estiver correto 
--------------------------------------------- 
` + resu +

` \n                       *Total R$` + parseFloat(total).toFixed(2) + `* \n ` +
`--------------------------------------------- 
*Retirar no balcão* \n
nome: *` + nome + `* 
Telefone: *` + tel + `* 
----------------------------------------------
Digite *(FIM)* para confirmar \n 
Digite *(OBS)* P/ escrever observação
*(SAIR)* Para cancelar`);
                           admin.database().ref(id4).set({
                           resumofinal: resum + `%` + total + `%retirar%` + tel + `%` + nome,
                           nome: nome,  
      
            }); 
});   
      });
          });
}   
  
  function comer(agent) {
  const nome = agent.parameters.nome;
  const tel = agent.parameters.tel;
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
    
      return admin.database().ref('autoDelivery').once("value").then((snapshot) => {
        var taxa = snapshot.child('taxa').val();
  
    return admin.database().ref(id4).once("value").then((snapshot) => {
        var total = snapshot.child('total').val();
        var resum = snapshot.child('resumo').val();
        var resu = resum.replace(/@/g, ``);


            return admin.database().ref(id4 + 'cadastro').once("value").then((snapshot) => {
                var cel = snapshot.child('celular').val();
                var name = snapshot.child('nome').val();   
              if(name !== null && taxa !== null) {
                 var txa = taxa.replace(/"/g,``);
                let tx = Number(txa);
                total = total-tx;
              }
              
  agent.add(`Digite *FIM* se estiver correto 
--------------------------------------------- 
` + resu +

` \n                       *Total R$` + parseFloat(total).toFixed(2) + `* \n ` +
`--------------------------------------------- 
*Vem comer no local* \n
nome: *` + nome + `* 
Telefone: *` + tel + `* 
----------------------------------------------
Digite *(FIM)* para confirmar \n 
Digite *(OBS)* P/ escrever observação
*(SAIR)* Para cancelar`);
                           admin.database().ref(id4).set({
                           resumofinal: resum + `%` + total + `%Comer%` + nome + `%` + tel,
                           nome: nome,  
      
            }); 
});   
      });
        });
}                                                            
    
    function final(agent) {
    let sessionId = agent.session;
    var idcliente = sessionId.substring(sessionId.indexOf("ons") + 4);
      
        var id = idcliente.replace(`.`, ``);
         var id1 = id.replace(/:/g, ``);
         var id2 = id1.replace(/;/g, ``);
         var id3 = id2.replace(/,/g, ``);
         var id0 = id3.replace(/#/g, ``);
         var id5 = id0.replace(/%/g, ``);
         var id6 = id5.replace(/\(/g, ``);
         var id7 = id6.replace(/\)/g, ``);
         var id8 = id7.replace(/\./g, ``);
         var id9 = id8.replace(/\//g, ``);
         var id10 = id9.replace(/\\/g, ``);
         var id11 = id10.replace(/\[/g, ``);
         var id12 = id11.replace(/\]/g, ``);
         var id4 = id12.replace(/\$/g, ``);
      
      var npedido = Math.floor(Math.random() * (99999 - 11111)) + 11111;
      
       return admin.database().ref(id4+'cadastro').once("value").then((snapshot) => {
         var nom = snapshot.child('nome').val();
         
     return admin.database().ref(id4).once("value").then((snapshot) => {
       var res = snapshot.child('resumofinal').val();
       var resum = snapshot.child('resumo').val();
       var tot = snapshot.child('total').val();
       var totalfid = snapshot.child('totalfid').val();
       var nome = snapshot.child('nome').val();
       if(nome !== null) {
         nom = nome;
       }
       
       var obs = snapshot.child('OBS').val();
       if(res !== null) {
       var resumo1 = res.replace(/\n/g, ``);
       var resumo = resumo1.replace(/ /g, `*`); 
       var resumo2 = resumo.replace(/:/g, ``);
       var resumo33 = resumo2.replace(/,/g, ``);
       var resumo6= resumo33.replace(/;/g, ``);
         var resumo7 = resumo6.replace(/#/g, ``);
         var resumo9 = resumo7.replace(/\[/g, ``);
         var resumo333 = resumo9.replace(/\]/g, ``);
       }

       if(obs !== null) {
         var obs1 = obs.replace(/ /g, `*`);
         var obs2 = obs1.replace(/,/g, ``);
         var obs4 = obs2.replace(/:/g, ``);
         var obs5 = obs4.replace(/\$/g, ``);
         var obs6 = obs5.replace(/\//g, ``);
         var obs7 = obs6.replace(/\./g, ``);
         var obs8 = obs7.replace(/\\/g, ``);
         var obs9 = obs8.replace(/#/g, ``);
         var obs10 = obs9.replace(/;/g, ``);
         var obs11 = obs10.replace(/%/g, ``);
         var obs12 = obs11.replace(/\[/g, ``);
         var obs3 = obs12.replace(/\]/g, ``);
       }
        return admin.database().ref(id4+'pontos').once("value").then((snapshot) => {
                var pontos = snapshot.child('pontos').val();
                var fid = snapshot.child('fid').val();
          
     return admin.database().ref('imprimir').once("value").then((snapshot) => {
       var valor = snapshot.child('pedidos').val();
  var data = new Date();
    data.setHours(data.getHours() - 3);
     var p = `+`;
     var hora = data.toLocaleTimeString();
     var h = hora.slice(0, 2);
     var m = hora.slice(3, 5);
     var hor= h+`+`+m;
       var resumo34 = resumo333.replace(/\//g, ``);
       var resumo3 = resumo34.replace(/\\/g, ``);
       
             if(valor !== null) {
                  if(obs !== null) { 
                     if(res !== null) {
                  admin.database().ref('imprimir').set({                
                  pedidos: valor+`&`+resumo3+`%`+hor+`%OBS.`+obs3+`%`+npedido,
                  });
                     }
                  }else{
                     if(res !== null) {
                       admin.database().ref('imprimir').set({                
                       pedidos: valor+`&`+resumo3+`%`+hor+`%`+npedido,
                       });
                     }
                       }
           } else if (obs !== null) {
              if(res !== null) {
                  admin.database().ref('imprimir').set({                
                  pedidos: resumo3+`%`+hor+`%OBS.`+obs3+`%`+npedido,
                  });
              }
           } else {
             if(res !== null) {
                  admin.database().ref('imprimir').set({                
                  pedidos: resumo3+`%`+hor+`%`+npedido,
                  });  
             }
           }
         
     
      return admin.database().ref('autoDelivery').once("value").then((snapshot) => {
       var tx = snapshot.child('taxa').val();
       var tempo = snapshot.child('tempo').val();
       var tel = snapshot.child('telefone').val(); 
       var empresa = snapshot.child('empresa').val();
       var pts = snapshot.child('pts').val();
       var lmtpts = snapshot.child('ptslmt').val();     
       var desconto = snapshot.child('ptsdesconto').val(); 
       var promo = snapshot.child('promo').val();        
        if(pts !== null) {         
              if(pontos !== null) {
                      if(fid !== null) {
                       admin.database().ref(id4+'pontos').set({
                       pontos: 1,
                   }); 
                        pontos = 1;
                      }else {
                       admin.database().ref(id4+'pontos').set({
                       pontos: pontos+1,
                   }); 
                         pontos = pontos+1;
                      }
                     
              }else{
                      admin.database().ref(id4+'pontos').set({
                      pontos: 1,
                    }); 
                      pontos = 1;
                  }
}                                
  
 if(res !== null) {  
    if(pts !== null) { 
         var lmt = lmtpts.replace(/"/g,``);
         let limite = Number(lmt);
agent.add(`🤩 Muito obrigado *`+nom+`*   
O pedido já esta sendo preparado 
Nosso tempo de entrega hoje é  
*`+tempo+` minutos* ⏱ 
O número do seu pedido `+npedido+`
⭐ *Você acumulou `+pontos+`/`+limite+` pontos* ⭐

Dúvidas ligue `+tel +` \n  
Sempre que quiser é só *(PEDIR)* \n 
-------------------------------------------
_Auto atendimento *`+empresa+`*_ `); 
      
    }else {
      agent.add(`🤩 Muito obrigado *`+nom+`*   
O pedido já esta sendo preparado 
Nosso tempo de entrega hoje é  
*`+tempo+` minutos* ⏱ 
O número do seu pedido `+npedido+`

Dúvidas ligue `+tel +` \n  
Sempre que quiser é só *(PEDIR)* \n 
-------------------------------------------
_Auto atendimento *`+empresa+`*_ `);  
    }
   if(promo !== null) {  
  agent.add(`_Se tiver um *código de promoções* é só digitar_ 😉`); 
   }
        } else {
          agent.add(`❌ *Erro ao finalizar* \n
Digite *(P)* para fazer um pedido `); 
        }
if(nome == null) {          
        if(fid !== null) {  
               if(tx !== null) {
                var tax22 = tx.replace(/"/g,``);
                let n = Number(tax22);
                 admin.database().ref(id4).set({                
                 resumoREP: resum,
                 totalREP: totalfid-n,
                  }); 
               }else{
                 admin.database().ref(id4).set({                
                 resumoREP: resum,
                 totalREP: totalfid,
                  }); 
               }              
              
        }else{
        if(tx !== null) {
                var tax2 = tx.replace(/"/g,``);
                let n = Number(tax2);
                 admin.database().ref(id4).set({                
                 resumoREP: resum,
                 totalREP: (tot-n),
                  });  
        }else{
                  admin.database().ref(id4).set({                
                  resumoREP: resum,
                  totalREP: tot,
                  });   
        }
        }
}else{
                  admin.database().ref(id4).set({                
                  categorias: 0,
                  }); 
}
           });   
     });
       });
       });
          });
       
  }  

  
  let intentMap = new Map();
  intentMap.set('Pedir', vercardapio);
  intentMap.set('sair', sair);
  intentMap.set('digitou-numero', mostralista);
  intentMap.set('digitou-produto', gravaproduto);
  intentMap.set('fechar resumo', fecharesumo);
  intentMap.set('ok', mostracadastro);
  intentMap.set('digitanome', fazcadastro);
  intentMap.set('cadastro', fazcadastro);
  intentMap.set('sim', formadepagamento);
  intentMap.set('d', pagadinheiro);
  intentMap.set('D_do_cadastro', pgdinheiro);
  intentMap.set('c', pagacartao);
  intentMap.set('C_do_cadastro', pgcartao);
  intentMap.set('ate', atendimento);
  intentMap.set('fallback', inicio);
  intentMap.set('adicionais', adiciona);
  intentMap.set('escolhe_adicional', escolhaadiciona);
  intentMap.set('obs', observacoes);
  intentMap.set('R', retirar);
  intentMap.set('L', comer);
  intentMap.set('promo', promocoes);
  intentMap.set('escolha_promocao', gravapromo);
  intentMap.set('desc', verdesc);
  intentMap.set('fim', final);
  intentMap.set('continuar', gravapromo);
  intentMap.set('continuar2', gravapromo);
  intentMap.set('codigo', fecharesumo);
  agent.handleRequest(intentMap);
});



