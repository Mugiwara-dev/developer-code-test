import { Button, Checkbox, ConfigProvider } from "antd";
import TodoModal from "../../Components/TodoModal/TodoModal";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";

interface Task {
  id: number;
  summary: string;
  description: string;
  date: string;
  completed: boolean;
}

const WebTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);
  const handleSave = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      summary: summary,
      description: description,
      date: date,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setSummary("");
    setDescription("");
    setDate("");
    setIsModalOpen(false);
  };
  const handleCheckbox = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="bg-gray-200 h-screen">
        <Navbar/>
        <div className="flex items-center justify-center">
          <Button
          type="text"
          className="font-semibold text-xl mt-5"
          onClick={() => setIsModalOpen(true)}
          >
          {" "}
          + Add New Task
        </Button>
        </div>
        <TodoModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          summary={summary}
          setSummary={setSummary}
          description={description}
          setDescription={setDescription}
          date={date}
          setDate={setDate}
          handleSave={handleSave}
        />
        <div className="flex justify-around">
          <ConfigProvider
            theme={{
              token: {
                borderRadiusSM: 7,
                controlInteractiveSize: 27,
                colorPrimary: "#efefef",
                colorWhite: "black",
              },
            }}
          >
            <div>
              <h1 className="text-2xl font-semibold mb-4">Incomplete Task</h1>
              {tasks.length === 0 && (
                <div className="text-md pl-9 ">No Task Available</div>
              )}
              {tasks
                ?.filter((task) => !task.completed)
                .map((item: Task, index: number) => {
                  return (
                    <div key={index} className="pl-9 gap-y-5">
                      <Checkbox
                        onChange={() => handleCheckbox(index)}
                        checked={item.completed}
                      >
                        <div className="text-lg">
                          {item.summary}
                          <div className="text-sm text-gray-400">
                            ⏰ {item.date}
                          </div>
                        </div>
                      </Checkbox>
                    </div>
                  );
                })}
            </div>
            <div>
              <h1 className="text-2xl font-semibold mb-4">Complete Task</h1>
              {tasks
                ?.filter((task) => task.completed)
                .map((item: Task, index: number) => {
                  return (
                    <div key={index} className="pl-9">
                      <Checkbox
                        onChange={() => handleCheckbox(index)}
                        checked={item.completed}
                      >
                        <div className=" text-lg">{item.summary}</div>
                      </Checkbox>
                    </div>
                  );
                })}
            </div>
          </ConfigProvider>
        </div>
      </div>
  );
};

export default WebTask;
