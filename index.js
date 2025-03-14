import express from 'express';
import cors from 'cors';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const client = new MercadoPagoConfig({ accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN });

app.post('/create_preference', async (req, res) => {
    const {items} = req.body;
    try {
        const preference = new Preference(client);
        const response = await preference.create({
            body: {
                items: items.map(item => ({
                    title: item.title,
                    quantity: item.quantity,
                    unit_price: item.unit_price,
                    picture_url: item.picture_url
                })),
            }
        });
        console.log(response.body); 

        res.json(response.body); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});
