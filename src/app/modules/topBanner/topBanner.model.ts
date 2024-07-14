import { model, Schema } from "mongoose";
import { TopBannerPlantData } from "./topBannerInterface";

const topBannerPlantDataSchema = new Schema<TopBannerPlantData>({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    image: { type: String, required: true },
  });

  export const TopBannerPlantDataModel = model<TopBannerPlantData>('topBannerPlantData', topBannerPlantDataSchema)