import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { topBannerPlantDataRoutes } from './app/modules/topBanner/topBanner.route';
import { plantsCategoryRoutes } from './app/modules/category/category.route';
import { plantListsRoutes } from './app/modules/plantLists/plantList.route';
import { cartItemsRoutes } from './app/modules/cartItems/cartItems.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/', topBannerPlantDataRoutes)
app.use('/', plantsCategoryRoutes)
app.use('/', plantListsRoutes)
app.use('/', cartItemsRoutes)


app.get('/', (req: Request, res: Response) => {
  res.send('Server is running correctly..!');
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
