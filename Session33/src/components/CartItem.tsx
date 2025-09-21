import { useAppDispatch, useAppSelector } from "../hooks/useRedux";

export default function CartItem() {
  const cartItem = useAppSelector((state) => state.cartItem);
  const dispatch = useAppDispatch();

  const handleDel = (index) => {
    dispatch({ type: "DELETE", payload: index });
  };

  return (
    <div className="w-2/4 border rounded-md shadow">
      <div className="bg-red-500 text-white p-2">
        <h2 className="text-lg font-semibold">Your Cart</h2>
      </div>
      <table className="table-auto border border-gray-300 w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">STT</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Price</th>
            <th className="border px-2 py-1">Quantity</th>
            <th className="border px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItem.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center text-gray-500 py-4 border">
                Empty
              </td>
            </tr>
          ) : (
            cartItem.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border px-2 py-1">{index + 1}</td>
                <td className="border px-2 py-1 font-medium">{item.name}</td>
                <td className="border px-2 py-1">{item.price}</td>
                <td className="border px-2 py-1">{item.quantityInCart}</td>
                <td className="border px-2 py-1 flex gap-2 justify-center">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs">
                    Update
                  </button>
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs "
                    onClick={() => handleDel(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
