const { normalize, schema } = require("normalizr");
const originalData = require("./obj.js");
const util = require("util");
const gerenteSchema = new schema.Entity("gerente");
const encargadoSchema = new schema.Entity("encargado");
const empleadosSchema = new schema.Entity("empleados");

const EmpresaSchema = new schema.Entity("empresa", {
  gerente: gerenteSchema,
  encargado: encargadoSchema,
  empleados: [empleadosSchema],
});

const normalizeEmpresa = normalize(originalData, EmpresaSchema);

function print(data) {
  console.log(util.inspect(data, false, 12, true));
}

print(normalizeEmpresa);
