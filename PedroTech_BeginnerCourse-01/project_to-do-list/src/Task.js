import "./Task.css";

export const Task = (props) => {
  return (
    <div
      className="Task"
      style={{ backgroundColor: props.complete ? "green" : "white" }}
    >
      <p className="taskName">{props.name}</p>
      <div className="taskActionsWrapper">
        <button
          onClick={() => props.markComplete(props.id)}
          className="taskButton"
        >
          <CompleteButton />
        </button>
        <button
          onClick={() => props.deleteTask(props.id)}
          className="taskButton"
        >
          <DeleteButton />
        </button>
      </div>
    </div>
  );
};

const DeleteButton = () => {
  return (
    <svg
      width="24px"
      height="24px"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
    >
      <path
        d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

const CompleteButton = () => {
  return (
    <svg
      width="24px"
      height="24px"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
    >
      <path
        d="M7 12.5l3 3 7-7"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
