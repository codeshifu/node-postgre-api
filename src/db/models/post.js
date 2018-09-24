const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS posts (
    id UUID PRIMARY KEY,
    author_id UUID REFERENCES authors(id) ON DELETE CASCADE,
    title VARCHAR (150) NOT NULL,
    slug VARCHAR(150),
    content text,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
)`;

export default CREATE_TABLE;
