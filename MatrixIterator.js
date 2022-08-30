class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix
    }
    //check if the y reached the bottom of the matrix if not
    next() {
        if (this.y === this.matrix.height) {
            return {done:true}
        }


        // create an object holding the current value .  
        let value = {
            x: this.x,
            y: this.y,
            value = this.matrix.get(this.x,this.y) 
        }
        this.x++;  //and then update its position moving to the next row if possoble
        if (this.x === this.matrix.width) {
            this.x = 0;  //reset the x 
            this.y++    //update the y 
        }
        return {done:false}    //done the iteration nomore element in the objec
    }
    
}