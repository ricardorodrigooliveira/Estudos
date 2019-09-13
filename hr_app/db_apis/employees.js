const database = require('../services/database.js');
 
const baseQuery = 
 `select employee_id "id",
    first_name "first_name",
    last_name "last_name",
    email "email",
    phone_number "phone_number",
    hire_date "hire_date",
    job_id "job_id",
    salary "salary",
    commission_pct "commission_pct",
    manager_id "manager_id",
    department_id "department_id"
  from employees`;
  /* `select cd_funcionario "codigo",
  nm_abrev_func "frist_name",
  nm_funcionario "name",
  ds_funcao "activity",
  qt_carga_horaria "jornada",
  cd_situacao "situacao",
  dt_updrow "data_alteracao",
  dt_addrow "data_inclusao",
  cd_area_armaz "area_armazenagem"
  from t_funcionario`; */
 
async function find(context) {
  let query = baseQuery;
  const binds = {};
 
  if (context.id) {
    binds.employee_id = context.id;
 
    query += `\nwhere employee_id = :employee_id`;
    //query += `\nwhere cd_funcionario = :employee_id`;
  }
 
  const result = await database.simpleExecute(query, binds);
 
  return result.rows;
}
 
module.exports.find = find;