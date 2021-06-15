import { EOL } from 'os'

export class Logger {
    
    public log(message: string){
        
        const now = new Date(Date.now())

        const timeString = [
            now.getHours(),
            now.getMinutes(),
            now.getSeconds()
        ].reduce((prev, curr) => `${prev}${curr.toString().padStart(2, '0')}`, '')
        
        process.stdout.write(`${timeString}:${now.getMilliseconds()}[log] ${message}${EOL}`)
    }
}