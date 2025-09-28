import type { Book } from "./types";
import BookItem from "./BookItem";
import React, { useEffect } from "react";
import { getAllBook } from "../apis/getAllBook";
import { useAppDispatch } from "../../hook/useRedux";

interface Props {
  books: Book[];
  onEdit: (b: Book) => void;
  onDelete: (id: string) => void;
}

const BookList: React.FC<Props> = ({ books, onEdit, onDelete }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllBook());
  }, [dispatch]);
  if (books.length === 0) {
    return <div className="text-center text-gray-500 py-8">No books found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map((b) => (
        <BookItem key={b.id} book={b} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BookList;
