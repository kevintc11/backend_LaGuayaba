require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("./db/index");

const app = express();

app.use(express.json());

//Insert Pokemon
router.post("/api/atraparPokemon", async (req, res) => {
    console.log(req.body);
    try {
        const results = await db.query(
            `INSERT INTO captured_pokemon 
                (pokemon_id, api_version, name, first_slot, second_slot, img_url, id_trainer) 
                    VALUES (${req.body.api_version},${req.body.name},${req.body.first_slot},${req.body.second_slot},${req.body.img_url});`);
        console.log(results);
        res.json({
            data: {
                msg: "Pokemon atrapado"
            }
        });
    } catch (error) {
        res.json({
            data: {
                error: "Ha ocurrido un error"
            }
        });
    }
});

//Insertar entrenador
router.post("/api/agregarEntrenador", async (req, res) => {

    try {
        const results = await db.query(`INSERT INTO pokemon_trainer (name, last_name, region, email) VALUES
        (${req.body.name}, ${req.body.last_name}, ${req.body.region}, ${req.body.email});`);
        res.json({
            data: {
                msg: "Entrenador agregado"
            }
        });
    } catch (error) {
        res.json({
            data: {
                msgError: "Error"
            }
        });
    }
})

//Mostrar entrenador
router.get("/api/entrenadores", async (req, res) => {

    try {
        const results = await db.query(`SELECT * FROM pokemon_trainer;`);
        res.json({
            results: results.rows.length,
            data: {
                result: results.rows
            }
        });

    } catch (error) {
        res.json({
            data: {
                msgError: "Error al mostrar entrenador"
            }
        });
    }

});