class HealthBar {
    constructor(x, y, w, h, maxHealth, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.maxHealth = maxHealth;
        this.color = color;
        this.maxWidth = w;
        this.health = maxHealth;
    }

    draw(ctx) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#fff';
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeRect(this.x, this.y, this.maxWidth, this.h);
    }

    updateHealth(val) {
        if (val >= 0) {
            this.health = val;
            this.w = (this.health / this.maxHealth) * this.maxWidth;
        }   
    }
}