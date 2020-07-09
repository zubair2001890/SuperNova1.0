import { Request, Response } from 'express';
import { createPool, PoolConnection } from 'mysql';

class MySqlController {
    private pool;

    constructor() {
        this.pool = createPool({
            host: process.env.host,
            user: process.env.user,
            password: process.env.password,
            database: process.env.database
        })
    }
  
    private promisefyQuery(query: string, connection: PoolConnection) : Promise<any> {
        return new Promise((resolve, reject) => {
            connection.query(query, (error, result, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({ result, fields });
                }
            })
        })
    }

    private promisefyConnection(): Promise<PoolConnection> {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((error, connection) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(connection);
                }
            })
        })
    }

    public async exampleQuery() {
        try {
            const connection = await this.promisefyConnection();
            const { result, fields } = await this.promisefyQuery('SELECT item FROM table', connection);

            connection.release();
            
            return result;
        } catch(e) {
            console.log(e)
        }
    }
  }
  
export default MySqlController;