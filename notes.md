SCHMEA just means --> the shape of the data. Basically, what does the DB look like. Rows, tables, constraints 

To create our .db3 file, 

Migration files --> representation of changes we want to make to the DB schema. a snapshot of what our schema looks like.. 

knex init command runs a knex file for us! 

development, staging, and production in knexfile.js are each config objects. 

Create a migration --> knex migrate:make table-name

To run a migration: knex migrate:latest 

Example Scenario: Ran a migration, realized we forgot to add a constraint --> edit the file, knex migrate:rollback (runs the down function from our knexfile) THEN run knex migrate:latest

