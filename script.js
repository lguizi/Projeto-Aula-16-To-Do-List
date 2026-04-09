let input = document.getElementById("tarefaInput")
let botao = document.getElementById("adicionarBtn")
let lista = document.getElementById("listaTarefas")

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

function salvar(){

localStorage.setItem("tarefas", JSON.stringify(tarefas))

}

function mostrarTarefas(){

lista.innerHTML = ""

tarefas.forEach(function(tarefa, index){

let li = document.createElement("li")

li.textContent = tarefa.texto

if(tarefa.concluida){
li.classList.add("concluida")
}

li.addEventListener("click", function(){

tarefas[index].concluida = !tarefas[index].concluida

salvar()

mostrarTarefas()

})

let remover = document.createElement("button")

remover.textContent = "Remover"

remover.classList.add("remover")

remover.addEventListener("click", function(e){

e.stopPropagation()

tarefas.splice(index,1)

salvar()

mostrarTarefas()

})

li.appendChild(remover)

lista.appendChild(li)

})

}

botao.addEventListener("click", function(){

let texto = input.value

if(texto == "") return

tarefas.push({

texto: texto,
concluida: false

})

input.value = ""

salvar()

mostrarTarefas()

})

mostrarTarefas()