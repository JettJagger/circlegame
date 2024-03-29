const canvas = document.querySelector('canvas');
const context = canvas.getContext ('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    draw() {
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        context.fillStyle = this.color
        context.fill()
        
    }
}

class Projectile { 
    constructor (x, y, radius, color, velocity) {
      this.x = x
      this.y = y
      this.radius = radius
      this.color = color
      this.velocity = velocity
    }
    draw() {
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        context.fillStyle = this.color
        context.fill()  
    }
    update() {
        this.x
    }
}

const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player (x , y, 30, 'blue')
player.draw()

const projectile = new Projectile(
    canvas.width / 2,
    canvas.height / 2, 
    5, 
    'red', 
   {
      x: 1,
      y: 1,
   })

function animate () {
    requestAnimationFrame(animate)
    projectile.draw()
    projectile.update()
}

window.addEventListener('click', (event) => {
    
})

animate()