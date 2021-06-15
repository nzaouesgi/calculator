export enum Operation {
    Plus = 'addition',
    Multiply = 'multiplication',
    Unknown = 'unknown'
}

export const deserializeOperation = (serialized: string): Operation => {
    switch (serialized){
        case '+':
            return Operation.Plus
        case '*':
            return Operation.Multiply
    }
    return Operation.Unknown
}

export const serializeOperation = (operator: Operation): string => {
    switch (operator){
        case Operation.Plus:
            return '+'
        case Operation.Multiply:
            return '*'
    }
    return '?'
}