import { Logger } from './logger'
import { Operation, serializeOperation } from './operation'

export class Calculator {

    public constructor (private readonly logger: Logger){}

    public computeAll(operation: Operation, numbers: number[]): number {
        
        return numbers.reduce((prev, curr, i) => {

            this.logger.log(`parsed value = ${curr}`)
    
            if (i === 0) {
                this.logger.log(`${curr}`)
            } else {
                this.logger.log(`${serializeOperation(operation)}${curr} (= ${prev})`)
            }
    
            const result = this.computePair(operation, [prev, curr])
    
            this.logger.log(`accumulation : ${result} on line ${i + 1}`)
    
            return result
    
        }, operation === Operation.Multiply ? 1 : 0)
    }

    private computePair(operation: Operation, [x, y]: [number, number]): number {
        switch (operation) {
            case Operation.Plus: return x + y
            case Operation.Multiply: return x * y
            default: return NaN
        }
    }
}