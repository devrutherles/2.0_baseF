import { WebMercatorViewport } from "viewport-mercator-project";

export default async function getRouterJson (routeGeoJSON,cardHeight){

  
  console.log(routeGeoJSON)
  
    const coordinates = routeGeoJSON.geometry?.coordinates;
  
    const tamanho = coordinates.length - 1;
    const minCord = coordinates[0];
    const maxCord = coordinates[tamanho];
    const padding = 15;
  
    const viewport = {
      longitude: (minCord[0] + maxCord[0]) / 2,
      latitude: (minCord[1] + maxCord[1]) / 2,
      zoom: 1,
      width: window.innerWidth - 30,
      height: cardHeight.height - 100,
    };
  
    const { longitude, latitude, zoom } = new WebMercatorViewport(
      viewport
    ).fitBounds(
      [
        [minCord[0], minCord[1]],
        [maxCord[0], maxCord[1]],
      ],
      { padding }
    );
  
    return {longitude, latitude, zoom ,padding}
  
    }