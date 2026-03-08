import { randomUUID} from 'crypto' ;
import  pool from '../db.js' ;
export const getAll = async (query = {}) => {
  const limitInt  = Number(query.limit ?? 100);
  const offsetInt = Number(((query.page ?? 1) - 1) * limitInt);
  const [[{ total }]] = await pool.execute(
    "SELECT COUNT(*) AS total FROM students"
  );
const sqlQuery = `SELECT * FROM students ORDER BY createdAt DESC LIMIT ${limitInt} OFFSET ${offsetInt}` ;
  const [rows] = await pool.query(sqlQuery);
  return {
    data: rows,
    total,
    page: query.page ?? 1,
    limit: limitInt,
  };
};


// Ajout d'un étudiant
/* export const create = (payload) => {
   const newItem = {
        id : randomUUID,
        ...payload,
        createdAt : new Date().toISOString()
    }

    items = items.concat(newItem) ;
    return  newItem ;
} ;


 */