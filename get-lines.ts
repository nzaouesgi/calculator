import fs from 'fs'
import { EOL } from 'os'

export async function readLines(filePath: string): Promise<string[]>{
    
    const data = await fs.promises.readFile(filePath, 'utf-8')
    
    return data.split(EOL)
}