import { ArgumentsParser } from './arguments'
import { Logger } from './logger'
import { readLines } from './get-lines'
import { deserializeOperation } from './operation'
import { Calculator } from './calculator'

const logger = new Logger()
const parser = new ArgumentsParser(process.argv)
const calculator = new Calculator(logger)
const usage = 'node calculator.ts <file path> <operator>'

const main = async () => {

    logger.log('started')

    const [filename, serializedOperation] = [
        parser.get('filename'),
        parser.get('operator')
    ].map(optional => optional.orElseThrow(() => new Error(`Argument missing, usage is: ${usage}`)))

    const operation = deserializeOperation(serializedOperation)
    
    logger.log(`applying operation ${operation}`)

    const numbers = (await readLines(filename))
        .map(line => {
            
            const parsed = parseInt(line, 10)
            
            if (isNaN(parsed)) {
                throw new Error(`${line} could not be parsed as a valid number`)
            }
            
            return parsed
        })

    const total = calculator.computeAll(operation, numbers)

    logger.log(`total = ${total}`)
}

main().catch(err => logger.log(err.message))