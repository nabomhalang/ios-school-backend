

export interface IEnv {
  stage: string | undefined;
  port: number;
  apiPath?: string;
}

export interface MysqlDBCfg {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
  connectionLimit: number;
  multipleStatements: boolean;
}

export interface StripeCreds {
  sk: string;
  webhook: [{ [hook: string]: string }]
}

export interface AdminCreds {
  id: string;
  password: string;
  email: string;
  secret: string;
  token: () => string;
}