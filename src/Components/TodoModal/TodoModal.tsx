import {
  ClockCircleOutlined,
  MenuOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Form, Input, Modal } from "antd";

interface TodoModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  summary: string;
  setSummary: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
  handleSave: () => void;
}

const TodoModal: React.FC<TodoModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  summary,
  setSummary,
  description,
  setDescription,
  date,
  setDate,
  handleSave,
}) => {

  const onFinish = () => {
    handleSave();
  };

  return (
    <Modal
      title="Add New Task"
      open={isModalOpen}
      footer={null}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form onFinish={onFinish}>
          <Form.Item
            className="w-full"
            name="summary"
            rules={[{ required: true, message: "Please input a summary!" }]}
          >
        <div className="flex items-start mt-4">
            <Input
              prefix={<MessageOutlined/>}
              variant="borderless"
              style={{resize: "none"}}
              className="text-xl"
              placeholder="Summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
        </div>
          </Form.Item>
        <hr />
        <div className="flex items-start">
         
          <Form.Item
            className="w-full"
            name="description"
            rules={[{ required: true, message: "Please input a description!" }]}
          >
            <Input
              prefix={<MenuOutlined />}
              variant="borderless"
              className="text-xl"
              style={{resize: "none"}}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Item>
        </div>
        <hr />
        <div className="flex items-center">
          <Form.Item 
            className="w-full"
            name="date"
            rules={[{ required: true, message: "Please input a date!" }]}
          >
            <Input
              prefix={<ClockCircleOutlined />}
              variant="borderless"
              type="datetime-local"
              name="date"
              placeholder="Date"
              className="text-xl"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Item>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center px-32 mt-4">
          <button
            className="w-full py-2.5 bg-black text-white rounded-full"
            type="submit"
          >
            Save
          </button>
          <button
            className="w-3/6 py-2.5 mt-2"
            type="button"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default TodoModal;
