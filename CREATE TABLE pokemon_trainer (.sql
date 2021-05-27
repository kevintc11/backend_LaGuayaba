CREATE TABLE pokemon_trainer (
    id_trainer INT PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT,
    last_name TEXT,
    region TEXT NULL,
    email TEXT NULL
);


CREATE TABLE captured_pokemon
(
    pokemon_id INT GENERATED BY DEFAULT AS IDENTITY,
   api_version TEXT,
   name TEXT,
   first_slot TEXT,
   second_slot TEXT NULL,
   img_url TEXT
);

ALTER TABLE captured_pokemon
ADD COLUMN id_trainer INT;

ALTER TABLE captured_pokemon
ADD CONSTRAINT fk_trainer
    FOREIGN KEY(id_trainer)
        REFERENCES pokemon_trainer(id_trainer);
