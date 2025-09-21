interface Item {
  id: number;
  name: string;
  price: string;
  quantity: number;
  img: string;
  descript: string;
}

const initialState: Item[] = [
  {
    id: 1,
    name: "Pizza",
    price: "30USD",
    quantity: 2 ,
    img: "h",
    descript: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis iste dolore corporis omnis dolores placeat fuga quaerat ipsam dicta. Provident consequatur architecto incidunt modi atque totam voluptatibus perspiciatis quae officia.",
  },
  {
    id: 2,
    name: "Hamuger",
    price: "30USD",
    quantity: 2 ,
    img: "h",
    descript: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis iste dolore corporis omnis dolores placeat fuga quaerat ipsam dicta. Provident consequatur architecto incidunt modi atque totam voluptatibus perspiciatis quae officia.",
  }
];


const ChangeItemReducer = (
  state: Item[] = initialState
): Item[] => {
  return state;
};

export default ChangeItemReducer;
