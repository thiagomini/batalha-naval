const _ = require('lodash');

/**
 * Classe abstrata que representa um DTO de leitura: Uma interface de comunicação com API's externas
 */
class AbstractReadDto {
    get snakeCase () {
        return this._snakeCase;
    }

    set snakeCase (value) {
        this._snakeCase = value;
    }

    /**
     *
     * @param snakeCase {boolean} - Indica se a resposta desse Dto deve transformar os atributos para snake_case
     */
    constructor ({ snakeCase = true } = {}) {
        this._snakeCase = snakeCase;
    }

    /**
     * @description Transforma uma string camelCase em snake_case
     * @param str {String}
     * @example
     *  this._camelToSnakeCase('isAlternative') => 'is_alternative'
     * @return {string|*|void} A string em snake_case
     * @private
     */
    _camelToSnakeCase (str) {
        return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    }

    /**
     * @description Retorna o objeto com as propriedades em snake_case ou camelCase de acordo com o parâmetro do objeto.
     * @return {{}}
     */
    toJSON () {
        // Pega o nome das propriedades
        const propertyNames = Object.getOwnPropertyNames(this);
        const properties = {};
        for (const property of propertyNames) {
            // Ignora a propriedade interna 'snake_case'
            if (property === '_snakeCase') continue;

            // para cada atributo privado, chama o getter público da classe e adiciona no objeto properties
            const propertyGetter = property.slice(1);

            // Transforma a chave do objeto no formato snake_case caso necessário
            const propertyKey = this.snakeCase
                ? this._camelToSnakeCase(propertyGetter)
                : propertyGetter;

            properties[propertyKey] = this[propertyGetter];
        }
        return (properties);
    }

    /**
     * @description Clona um objeto por valor, copiando todos os seus atributos.
     * @param value {any} - O valor que deseja copiar
     * @return {*} O objeto clonado
     */
    cloneDeep (value) {
        return _.cloneDeep(value);
    }
}

export default AbstractReadDto;
