import "./Task.css";

export const Task = ({
  name,
  id,
  complete,
  importance,
  deleteTask,
  toggleComplete,
}) => {
  return (
    <div
      className="Task"
      style={{
        textDecoration: complete ? "line-through" : "none",
        color: complete ? "green" : "white",
      }}
    >
      <p className="taskName">{name}</p>
      <div className="taskActionsWrapper">
        <button onClick={() => toggleComplete(id)} className="taskButton">
          <CompleteButton complete={complete} />
        </button>
        <button onClick={() => deleteTask(id)} className="taskButton">
          <DeleteButton />
        </button>
      </div>
    </div>
  );
};

const DeleteButton = () => {
  return (
    <div className="DeleteButton">
      <svg
        width="24px"
        height="24px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="red"
      >
        <path
          d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          stroke="red"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
};

const CompleteButton = ({ complete }) => {
  return (
    <div className="CompleteButton">
      <svg
        width="24px"
        height="24px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color={complete ? "green" : "#e3e3e3"}
      >
        <path
          d="M7 12.5l3 3 7-7"
          stroke={complete ? "green" : "#e3e3e3"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          stroke={complete ? "green" : "#e3e3e3"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
};
