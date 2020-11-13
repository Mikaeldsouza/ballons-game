from random import randint as rand
import time

count = 0




def remove(event):
    audio = document.createElement("AUDIO")
    audio.src = "b.mp3"
    audio.play()
    document.body.removeChild(event.target)
    count += 1
    document.getElementById("placar_text").textContent = count


def add_ballon():
    x = rand(0, 100)
    y = rand(0, 100)
    elemento = document.createElement("div")
    elemento.className = "ballon"
    elemento.style.left = "{}%".format(x)
    elemento.style.bottom = "{}%".format(y)
    elemento.style.background = "rgb({},{},{})".format(
        rand(0, 255), rand(0, 255), rand(0, 255)
    )
    document.body.appendChild(elemento)
    elemento.addEventListener("click", remove)
    return elemento

lista = []

for i in range(100):
    lista.append(add_ballon())

