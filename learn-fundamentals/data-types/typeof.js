// O typeof retorna o tipo do operando. É útil quando queremos processar valores de diferentes tipos, de maneira diferente ou apenas queremos fazer uma verificação rápida.

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)