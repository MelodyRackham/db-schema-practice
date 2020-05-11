SCHMEA just means --> the shape of the data. Basically, what does the DB look like. Rows, tables, constraints 

To create our .db3 file, 

Migration files --> representation of changes we want to make to the DB schema. a snapshot of what our schema looks like.. 

knex init command runs a knex file for us! 

development, staging, and production in knexfile.js are each config objects. 

create a migration --> knex migrate:make table-name