export const layerStyle = {
    id: "route",
    type: "line",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#2b85ff",
      "line-opacity": 0.8,
      "line-width": {
        base: 1,
        stops: [
          [12, 4],
          [22, 15],
          [32, 25],
        ],
      },
      "line-blur": 0.5,
    },
  };