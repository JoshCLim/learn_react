import { useEffect, useState } from "react";

function Board() {
  const [turn, setTurn] = useState<"x" | "o">("x");
  const [winner, setWinner] = useState<"x" | "o" | "draw" | null>();
  const [squares, setSquares] = useState<("x" | "o" | null)[]>(Array(9).fill(null));

  const reset = () => {
    setWinner(undefined);
    setSquares(Array(9).fill(null));
  };

  useEffect(() => {
    const checkWinner = (squares: ("x" | "o" | null)[]) => {
      const paths = [
        [squares[0], squares[1], squares[2]],
        [squares[3], squares[4], squares[5]],
        [squares[6], squares[7], squares[8]],
        [squares[0], squares[3], squares[6]],
        [squares[1], squares[4], squares[7]],
        [squares[2], squares[5], squares[8]],
        [squares[0], squares[4], squares[8]],
        [squares[2], squares[4], squares[6]],
      ];

      const same = paths.map((path) =>
        path.filter((cell) => cell == path[0]).length === 3 ? path[0] : null
      );

      if (!squares.includes(null)) setWinner("draw");

      if (same.includes("x")) setWinner("x");
      else if (same.includes("o")) setWinner("o");
    };

    checkWinner(squares);
  }, [squares]);

  return (
    <div className="flex flex-col gap-7">
      <p className="text-2xl">
        {!winner ? (
          <>
            It is <span className="uppercase">{turn}</span>'s turn
          </>
        ) : winner === "draw" ? (
          <>It's a draw!</>
        ) : (
          <>
            <span className="uppercase">{winner}</span> wins!
          </>
        )}
      </p>
      <div className="grid grid-cols-3 grid-rows-3 gap-1">
        {[...Array(9)].map((_, i) => (
          <Square
            key={i}
            value={squares[i]}
            onClick={() => {
              if (squares[i]) return;
              if (winner) return;
              setTurn((prev) => (prev === "x" ? "o" : "x"));
              setSquares((prev) => {
                const next = [...prev];
                next[i] = turn;
                return next;
              });
            }}
          />
        ))}
      </div>

      <button
        className="bg-blue-500 text-white rounded-xl p-2 active:scale-95 transition-all outline-none focus:outline-none active:outline-none hover:outline-none"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}

function Square({ value, onClick }: { value: "x" | "o" | null; onClick: () => void }) {
  return (
    <button
      className="w-20 h-20 bg-white rounded-xl active:scale-95 transition-all outline-none focus:outline-none active:outline-none hover:outline-none"
      onClick={onClick}
    >
      {value === "x" ? "❌" : value === "o" ? "⭕" : ""}
    </button>
  );
}

export default Board;
