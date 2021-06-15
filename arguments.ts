import Optional from 'optional-js'

export type ArgumentName = 'filename'|'operator'

export class ArgumentsParser {

    private readonly positions = new Map<ArgumentName, number>([
        ['filename', 2],
        ['operator', 3]
    ])

    public constructor (private readonly args: string[]){}

    public get(key: ArgumentName): Optional<string>{
        
        const position = this.positions.get(key)
        
        if (position === undefined){
            throw new Error('Unknown argument name.')
        }

        return Optional.ofNullable(this.args[position] || null)
    }
}