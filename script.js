// bibliotecas e códigos de terceiros
const formatador = (data) => {
    return {
      dia: {
        numerico: dayjs(data).format('DD'),
        semana: {
          curto: dayjs(data).format('ddd'),
          longo: dayjs(data).format('dddd'),
        }
      },
      mes: dayjs(data).format('MMMM'),
      hora: dayjs(data).format('HH:mm')
    }
  }
  
  formatador(new Date('2024-04-01'))
  
  const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-08 10:00"),
    finalizada: true
  }
  
  let atividades = [
    atividade,
    {
      nome: 'Academia em grupo',
      data: new Date("2024-07-09 12:00"),
      finalizada: false
    },
    {
      nome: 'Gaming session',
      data: new Date("2024-07-09 16:00"),
      finalizada: true
    },
  ]
  
  const criarItemDeAtividade = (atividade) => {
    
    let input = '<input type="checkbox" '
    
    if(atividade.finalizada) {
      input += 'checked'
    }
    
    input += '>'
  
    const formatar = formatador(atividade.data);
  
  
    return `
    <div>
      ${input}
      <span>${atividade.nome}</span>
      <time>
      ${formatar.dia.semana.longo},
       dia ${formatar.dia.numerico}
       de ${formatar.mes}
       às ${formatar.hora}h</time>
    </div> 
    `
  }
  
  const atualizarListaDeAtividades = () => {
  
    const section = document.querySelector("section")
  
    // verificar se minha lista está vazia
    if(atividades.length == 0) {
      section.innerHTML = `<p>Nenhuma atividade cadastrada.</p>`
      return
    }
  
    for(let atividade of atividades) {
      section.innerHTML += criarItemDeAtividade(atividade)
    }
  
  }
  atualizarListaDeAtividades()
  
  
  const salvarAtividade = (event) => {
    event.preventDefault()
  }
  
  criarDiasSelecao = () => {
    const dias = [
      "2024-02-28",
      "2024-02-29",
      "2024-03-01",
      "2024-03-02",
      "2024-03-03",
    ]
  
    let diasSelecao = ''
  
    document.querySelector('select[name="dia"]')
    .innerHTML = diasSelecao
  
  }
  criarDiasSelecao()