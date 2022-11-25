export const FIELDS = [
    {
      id: 1,
      key: "name",
      label: "Name",
      required: true,
      append: "user",
      type: "text",
    },
    {
      id: 2,
      key: "mileage",
      label: "Mileage",
      required: true,
      append: "",
      type: "number",
    },
    {
      id: 3,
      key: "location",
      label: "Location",
      required: true,
      append: "map-marker",
      type: "text",
    },
    {
      id: 4,
      key: "engine",
      label: "Engine",
      required: true,
      append: "wrench",
      type: "text",
    },
    {
      id: 5,
      key: "transmission",
      label: "Transmission",
      required: true,
      append: "car",
      type: "option",
    },
    {
      id: 6,
      key: "amount",
      label: "Amount",
      required: true,
      prepend: "dollar",
      type: "number",
    },
  ];